
import { useState, useCallback } from 'react';
import { TextSelection } from '@/types/comments';

export function useTextSelection() {
  const [selection, setSelection] = useState<TextSelection | null>(null);

  const captureSelection = useCallback(() => {
    const windowSelection = window.getSelection();
    if (!windowSelection || windowSelection.rangeCount === 0) {
      setSelection(null);
      return null;
    }

    const range = windowSelection.getRangeAt(0);
    const selectedText = range.toString().trim();
    
    if (selectedText.length === 0) {
      setSelection(null);
      return null;
    }

    // Get the container element and calculate offsets
    const container = range.commonAncestorContainer;
    const containerElement = container.nodeType === Node.TEXT_NODE 
      ? container.parentElement 
      : container as Element;

    if (!containerElement) {
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

    setSelection(textSelection);
    return textSelection;
  }, []);

  const clearSelection = useCallback(() => {
    setSelection(null);
    // Don't clear browser selection automatically to preserve context
    // window.getSelection()?.removeAllRanges();
  }, []);

  return {
    selection,
    captureSelection,
    clearSelection,
  };
}
