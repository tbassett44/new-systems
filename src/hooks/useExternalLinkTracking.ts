
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackExternalLinkClick } from '@/lib/analytics';

export const useExternalLinkTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && (link.target === '_blank' || link.href.startsWith('http'))) {
        const isExternal = !link.href.includes(window.location.hostname);
        
        if (isExternal) {
          trackExternalLinkClick(
            link.href,
            location.pathname,
            link.textContent || link.getAttribute('aria-label') || 'Unknown'
          );
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [location.pathname]);
};
