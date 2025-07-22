
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const { 
    comments, 
    isCommentModeActive, 
    toggleCommentMode, 
    addComment, 
    activeComment, 
    setActiveComment,
    selectedParagraph,
    setSelectedParagraph
  } = useComments();

  // Debug authentication state
  useEffect(() => {
    console.log('Authentication state:', { user: !!user, loading, userId: user?.id });
  }, [user, loading]);

  // Handle paragraph selection for comments
  useEffect(() => {
    if (!isCommentModeActive) return;

    const handleParagraphClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const paragraph = target.closest('[data-paragraph-id]') as HTMLElement;
      
      if (paragraph) {
        const paragraphId = paragraph.getAttribute('data-paragraph-id');
        const content = paragraph.textContent || '';
        const elementType = paragraph.tagName.toLowerCase().startsWith('h') ? 'heading' : 'paragraph';
        
        if (paragraphId && content) {
          console.log('Paragraph clicked:', { paragraphId, content: content.substring(0, 50) + '...', elementType });
          
          if (!user) {
            console.log('No user, showing login modal');
            setIsLoginModalOpen(true);
            return;
          }
          
          setSelectedParagraph({ paragraphId, content, elementType });
          setIsCommentModalOpen(true);
        }
      }
    };

    document.addEventListener('click', handleParagraphClick);
    return () => document.removeEventListener('click', handleParagraphClick);
  }, [isCommentModeActive, user, setSelectedParagraph]);

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
        setSelectedParagraph(null);
        setIsLoginModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleCommentModeToggle, isSidebarOpen, setActiveComment, setSelectedParagraph]);

  const handleAddComment = async (content: string) => {
    console.log('handleAddComment called', { 
      hasSelectedParagraph: !!selectedParagraph, 
      paragraphContent: selectedParagraph?.content?.substring(0, 50),
      content, 
      hasUser: !!user,
      userId: user?.id
    });
    
    if (!selectedParagraph) {
      console.log('No paragraph selected when submitting');
      toast({
        title: "Error",
        description: "Please click on a paragraph first.",
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
      console.log('Calling addComment with paragraph context:', selectedParagraph);
      await addComment(selectedParagraph, content);
      console.log('Comment added successfully');
      toast({
        title: "Success",
        description: "Your comment has been added!",
      });
      setSelectedParagraph(null);
      // Open the comments sidebar to show the new comment
      setIsSidebarOpen(true);
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
    setSelectedParagraph(null);
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
              💬 Comment Mode Active - Click on paragraphs to add comments
            </p>
          </div>
        </div>
      )}

      {/* Comment Modal */}
      <CommentModal
        isOpen={isCommentModalOpen}
        onClose={handleCloseModal}
        selectedParagraph={selectedParagraph}
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

      {/* Add paragraph hover styles when in comment mode */}
      <style>
        {isCommentModeActive ? `
          [data-paragraph-id]:hover {
            background-color: hsl(var(--primary) / 0.1);
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.2s ease;
          }
        ` : ''}
      </style>
    </>
  );
}
