import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import svgPaths from "@/components/ui/icons/dashboard-svg";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import UserService from '@/services/user.service';
import { toast } from 'sonner';

// Match Circle Component
function MatchCircle({ percent, pathData }: { percent: string; pathData: string }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[60px]">
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[60px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
              <path d={pathData} fill="#9BA1A5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam',sans-serif] justify-center ml-[30px] mt-[30px] not-italic relative text-[#faf9f6] text-[18px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[20px]">{percent}%</p>
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
        <div className="content-stretch flex items-center px-[12px] py-0 relative w-full">
          <p className="font-['Pavanam',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#faf9f6] text-[16px] sm:text-[18px]">{text}</p>
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
  const navigate = useNavigate();
  const { useFetchCurrentSubscription } = UserService();
  const { data: subscription } = useFetchCurrentSubscription();

  const handleApply = () => {
    if (!subscription) {
      navigate('/subscriptions');
    } else {
      // Original apply logic (not specified in request, but presumably exists or will be added)
      console.log('Applying to job...');
    }
  };

  return (
    <div className={`${bgColor} content-stretch flex flex-col items-start p-[24px] lg:p-[32px] relative rounded-[4px] shrink-0 w-full max-w-[320px] lg:max-w-[342px]`}>
      <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex flex-col gap-[20px] lg:gap-[24px] items-start relative shrink-0 w-full">
        <MatchCircle percent={match} pathData={matchPath} />
        <div className="content-stretch flex flex-col font-['Pavanam',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#faf9f6]">
          <p className="leading-tight relative shrink-0 text-[22px] lg:text-[28px]">{title}</p>
          <p className="leading-tight min-w-full relative shrink-0 text-[18px] lg:text-[20px] w-[min-content]">{company}</p>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] lg:gap-[12px] items-start relative shrink-0 w-full">
          <p className="font-['Pavanam',sans-serif] leading-tight text-[#faf9f6] text-[16px] lg:text-[18px] opacity-70 mb-1">Job Details</p>
          <DetailFrame text={location} />
          <DetailFrame text={salary} />
          <DetailFrame text={postedTime} />
        </div>
        <motion.button
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer group"
        >
          <p className="font-['Pavanam',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] lg:text-[20px] text-center text-nowrap text-white group-hover:text-white/80 transition-colors">View Details</p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] group-hover:translate-x-1 transition-transform">
              <ArrowTopLeft />
            </div>
          </div>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleApply}
          className="bg-[#faf9f6] relative rounded-[35px] shrink-0 w-full cursor-pointer hover:bg-white transition-all border-none py-[10px] lg:py-[12px] flex items-center justify-center gap-[8px]"
        >
          <p className="font-['Pavanam',sans-serif] leading-tight not-italic relative shrink-0 text-[20px] lg:text-[24px] text-black text-nowrap font-medium">Apply now</p>
          <div className="relative shrink-0 size-[14px] lg:size-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#1D1B20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.button>
      </div>
    </div>
  );
}

export function Dashboard({ onNavigate }: { onNavigate?: (page: 'dashboard' | 'queue' | 'applications' | 'profile') => void }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const checkoutStatus = searchParams.get('checkout');
    if (checkoutStatus === 'success') {
      toast.success('Subscription activated! You can now start applying to jobs.');
      // Clear the param
      navigate('/dashboard', { replace: true });
    }
  }, [searchParams, navigate]);

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

  return (
    <DashboardLayout currentTab="dashboard" onNavigate={onNavigate}>
      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-[30px] lg:pt-[50px] xl:pt-[80px] pb-[40px] relative z-10 overflow-y-auto">
        {/* Title Section */}
        <div className="w-full max-w-[90%] lg:max-w-[1344px] mb-[30px] lg:mb-[50px]">
          <h1 className="font-['Pavanam',sans-serif] text-white text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[52px] leading-[1.1] mb-[8px] lg:mb-[16px] text-center">
            Welcome To Your Job Search Journey!
          </h1>
          <p className="font-['Pavanam',sans-serif] text-white text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] leading-[1.2] text-center opacity-80">
            We've found you some great opportunities to explore
          </p>
        </div>

        {/* Job Cards */}
        <div className="w-full max-w-[1400px] flex flex-col md:flex-row gap-[24px] lg:gap-[40px] xl:gap-[80px] justify-center items-center md:items-stretch pb-6">
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
    </DashboardLayout>
  );
}