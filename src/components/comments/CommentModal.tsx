import React, { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ParagraphSelection } from '@/types/comments';
import { useAuth } from '@/contexts/AuthContext';
import { useIsMobile } from '@/hooks/use-mobile';

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedParagraph: ParagraphSelection | null;
  onSubmit: (content: string) => void;
}

export function CommentModal({ isOpen, onClose, selectedParagraph, onSubmit }: CommentModalProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const { user } = useAuth();
  const isMobile = useIsMobile();
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on mobile when modal opens
  useEffect(() => {
    console.log('useEffect triggered:', { isOpen, isMobile, modalContentRef: modalContentRef.current });
    
    if (isOpen && isMobile && modalContentRef.current) {
      console.log('Modal opened on mobile, attempting to scroll');
      console.log('Modal content element:', modalContentRef.current);
      console.log('Initial scrollHeight:', modalContentRef.current.scrollHeight);
      console.log('Initial scrollTop:', modalContentRef.current.scrollTop);
      console.log('Initial clientHeight:', modalContentRef.current.clientHeight);
      
      setTimeout(() => {
        if (modalContentRef.current) {
          console.log('After 500ms delay:');
          console.log('Modal content element:', modalContentRef.current);
          console.log('ScrollHeight before scroll:', modalContentRef.current.scrollHeight);
          console.log('ScrollTop before scroll:', modalContentRef.current.scrollTop);
          console.log('ClientHeight before scroll:', modalContentRef.current.clientHeight);
          
          modalContentRef.current.scrollTo({
            top: modalContentRef.current.scrollHeight,
            behavior: 'smooth'
          });
          
          console.log('Scroll command executed, scrolling to:', modalContentRef.current.scrollHeight);
          
          // Check scroll position after a brief delay
          setTimeout(() => {
            if (modalContentRef.current) {
              console.log('After scroll attempt:');
              console.log('Final scrollTop:', modalContentRef.current.scrollTop);
              console.log('Final scrollHeight:', modalContentRef.current.scrollHeight);
            }
          }, 100);
        } else {
          console.log('Modal content ref is null after 500ms delay');
        }
      }, 500); // Delay to ensure modal and keyboard animations complete
    }
  }, [isOpen, isMobile]);

  const handleSubmit = async () => {
    console.log('Modal submit clicked', { 
      content: content.trim(), 
      hasSelectedParagraph: !!selectedParagraph,
      hasUser: !!user 
    });
    
    if (!content.trim() || !selectedParagraph) {
      console.log('Missing content or selectedParagraph');
      return;
    }
    
    setIsSubmitting(true);
    try {
      console.log('Calling onSubmit from modal');
      await onSubmit(content.trim());
      console.log('onSubmit completed successfully');
      setContent('');
      onClose();
    } catch (error) {
      console.error('Error submitting comment from modal:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    console.log('Modal close requested');
    setContent('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent ref={modalContentRef} className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Comment</DialogTitle>
          <DialogDescription>
            Add your thoughts about the selected text below.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {selectedParagraph && (
            <div className="p-3 bg-muted rounded-md">
              <p className="text-sm font-medium mb-1">Selected {selectedParagraph.elementType}:</p>
              <p className="text-sm text-muted-foreground italic">
                "{selectedParagraph.content}"
              </p>
            </div>
          )}

          {!user && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-sm text-yellow-800">
                ⚠️ You need to be signed in to add comments.
              </p>
            </div>
          )}
          
          <div>
            <Textarea
              placeholder="Write your comment..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsTextareaFocused(true)}
              onBlur={() => setIsTextareaFocused(false)}
              className="resize-none overflow-hidden"
              style={{
                minHeight: '100px',
                height: Math.max(100, content.split('\n').length * 24 + 24) + 'px'
              }}
              autoFocus
              disabled={!user}
            />
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit} 
              disabled={!content.trim() || isSubmitting || !selectedParagraph || !user}
            >
              {isSubmitting ? 'Adding...' : 'Add Comment'}
            </Button>
          </div>
          
          {/* Add spacing for mobile keyboard when textarea is focused */}
          {isMobile && isTextareaFocused && (
            <div style={{ height: '300px' }} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}