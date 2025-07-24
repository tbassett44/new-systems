import { useState, useRef } from 'react';

// Declare Web Speech API types
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognitionResultList {
  length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

declare var SpeechRecognition: {
  prototype: SpeechRecognition;
  new(): SpeechRecognition;
};

export const useSpeechToText = (onTranscriptionComplete?: (text: string, isInterim?: boolean) => void) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resultIndexRef = useRef<number>(0);

  const startRecording = async () => {
    try {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      
      // Reset result index for new recording
      resultIndexRef.current = 0;
      
      // Check if browser supports speech recognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        throw new Error('Speech recognition not supported in this browser');
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true; // Enable real-time results
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        console.log('Speech recognition started');
        setIsRecording(true);
      };

      recognition.onresult = (event) => {
        console.log('Speech recognition result:', event, 'resultIndex:', resultIndexRef.current);
        
        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        let interimTranscript = '';
        let finalTranscript = '';
        
        // Process all results to get interim and final text
        for (let i = 0; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            if (i >= resultIndexRef.current) {
              finalTranscript += transcript;
              resultIndexRef.current = i + 1;
            }
          } else {
            interimTranscript += transcript;
          }
        }
        
        // Send interim results for real-time display
        if (interimTranscript && onTranscriptionComplete) {
          console.log('Interim transcript:', interimTranscript);
          onTranscriptionComplete(interimTranscript, true);
        }
        
        // Send final results
        if (finalTranscript && onTranscriptionComplete) {
          console.log('Final transcript:', finalTranscript);
          onTranscriptionComplete(finalTranscript, false);
        }
        
        // Set timeout to stop recording after 2 seconds of silence
        timeoutRef.current = setTimeout(() => {
          console.log('Auto-stopping speech recognition due to silence');
          if (recognitionRef.current) {
            recognitionRef.current.stop();
          }
        }, 2000);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
        setIsProcessing(false);
      };

      recognition.onend = () => {
        console.log('Speech recognition ended');
        // Clear timeout when recognition ends
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        setIsRecording(false);
        setIsProcessing(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      setIsRecording(false);
      throw error;
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
      console.log('Speech recognition stopped');
    }
  };

  return {
    isRecording,
    isProcessing,
    startRecording,
    stopRecording
  };
};