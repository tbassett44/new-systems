
export interface Comment {
  id: string;
  user_id: string;
  page_route: string;
  text_content: string;
  highlighted_text: string;
  start_offset: number;
  end_offset: number;
  created_at: string;
  updated_at: string;
  is_resolved: boolean;
  user?: User;
  replies?: CommentReply[];
  likes_count?: number;
  user_has_liked?: boolean;
}

export interface CommentReply {
  id: string;
  parent_comment_id: string;
  user_id: string;
  content: string;
  created_at: string;
  user?: User;
}

export interface User {
  id: string;
  email: string;
  display_name: string;
  avatar_url?: string;
  created_at: string;
}

export interface TextSelection {
  text: string;
  startOffset: number;
  endOffset: number;
  containerElement: Element;
}

export interface CommentContextType {
  comments: Comment[];
  activeComment: Comment | null;
  isCommentModeActive: boolean;
  addComment: (selection: TextSelection, content: string) => Promise<void>;
  replyToComment: (commentId: string, content: string) => Promise<void>;
  toggleCommentMode: () => void;
  setActiveComment: (comment: Comment | null) => void;
  likeComment: (commentId: string) => Promise<void>;
  resolveComment: (commentId: string) => Promise<void>;
  deleteComment: (commentId: string) => Promise<void>;
}
