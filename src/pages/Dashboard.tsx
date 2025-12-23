import React from 'react';
import svgPaths from "@/components/ui/icons/dashboard-svg";
import imgLogo from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";

// Purple Scatter Background
function ScatterBackground() {
  return (
    <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[1474px] h-[1457px] pointer-events-none opacity-40 max-w-[150vw]">
      <svg className="block w-full h-full" viewBox="0 0 1474 1457" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={svgPaths.p3df66900} fill="#8149E4" fillOpacity="0.4" />
      </svg>
    </div>
  );
}

// Match Circle Component
function MatchCircle({ percent, pathData }: { percent: string; pathData: string }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[70px]">
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[70px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
              <path d={pathData} fill="#9BA1A5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam',sans-serif] justify-center ml-[35px] mt-[35px] not-italic relative text-[#faf9f6] text-[20px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[24px]">{percent}%</p>
      </div>
    </div>
  );
}

// Detail Frame Component
function DetailFrame({ text }: { text: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <p className="font-['Pavanam',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#faf9f6] text-[20px]">{text}</p>
        </div>
      </div>
    </div>
  );
}

// Arrow Icon
function ArrowTopLeft() {
  return (
    <div className="relative size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d={svgPaths.p2dcba880} fill="#FAF9F6" />
      </svg>
    </div>
  );
}

// Job Card Component
interface JobCardProps {
  match: string;
  matchPath: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  postedTime: string;
  variant?: 'light' | 'dark';
}

function JobCard({
  match,
  matchPath,
  title,
  company,
  location,
  salary,
  postedTime,
  variant = 'dark'
}: JobCardProps) {
  const bgColor = variant === 'light' ? 'bg-[#f4f4f4]' : 'bg-[#1a1a1a]';

  return (
    <div className={`${bgColor} content-stretch flex flex-col items-start p-[32px] relative rounded-[4px] shrink-0 w-full max-w-[342px]`}>
      <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
        <MatchCircle percent={match} pathData={matchPath} />
        <div className="content-stretch flex flex-col font-['Pavanam',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#faf9f6]">
          <p className="leading-[28px] relative shrink-0 text-[28px]">{title}</p>
          <p className="leading-[24px] min-w-full relative shrink-0 text-[20px] w-[min-content]">{company}</p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <DetailFrame text={location} />
          <DetailFrame text={salary} />
          <DetailFrame text={postedTime} />
        </div>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <p className="font-['Pavanam',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">View Details</p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <ArrowTopLeft />
            </div>
          </div>
        </div>
        <div className="bg-[#faf9f6] relative rounded-[35px] shrink-0 w-full">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative w-full">
              <p className="font-['Pavanam',sans-serif] leading-[28px] not-italic relative shrink-0 text-[28px] text-black text-nowrap">Apply now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Navigation Bar
function TopNavBar({ currentTab, onTabChange, onProfileClick }: { currentTab: 'dashboard' | 'queue' | 'applications'; onTabChange: (tab: 'dashboard' | 'queue' | 'applications') => void; onProfileClick: () => void }) {
  return (
    <div className="bg-[#0f0f0f] w-full flex h-[56px] items-center justify-between px-[40px] lg:px-[80px] py-0 border-b border-[#1a1a1a]">
      {/* Logo */}
      <div className="content-stretch flex gap-[10px] h-full items-center p-[10px] relative shrink-0">
        <div className="relative shrink-0 size-[40px]">
          <img alt="WorkApply Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
        </div>
        <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
          <p className="leading-[18px]">WorkApply</p>
        </div>
      </div>

      {/* Menu + Icons */}
      <div className="content-stretch flex gap-[60px] lg:gap-[100px] h-full items-center justify-end relative shrink-0">
        {/* Menu Options */}
        <div className="hidden md:flex content-stretch gap-[40px] h-full items-center relative shrink-0">
          <div
            className="content-stretch flex gap-[4px] h-full items-center justify-center relative shrink-0 cursor-pointer"
            onClick={() => onTabChange('dashboard')}
          >
            {currentTab === 'dashboard' && (
              <div aria-hidden="true" className="absolute border-[#611dcd] border-[0px_0px_4px] border-solid inset-0 pointer-events-none" />
            )}
            <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
              <p className="leading-[18px]">Dashboard</p>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[4px] h-full items-center justify-center relative shrink-0 cursor-pointer"
            onClick={() => onTabChange('queue')}
          >
            {currentTab === 'queue' && (
              <div aria-hidden="true" className="absolute border-[#611dcd] border-[0px_0px_4px] border-solid inset-0 pointer-events-none" />
            )}
            <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
              <p className="leading-[18px]">Job Queue</p>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[4px] h-full items-center justify-center relative shrink-0 cursor-pointer"
            onClick={() => onTabChange('applications')}
          >
            {currentTab === 'applications' && (
              <div aria-hidden="true" className="absolute border-[#611dcd] border-[0px_0px_4px] border-solid inset-0 pointer-events-none" />
            )}
            <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
              <p className="leading-[18px]">Applications</p>
            </div>
          </div>
        </div>

        {/* Notif + Profile */}
        <div className="content-stretch flex gap-[36px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[28px] cursor-pointer">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path d={svgPaths.p3d8d6500} fill="#FAF9F6" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[28px] cursor-pointer" onClick={onProfileClick}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path d={svgPaths.pd664880} fill="#FAF9F6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Dashboard({ onNavigate }: { onNavigate?: (page: 'dashboard' | 'queue' | 'applications' | 'profile') => void }) {
  const jobs = [
    {
      match: '74',
      matchPath: svgPaths.p218a8200,
      title: 'Senior Software Engineer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      salary: '$98K-$100K',
      postedTime: '2 days ago',
      variant: 'dark' as const
    },
    {
      match: '94',
      matchPath: svgPaths.p2462a280,
      title: 'Web Design Engineer',
      company: 'CorpTech',
      location: 'Bellevue, WA',
      salary: '$98K-$100K',
      postedTime: '24h ago',
      variant: 'dark' as const
    },
    {
      match: '74',
      matchPath: svgPaths.p218a8200,
      title: 'Software Engineer',
      company: 'Rise Tech',
      location: 'Santa Clara, CA',
      salary: '$98K-$100K',
      postedTime: '2 days ago',
      variant: 'dark' as const
    }
  ];

  const handleTabChange = (tab: 'dashboard' | 'queue' | 'applications') => {
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  const handleProfileClick = () => {
    if (onNavigate) {
      onNavigate('profile');
    }
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Background */}
      <ScatterBackground />

      {/* Nav Bar */}
      <TopNavBar currentTab="dashboard" onTabChange={handleTabChange} onProfileClick={handleProfileClick} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-[60px] lg:pt-[100px] xl:pt-[140px] pb-[60px] relative z-10">

        {/* Title Section */}
        <div className="w-full max-w-[90%] lg:max-w-[1344px] mb-[60px] lg:mb-[100px] text-center">
          <h1 className="font-['Pavanam',sans-serif] text-white text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.0] mb-[12px] lg:mb-[20px]">
            Welcome To Your Job Search Journey!
          </h1>
          <p className="font-['Pavanam',sans-serif] text-white text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.0]">
            We've found you some great opportunities to explore
          </p>
        </div>

        {/* Job Cards */}
        <div className="w-full max-w-[1400px] flex flex-col md:flex-row gap-[30px] lg:gap-[60px] xl:gap-[133px] justify-center items-center md:items-stretch">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              match={job.match}
              matchPath={job.matchPath}
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
              postedTime={job.postedTime}
              variant={job.variant}
            />
          ))}
        </div>

      </div>
    </div>
  );
}