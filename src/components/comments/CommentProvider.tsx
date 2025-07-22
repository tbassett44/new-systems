
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Comment, CommentContextType, TextSelection } from '@/types/comments';
import { useLocation } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

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
  const location = useLocation();

  const addComment = useCallback(async (selection: TextSelection, content: string) => {
    try {
      // TODO: Replace with actual Supabase call
      const newComment: Comment = {
        id: Date.now().toString(),
        user_id: 'temp-user',
        page_route: location.pathname,
        text_content: content,
        highlighted_text: selection.text,
        start_offset: selection.startOffset,
        end_offset: selection.endOffset,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        is_resolved: false,
        user: {
          id: 'temp-user',
          email: 'user@example.com',
          display_name: 'Anonymous User',
          created_at: new Date().toISOString(),
        },
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
  }, [location.pathname]);

  const replyToComment = useCallback(async (commentId: string, content: string) => {
    try {
      // TODO: Replace with actual Supabase call
      console.log('Replying to comment:', commentId, content);
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
  }, []);

  const toggleCommentMode = useCallback(() => {
    setIsCommentModeActive(prev => !prev);
  }, []);

  const likeComment = useCallback(async (commentId: string) => {
    try {
      // TODO: Replace with actual Supabase call
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
    }
  }, []);

  const resolveComment = useCallback(async (commentId: string) => {
    try {
      // TODO: Replace with actual Supabase call
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
    }
  }, []);

  const deleteComment = useCallback(async (commentId: string) => {
    try {
      // TODO: Replace with actual Supabase call
      setComments(prev => prev.filter(comment => comment.id !== commentId));
      toast({
        title: "Comment deleted",
        description: "Comment has been deleted successfully.",
      });
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  }, []);

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
