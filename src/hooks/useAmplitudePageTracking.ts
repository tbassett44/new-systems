
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';
import { useAuth } from '@/contexts/AuthContext';

export const useAmplitudePageTracking = () => {
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    // Track page view when location changes
    trackPageView(location.pathname, document.title, {
      isAuthenticated: !!user,
    });
  }, [location.pathname, user]);
};
