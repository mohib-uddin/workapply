import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import instance from '@/lib/config/axios-instance';
import { OnboardingData } from '@/store/onboarding.store';

export interface OnboardingResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface UserOnboardingData {
  id: number;
  usResidency: boolean;
  workAuthorization: string;
  salaryPreference: string;
  employmentStatus: string;
  jobTitle: string[];
  experienceLevel: string;
  educationLevel: string;
  yearsExperience: string;
  industries: string[];
  zipCode: string;
  relocation: string;
  workLocation: string[];
  workType: string[];
  gender: string;
  sexualOrientation: string;
  transgender: string;
  ethnicity: string;
  disability: string;
  sponsorship: string;
  securityClearance: string;
  clearanceLevel: string;
  profileLinks: Array<{
    type: 'linkedin' | 'github' | 'website' | 'custom';
    label: string;
    url: string;
  }>;
  userId: number;
  audit: {
    createdAt: string;
    updatedAt: string;
  };
}

const UserService = () => {
  const useSubmitOnboardingData = () => {
    const submitOnboarding = async (data: Partial<OnboardingData>): Promise<OnboardingResponse> => {
      try {
        // Combine both profile links arrays and filter to only include those with URLs
        const allProfileLinks = [
          ...(data.profileLinks || []),
          ...(data.profileLinksWithClearance || [])
        ];
        const profileLinksToSend = allProfileLinks
          .filter(link => link.url && link.url.trim() !== '')
          .map(link => ({
            type: link.type,
            label: link.label,
            url: link.url
          }));

        const cleanData = {
          usResidency: data.usResidency,
          workAuthorization: data.workAuthorization,
          salaryPreference: data.salaryPreference,
          employmentStatus: data.employmentStatus,
          jobTitle: data.jobTitle,
          experienceLevel: data.experienceLevel,
          educationLevel: data.educationLevel,
          yearsExperience: data.yearsExperience,
          industries: data.industries,
          zipCode: data.zipCode,
          relocation: data.relocation,
          workLocation: data.workLocation,
          workType: data.workType,
          gender: data.gender,
          sexualOrientation: data.sexualOrientation,
          transgender: data.transgender,
          ethnicity: data.ethnicity,
          disability: data.disability,
          sponsorship: data.sponsorship,
          securityClearance: data.securityClearance,
          clearanceLevel: data.clearanceLevel,
          profileLinks: profileLinksToSend,
        };

        console.log('Submitting onboarding data to backend:', cleanData);

        const response = await instance.post('/api/v1/user-onboarding', cleanData);

        return {
          success: true,
          message: 'Onboarding data submitted successfully',
          data: response.data
        };
      } catch (error: any) {
        console.error('Error submitting onboarding data:', error);

        return {
          success: false,
          message: error.response?.data?.message || 'Failed to submit onboarding data',
          data: error.response?.data
        };
      }
    };

    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: submitOnboarding,
      retry: 1,
      onSuccess: (data) => {
        if (data.success) {
          queryClient.invalidateQueries({ queryKey: ['userOnboarding'] });
          queryClient.invalidateQueries({ queryKey: ['currentUser'] });
        }
      },
    });
  };

  const validateOnboardingData = (data: Partial<OnboardingData>): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    // Check required fields
    if (data.usResidency === null || data.usResidency === undefined) errors.push('US residency status is required');
    if (!data.workAuthorization || data.workAuthorization === '') errors.push('Work authorization is required');
    if (!data.salaryPreference || data.salaryPreference === '') errors.push('Salary preference is required');
    if (!data.employmentStatus || data.employmentStatus === '') errors.push('Employment status is required');
    if (!data.jobTitle || !Array.isArray(data.jobTitle) || data.jobTitle.length === 0) errors.push('At least one job title is required');
    if (!data.experienceLevel || data.experienceLevel === '') errors.push('Experience level is required');
    if (!data.educationLevel || data.educationLevel === '') errors.push('Education level is required');
    if (!data.yearsExperience || data.yearsExperience === '') errors.push('Years of experience is required');
    if (!data.industries || data.industries.length === 0) errors.push('At least one industry must be selected');
    if (!data.zipCode || data.zipCode === '') errors.push('ZIP code is required');
    if (!data.relocation || data.relocation === '') errors.push('Relocation preference is required');
    if (!data.workLocation || data.workLocation.length === 0) errors.push('Work location preference is required');
    if (!data.workType || data.workType.length === 0) errors.push('Work type is required');
    if (!data.gender || data.gender === '') errors.push('Gender is required');
    if (!data.sexualOrientation || data.sexualOrientation === '') errors.push('Sexual orientation is required');
    if (!data.transgender || data.transgender === '') errors.push('Transgender identification is required');
    if (!data.ethnicity || data.ethnicity === '') errors.push('Ethnicity is required');
    if (!data.disability || data.disability === '') errors.push('Disability status is required');
    if (data.sponsorship === null || data.sponsorship === '') errors.push('Sponsorship requirement is required');
    if (data.securityClearance === null || data.securityClearance === '') errors.push('Security clearance status is required');
    // Only require clearance level if security clearance is "yes"
    if (data.securityClearance === 'yes') {
      if (!data.clearanceLevel || data.clearanceLevel === '') {
        errors.push('Clearance level is required when security clearance is yes');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  };

  const useFetchUserOnboardingData = (enabled: boolean = true) => {
    const fetchOnboardingData = async (): Promise<UserOnboardingData> => {
      const response = await instance.get('/api/v1/user-onboarding');
      return response.data;
    };

    return useQuery({
      queryFn: fetchOnboardingData,
      queryKey: ['userOnboarding'],
      enabled,
      retry: 1,
    });
  };

  const useFetchCurrentUser = (enabled: boolean = true) => {
    const fetchCurrentUser = async () => {
      const response = await instance.get('/api/v1/users/me');
      return response.data;
    };

    return useQuery({
      queryFn: fetchCurrentUser,
      queryKey: ['currentUser'],
      enabled,
      retry: 1,
    });
  };

  const useFetchCurrentSubscription = (enabled: boolean = true) => {
    const fetchSubscription = async () => {
      const response = await instance.get('/api/v1/subscriptions/current');
      return response.data;
    };

    return useQuery({
      queryFn: fetchSubscription,
      queryKey: ['current-subscription'],
      enabled,
      retry: 1,
    });
  };

  return {
    useSubmitOnboardingData,
    validateOnboardingData,
    useFetchUserOnboardingData,
    useFetchCurrentUser,
    useFetchCurrentSubscription,
  };
};

export default UserService;

