import { useState } from 'react';
import { LoginPage } from './pages/Login';
import { SignUpPage } from './pages/Signup';
import { UploadResumePage } from './pages/UploadResume';
import { OnboardingStepPage } from './pages/Onboarding';
import { OnboardingQuestion1 } from './components/modules/onboarding/OnboardingQuestion1';
import { OnboardingQuestion2 } from './components/modules/onboarding/OnboardingQuestion2';
import { OnboardingQuestion3 } from './components/modules/onboarding/OnboardingQuestion3';
import { OnboardingQuestion4 } from './components/modules/onboarding/OnboardingQuestion4';
import { OnboardingQuestion5 } from './components/modules/onboarding/OnboardingQuestion5';
import { PostOnboarding } from './pages/PostOnboarding';
import { Dashboard } from './pages/Dashboard';
import { JobQueue } from './pages/JobQueue';
import { UserProfile } from './pages/UserProfile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup' | 'upload' | 'onboarding' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'complete' | 'dashboard' | 'queue' | 'applications' | 'profile'>('login');
  const [onboardingAnswers, setOnboardingAnswers] = useState<{
    q1?: string;
    q2?: string;
    q3?: { min: number; max: number };
    q4?: string[];
    q5?: string;
  }>({});

  const handleQ1Continue = (answer: string) => {
    setOnboardingAnswers({ ...onboardingAnswers, q1: answer });
    setCurrentPage('q2');
  };

  const handleQ2Continue = (answer: string) => {
    setOnboardingAnswers({ ...onboardingAnswers, q2: answer });
    setCurrentPage('q3');
  };

  const handleQ3Continue = (min: number, max: number) => {
    setOnboardingAnswers({ ...onboardingAnswers, q3: { min, max } });
    setCurrentPage('q4');
  };

  const handleQ4Continue = (selectedTitles: string[]) => {
    setOnboardingAnswers({ ...onboardingAnswers, q4: selectedTitles });
    setCurrentPage('q5');
  };

  const handleQ5Continue = (experience: string) => {
    setOnboardingAnswers({ ...onboardingAnswers, q5: experience });
    console.log('Onboarding complete!', { ...onboardingAnswers, q5: experience });
    setCurrentPage('complete');
  };

  return (
    <>
      {currentPage === 'login' && (
        <LoginPage onSignUpClick={() => setCurrentPage('signup')} />
      )}
      {currentPage === 'signup' && (
        <SignUpPage
          onSignInClick={() => setCurrentPage('login')}
          onSignUpComplete={() => setCurrentPage('upload')}
        />
      )}
      {currentPage === 'upload' && (
        <UploadResumePage onUploadComplete={() => setCurrentPage('onboarding')} />
      )}
      {currentPage === 'onboarding' && (
        <OnboardingStepPage onContinue={() => setCurrentPage('q1')} />
      )}
      {currentPage === 'q1' && (
        <OnboardingQuestion1
          onBack={() => setCurrentPage('onboarding')}
          onContinue={handleQ1Continue}
        />
      )}
      {currentPage === 'q2' && (
        <OnboardingQuestion2
          onBack={() => setCurrentPage('q1')}
          onContinue={handleQ2Continue}
        />
      )}
      {currentPage === 'q3' && (
        <OnboardingQuestion3
          onBack={() => setCurrentPage('q2')}
          onContinue={handleQ3Continue}
        />
      )}
      {currentPage === 'q4' && (
        <OnboardingQuestion4
          onBack={() => setCurrentPage('q3')}
          onContinue={handleQ4Continue}
        />
      )}
      {currentPage === 'q5' && (
        <OnboardingQuestion5
          onBack={() => setCurrentPage('q4')}
          onContinue={handleQ5Continue}
        />
      )}
      {currentPage === 'complete' && (
        <PostOnboarding onComplete={() => setCurrentPage('dashboard')} />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard onNavigate={(page) => setCurrentPage(page)} />
      )}
      {currentPage === 'queue' && (
        <JobQueue onNavigate={(page) => setCurrentPage(page)} />
      )}
      {currentPage === 'profile' && (
        <UserProfile onNavigate={(page) => setCurrentPage(page)} />
      )}
    </>
  );
}