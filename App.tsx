import React, { useState, useEffect } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen2 from './src/screens/LoginScreen2';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import SheduleScreen from './src/screens/SheduleScreen';

export default function App() {
  const [screen, setScreen] = useState<'splash' | 'onboarding' | 'login2' | 'login' | 'register' | 'home' | 'courses' | 'shedule'>('splash');

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen('onboarding');
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  if (screen === 'splash') {
    return <SplashScreen />;
  }

  if (screen === 'login2') {
    return (
      <LoginScreen2 onSignUpEmail={() => setScreen ('register')} onSignIn={() => setScreen('login')}
      onGoogle={() => console.log('Google')} onFacebook={() => console.log('Facebook')}/>
    );
  }

  if (screen === 'login') {
    return <LoginScreen onLogin={() => setScreen('home')} onSignUp={() => setScreen('register')}/>
  }

  if (screen === 'register') {
    return <RegisterScreen onRegister={() => setScreen('home')} onBack={() => setScreen('login2')}/>
  }

  if (screen === 'home') {
    return <HomeScreen onTab={(tab: string) => setScreen(tab as any)} />
  }

  if (screen === 'courses') {
    return <CoursesScreen onTab={(tab: string) => setScreen(tab as any)} />
  }

  if (screen === 'shedule') {
    return <SheduleScreen onTab={(tab: string) => setScreen(tab as any )} />
  }

  return (
    <OnboardingScreen
      onNext={() => setScreen('login')}
      onSkip={() => setScreen('login')}
    />
  );
}