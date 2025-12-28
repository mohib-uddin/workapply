
export const LOCATION_FILTERS = [];
export const API_BASEURL = import.meta.env.VITE_API_BASEURL;

// Public endpoints that don't require authentication
export const PUBLIC_ENDPOINTS = [
  "/api/v1/users/register",
  "/api/v1/auth",
  "/api/v1/users/password/reset/trigger",
  "/api/v1/users/password/reset",
  "/api/v1/users/email/verify",
];

export const LANGUAGES = [
  "English",
  "French",
  "German",
  "Spanish",
  "Portuguese",
  "Russian",
  "Japanese",
  "Korean",
  "Chinese",
  "Arabic",
  "Italian",
  "Dutch",
  "Swedish",
  "Norwegian",
  "Danish",
  "Finnish",
  "Greek",
  "Turkish",
  "Hindi",
  "Bengali",
  "Thai",
  "Vietnamese",
  "Indonesian",
  "Malay",
  "Filipino",
  "Swahili",
  "Hebrew",
  "Persian",
  "Urdu",
  "Czech",
  "Polish",
  "Hungarian",
  "Romanian",
  "Slovak",
  "Croatian",
  "Bulgarian",
  "Serbian",
  "Slovenian",
  "Lithuanian",
  "Latvian",
  "Estonian",
  "Macedonian",
  "Albanian",
  "Maltese",
  "Icelandic",
  "Gujarati",
  "Tamil",
  "Telugu",
  "Kannada",
  "Marathi",
  "Punjabi",
  "Sinhala",
  "Nepali",
  "Burmese",
  "Khmer",
  "Lao",
].map((language) => ({ label: language, value: language }));

export const VERIFICATION_REDIRECT_URI = "http://localhost:3000/jobs";

export const JOB_TITLES = [
  "Software Engineer",
  "Data Scientist",
  "Product Manager",
  "UX Designer",
  "Marketing Manager",
  "Sales Executive",
  "Business Analyst",
  "Financial Analyst",
  "Operations Manager",
  "Human Resources Manager",
  "Project Manager",
  "Accountant",
  "Graphic Designer",
  "Web Developer",
  "Mobile Developer",
  "DevOps Engineer",
  "IT Support Specialist",
  "Customer Success Manager",
  "Content Strategist",
  "Social Media Manager",
  "Recruiter",
  "Quality Assurance Engineer",
  "Legal Counsel",
  "Chief Executive Officer",
  "Chief Financial Officer",
  "Chief Technology Officer",
  "Chief Operating Officer",
  "Chief Marketing Officer",
  "Data Analyst",
  "Network Engineer",
  "Systems Administrator",
  "Database Administrator",
  "Information Security Analyst",
  "Machine Learning Engineer",
  "Cloud Architect",
  "Cybersecurity Specialist",
  "Technical Writer",
  "SEO Specialist",
  "Digital Marketing Specialist",
  "Public Relations Specialist",
];

export const dollarOptions = [
  { amount: 10, label: null },
  { amount: 25, label: "Popular" },
  { amount: 50, label: null },
  { amount: 100, label: null },
];
export const MIN_AMOUNT = 5;


export const ReportingPages = [
  {
    label: "Interview Summary",
    href: "/interview-summary",
    dependsOn: null, // Always included, no specific data needed
  },
  {
    label: "Essential Skills",
    href: "/essential-skills",
    dependsOn: "essentialSkillsAssessment",
  },
  {
    label: "Technical Skills",
    href: "/technical-skills",
    dependsOn: "skillsAssessment",
  },
  {
    label: "Coding Report",
    href: "/coding-report",
    dependsOn: "codingAssessment",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
    dependsOn: "roadMapSkillsAssessment",
  },
  {
    label: "Voice Analysis",
    href: "/voice-analysis",
    dependsOn: "voiceAssessment",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    dependsOn: null, // for example, always available
  },
];