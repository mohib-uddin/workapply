import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserService from '@/services/user.service';
import { useFetchResume } from '@/services/resume-upload.service';

/**
 * OnboardingGuard - Checks if user has completed onboarding.
 * Redirects to /upload if resume is missing or onboarding is incomplete.
 * Allows access to dashboard if onboarding is complete.
 */
export const OnboardingGuard = () => {
  const [shouldRedirect, setShouldRedirect] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { useFetchUserOnboardingData } = UserService();
  const { data: resumeData, isSuccess: resumeSuccess, isLoading: resumeLoading } = useFetchResume(true);
  const { data: onboardingData, isSuccess: onboardingSuccess, isLoading: onboardingLoading } = useFetchUserOnboardingData(true);

  useEffect(() => {
    // Wait for all queries to complete
    if (resumeLoading || onboardingLoading) {
      setIsLoading(true);
      return;
    }

    setIsLoading(false);

    // Check if resume exists
    const hasResume = resumeData?.data && Array.isArray(resumeData.data) && resumeData.data.length > 0;

    if (!hasResume) {
      setShouldRedirect('/upload');
      return;
    }

    // Check if onboarding is complete
    // If the API returns an error or no data, onboarding is incomplete
    if (!onboardingSuccess || !onboardingData) {
      setShouldRedirect('/onboarding');
      return;
    }

    // Check if onboarding data exists and has required fields
    const hasOnboardingData = onboardingData && (
      onboardingData.id ||
      (typeof onboardingData === 'object' && Object.keys(onboardingData).length > 0)
    );

    if (!hasOnboardingData) {
      setShouldRedirect('/onboarding');
      return;
    }

    // Onboarding is complete, allow access
    setShouldRedirect(null);
  }, [resumeData, onboardingData, resumeSuccess, onboardingSuccess, resumeLoading, onboardingLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-white font-['Pavanam',sans-serif]">Loading...</div>
      </div>
    );
  }

  if (shouldRedirect) {
    return <Navigate to={shouldRedirect} replace />;
  }

  return <Outlet />;
};

