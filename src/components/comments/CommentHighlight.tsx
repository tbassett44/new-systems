
import React from 'react';
import { Comment } from '@/types/comments';
import { cn } from '@/lib/utils';
import { MessageSquare } from 'lucide-react';

interface CommentHighlightProps {
  comment: Comment;
  isActive: boolean;
  onClick: () => void;
}

export function CommentHighlight({ comment, isActive, onClick }: CommentHighlightProps) {
  return (
    <span
      className={cn(
        "relative cursor-pointer transition-colors",
        "bg-yellow-200/50 hover:bg-yellow-200/70 border-b-2 border-yellow-400",
        isActive && "bg-yellow-300/70 border-yellow-500",
        comment.is_resolved && "bg-green-200/50 border-green-400"
      )}
      onClick={onClick}
      title={`Comment: ${comment.text_content.substring(0, 100)}...`}
    >
      {comment.highlighted_text}
      <MessageSquare 
        className={cn(
          "inline-block ml-1 h-3 w-3 text-yellow-600",
          isActive && "text-yellow-700",
          comment.is_resolved && "text-green-600"
        )}
      />
    </span>
  );
}
