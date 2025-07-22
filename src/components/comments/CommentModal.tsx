
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
import { useAuth } from '@/contexts/AuthContext';

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selection: TextSelection | null;
  onSubmit: (content: string) => void;
}

export function CommentModal({ isOpen, onClose, selection, onSubmit }: CommentModalProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async () => {
    console.log('Modal submit clicked', { 
      content: content.trim(), 
      hasSelection: !!selection,
      hasUser: !!user 
    });
    
    if (!content.trim() || !selection) {
      console.log('Missing content or selection');
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
              className="min-h-[100px]"
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
              disabled={!content.trim() || isSubmitting || !selection || !user}
            >
              {isSubmitting ? 'Adding...' : 'Add Comment'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
