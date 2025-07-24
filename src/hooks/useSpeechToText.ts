import { useState, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSpeechToText = (onTranscriptionComplete?: (text: string) => void) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          sampleRate: 44100,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });

      chunksRef.current = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        console.log('MediaRecorder stopped, processing audio...');
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        console.log('Audio blob created:', { size: audioBlob.size, type: audioBlob.type });
        
        try {
          await transcribeAudio(audioBlob);
        } catch (error) {
          console.error('Error in transcription:', error);
        }
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
      
      console.log('Recording started');
    } catch (error) {
      console.error('Error starting recording:', error);
      throw error;
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      console.log('Recording stopped');
    }
  };

  const transcribeAudio = async (audioBlob: Blob): Promise<string> => {
    setIsProcessing(true);
    
    try {
      // Convert blob to base64
      const arrayBuffer = await audioBlob.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      let binary = '';
      const chunkSize = 0x8000;
      
      for (let i = 0; i < uint8Array.length; i += chunkSize) {
        const chunk = uint8Array.subarray(i, Math.min(i + chunkSize, uint8Array.length));
        binary += String.fromCharCode.apply(null, Array.from(chunk));
      }
      
      const base64Audio = btoa(binary);
      
      console.log('Sending audio for transcription...');
      
      // Call the edge function
      const { data, error } = await supabase.functions.invoke('voice-to-text', {
        body: { audio: base64Audio }
      });

      if (error) {
        console.error('Transcription error:', error);
        throw error;
      }

      console.log('Transcription result:', data);
      const transcribedText = data.text || '';
      if (transcribedText && onTranscriptionComplete) {
        onTranscriptionComplete(transcribedText);
      }
      return transcribedText;
    } catch (error) {
      console.error('Error transcribing audio:', error);
      throw error;
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    isRecording,
    isProcessing,
    startRecording,
    stopRecording,
    transcribeAudio
  };
};