import { 
  Globe, 
  Shield, 
  DollarSign, 
  Briefcase, 
  GraduationCap, 
  Clock, 
  Building2, 
  MapPin, 
  Users, 
  Heart, 
  User, 
  Eye, 
  Mail, 
  CheckCircle,
  Sparkles,
  Home,
  Car,
  Monitor,
  Phone,
  Calendar,
  Star,
  Award,
  Target,
  Zap,
  Rainbow,
  UserCheck,
  Link
} from "lucide-react";

export interface QuestionOption {
  value: string | boolean | number;
  label: string;
  icon?: React.ReactNode;
  color?: "green" | "red" | "blue" | "default";
}

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface QuestionConfig {
  key: string;
  type: "select" | "multi-select" | "input" | "slider" | "combobox" | "multi-combobox" | "profile-links";
  title: string;
  description: string;
  icon: React.ReactNode;
  currentStep: number;
  nextStep: string;
  prevStep?: string;
  // Select question props
  options?: QuestionOption[];
  // Multi-select question props
  multiSelectOptions?: MultiSelectOption[];
  showSelectAll?: boolean;
  selectAllLabel?: string;
  maxSelections?: number;
  gridCols?: 1 | 2 | 3 | 4;
  // Input question props
  placeholder?: string;
  suggestions?: string[];
  inputType?: "text" | "email" | "number";
  maxLength?: number;
  // Slider question props
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: [number, number];
  formatValue?: (value: number) => string;
  // Combobox question props
  comboboxOptions?: string[];
  // Validation
  validation?: (answer: any) => boolean;
  // Conditional rendering
  showIf?: (data: any) => boolean;
}

