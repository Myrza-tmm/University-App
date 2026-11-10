import React, { useState, useEffect } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

export default function App() {
  const [screen, setScreen] = useState<'splash' | 'onboarding' | 'login' | 'register'>('splash');

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
    return <LoginScreen onLogin={() => console.log('Логин басылды')} onSignUp={() => setScreen('register')}/>
  }

  if (screen === 'register') {
    return <RegisterScreen onRegister={() => console.log('Регистрация басылды')} onBack={() => setScreen('login')}/>
  }

  return (
    <OnboardingScreen
      onNext={() => setScreen('login')}
      onSkip={() => setScreen('login')}
    />
  );
}