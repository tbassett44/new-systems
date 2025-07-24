import { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export type AnimationState = 'idle' | 'home-to-papers' | 'papers-to-home';
export type TransitionPhase = 'idle' | 'animating-out' | 'navigating' | 'animating-in';

interface AnimationContextType {
  animationState: AnimationState;
  transitionPhase: TransitionPhase;
  navigateWithAnimation: (to: string, animationType: AnimationState) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const usePageTransition = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('usePageTransition must be used within an AnimationProvider');
  }
  return context;
};

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const [animationState, setAnimationState] = useState<AnimationState>('idle');
  const [transitionPhase, setTransitionPhase] = useState<TransitionPhase>('idle');
  const navigate = useNavigate();
  const location = useLocation();

  const navigateWithAnimation = async (to: string, animationType: AnimationState) => {
    // Don't animate if we're already on the target route
    if (location.pathname === to) return;
    
    setAnimationState(animationType);
    setTransitionPhase('animating-out');
    
    // Wait for exit animation to complete (300ms)
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setTransitionPhase('navigating');
    navigate(to);
    
    // Small delay to ensure navigation is complete
    await new Promise(resolve => setTimeout(resolve, 50));
    
    setTransitionPhase('animating-in');
    
    // Wait for enter animation to complete (300ms)
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Reset to idle state
    setTransitionPhase('idle');
    setAnimationState('idle');
  };

  return (
    <AnimationContext.Provider value={{
      animationState,
      transitionPhase,
      navigateWithAnimation,
    }}>
      {children}
    </AnimationContext.Provider>
  );
};