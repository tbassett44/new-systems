import DOMPurify from 'dompurify';
import { supabase } from '@/integrations/supabase/client';

/**
 * Sanitizes HTML content to prevent XSS attacks
 */
export const sanitizeHtml = (content: string): string => {
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'a'],
    ALLOWED_ATTR: ['href', 'target'],
    ALLOW_DATA_ATTR: false,
  });
};

/**
 * Sanitizes plain text content for safe display
 */
export const sanitizeText = (content: string): string => {
  return DOMPurify.sanitize(content, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
};

/**
 * Checks if the current user has a specific role
 */
export const hasRole = async (role: 'admin' | 'moderator' | 'user'): Promise<boolean> => {
  try {
    const { data, error } = await supabase.rpc('has_role', {
      _user_id: (await supabase.auth.getUser()).data.user?.id,
      _role: role
    });
    
    if (error) {
      console.error('Error checking user role:', error);
      return false;
    }
    
    return data || false;
  } catch (error) {
    console.error('Error checking user role:', error);
    return false;
  }
};

/**
 * Gets the current user's role
 */
export const getUserRole = async (): Promise<'admin' | 'moderator' | 'user' | null> => {
  try {
    const { data, error } = await supabase.rpc('get_user_role', {
      _user_id: (await supabase.auth.getUser()).data.user?.id
    });
    
    if (error) {
      console.error('Error getting user role:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error getting user role:', error);
    return null;
  }
};