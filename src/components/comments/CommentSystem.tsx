
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTextSelection } from '@/hooks/useTextSelection';
import { useComments } from './CommentProvider';
import { CommentModal } from './CommentModal';
import { CommentsSidebar } from './CommentsSidebar';
import { CommentHighlight } from './CommentHighlight';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MessageSquareText, PenTool, Eye, EyeOff, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

export function CommentSystem() {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { selection, captureSelection, clearSelection } = useTextSelection();
  const { 
    comments, 
    isCommentModeActive, 
    toggleCommentMode, 
    addComment, 
    activeComment, 
    setActiveComment 
  } = useComments();

  // Debug authentication state
  useEffect(() => {
    console.log('Authentication state:', { user: !!user, loading, userId: user?.id });
  }, [user, loading]);

  // Handle text selection when comment mode is active
  useEffect(() => {
    if (!isCommentModeActive || isCommentModalOpen || isLoginModalOpen) return;

    const handleMouseUp = () => {
      console.log('Mouse up in comment mode');
      // Capture selection immediately before any modal interactions
      setTimeout(() => {
        const currentSelection = captureSelection();
        if (currentSelection && currentSelection.text.length > 0) {
          console.log('Valid selection captured, user:', !!user);
          if (!user) {
            console.log('No user, showing login modal');
            setIsLoginModalOpen(true);
            clearSelection();
            return;
          }
          console.log('Opening comment modal');
          setIsCommentModalOpen(true);
        }
      }, 10); // Small delay to ensure selection is captured before modal focus changes
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [isCommentModeActive, isCommentModalOpen, isLoginModalOpen, captureSelection, user, clearSelection]);

  const handleCommentModeToggle = () => {
    console.log('Comment mode toggle clicked, user:', !!user, 'loading:', loading);
    
    if (loading) {
      toast({
        title: "Loading",
        description: "Please wait while we check your authentication status.",
      });
      return;
    }

    if (!user && !isCommentModeActive) {
      console.log('No user, showing login modal');
      setIsLoginModalOpen(true);
      return;
    }
    console.log('Toggling comment mode');
    toggleCommentMode();
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        if (e.key === 'm') {
          e.preventDefault();
          handleCommentModeToggle();
        }
        if (e.key === 'k') {
          e.preventDefault();
          setIsSidebarOpen(!isSidebarOpen);
        }
      }
      
      if (e.key === 'Escape') {
        setIsCommentModalOpen(false);
        setIsSidebarOpen(false);
        setActiveComment(null);
        clearSelection();
        setIsLoginModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleCommentModeToggle, isSidebarOpen, setActiveComment, clearSelection]);

  const handleAddComment = async (content: string) => {
    console.log('handleAddComment called', { 
      hasSelection: !!selection, 
      selectionText: selection?.text,
      content, 
      hasUser: !!user,
      userId: user?.id
    });
    
    if (!selection) {
      console.log('No selection found when submitting');
      toast({
        title: "Error",
        description: "Please select text first.",
        variant: "destructive",
      });
      return;
    }

    if (!user) {
      console.log('No user found when submitting');
      toast({
        title: "Authentication Required",
        description: "Please sign in to add comments.",
        variant: "destructive",
      });
      setIsLoginModalOpen(true);
      return;
    }

    try {
      console.log('Calling addComment with selection:', selection);
      await addComment(selection, content);
      console.log('Comment added successfully');
      toast({
        title: "Success",
        description: "Your comment has been added!",
      });
      clearSelection();
    } catch (error) {
      console.error('Error in handleAddComment:', error);
      toast({
        title: "Error",
        description: "Failed to add comment. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCloseModal = () => {
    console.log('Closing comment modal');
    setIsCommentModalOpen(false);
    // Don't clear selection immediately to help with debugging
  };

  return (
    <>
      {/* Comment Mode Toggle Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            variant={isSidebarOpen ? "default" : "outline"}
            size="sm"
            className="shadow-lg"
            title={`${isSidebarOpen ? 'Hide' : 'Show'} comments (⌘K)`}
          >
            <MessageSquareText className="h-4 w-4 mr-2" />
            {comments.length > 0 && (
              <span className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs ml-1">
                {comments.length}
              </span>
            )}
          </Button>
          
          <Button
            onClick={handleCommentModeToggle}
            variant={isCommentModeActive ? "default" : "outline"}
            size="sm"
            className="shadow-lg"
            title={`${isCommentModeActive ? 'Exit' : 'Enter'} comment mode (⌘M)`}
            disabled={loading}
          >
            {loading ? (
              <Eye className="h-4 w-4 animate-pulse" />
            ) : isCommentModeActive ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <PenTool className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Comment Mode Indicator */}
      {isCommentModeActive && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
            <p className="text-sm font-medium">
              💬 Comment Mode Active - Select text to add comments
            </p>
          </div>
        </div>
      )}

      {/* Comment Modal */}
      <CommentModal
        isOpen={isCommentModalOpen}
        onClose={handleCloseModal}
        selection={selection}
        onSubmit={handleAddComment}
      />

      {/* Comments Sidebar */}
      <CommentsSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Login Modal */}
      <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign in to Comment</DialogTitle>
            <DialogDescription>
              You need to be signed in to add comments to the manifesto.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setIsLoginModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setIsLoginModalOpen(false);
                navigate('/auth');
              }}
              className="flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Render comment highlights in content */}
      <style>
        {`
          .comment-highlighted-content {
            position: relative;
          }
        `}
      </style>
    </>
  );
}
