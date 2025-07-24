-- Remove the incorrect foreign key constraint that references profiles table
-- The comments table should only reference auth.users, not profiles
ALTER TABLE public.comments DROP CONSTRAINT IF EXISTS fk_comments_user_id;