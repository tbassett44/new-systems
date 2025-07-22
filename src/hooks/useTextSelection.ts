
import { useState, useCallback } from 'react';
import { TextSelection } from '@/types/comments';

export function useTextSelection() {
  const [selection, setSelection] = useState<TextSelection | null>(null);

  const captureSelection = useCallback(() => {
    console.log('captureSelection called');
    const windowSelection = window.getSelection();
    if (!windowSelection || windowSelection.rangeCount === 0) {
      console.log('No selection found');
      setSelection(null);
      return null;
    }

    const range = windowSelection.getRangeAt(0);
    const selectedText = range.toString().trim();
    
    if (selectedText.length === 0) {
      console.log('Empty selection');
      setSelection(null);
      return null;
    }

    console.log('Selected text:', selectedText);

    // Get the container element and calculate offsets
    const container = range.commonAncestorContainer;
    const containerElement = container.nodeType === Node.TEXT_NODE 
      ? container.parentElement 
      : container as Element;

    if (!containerElement) {
      console.log('No container element found');
      setSelection(null);
      return null;
    }

    // Calculate text offsets within the container
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(containerElement);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const startOffset = preSelectionRange.toString().length;
    const endOffset = startOffset + selectedText.length;

    const textSelection: TextSelection = {
      text: selectedText,
      startOffset,
      endOffset,
      containerElement,
    };

    console.log('Text selection created:', textSelection);
    setSelection(textSelection);
    return textSelection;
  }, []);

  const clearSelection = useCallback(() => {
    console.log('clearSelection called');
    setSelection(null);
    // Don't clear browser selection to preserve context for debugging
  }, []);

  return {
    selection,
    captureSelection,
    clearSelection,
  };
}
