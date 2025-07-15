
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Store scroll positions for each route
const scrollPositions = new Map<string, number>();

export const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Find the main scrollable element
    const scrollElement = document.querySelector('main[data-scroll-container]') as HTMLElement;
    
    if (!scrollElement) return;

    // Save current scroll position when leaving this route
    const saveScrollPosition = () => {
      scrollPositions.set(location.pathname, scrollElement.scrollTop);
    };

    // Restore scroll position for this route
    const restoreScrollPosition = () => {
      const savedPosition = scrollPositions.get(location.pathname) || 0;
      scrollElement.scrollTop = savedPosition;
    };

    // Save previous route's scroll position
    saveScrollPosition();
    
    // Restore current route's scroll position after a brief delay
    const timeoutId = setTimeout(restoreScrollPosition, 100);

    // Save scroll position when user scrolls
    const handleScroll = () => {
      scrollPositions.set(location.pathname, scrollElement.scrollTop);
    };

    scrollElement.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      scrollElement.removeEventListener('scroll', handleScroll);
      saveScrollPosition();
    };
  }, [location.pathname]);
};
