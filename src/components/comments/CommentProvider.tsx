
import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { Comment, CommentContextType, TextSelection } from '@/types/comments';
import { useLocation } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const CommentContext = createContext<CommentContextType | undefined>(undefined);

export function useComments() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error('useComments must be used within a CommentProvider');
  }
  return context;
}

interface CommentProviderProps {
  children: ReactNode;
}

export function CommentProvider({ children }: CommentProviderProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [activeComment, setActiveComment] = useState<Comment | null>(null);
  const [isCommentModeActive, setIsCommentModeActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { user } = useAuth();

  // Load comments for current page
  useEffect(() => {
    const loadComments = async () => {
      if (!location.pathname) return;
      
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('comments')
          .select('*')
          .eq('page_route', location.pathname)
          .order('created_at', { ascending: true });

        if (error) throw error;

        if (!data || data.length === 0) {
          setComments([]);
          return;
        }

        // Get user profiles separately
        const userIds = [...new Set(data.map(c => c.user_id))];
        const { data: profiles } = await supabase
          .from('profiles')
          .select('*')
          .in('user_id', userIds);

        // Get comment replies
        const commentIds = data.map(c => c.id);
        const { data: replies } = await supabase
          .from('comment_replies')
          .select('*')
          .in('parent_comment_id', commentIds);

        // Get reply user profiles
        const replyUserIds = [...new Set(replies?.map(r => r.user_id) || [])];
        const { data: replyProfiles } = await supabase
          .from('profiles')
          .select('*')
          .in('user_id', [...userIds, ...replyUserIds]);

        // Get like counts and user likes
        let likeCounts: Record<string, number> = {};
        let userLikes: Record<string, boolean> = {};
        
        if (commentIds.length > 0) {
          const { data: likesData } = await supabase
            .from('comment_likes')
            .select('comment_id')
            .in('comment_id', commentIds);
          
          likesData?.forEach(like => {
            likeCounts[like.comment_id] = (likeCounts[like.comment_id] || 0) + 1;
          });

          if (user) {
            const { data: userLikesData } = await supabase
              .from('comment_likes')
              .select('comment_id')
              .in('comment_id', commentIds)
              .eq('user_id', user.id);
            
            userLikesData?.forEach(like => {
              userLikes[like.comment_id] = true;
            });
          }
        }

        // Create lookup maps
        const profileMap = new Map();
        [...(profiles || []), ...(replyProfiles || [])].forEach(profile => {
          profileMap.set(profile.user_id, profile);
        });

        const repliesMap = new Map();
        replies?.forEach(reply => {
          if (!repliesMap.has(reply.parent_comment_id)) {
            repliesMap.set(reply.parent_comment_id, []);
          }
          const profile = profileMap.get(reply.user_id);
          repliesMap.get(reply.parent_comment_id).push({
            ...reply,
            user: profile ? {
              id: profile.id,
              email: profile.email || '',
              display_name: profile.display_name || 'Anonymous',
              avatar_url: profile.avatar_url,
              created_at: profile.created_at,
            } : undefined,
          });
        });

        // Transform data to match Comment interface
        const transformedComments: Comment[] = data.map(comment => {
          const profile = profileMap.get(comment.user_id);
          return {
            ...comment,
            user: profile ? {
              id: profile.id,
              email: profile.email || '',
              display_name: profile.display_name || 'Anonymous',
              avatar_url: profile.avatar_url,
              created_at: profile.created_at,
            } : undefined,
            replies: repliesMap.get(comment.id) || [],
            likes_count: likeCounts[comment.id] || 0,
            user_has_liked: userLikes[comment.id] || false,
          };
        });

        setComments(transformedComments);
      } catch (error) {
        console.error('Error loading comments:', error);
        toast({
          title: "Error",
          description: "Failed to load comments.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, [location.pathname, user]);

  const addComment = useCallback(async (selection: TextSelection, content: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to add comments.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('comments')
        .insert({
          user_id: user.id,
          page_route: location.pathname,
          text_content: content,
          highlighted_text: selection.text,
          start_offset: selection.startOffset,
          end_offset: selection.endOffset,
        })
        .select('*')
        .single();

      if (error) throw error;

      // Get user profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      const newComment: Comment = {
        ...data,
        user: profile ? {
          id: profile.id,
          email: profile.email || '',
          display_name: profile.display_name || 'Anonymous',
          avatar_url: profile.avatar_url,
          created_at: profile.created_at,
        } : undefined,
        replies: [],
        likes_count: 0,
        user_has_liked: false,
      };

      setComments(prev => [...prev, newComment]);
      toast({
        title: "Comment added",
        description: "Your comment has been added successfully.",
      });
    } catch (error) {
      console.error('Error adding comment:', error);
      toast({
        title: "Error",
        description: "Failed to add comment. Please try again.",
        variant: "destructive",
      });
    }
  }, [location.pathname, user]);

  const replyToComment = useCallback(async (commentId: string, content: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to reply to comments.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('comment_replies')
        .insert({
          parent_comment_id: commentId,
          user_id: user.id,
          content,
        })
        .select('*')
        .single();

      if (error) throw error;

      // Get user profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      // Update local state
      setComments(prev => prev.map(comment => 
        comment.id === commentId 
          ? {
              ...comment,
              replies: [...(comment.replies || []), {
                ...data,
                user: profile ? {
                  id: profile.id,
                  email: profile.email || '',
                  display_name: profile.display_name || 'Anonymous',
                  avatar_url: profile.avatar_url,
                  created_at: profile.created_at,
                } : undefined,
              }]
            }
          : comment
      ));

      toast({
        title: "Reply added",
        description: "Your reply has been added successfully.",
      });
    } catch (error) {
      console.error('Error adding reply:', error);
      toast({
        title: "Error",
        description: "Failed to add reply. Please try again.",
        variant: "destructive",
      });
    }
  }, [user]);

  const toggleCommentMode = useCallback(() => {
    setIsCommentModeActive(prev => !prev);
  }, []);

  const likeComment = useCallback(async (commentId: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to like comments.",
        variant: "destructive",
      });
      return;
    }

    try {
      const comment = comments.find(c => c.id === commentId);
      if (!comment) return;

      if (comment.user_has_liked) {
        // Remove like
        const { error } = await supabase
          .from('comment_likes')
          .delete()
          .eq('comment_id', commentId)
          .eq('user_id', user.id);

        if (error) throw error;
      } else {
        // Add like
        const { error } = await supabase
          .from('comment_likes')
          .insert({
            comment_id: commentId,
            user_id: user.id,
          });

        if (error) throw error;
      }

      // Update local state
      setComments(prev => prev.map(comment => 
        comment.id === commentId 
          ? { 
              ...comment, 
              user_has_liked: !comment.user_has_liked,
              likes_count: (comment.likes_count || 0) + (comment.user_has_liked ? -1 : 1)
            }
          : comment
      ));
    } catch (error) {
      console.error('Error liking comment:', error);
      toast({
        title: "Error",
        description: "Failed to update like. Please try again.",
        variant: "destructive",
      });
    }
  }, [user, comments]);

  const resolveComment = useCallback(async (commentId: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to resolve comments.",
        variant: "destructive",
      });
      return;
    }

    try {
      const comment = comments.find(c => c.id === commentId);
      if (!comment || comment.user_id !== user.id) {
        toast({
          title: "Permission denied",
          description: "You can only resolve your own comments.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('comments')
        .update({ is_resolved: !comment.is_resolved })
        .eq('id', commentId);

      if (error) throw error;

      setComments(prev => prev.map(comment => 
        comment.id === commentId 
          ? { ...comment, is_resolved: !comment.is_resolved }
          : comment
      ));

      toast({
        title: "Comment updated",
        description: "Comment resolution status updated.",
      });
    } catch (error) {
      console.error('Error resolving comment:', error);
      toast({
        title: "Error",
        description: "Failed to update comment. Please try again.",
        variant: "destructive",
      });
    }
  }, [user, comments]);

  const deleteComment = useCallback(async (commentId: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to delete comments.",
        variant: "destructive",
      });
      return;
    }

    try {
      const comment = comments.find(c => c.id === commentId);
      if (!comment || comment.user_id !== user.id) {
        toast({
          title: "Permission denied",
          description: "You can only delete your own comments.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId);

      if (error) throw error;

      setComments(prev => prev.filter(comment => comment.id !== commentId));
      toast({
        title: "Comment deleted",
        description: "Comment has been deleted successfully.",
      });
    } catch (error) {
      console.error('Error deleting comment:', error);
      toast({
        title: "Error",
        description: "Failed to delete comment. Please try again.",
        variant: "destructive",
      });
    }
  }, [user, comments]);

  const contextValue: CommentContextType = {
    comments: comments.filter(comment => comment.page_route === location.pathname),
    activeComment,
    isCommentModeActive,
    addComment,
    replyToComment,
    toggleCommentMode,
    setActiveComment,
    likeComment,
    resolveComment,
    deleteComment,
  };

  return (
    <CommentContext.Provider value={contextValue}>
      {children}
    </CommentContext.Provider>
  );
}
