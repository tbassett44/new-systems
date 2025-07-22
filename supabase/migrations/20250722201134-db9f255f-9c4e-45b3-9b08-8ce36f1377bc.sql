-- Add foreign key relationships between comments/replies and profiles
ALTER TABLE public.comments 
ADD CONSTRAINT fk_comments_user_id 
FOREIGN KEY (user_id) REFERENCES public.profiles(user_id) ON DELETE CASCADE;

ALTER TABLE public.comment_replies 
ADD CONSTRAINT fk_comment_replies_user_id 
FOREIGN KEY (user_id) REFERENCES public.profiles(user_id) ON DELETE CASCADE;

ALTER TABLE public.comment_likes 
ADD CONSTRAINT fk_comment_likes_user_id 
FOREIGN KEY (user_id) REFERENCES public.profiles(user_id) ON DELETE CASCADE;