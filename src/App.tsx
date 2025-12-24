import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
import { ProtectedRoute, PublicRoute } from './components/shared/AuthGuard';
import { useState } from 'react';

export default function App() {
  const navigate = useNavigate();
  const [onboardingAnswers, setOnboardingAnswers] = useState<{
    q1?: string;
    q2?: string;
    q3?: { min: number; max: number };
    q4?: string[];
    q5?: string;
  }>({});

  const handleQ1Continue = (answer: string) => {
    setOnboardingAnswers({ ...onboardingAnswers, q1: answer });
    navigate('/onboarding/q2');
  };

  const handleQ2Continue = (answer: string) => {
    setOnboardingAnswers({ ...onboardingAnswers, q2: answer });
    navigate('/onboarding/q3');
  };

  const handleQ3Continue = (min: number, max: number) => {
    setOnboardingAnswers({ ...onboardingAnswers, q3: { min, max } });
    navigate('/onboarding/q4');
  };

  const handleQ4Continue = (selectedTitles: string[]) => {
    setOnboardingAnswers({ ...onboardingAnswers, q4: selectedTitles });
    navigate('/onboarding/q5');
  };

  const handleQ5Continue = (experience: string) => {
    setOnboardingAnswers({ ...onboardingAnswers, q5: experience });
    console.log('Onboarding complete!', { ...onboardingAnswers, q5: experience });
    navigate('/complete');
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage onSignUpClick={() => navigate('/signup')} />} />
        <Route path="/signup" element={<SignUpPage onSignInClick={() => navigate('/login')} onSignUpComplete={() => navigate('/upload')} />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/upload" element={<UploadResumePage onUploadComplete={() => navigate('/onboarding')} />} />
        <Route path="/onboarding" element={<OnboardingStepPage onContinue={() => navigate('/onboarding/q1')} />} />
        <Route path="/onboarding/q1" element={<OnboardingQuestion1 onBack={() => navigate('/onboarding')} onContinue={handleQ1Continue} />} />
        <Route path="/onboarding/q2" element={<OnboardingQuestion2 onBack={() => navigate('/onboarding/q1')} onContinue={handleQ2Continue} />} />
        <Route path="/onboarding/q3" element={<OnboardingQuestion3 onBack={() => navigate('/onboarding/q2')} onContinue={handleQ3Continue} />} />
        <Route path="/onboarding/q4" element={<OnboardingQuestion4 onBack={() => navigate('/onboarding/q3')} onContinue={handleQ4Continue} />} />
        <Route path="/onboarding/q5" element={<OnboardingQuestion5 onBack={() => navigate('/onboarding/q4')} onContinue={handleQ5Continue} />} />
        <Route path="/complete" element={<PostOnboarding onComplete={() => navigate('/dashboard')} />} />
        <Route path="/dashboard" element={<Dashboard onNavigate={(page) => navigate(`/${page}`)} />} />
        <Route path="/queue" element={<JobQueue onNavigate={(page) => navigate(`/${page}`)} />} />
        <Route path="/profile" element={<UserProfile onNavigate={(page) => navigate(`/${page}`)} />} />
      </Route>

      {/* Default Redirect */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}