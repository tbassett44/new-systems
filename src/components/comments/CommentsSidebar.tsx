
import React, { useState } from 'react';
import { Comment } from '@/types/comments';
import { useComments } from './CommentProvider';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MessageSquare, 
  Heart, 
  Reply, 
  Check, 
  X, 
  Trash2,
  Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';

interface CommentsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommentsSidebar({ isOpen, onClose }: CommentsSidebarProps) {
  const { 
    comments, 
    activeComment, 
    setActiveComment, 
    replyToComment, 
    likeComment, 
    resolveComment, 
    deleteComment 
  } = useComments();
  
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleReply = async (commentId: string) => {
    if (!replyContent.trim()) return;
    
    try {
      await replyToComment(commentId, replyContent.trim());
      setReplyContent('');
      setReplyingTo(null);
    } catch (error) {
      console.error('Error replying:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-background border-l shadow-lg z-50">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          <h2 className="font-semibold">Comments ({comments.length})</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-80px)]">
        <div className="p-4 space-y-4">
          {comments.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No comments yet</p>
              <p className="text-sm">Select text to add the first comment</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className={cn(
                  "border rounded-lg p-4 space-y-3 transition-colors cursor-pointer",
                  activeComment?.id === comment.id && "border-primary bg-primary/5",
                  comment.is_resolved && "opacity-75 bg-green-50"
                )}
                onClick={() => setActiveComment(comment)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={comment.user?.avatar_url} />
                      <AvatarFallback className="text-xs">
                        {comment.user?.display_name?.[0]?.toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{comment.user?.display_name || 'Anonymous'}</p>
                      <p className="text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {comment.is_resolved && (
                      <Badge variant="secondary" className="text-xs">
                        <Check className="h-3 w-3 mr-1" />
                        Resolved
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="p-2 bg-muted/50 rounded text-sm">
                    <p className="font-medium text-muted-foreground mb-1">Highlighted text:</p>
                    <p className="italic">"{comment.highlighted_text}"</p>
                  </div>
                  
                  <p className="text-sm">{comment.text_content}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        likeComment(comment.id);
                      }}
                      className={cn(
                        "h-7 px-2 text-xs",
                        comment.user_has_liked && "text-red-500"
                      )}
                    >
                      <Heart className={cn(
                        "h-3 w-3 mr-1",
                        comment.user_has_liked && "fill-current"
                      )} />
                      {comment.likes_count || 0}
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setReplyingTo(replyingTo === comment.id ? null : comment.id);
                      }}
                      className="h-7 px-2 text-xs"
                    >
                      <Reply className="h-3 w-3 mr-1" />
                      Reply
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        resolveComment(comment.id);
                      }}
                      className="h-7 px-2 text-xs"
                    >
                      <Check className="h-3 w-3" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteComment(comment.id);
                      }}
                      className="h-7 px-2 text-xs text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                {replyingTo === comment.id && (
                  <div className="space-y-2 pt-2 border-t">
                    <Textarea
                      placeholder="Write a reply..."
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      className="min-h-[60px] text-sm"
                    />
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setReplyingTo(null);
                          setReplyContent('');
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleReply(comment.id)}
                        disabled={!replyContent.trim()}
                      >
                        Reply
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
