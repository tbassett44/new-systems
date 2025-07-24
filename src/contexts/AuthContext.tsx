import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { identifyUser, resetUser } from '@/lib/analytics';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithEmail: (email: string) => Promise<void>;
  signUpWithEmail: (email: string, name: string, avatar?: File | null) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);

        // Handle Amplitude user identification
        if (session?.user) {
          identifyUser(session.user.id, {
            email: session.user.email,
            display_name: session.user.user_metadata?.full_name || session.user.user_metadata?.display_name,
          });
        } else {
          resetUser();
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      // Handle initial user identification
      if (session?.user) {
        identifyUser(session.user.id, {
          email: session.user.email,
          display_name: session.user.user_metadata?.full_name || session.user.user_metadata?.display_name,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithEmail = async (email: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectUrl
      }
    });
    
    if (error) {
      console.error('Error signing in with email:', error);
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, name: string, avatar?: File | null) => {
    const redirectUrl = `${window.location.origin}/`;
    
    // Create user account first
    const { data, error } = await supabase.auth.signUp({
      email,
      password: 'dummy-password', // Required but not used for OTP
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          display_name: name,
          full_name: name
        }
      }
    });
    
    if (error) {
      console.error('Error signing up with email:', error);
      throw error;
    }

    // If user created successfully and avatar provided, upload avatar to user-specific folder
    if (data.user && avatar) {
      const fileExt = avatar.name.split('.').pop();
      const fileName = `${data.user.id}/avatar.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, avatar, {
          upsert: true // Allow overwriting existing avatar
        });
        
      if (uploadError) {
        console.error('Error uploading avatar:', uploadError);
      } else {
        // Update the user's metadata and profile with the avatar URL
        const { data: { publicUrl } } = supabase.storage
          .from('avatars')
          .getPublicUrl(uploadData.path);
          
        // Update both user metadata and profile record
        await Promise.all([
          supabase.auth.updateUser({
            data: { avatar_url: publicUrl }
          }),
          supabase
            .from('profiles')
            .update({ avatar_url: publicUrl })
            .eq('user_id', data.user.id)
        ]);
      }
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const value = {
    user,
    session,
    signInWithEmail,
    signUpWithEmail,
    signOut,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
