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
import { useSpeechToText } from '@/hooks/useSpeechToText';
import { Mic, MicOff } from 'lucide-react';

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const interimTextRef = useRef<string>('');
  const { isRecording, isProcessing, startRecording, stopRecording } = useSpeechToText((text, isInterim) => {
    console.log('Transcription callback received:', text, 'isInterim:', isInterim);
    
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      
      if (isInterim) {
        // Store interim text and display it temporarily
        interimTextRef.current = text;
        const baseContent = content.replace(interimTextRef.current, ''); // Remove any previous interim text
        textarea.value = baseContent + (baseContent ? ' ' : '') + text;
        // Auto-resize for interim text
        textarea.style.height = 'auto';
        textarea.style.height = Math.max(100, textarea.scrollHeight) + 'px';
      } else {
        // Final text - permanently add to content
        const cursorPosition = textarea.selectionStart;
        const currentValue = content;
        
        if (document.activeElement === textarea) {
          // Insert at cursor position
          const newValue = currentValue.slice(0, cursorPosition) + 
                          (cursorPosition > 0 ? ' ' : '') + text + 
                          currentValue.slice(cursorPosition);
          setContent(newValue);
          
          // Set cursor position after inserted text
          setTimeout(() => {
            const newCursorPos = cursorPosition + (cursorPosition > 0 ? 1 : 0) + text.length;
            textarea.setSelectionRange(newCursorPos, newCursorPos);
          }, 0);
        } else {
          // Append to end
          setContent(prevContent => prevContent + (prevContent ? ' ' : '') + text);
        }
        
        // Clear interim text reference
        interimTextRef.current = '';
      }
    }
  });
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on mobile when modal opens
  useEffect(() => {
    console.log('useEffect triggered:', { isOpen, isMobile, modalContentRef: modalContentRef.current });
    
    if (isOpen && isMobile) {
      // Wait for the modal to be fully rendered and ref to be attached
      const checkAndScroll = () => {
        if (modalContentRef.current) {
          console.log('Modal content element found:', modalContentRef.current);
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
          console.log('Modal content ref still null, retrying...');
          // Retry after a short delay if ref is not available yet
          setTimeout(checkAndScroll, 100);
        }
      };
      
      // Start checking after a delay to allow modal to render
      setTimeout(checkAndScroll, 500);
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

  const handleSpeechToText = async () => {
    if (isRecording) {
      stopRecording();
    } else {
      try {
        await startRecording();
      } catch (error) {
        console.error('Error starting recording:', error);
      }
    }
  };

  // Listen for transcription results
  useEffect(() => {
    if (!isRecording && !isProcessing) {
      // Recording has stopped and processing is complete
      // The transcription result will be handled by the hook
    }
  }, [isRecording, isProcessing]);

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
          
          <div className="relative">
            <Textarea
              ref={textareaRef}
              placeholder="Write your comment..."
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                // Auto-resize textarea
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = Math.max(100, target.scrollHeight) + 'px';
              }}
              onFocus={() => setIsTextareaFocused(true)}
              onBlur={() => setIsTextareaFocused(false)}
              className="resize-none overflow-hidden pr-12"
              style={{
                minHeight: '100px',
                height: 'auto'
              }}
              autoFocus
              disabled={!user}
            />
            <Button
              type="button"
              size="sm"
              variant="ghost"
              className={`absolute right-2 top-2 h-8 w-8 p-0 ${isRecording ? 'text-red-500' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSpeechToText();
              }}
              onMouseDown={(e) => {
                e.preventDefault(); // Prevent focus loss from textarea
              }}
              disabled={!user || isProcessing}
              title={isRecording ? 'Stop recording' : 'Start voice recording'}
            >
              {isProcessing ? (
                <div className="animate-spin">⏳</div>
              ) : isRecording ? (
                <MicOff className="h-4 w-4" />
              ) : (
                <Mic className="h-4 w-4" />
              )}
            </Button>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleClose();
            }}>
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