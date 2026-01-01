import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { SignUpPage } from './pages/Signup';
import { OnboardingFlow } from './pages/OnboardingFlow';
import { Dashboard } from './pages/Dashboard';
import { JobQueue } from './pages/JobQueue';
import { UserProfile } from './pages/UserProfile';
import { Applications } from './pages/Applications';
import { SubscriptionPlans } from './pages/SubscriptionPlans';
import { ProtectedRoute, PublicRoute } from './components/shared/AuthGuard';
import { OnboardingGuard } from './components/shared/OnboardingGuard';

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage onSignUpClick={() => navigate('/signup')} />} />
        <Route path="/signup" element={<SignUpPage onSignInClick={() => navigate('/login')} onSignUpComplete={() => navigate('/onboarding')} />} />
      </Route>

      {/* Protected Routes with Onboarding Guard */}
      <Route element={<ProtectedRoute />}>
        <Route element={<OnboardingGuard />}>
          <Route path="/dashboard" element={<Dashboard onNavigate={(page) => navigate(`/${page}`)} />} />
          <Route path="/queue" element={<JobQueue onNavigate={(page) => navigate(`/${page}`)} />} />
          <Route path="/applications" element={<Applications onNavigate={(page) => navigate(`/${page}`)} />} />
          <Route path="/profile" element={<UserProfile onNavigate={(page) => navigate(`/${page}`)} />} />
          <Route path="/subscriptions" element={<SubscriptionPlans onNavigate={(page) => navigate(`/${page}`)} />} />
        </Route>

        {/* Onboarding Routes (no guard, accessible when onboarding incomplete) */}
        <Route path="/onboarding" element={<OnboardingFlow />} />
        <Route path="/upload" element={<OnboardingFlow />} />
      </Route>

      {/* Default Redirect */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}