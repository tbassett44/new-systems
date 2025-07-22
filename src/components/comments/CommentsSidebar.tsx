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
  X, 
  Trash2,
  Calendar,
  Edit,
  Save,
  XCircle,
  CheckCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { useAuth } from '@/contexts/AuthContext';

interface CommentsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommentsSidebar({ isOpen, onClose }: CommentsSidebarProps) {
  const { user } = useAuth();
  const { 
    comments, 
    activeComment, 
    setActiveComment, 
    replyToComment, 
    likeComment, 
    deleteComment,
    editComment 
  } = useComments();
  
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editingReply, setEditingReply] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

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

  const handleEditComment = async (commentId: string) => {
    if (!editContent.trim()) return;
    
    try {
      await editComment(commentId, editContent.trim());
      setEditContent('');
      setEditingComment(null);
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  };

  const canDeleteComment = (comment: Comment) => {
    return comment.user_id === user?.id || user?.email === 'iamjuicylife@gmail.com';
  };

  const canEditComment = (comment: Comment) => {
    return comment.user_id === user?.id;
  };

  const startEdit = (comment: Comment) => {
    setEditingComment(comment.id);
    setEditContent(comment.text_content);
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
                        <CheckCircle className="h-3 w-3 mr-1" />
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
                  
                  {editingComment === comment.id ? (
                    <div className="space-y-2">
                      <Textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        className="min-h-[60px] text-sm"
                      />
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingComment(null);
                            setEditContent('');
                          }}
                        >
                          <XCircle className="h-3 w-3 mr-1" />
                          Cancel
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleEditComment(comment.id)}
                          disabled={!editContent.trim()}
                        >
                          <Save className="h-3 w-3 mr-1" />
                          Save
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm">{comment.text_content}</p>
                  )}
                </div>

                {/* Display replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="space-y-2 ml-4 border-l-2 border-muted pl-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-muted/30 rounded p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-5 w-5">
                              <AvatarImage src={reply.user?.avatar_url} />
                              <AvatarFallback className="text-xs">
                                {reply.user?.display_name?.[0]?.toUpperCase() || 'U'}
                              </AvatarFallback>
                            </Avatar>
                            <div className="text-xs">
                              <p className="font-medium">{reply.user?.display_name || 'Anonymous'}</p>
                              <p className="text-muted-foreground">
                                {formatDistanceToNow(new Date(reply.created_at), { addSuffix: true })}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {canEditComment({ ...comment, user_id: reply.user_id }) && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEditingReply(reply.id);
                                  setEditContent(reply.content);
                                }}
                                className="h-6 px-1 text-xs"
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                            )}
                            {canDeleteComment({ ...comment, user_id: reply.user_id }) && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Note: You'll need to add deleteReply function to CommentProvider
                                }}
                                className="h-6 px-1 text-xs text-destructive hover:text-destructive"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        </div>
                        
                        {editingReply === reply.id ? (
                          <div className="space-y-2">
                            <Textarea
                              value={editContent}
                              onChange={(e) => setEditContent(e.target.value)}
                              className="min-h-[40px] text-xs"
                            />
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setEditingReply(null);
                                  setEditContent('');
                                }}
                              >
                                Cancel
                              </Button>
                              <Button
                                size="sm"
                                onClick={() => {
                                  // Note: You'll need to add editReply function to CommentProvider
                                  setEditingReply(null);
                                  setEditContent('');
                                }}
                                disabled={!editContent.trim()}
                              >
                                Save
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-xs">{reply.content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

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
                    {canEditComment(comment) && editingComment !== comment.id && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          startEdit(comment);
                        }}
                        className="h-7 px-2 text-xs"
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                    )}
                    
                    {canDeleteComment(comment) && (
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
                    )}
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