export const ONBOARDING_QUESTIONS: QuestionConfig[] = [
  {
    key: "usResidency",
    type: "select",
    title: "Are you currently living in the United States?",
    description: "This helps us provide relevant job opportunities and comply with employment regulations.",
    icon: <Globe className="w-8 h-8 text-brand-25" />,
    currentStep: 2,
    nextStep: "workAuthorization",
    prevStep: "upload-resume",
    options: [
      {
        value: false,
        label: "No",
        color: "red"
      },
      {
        value: true,
        label: "Yes",
        color: "green"
      }
    ]
  },
  {
    key: "workAuthorization",
    type: "select",
    title: "What is your work authorization status?",
    description: "This information helps us match you with appropriate job opportunities.",
    icon: <Shield className="w-8 h-8 text-brand-25" />,
    currentStep: 3,
    nextStep: "salaryPreference",
    prevStep: "usResidency",
    options: [
      { value: "citizen", label: "US Citizen" },
      { value: "permanent-resident", label: "Permanent Resident" },
      { value: "work-visa", label: "Work Visa (H1B, L1, etc.)" },
      { value: "student-visa", label: "Student Visa (F1, OPT, etc.)" },
      { value: "other", label: "Other" }
    ]
  },
  {
    key: "salaryPreference",
    type: "slider",
    title: "What is your salary expectation?",
    description: "This helps us match you with roles that align with your compensation goals.",
    icon: <DollarSign className="w-8 h-8 text-brand-25" />,
    currentStep: 4,
    nextStep: "employmentStatus",
    prevStep: "workAuthorization",
    min: 30000,
    max: 300000,
    step: 5000,
    defaultValue: [60000, 120000],
    formatValue: (value: number) => `$${Math.round(value / 1000)}k`,
    validation: (answer: any) => typeof answer === 'string' && answer.includes('-') && answer.split('-').length === 2
  },
  {
    key: "employmentStatus",
    type: "select",
    title: "What is your current employment status?",
    description: "This helps us understand your situation and provide relevant opportunities.",
    icon: <Briefcase className="w-8 h-8 text-brand-25" />,
    currentStep: 5,
    nextStep: "jobTitle",
    prevStep: "salaryPreference",
    options: [
      { value: "employed", label: "Currently Employed" },
      { value: "unemployed", label: "Unemployed" },
      { value: "student", label: "Student" },
      { value: "freelancer", label: "Freelancer/Contractor" },
      { value: "entrepreneur", label: "Entrepreneur" }
    ]
  },
  {
    key: "jobTitle",
    type: "multi-combobox",
    title: "What job titles are you interested in?",
    description: "Select multiple job titles you'd like to apply for. This helps us match you with the most relevant opportunities.",
    icon: <Briefcase className="w-8 h-8 text-brand-25" />,
    currentStep: 6,
    nextStep: "experienceLevel",
    prevStep: "employmentStatus",
    placeholder: "Search and select job titles",
    comboboxOptions: [],
    maxSelections: 5
  },
  {
    key: "experienceLevel",
    type: "select",
    title: "What is your seniority level?",
    description: "This helps us tailor the interview process and job recommendations to your skill level.",
    icon: <Star className="w-8 h-8 text-brand-25" />,
    currentStep: 7,
    nextStep: "educationLevel",
    prevStep: "jobTitle",
    options: [
      { value: "entry", label: "Entry Level" },
      { value: "mid", label: "Mid Level" },
      { value: "senior", label: "Senior Level" },
      { value: "lead", label: "Lead/Manager" },
      { value: "executive", label: "Executive Level" }
    ]
  },
  {
    key: "educationLevel",
    type: "select",
    title: "What is your highest level of education?",
    description: "This information helps us understand your background and qualifications.",
    icon: <GraduationCap className="w-8 h-8 text-brand-25" />,
    currentStep: 8,
    nextStep: "yearsExperience",
    prevStep: "experienceLevel",
    options: [
      { value: "high-school", label: "High School" },
      { value: "associate", label: "Associate's Degree" },
      { value: "bachelor", label: "Bachelor's Degree" },
      { value: "master", label: "Master's Degree" },
      { value: "phd", label: "PhD/Doctorate" },
      { value: "other", label: "Other" }
    ]
  },
  {
    key: "yearsExperience",
    type: "select",
    title: "How many years of professional experience do you have?",
    description: "This helps us match you with appropriate roles and interview questions.",
    icon: <Clock className="w-8 h-8 text-brand-25" />,
    currentStep: 9,
    nextStep: "industries",
    prevStep: "educationLevel",
    options: [
      { value: "0-1", label: "0-1 years" },
      { value: "1-3", label: "1-3 years" },
      { value: "3-5", label: "3-5 years" },
      { value: "5-10", label: "5-10 years" },
      { value: "10-15", label: "10-15 years" },
      { value: "15+", label: "15+ years" }
    ]
  },
  {
    key: "industries",
    type: "multi-select",
    title: "What industries do you want to work in?",
    description: "Select all industries that interest you. We'll match you with relevant opportunities.",
    icon: <Building2 className="w-8 h-8 text-brand-25" />,
    currentStep: 10,
    nextStep: "zipCode",
    prevStep: "yearsExperience",
    showSelectAll: true,
    selectAllLabel: "Open to All Industries (Select All)",
    gridCols: 3,
    multiSelectOptions: [
      { value: "aerospace", label: "Aerospace" },
      { value: "ai-ml", label: "AI & Machine Learning" },
      { value: "automotive", label: "Automotive & Transportation" },
      { value: "biotech", label: "Biotechnology" },
      { value: "consulting", label: "Consulting" },
      { value: "consumer-goods", label: "Consumer Goods" },
      { value: "consumer-software", label: "Consumer Software" },
      { value: "crypto-web3", label: "Crypto & Web3" },
      { value: "cybersecurity", label: "Cybersecurity" },
      { value: "data-analytics", label: "Data & Analytics" },
      { value: "defense", label: "Defense" },
      { value: "design", label: "Design" },
      { value: "education", label: "Education" },
      { value: "energy", label: "Energy" },
      { value: "entertainment", label: "Entertainment" },
      { value: "enterprise-software", label: "Enterprise Software" },
      { value: "financial-services", label: "Financial Services" },
      { value: "food-agriculture", label: "Food & Agriculture" },
      { value: "gaming", label: "Gaming" },
      { value: "government", label: "Government & Public Sector" },
      { value: "hardware", label: "Hardware" },
      { value: "healthcare", label: "Healthcare" },
      { value: "industrial", label: "Industrial & Manufacturing" },
      { value: "legal", label: "Legal" },
      { value: "quantitative-finance", label: "Quantitative Finance" },
      { value: "real-estate", label: "Real Estate" }
    ]
  },
  {
    key: "zipCode",
    type: "input",
    title: "What's your ZIP code?",
    description: "This helps us understand your location for job matching.",
    icon: <MapPin className="w-8 h-8 text-brand-25" />,
    currentStep: 11,
    nextStep: "relocation",
    prevStep: "industries",
    placeholder: "e.g., 10001",
    inputType: "text",
    maxLength: 10,
    validation: (answer: string) => /^\d{5}(-\d{4})?$/.test(answer.trim())
  },
  {
    key: "relocation",
    type: "select",
    title: "Are you open to relocation?",
    description: "This helps us match you with opportunities in different locations.",
    icon: <MapPin className="w-8 h-8 text-brand-25" />,
    currentStep: 12,
    nextStep: "workLocation",
    prevStep: "zipCode",
    options: [
      { value: "yes", label: "Yes, I'm open to relocation", color: "green" },
      { value: "no", label: "No, I prefer to stay local", color: "red" },
      { value: "maybe", label: "Maybe, depending on the opportunity", color: "blue" }
    ]
  },
  {
    key: "workLocation",
    type: "multi-select",
    title: "What types of work location do you prefer?",
    description: "Select all work location types you're open to. This helps us match you with roles that fit your work style preferences.",
    icon: <Home className="w-8 h-8 text-brand-25" />,
    currentStep: 13,
    nextStep: "workType",
    prevStep: "relocation",
    gridCols: 1,
    multiSelectOptions: [
      { value: "remote", label: "Remote" },
      { value: "hybrid", label: "Hybrid" },
      { value: "onsite", label: "On-site" }
    ]
  },
  {
    key: "workType",
    type: "multi-select",
    title: "What type of employment are you looking for?",
    description: "Select all employment types you're interested in. This helps us match you with the right type of opportunities.",
    icon: <Briefcase className="w-8 h-8 text-brand-25" />,
    currentStep: 14,
    nextStep: "gender",
    prevStep: "workLocation",
    gridCols: 2,
    multiSelectOptions: [
      { value: "full-time", label: "Full-time" },
      { value: "part-time", label: "Part-time" },
      { value: "contract", label: "Contract" },
      { value: "internship", label: "Internship" },
      { value: "freelance", label: "Freelance" }
    ]
  },
  {
    key: "gender",
    type: "select",
    title: "What is your gender?",
    description: "This information helps us ensure diversity and inclusion in our matching process.",
    icon: <User className="w-8 h-8 text-brand-25" />,
    currentStep: 15,
    nextStep: "sexualOrientation",
    prevStep: "workType",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "non-binary", label: "Non-binary" },
      { value: "prefer-not-to-say", label: "Prefer not to say" }
    ]
  },
  {
    key: "sexualOrientation",
    type: "select",
    title: "How would you describe your sexual orientation?",
    description: "This information helps us ensure diversity and inclusion in our matching process.",
    icon: <Rainbow className="w-8 h-8 text-brand-25" />,
    currentStep: 16,
    nextStep: "transgender",
    prevStep: "gender",
    options: [
      { value: "lgbtqia", label: "LGBTQIA+" },
      { value: "heterosexual", label: "Heterosexual" },
      { value: "self-describe", label: "I prefer to self-describe" },
      { value: "prefer-not-to-provide", label: "I do not wish to provide this information" }
    ]
  },
  {
    key: "transgender",
    type: "select",
    title: "Do you identify as transgender?",
    description: "This information helps us ensure diversity and inclusion in our matching process.",
    icon: <UserCheck className="w-8 h-8 text-brand-25" />,
    currentStep: 17,
    nextStep: "ethnicity",
    prevStep: "sexualOrientation",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "self-describe", label: "I prefer to self-describe" },
      { value: "prefer-not-to-provide", label: "I do not wish to provide this information" }
    ]
  },
  {
    key: "ethnicity",
    type: "select",
    title: "What is your ethnicity?",
    description: "This information helps us ensure diversity and inclusion in our matching process.",
    icon: <Users className="w-8 h-8 text-brand-25" />,
    currentStep: 18,
    nextStep: "disability",
    prevStep: "transgender",
    options: [
      { value: "asian", label: "Asian" },
      { value: "black", label: "Black or African American" },
      { value: "hispanic", label: "Hispanic or Latino" },
      { value: "white", label: "White" },
      { value: "native-american", label: "Native American" },
      { value: "pacific-islander", label: "Pacific Islander" },
      { value: "mixed", label: "Mixed Race" },
      { value: "other", label: "Other" },
      { value: "prefer-not-to-say", label: "Prefer not to say" }
    ]
  },
  {
    key: "disability",
    type: "select",
    title: "Do you identify as having a disability?",
    description: "This information helps us provide appropriate accommodations and ensure equal opportunities.",
    icon: <Heart className="w-8 h-8 text-brand-25" />,
    currentStep: 19,
    nextStep: "sponsorship",
    prevStep: "ethnicity",
    options: [
      { value: "yes", label: "Yes", color: "blue" },
      { value: "no", label: "No", color: "default" },
      { value: "prefer-not-to-say", label: "Prefer not to say", color: "default" }
    ]
  },
  {
    key: "sponsorship",
    type: "select",
    title: "Do you need visa sponsorship?",
    description: "This helps us match you with companies that can provide the necessary sponsorship.",
    icon: <Shield className="w-8 h-8 text-brand-25" />,
    currentStep: 20,
    nextStep: "securityClearance",
    prevStep: "disability",
    options: [
      { value: "yes", label: "Yes, I need sponsorship", color: "blue" },
      { value: "no", label: "No, I don't need sponsorship", color: "default" },
      { value: "maybe", label: "Maybe, depending on the role", color: "blue" }
    ]
  },
  {
    key: "securityClearance",
    type: "select",
    title: "Do you have security clearance?",
    description: "This information helps us match you with government and defense opportunities.",
    icon: <Award className="w-8 h-8 text-brand-25" />,
    currentStep: 21,
    nextStep: "profileLinks",
    prevStep: "sponsorship",
    options: [
      { value: "yes", label: "Yes, I have clearance", color: "green" },
      { value: "no", label: "No, I don't have clearance", color: "default" },
      { value: "expired", label: "I had clearance but it expired", color: "blue" }
    ]
  },
  {
    key: "clearanceLevel",
    type: "select",
    title: "What level of security clearance do you have?",
    description: "This helps us match you with appropriate government and defense roles.",
    icon: <Target className="w-8 h-8 text-brand-25" />,
    currentStep: 22,
    nextStep: "profileLinksWithClearance",
    prevStep: "securityClearance",
    showIf: (data: any) => data.securityClearance === "yes",
    options: [
      { value: "confidential", label: "Confidential" },
      { value: "secret", label: "Secret" },
      { value: "top-secret", label: "Top Secret" },
      { value: "ts-sci", label: "Top Secret/SCI" },
      { value: "other", label: "Other" }
    ]
  },
  {
    key: "profileLinks",
    type: "profile-links",
    title: "Connect Your Profiles",
    description: "Share your professional and personal links with others.",
    icon: <Link className="w-8 h-8 text-brand-25" />,
    currentStep: 23,
    nextStep: "completion",
    prevStep: "securityClearance",
    showIf: (data: any) => data.securityClearance !== "yes"
  },
  {
    key: "profileLinksWithClearance",
    type: "profile-links",
    title: "Connect Your Profiles",
    description: "Share your professional and personal links with others.",
    icon: <Link className="w-8 h-8 text-brand-25" />,
    currentStep: 24,
    nextStep: "completion",
    prevStep: "clearanceLevel",
    showIf: (data: any) => data.securityClearance === "yes"
  }
];

export const TOTAL_STEPS = 25;

