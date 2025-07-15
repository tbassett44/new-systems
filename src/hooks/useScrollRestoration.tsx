
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Try multiple selectors to find the scrollable element
    const scrollElement = 
      document.querySelector('main[data-scroll-container]') as HTMLElement ||
      document.querySelector('main') as HTMLElement ||
      document.documentElement;
    
    if (scrollElement) {
      // Force scroll to top immediately
      scrollElement.scrollTop = 0;
      
      // Also try scrolling the window in case it's needed
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
};
