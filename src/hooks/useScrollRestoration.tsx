
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Store scroll positions for each route
const scrollPositions = new Map<string, number>();

export const useScrollRestoration = () => {
  const location = useLocation();
  const scrollElementRef = useRef<HTMLElement | null>(null);

  // Save scroll position when leaving a route
  useEffect(() => {
    const saveScrollPosition = () => {
      if (scrollElementRef.current) {
        scrollPositions.set(location.pathname, scrollElementRef.current.scrollTop);
      }
    };

    // Save on route change
    return () => {
      saveScrollPosition();
    };
  }, [location.pathname]);

  // Restore scroll position when entering a route
  useEffect(() => {
    const restoreScrollPosition = () => {
      if (scrollElementRef.current) {
        const savedPosition = scrollPositions.get(location.pathname) || 0;
        scrollElementRef.current.scrollTop = savedPosition;
      }
    };

    // Small delay to ensure content is rendered
    const timeoutId = setTimeout(restoreScrollPosition, 50);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return {
    scrollElementRef,
    setScrollElement: (element: HTMLElement | null) => {
      scrollElementRef.current = element;
    }
  };
};
