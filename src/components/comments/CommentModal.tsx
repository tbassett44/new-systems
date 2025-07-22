
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { TextSelection } from '@/types/comments';

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selection: TextSelection | null;
  onSubmit: (content: string) => void;
}

export function CommentModal({ isOpen, onClose, selection, onSubmit }: CommentModalProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim() || !selection) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(content.trim());
      setContent('');
      onClose();
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setContent('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Comment</DialogTitle>
          <DialogDescription>
            Add your thoughts about the selected text below.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {selection && (
            <div className="p-3 bg-muted rounded-md">
              <p className="text-sm font-medium mb-1">Selected text:</p>
              <p className="text-sm text-muted-foreground italic">
                "{selection.text}"
              </p>
            </div>
          )}
          
          <div>
            <Textarea
              placeholder="Write your comment..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px]"
              autoFocus
            />
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit} 
              disabled={!content.trim() || isSubmitting}
            >
              {isSubmitting ? 'Adding...' : 'Add Comment'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
