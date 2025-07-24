
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';
import { useAuth } from '@/contexts/AuthContext';

export const useAmplitudePageTracking = () => {
  const location = useLocation();
  const { user, loading } = useAuth();

  useEffect(() => {
    console.log('useAmplitudePageTracking effect triggered:', {
      loading,
      user: !!user,
      pathname: location.pathname
    });
    
    // Don't track page views until auth has finished loading
    if (loading) {
      console.log('Skipping page view - still loading auth');
      return;
    }
    
    console.log('Tracking page view with auth state:', !!user);
    // Track page view when location changes (after auth is loaded)
    trackPageView(location.pathname, document.title, {
      isAuthenticated: !!user,
    });
  }, [location.pathname, loading, user]); // Depend on location, loading state, and user changes
};
