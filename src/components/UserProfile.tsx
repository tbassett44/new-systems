import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { LogOut, User as UserIcon, Settings } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

export function UserProfile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [profileData, setProfileData] = useState<{
    display_name: string;
    avatar_url: string | null;
  }>({
    display_name: '',
    avatar_url: null
  });
  const [isLoading, setIsLoading] = useState(false);

  // Fetch user profile data when user is available
  useEffect(() => {
    async function fetchProfile() {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('display_name, avatar_url')
          .eq('user_id', user.id)
          .single();
          
        if (error) throw error;
        
        if (data) {
          setProfileData(data);
          setDisplayName(data.display_name);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }
    
    fetchProfile();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
      toast.success('You have been signed out');
    } catch (error) {
      toast.error('Failed to sign out');
      console.error(error);
    }
  };

  const handleUpdateProfile = async () => {
    if (!user) return;
    
    if (!displayName.trim()) {
      toast.error('Display name cannot be empty');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ display_name: displayName.trim() })
        .eq('user_id', user.id);
        
      if (error) throw error;
      
      setProfileData(prev => ({ ...prev, display_name: displayName.trim() }));
      setIsEditDialogOpen(false);
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return null;

  const userInitial = profileData.display_name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || '?';
  
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start px-2 gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={profileData.avatar_url || undefined} />
              <AvatarFallback>{userInitial}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium truncate">
              {profileData.display_name || 'User'}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-2" align="start">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src={profileData.avatar_url || undefined} />
                <AvatarFallback>{userInitial}</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <p className="text-sm font-medium">{profileData.display_name || 'User'}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
            </div>
            
            <div className="grid gap-1">
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                onClick={() => setIsEditDialogOpen(true)}
              >
                <Settings className="h-4 w-4" />
                Edit Profile
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2 text-destructive"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your profile information.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Display Name
              </label>
              <Input
                id="name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter your display name"
              />
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" disabled={isLoading}>
                Cancel
              </Button>
            </DialogClose>
            <Button onClick={handleUpdateProfile} disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}