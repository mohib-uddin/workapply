import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import svgPaths from "@/components/ui/icons/job-queue-svg";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";
import { DashboardLayout } from "@/components/layout/DashboardLayout";


// Toggle Component
function Toggle({ isOn, onToggle }: { isOn: boolean; onToggle: () => void }) {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[40.4px] cursor-pointer"
      onClick={onToggle}
    >
      <div className="absolute inset-[0_-3.96%_-28%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 25.6">
          <rect fill={isOn ? "#611DCD" : "#9BA1A5"} height="20" rx="10" width="40.4" />
          <g filter="url(#filter0_d_40_1224)">
            <ellipse cx={isOn ? "30" : "12"} cy="10" fill="#FAF9F6" rx="8" ry="7.6" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.2" id="filter0_d_40_1224" width="24" x={isOn ? "18" : "0"} y="2.4">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.126366 0 0 0 0 0.0147008 0 0 0 0 0.303716 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_40_1224" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_40_1224" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Auto-Apply Banner
function AutoApplyBanner({ isOn, onToggle }: { isOn: boolean; onToggle: () => void }) {
  return (
    <div className="bg-black relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative w-full">
          <div className="flex-none">
            <Toggle isOn={isOn} onToggle={onToggle} />
          </div>
          <div className="basis-0 content-stretch flex flex-col font-['Pavanam',sans-serif] gap-[4px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0">
            <div className="flex flex-col justify-center relative shrink-0 text-[#faf9f6] text-[16px] w-full">
              <p className="leading-[18px]">Auto-Apply is currently {isOn ? 'ON' : 'OFF'}.</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 text-[#9ba1a5] text-[12px] w-full">
              <p className="leading-[14px]">
                {isOn
                  ? "Your applications for these jobs will be submitted in the next 24 hours. You can turn it off here at any time."
                  : "Turn on auto-apply to automatically submit applications for matched jobs."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Job Card in Sidebar
interface JobCardProps {
  job: Job;
  isSelected: boolean;
  onClick: () => void;
}

function JobCardSidebar({ job, isSelected, onClick }: JobCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  return (
    <div
      className={`${isSelected ? 'bg-[#0f0f0f]' : 'bg-[#1a1a1a]'} content-stretch flex flex-col items-start px-[32px] py-[24px] relative shrink-0 w-full cursor-pointer hover:bg-[#0f0f0f] transition-colors`}
      onClick={onClick}
    >
      {isSelected ? (
        <div aria-hidden="true" className="absolute border-[#611dcd] border-[0px_0px_0px_18px] border-solid inset-0 pointer-events-none" />
      ) : (
        <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0px_0px_1px] border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      )}

      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        {/* Title and Match */}
        <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col font-['Pavanam',sans-serif] grow items-start min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#faf9f6]">
            <div className="flex flex-col justify-center relative shrink-0 text-[20px] w-full">
              <p className="leading-[24px]">{job.title}</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-full">
              <p className="leading-[18px]">{job.company}</p>
            </div>
          </div>

          {/* Match Circle */}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[55px]">
              <div className="flex-none rotate-[270deg]">
                <div className="relative size-[55px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.8094 55.0001">
                    <path d={job.matchPath} fill={job.match >= 70 ? "#611DCD" : "#9BA1A5"} />
                  </svg>
                </div>
              </div>
            </div>
            <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam',sans-serif] h-[16px] justify-center leading-[0] ml-[28px] mt-[28px] not-italic relative text-[#faf9f6] text-[16px] text-center translate-x-[-50%] translate-y-[-50%] w-[34px]">
              <p className="leading-[18px]">{job.match}%</p>
            </div>
          </div>
        </div>

        {/* Details and Actions */}
        <div className="content-stretch flex justify-between items-end relative shrink-0 w-full gap-[16px]">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 flex-1 flex-wrap">
            <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
              <div className="relative shrink-0 size-[5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                  <circle cx="2.5" cy="2.5" fill="#FAF9F6" r="2.5" />
                </svg>
              </div>
              <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
                <p className="leading-[18px]">{job.location}</p>
              </div>
            </div>

            <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
              <div className="relative shrink-0 size-[5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                  <circle cx="2.5" cy="2.5" fill="#FAF9F6" r="2.5" />
                </svg>
              </div>
              <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
                <p className="leading-[18px]">{job.postedTime}</p>
              </div>
            </div>

            <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
              <div className="relative shrink-0 size-[5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                  <circle cx="2.5" cy="2.5" fill="#FAF9F6" r="2.5" />
                </svg>
              </div>
              <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
                <p className="leading-[18px]">{job.salary}</p>
              </div>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-[12px] pb-[2px]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
                if (isDisliked) setIsDisliked(false);
              }}
              className={`transition-colors p-[4px] rounded-full hover:bg-white/10 ${isLiked ? 'text-[#611DCD]' : 'text-[#9ba1a5]'}`}
              title="Like job"
            >
              <ThumbsUp size={18} fill={isLiked ? "currentColor" : "none"} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDisliked(!isDisliked);
                if (isLiked) setIsLiked(false);
              }}
              className={`transition-colors p-[4px] rounded-full hover:bg-white/10 ${isDisliked ? 'text-red-500' : 'text-[#9ba1a5]'}`}
              title="Dislike job"
            >
              <ThumbsDown size={18} fill={isDisliked ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// Job Details Panel (Right Side)
function JobDetailsPanel({ job }: { job: Job }) {
  return (
    <div className="px-[40px] lg:px-[80px] py-[40px] lg:py-[60px] relative">
      <div className="max-w-[800px]">
        {/* Company Logo and Title */}
        <div className="mb-[40px]">
          <div className="flex items-center gap-[16px] mb-[24px]">
            <div className="bg-[#faf9f6] rounded-[4px] p-[12px] flex items-center justify-center">
              <p className="font-['Pavanam',sans-serif] text-[20px] text-black leading-[24px]">{job.company}</p>
            </div>
          </div>

          <h1 className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[32px] lg:text-[42px] leading-[1.1] mb-[24px]">
            {job.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-[12px]">
            <div className="bg-[#1a1a1a] border border-[#faf9f6] rounded-[4px] px-[16px] py-[8px]">
              <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] leading-[18px]">{job.location}</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#faf9f6] rounded-[4px] px-[16px] py-[8px]">
              <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] leading-[18px]">{job.postedTime}</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#faf9f6] rounded-[4px] px-[16px] py-[8px]">
              <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] leading-[18px]">{job.salary}</p>
            </div>
            {job.workType && (
              <div className="bg-[#1a1a1a] border border-[#faf9f6] rounded-[4px] px-[16px] py-[8px]">
                <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] leading-[18px]">{job.workType}</p>
              </div>
            )}
            {job.jobType && (
              <div className="bg-[#1a1a1a] border border-[#faf9f6] rounded-[4px] px-[16px] py-[8px]">
                <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] leading-[18px]">{job.jobType}</p>
              </div>
            )}
          </div>
        </div>

        {/* About Us */}
        <div className="mb-[40px]">
          <h2 className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[28px] lg:text-[32px] leading-[1.1] mb-[16px]">
            About Us
          </h2>
          <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] lg:text-[18px] leading-[1.5]">
            {job.aboutUs}
          </p>
        </div>

        {/* Summary */}
        <div className="mb-[40px]">
          <h2 className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[28px] lg:text-[32px] leading-[1.1] mb-[16px]">
            Summary
          </h2>
          <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] lg:text-[18px] leading-[1.5]">
            {job.summary}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="mb-[40px]">
          <h2 className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[28px] lg:text-[32px] leading-[1.1] mb-[16px]">
            Responsibilities
          </h2>
          <ul className="space-y-[12px]">
            {job.responsibilities.map((resp, index) => (
              <li key={index} className="flex items-start gap-[12px]">
                <span className="text-[#faf9f6] mt-[6px]">•</span>
                <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] lg:text-[18px] leading-[1.5] flex-1">
                  {resp}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Qualifications */}
        <div className="mb-[40px]">
          <h2 className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[28px] lg:text-[32px] leading-[1.1] mb-[16px]">
            Qualifications
          </h2>
          <ul className="space-y-[12px]">
            {job.qualifications.map((qual, index) => (
              <li key={index} className="flex items-start gap-[12px]">
                <span className="text-[#faf9f6] mt-[6px]">•</span>
                <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] lg:text-[18px] leading-[1.5] flex-1">
                  {qual}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Job Interface
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  postedTime: string;
  salary: string;
  match: number;
  matchPath: string;
  workType?: string;
  jobType?: string;
  aboutUs: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export function JobQueue({ onNavigate }: { onNavigate?: (page: 'dashboard' | 'queue' | 'applications' | 'profile') => void }) {
  const [autoApplyOn, setAutoApplyOn] = useState(true);
  const [selectedJobId, setSelectedJobId] = useState(1);

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Sr. Frontend Developer',
      company: 'NVIDIA',
      location: 'Austin, TX',
      postedTime: '12h ago',
      salary: '$102K',
      match: 95,
      matchPath: svgPaths.p38a04c80,
      workType: 'Remote',
      jobType: 'Full-time',
      aboutUs: 'Just Health is a health technology company offering a wide range of benefits administration solutions for employers and health plans. This includes Capital Rx, a public benefit corporation that provides full-service pharmacy benefit management (PBM) solutions to self-insured employers, Just Health™, which offers comprehensive health benefit management solutions to large PPAs, and health plans, and Judi®, the industry\'s leading proprietary Enterprise Health Platform. To learn more, visit www.just.health.',
      summary: 'Join our mission to transform pharmacy benefits as a Senior Full-stack Software Developer (Rust). In this role you will assist in leading large projects from design to conclusion, help product managers understand stakeholder requirements, collaborate with developers to establish consistent APIs across our services, and employ best practices for interactions with our API from the frontend.',
      responsibilities: [
        'Lead large projects from design to production.',
        'Work with product managers and designers to refine requirements before implementation.',
        'Demonstrate technical leadership over product features technically to stakeholders.',
        'Represent our features technically to stakeholders.',
        'Interact with operations teams as needed to support project development and production lifecycles.',
        'Build backend applications in Rust on AWS Lambda, API Gateway, SQS, ECS, etc.',
        'Develop code in a stateful web application framework (React/TypeScript).',
        'Collaborate with developers to establish consistent APIs across our services.',
        'Employ best practices for API interactions with frontend web applications.',
        'Implement backend code in a serverless, cloud application environment (AWS/AWS Lambda/ECS).',
        'Make strong architectural choices through careful evaluation and prior experience.',
        'Work in an Agile/Scrum environment to continually deliver features and updates to our clients.',
        'Responsible for adhering to the Capital Rx Code of Conduct.'
      ],
      qualifications: [
        '5+ years of related job experience with a broad range of technical skills.',
        'Desire to work in a flexible technology ecosystem.'
      ]
    },
    {
      id: 2,
      title: 'Sr. Principal Engineer',
      company: 'NVIDIA',
      location: 'Austin, TX',
      postedTime: '12h ago',
      salary: '$102K',
      match: 74,
      matchPath: svgPaths.p3d0e500,
      workType: 'Remote',
      jobType: 'Full-time',
      aboutUs: 'NVIDIA is the world leader in visual computing. We are passionate about four markets: Gaming, Automotive, Enterprise Graphics and HPC/Cloud Datacenters; in addition to our traditional OEM business.',
      summary: 'We are looking for a Senior Principal Engineer to join our graphics driver team. In this role, you will be responsible for designing and implementing new features, optimizing performance, and ensuring the quality of our graphics drivers.',
      responsibilities: [
        'Design and implement new graphics driver features',
        'Optimize driver performance and efficiency',
        'Debug and resolve complex technical issues',
        'Collaborate with hardware teams',
        'Mentor junior engineers'
      ],
      qualifications: [
        '10+ years of experience in graphics driver development',
        'Strong C/C++ programming skills',
        'Deep understanding of GPU architecture'
      ]
    },
    {
      id: 3,
      title: 'Product Designer',
      company: 'TechCorp',
      location: 'Austin, TX',
      postedTime: '12h ago',
      salary: '$102K',
      match: 86,
      matchPath: svgPaths.p2996e700,
      aboutUs: 'TechCorp is a leading technology company focused on creating innovative solutions for modern businesses.',
      summary: 'We are seeking a talented Product Designer to help shape the future of our products. You will work closely with product managers and engineers to create beautiful and functional user experiences.',
      responsibilities: [
        'Design user interfaces and experiences',
        'Create wireframes and prototypes',
        'Conduct user research',
        'Collaborate with cross-functional teams'
      ],
      qualifications: [
        '3+ years of product design experience',
        'Proficiency in Figma and design tools',
        'Strong portfolio demonstrating design skills'
      ]
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Kinetix',
      location: 'Austin, TX',
      postedTime: '12h ago',
      salary: '$102K',
      match: 89,
      matchPath: svgPaths.p10ec5000,
      aboutUs: 'Kinetix is a data analytics company helping businesses make data-driven decisions.',
      summary: 'Join our data science team to help analyze and interpret complex data sets. You will build predictive models and provide insights that drive business strategy.',
      responsibilities: [
        'Develop machine learning models',
        'Analyze large datasets',
        'Present findings to stakeholders',
        'Collaborate with engineering teams'
      ],
      qualifications: [
        '5+ years of data science experience',
        'Strong Python and SQL skills',
        'Experience with ML frameworks'
      ]
    },
    {
      id: 5,
      title: 'Product Designer',
      company: 'Revature',
      location: 'Austin, TX',
      postedTime: '12h ago',
      salary: '$102K',
      match: 78,
      matchPath: svgPaths.p241ef740,
      aboutUs: 'Revature is a technology talent development company that builds custom training programs.',
      summary: 'We are looking for a creative Product Designer to join our team and help design engaging learning experiences.',
      responsibilities: [
        'Design educational interfaces',
        'Create engaging user experiences',
        'Work with instructional designers',
        'Conduct usability testing'
      ],
      qualifications: [
        '3+ years of UX/UI design experience',
        'Experience in educational technology',
        'Strong visual design skills'
      ]
    },
    {
      id: 6,
      title: 'Sr. Principal Engineer',
      company: 'NVIDIA',
      location: 'Austin, TX',
      postedTime: '12h ago',
      salary: '$102K',
      match: 63,
      matchPath: svgPaths.p14407100,
      workType: 'Remote',
      jobType: 'Full-time',
      aboutUs: 'NVIDIA is the world leader in visual computing.',
      summary: 'Join our team as a Senior Principal Engineer focusing on AI and machine learning infrastructure.',
      responsibilities: [
        'Lead AI infrastructure projects',
        'Design scalable ML systems',
        'Mentor engineering teams',
        'Drive technical innovation'
      ],
      qualifications: [
        '12+ years of software engineering experience',
        'Expert in distributed systems',
        'Strong leadership skills'
      ]
    }
  ];

  const selectedJob = jobs.find(j => j.id === selectedJobId) || jobs[0];

  return (
    <DashboardLayout currentTab="queue" onNavigate={onNavigate} showBackground={false} contentScrollable={false}>
      <div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden relative">
        {/* Left Sidebar - Job List */}
        <div className="w-full lg:w-[384px] bg-[#0f0f0f] border-r border-[#1a1a1a] flex flex-col shrink-0 h-[50vh] lg:h-full overflow-hidden">
          {/* Auto-Apply Banner */}
          <div className="p-[16px] border-b border-[#1a1a1a] shrink-0">
            <AutoApplyBanner isOn={autoApplyOn} onToggle={() => setAutoApplyOn(!autoApplyOn)} />
          </div>

          {/* Job Cards - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            {jobs.map(job => (
              <JobCardSidebar
                key={job.id}
                job={job}
                isSelected={selectedJobId === job.id}
                onClick={() => setSelectedJobId(job.id)}
              />
            ))}
          </div>
        </div>

        {/* Right Panel - Job Details - Scrollable */}
        <div className="flex-1 relative h-full overflow-hidden">
          <BackgroundDecor />
          <div className="h-full overflow-y-auto relative z-10">
            <JobDetailsPanel job={selectedJob} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}