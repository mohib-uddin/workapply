import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadResumePage } from './UploadResume';
import { OnboardingStepPage } from './Onboarding';
import { DynamicOnboardingQuestion } from '@/components/modules/onboarding/DynamicOnboardingQuestion';
import { ONBOARDING_QUESTIONS, TOTAL_STEPS } from '@/components/modules/onboarding/questions-data';
import { useOnboardingStore } from '@/store/onboarding.store';
import UserService from '@/services/user.service';
import { useFetchResume } from '@/services/resume-upload.service';
import { toast } from 'sonner';

type OnboardingStep = 'upload' | 'intro' | 'question' | 'completion';

export function OnboardingFlow() {
  const navigate = useNavigate();
  const { data, updateMultipleData, markCompleted } = useOnboardingStore();
  const { useSubmitOnboardingData, validateOnboardingData } = UserService();
  const submitOnboardingMutation = useSubmitOnboardingData();
  const { data: resumeData, isSuccess: resumeSuccess } = useFetchResume(true);
  
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('upload');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isResumeUploaded, setIsResumeUploaded] = useState(false);

  // Check if resume already exists on mount
  useEffect(() => {
    if (resumeSuccess && resumeData?.data && Array.isArray(resumeData.data) && resumeData.data.length > 0) {
      setIsResumeUploaded(true);
      // Check if we have any questions answered
      const hasAnyAnswer = ONBOARDING_QUESTIONS.some(q => {
        const value = data[q.key as keyof typeof data];
        return value !== null && value !== undefined && 
               !(Array.isArray(value) && value.length === 0) &&
               !(typeof value === 'string' && value === '');
      });
      
      if (hasAnyAnswer) {
        setCurrentStep('question');
      } else {
        setCurrentStep('intro');
      }
    }
  }, [resumeSuccess, resumeData, data]);

  // Filter questions based on conditional logic
  const filteredQuestions = ONBOARDING_QUESTIONS.filter(question => {
    if (question.showIf) {
      return question.showIf(data);
    }
    return true;
  });

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  useEffect(() => {
    // Check if we should skip to a specific question based on data
    if (currentStep === 'question' && filteredQuestions.length > 0) {
      // Find the first unanswered question
      const firstUnansweredIndex = filteredQuestions.findIndex((q, index) => {
        const value = data[q.key as keyof typeof data];
        return value === null || value === undefined || 
               (Array.isArray(value) && value.length === 0) ||
               (typeof value === 'string' && value === '');
      });
      
      if (firstUnansweredIndex !== -1) {
        setCurrentQuestionIndex(firstUnansweredIndex);
      }
    }
  }, [currentStep, data, filteredQuestions]);

  const handleResumeUploadComplete = () => {
    setIsResumeUploaded(true);
    setCurrentStep('intro');
  };

  const handleIntroContinue = () => {
    if (filteredQuestions.length > 0) {
      setCurrentStep('question');
      setCurrentQuestionIndex(0);
    } else {
      handleComplete();
    }
  };

  const handleQuestionBack = () => {
    if (currentQuestionIndex === 0) {
      setCurrentStep('intro');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuestionContinue = (answer: any) => {
    // Move to next question
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered, submit
      handleComplete();
    }
  };

  const handleComplete = async () => {
    // Validate data first
    const validation = validateOnboardingData(data);
    if (!validation.isValid) {
      console.error('Validation errors:', validation.errors);
      toast.error('Please complete all required fields before proceeding');
      return;
    }

    try {
      const response = await submitOnboardingMutation.mutateAsync(data);
      
      if (response.success) {
        markCompleted();
        toast.success('Profile completed successfully!');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        toast.error(response.message || 'Failed to submit profile data');
      }
    } catch (error) {
      console.error('Error submitting onboarding data:', error);
      toast.error('An error occurred while submitting your profile data');
    }
  };

  if (currentStep === 'upload') {
    return <UploadResumePage onUploadComplete={handleResumeUploadComplete} />;
  }

  if (currentStep === 'intro') {
    return <OnboardingStepPage onContinue={handleIntroContinue} />;
  }

  if (currentStep === 'question' && currentQuestion) {
    return (
      <DynamicOnboardingQuestion
        question={currentQuestion}
        onBack={handleQuestionBack}
        onContinue={handleQuestionContinue}
        totalSteps={TOTAL_STEPS}
      />
    );
  }

  return null;
}

