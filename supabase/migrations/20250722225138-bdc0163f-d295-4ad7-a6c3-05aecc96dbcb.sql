-- Add paragraph_id and element_type columns to comments table
ALTER TABLE public.comments 
ADD COLUMN paragraph_id text,
ADD COLUMN element_type text;

-- Update existing comments to have default values
UPDATE public.comments 
SET paragraph_id = COALESCE(paragraph_id, 'legacy-' || id::text),
    element_type = COALESCE(element_type, 'paragraph')
WHERE paragraph_id IS NULL OR element_type IS NULL;