import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Mail, ArrowLeft, UserPlus } from 'lucide-react';

export default function Auth() {
  const { user, signInWithEmail, signUpWithEmail } = useAuth();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    try {
      await signInWithEmail(email);
      setEmailSent(true);
      toast.success('Check your email for a magic link to sign in');
    } catch (error: any) {
      toast.error(error.message || 'Failed to send login link');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await signUpWithEmail(email, name);
      setEmailSent(true);
      toast.success('Check your email for a magic link to complete your registration');
    } catch (error: any) {
      if (error.message?.includes('User already registered')) {
        toast.error('An account with this email already exists. Try signing in instead.');
      } else {
        toast.error(error.message || 'Failed to create account');
      }
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setName('');
    setEmailSent(false);
    setIsSubmitting(false);
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            {isSignUp ? 'Join the Community' : 'Welcome Back'}
          </CardTitle>
          <CardDescription>
            {isSignUp 
              ? 'Create your account to contribute to the Systems Change Manifesto' 
              : 'Sign in to access the Systems Change Manifesto and contribute to the conversation'
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!emailSent ? (
            <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12"
                disabled={isSubmitting || !email || (isSignUp && !name)}
              >
                {isSignUp ? (
                  <>
                    <UserPlus className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending Link...' : 'Send Magic Link'}
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending Link...' : 'Send Magic Link'}
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">Magic link sent!</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {isSignUp 
                    ? 'Check your email for a magic link to complete your registration.'
                    : 'Check your email for a link to sign in.'
                  }
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={resetForm}
                className="w-full"
              >
                Use another email
              </Button>
            </div>
          )}

          {!emailSent && (
            <div className="text-center">
              <Button
                variant="link"
                onClick={switchMode}
                className="text-sm"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : 'Need an account? Create one'
                }
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            className="flex items-center gap-1"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}