
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Find the main scrollable element
    const scrollElement = document.querySelector('main[data-scroll-container]') as HTMLElement;
    
    if (!scrollElement) return;

    // Scroll to top when route changes
    scrollElement.scrollTop = 0;
  }, [location.pathname]);
};
