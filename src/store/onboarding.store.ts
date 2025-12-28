import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ProfileLink {
  type: 'linkedin' | 'github' | 'website' | 'custom';
  label: string;
  url: string;
}

export interface OnboardingData {
  usResidency: boolean | null;
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
  profileLinks?: ProfileLink[];
  profileLinksWithClearance?: ProfileLink[];
}

interface OnboardingStore {
  data: Partial<OnboardingData>;
  isCompleted: boolean;
  updateData: (key: keyof OnboardingData, value: any) => void;
  updateMultipleData: (updates: Partial<OnboardingData>) => void;
  markCompleted: () => void;
  clearStorage: () => void;
}

const initialState: Partial<OnboardingData> = {
  usResidency: null,
  workAuthorization: '',
  salaryPreference: '',
  employmentStatus: '',
  jobTitle: [],
  experienceLevel: '',
  educationLevel: '',
  yearsExperience: '',
  industries: [],
  zipCode: '',
  relocation: '',
  workLocation: [],
  workType: [],
  gender: '',
  sexualOrientation: '',
  transgender: '',
  ethnicity: '',
  disability: '',
  sponsorship: '',
  securityClearance: '',
  clearanceLevel: '',
  profileLinks: [],
  profileLinksWithClearance: [],
};

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      data: initialState,
      isCompleted: false,
      updateData: (key, value) =>
        set((state) => ({
          data: { ...state.data, [key]: value },
        })),
      updateMultipleData: (updates) =>
        set((state) => ({
          data: { ...state.data, ...updates },
        })),
      markCompleted: () => set({ isCompleted: true }),
      clearStorage: () => set({ data: initialState, isCompleted: false }),
    }),
    {
      name: 'onboarding-storage',
    }
  )
);

