
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';
import { useAuth } from '@/contexts/AuthContext';

export const useAmplitudePageTracking = () => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const lastTrackedRef = useRef<{ pathname: string; userId: string | null } | null>(null);

  useEffect(() => {
    // Don't track page views until auth has finished loading
    if (loading) return;
    
    // Create a unique key for this page view (pathname + user id)
    const currentKey = {
      pathname: location.pathname,
      userId: user?.id || null
    };
    
    // Skip if we've already tracked this exact combination
    if (lastTrackedRef.current && 
        lastTrackedRef.current.pathname === currentKey.pathname && 
        lastTrackedRef.current.userId === currentKey.userId) {
      return;
    }
    
    // Track page view and update our reference
    trackPageView(location.pathname, document.title, {
      isAuthenticated: !!user,
    });
    
    lastTrackedRef.current = currentKey;
  }, [location.pathname, loading, user]);
};
