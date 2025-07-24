
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';
import { useAuth } from '@/contexts/AuthContext';

export const useAmplitudePageTracking = () => {
  const location = useLocation();
  const { user, loading } = useAuth();

  useEffect(() => {
    // Don't track page views until auth has finished loading
    if (loading) return;
    
    // Track page view when location changes (after auth is loaded)
    trackPageView(location.pathname, document.title, {
      isAuthenticated: !!user,
    });
  }, [location.pathname, loading]); // Depend on both location and loading state
};
