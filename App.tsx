import React, { useState, useEffect } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [screen, setScreen] = useState<'splash' | 'onboarding' | 'login'>('splash');

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen('onboarding');
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  if (screen === 'splash') {
    return <SplashScreen />;
  }

  if (screen === 'login') {
    return <LoginScreen onLogin={() => console.log('Логин басылды')} onSignUp={() => console.log('Sign up')}/>;
  }

  return (
    <OnboardingScreen
      onNext={() => setScreen('login')}
      onSkip={() => setScreen('login')}
    />
  );
}