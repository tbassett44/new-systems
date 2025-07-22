import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';

export default function Auth() {
  const { user, signInWithEmail } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const handleEmailSignIn = async (e: React.FormEvent) => {
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
    } catch (error) {
      toast.error('Failed to send login link');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome</CardTitle>
          <CardDescription>
            Sign in to access the Systems Change Manifesto and contribute to the conversation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!emailSent ? (
            <form onSubmit={handleEmailSignIn} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12"
                disabled={isSubmitting || !email}
              >
                <Mail className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending Link...' : 'Send Magic Link'}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">Magic link sent!</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Check your email for a link to sign in.
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setEmailSent(false)}
                className="w-full"
              >
                Use another email
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}