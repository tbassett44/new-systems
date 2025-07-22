
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
          .select(`
            *,
            user:profiles(id, display_name, avatar_url, email),
            replies:comment_replies(
              *,
              user:profiles(id, display_name, avatar_url, email)
            ),
            likes:comment_likes(count)
          `)
          .eq('page_route', location.pathname)
          .order('created_at', { ascending: true });

        if (error) throw error;

        // Transform data to match Comment interface
        const transformedComments: Comment[] = data?.map(comment => {
          // Get like count
          const likesCount = comment.likes?.[0]?.count || 0;
          
          return {
            ...comment,
            user: comment.user ? {
              id: comment.user.id,
              email: comment.user.email || '',
              display_name: comment.user.display_name || 'Anonymous',
              avatar_url: comment.user.avatar_url,
              created_at: new Date().toISOString(),
            } : undefined,
            replies: comment.replies?.map((reply: any) => ({
              ...reply,
              user: reply.user ? {
                id: reply.user.id,
                email: reply.user.email || '',
                display_name: reply.user.display_name || 'Anonymous',
                avatar_url: reply.user.avatar_url,
                created_at: new Date().toISOString(),
              } : undefined,
            })) || [],
            likes_count: likesCount,
            user_has_liked: false, // Will be calculated separately if needed
          };
        }) || [];

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
  }, [location.pathname]);

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
        .select(`
          *,
          user:profiles(id, display_name, avatar_url, email)
        `)
        .single();

      if (error) throw error;

      const newComment: Comment = {
        ...data,
        user: data.user ? {
          id: data.user.id,
          email: data.user.email || '',
          display_name: data.user.display_name || 'Anonymous',
          avatar_url: data.user.avatar_url,
          created_at: new Date().toISOString(),
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
        .select(`
          *,
          user:profiles(id, display_name, avatar_url, email)
        `)
        .single();

      if (error) throw error;

      // Update local state
      setComments(prev => prev.map(comment => 
        comment.id === commentId 
          ? {
              ...comment,
              replies: [...(comment.replies || []), {
                ...data,
                user: data.user ? {
                  id: data.user.id,
                  email: data.user.email || '',
                  display_name: data.user.display_name || 'Anonymous',
                  avatar_url: data.user.avatar_url,
                  created_at: new Date().toISOString(),
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
