import React, { useState, useEffect } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';

export default function App() {
  const [screen, setScreen] = useState<'splash' | 'onboarding'>('splash');

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen('onboarding');
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  if (screen === 'splash') {
    return <SplashScreen />;
  }

  return (
    <OnboardingScreen
      onNext={() => console.log('Next басылды')}
      onSkip={() => console.log('Skip басылды')}
    />
  );
}