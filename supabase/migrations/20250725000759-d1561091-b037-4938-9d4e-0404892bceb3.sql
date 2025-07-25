-- Create trigger to automatically create profile when user signs up
-- This ensures that when a user verifies their email, they get a profile entry

-- Create the trigger
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();