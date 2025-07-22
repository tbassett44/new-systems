import { useEffect } from 'react';

/**
 * Hook to automatically add data-paragraph-id attributes to paragraphs and headings
 * This enables the comment system to work with paragraph-based context
 */
export function useParagraphIds() {
  useEffect(() => {
    const addParagraphIds = () => {
      // Find all paragraphs and headings in the main content area
      const contentArea = document.querySelector('.comment-highlighted-content');
      if (!contentArea) return;

      const elements = contentArea.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
      
      elements.forEach((element, index) => {
        // Only add ID if it doesn't already have one
        if (!element.getAttribute('data-paragraph-id')) {
          const paragraphId = `p-${Date.now()}-${index}`;
          element.setAttribute('data-paragraph-id', paragraphId);
        }
      });
    };

    // Add IDs when component mounts
    addParagraphIds();

    // Also add IDs when content changes (e.g., navigation)
    const observer = new MutationObserver(() => {
      addParagraphIds();
    });

    const contentArea = document.querySelector('.comment-highlighted-content');
    if (contentArea) {
      observer.observe(contentArea, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);
}