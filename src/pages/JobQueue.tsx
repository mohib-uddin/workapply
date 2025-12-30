import React, { useState, useEffect } from 'react';
import svgPaths from "@/components/ui/icons/job-queue-svg";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import JobService, { RecommendedJob } from '@/services/job.service';
import { formatDistanceToNow } from 'date-fns';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  isLiked: boolean;
  isDisliked: boolean;
  onLike: (e: React.MouseEvent) => void;
  onDislike: (e: React.MouseEvent) => void;
}

function JobCardSidebar({ job, isSelected, onClick, isLiked, isDisliked, onLike, onDislike }: JobCardProps) {
  return (
    <div
      className={`${isSelected ? 'bg-[#0f0f0f]' : 'bg-[#1a1a1a]'} flex flex-col items-start px-6 py-5 lg:px-8 lg:py-6 relative shrink-0 w-full cursor-pointer hover:bg-[#0f0f0f] transition-all duration-200 overflow-hidden group border-b border-[#faf9f6]/10`}
      onClick={onClick}
    >
      {isSelected && (
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#611dcd] z-10" />
      )}

      <div className="flex flex-col gap-3 items-start relative w-full min-w-0">
        {/* Title and Match Row */}
        <div className="flex items-start justify-between gap-3 w-full min-w-0">
          <div className="flex flex-col gap-0.5 grow min-w-0 font-['Pavanam',sans-serif] text-[#faf9f6]">
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <p className="text-[17px] lg:text-[19px] font-semibold leading-tight truncate cursor-help">
                    {job.title}
                  </p>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#faf9f6]/30 text-[#faf9f6] px-4 py-2 rounded-xl shadow-2xl z-[100] max-w-[280px]"
                >
                  <p className="font-['Pavanam',sans-serif] text-[14px]">{job.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <p className="text-[13px] lg:text-[15px] opacity-70 truncate cursor-help">
                    {job.company}
                  </p>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#faf9f6]/30 text-[#faf9f6] px-4 py-2 rounded-xl shadow-2xl z-[100] max-w-[280px]"
                >
                  <p className="font-['Pavanam',sans-serif] text-[14px]">{job.company}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Match Circle */}
          <div className="relative flex-none size-12 lg:size-14">
            <svg className="size-full rotate-[-90deg]" viewBox="0 0 55 55">
              <path d={job.matchPath} fill={job.match >= 70 ? "#611DCD" : "#9BA1A5"} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-['Pavanam',sans-serif] text-[14px] lg:text-[16px] text-[#faf9f6]">
              {job.match}%
            </div>
          </div>
        </div>

        {/* Combined Metadata & Icons Row */}
        <div className="flex items-center justify-between w-full min-w-0 gap-3 pt-1">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <DetailBadge text={job.location} className="flex-1" />
            <DetailBadge text={job.salary} className="shrink-0" />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onDislike}
                    className={`flex items-center justify-center size-8 rounded-full transition-all duration-300 ${isDisliked
                      ? 'bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444]/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                      : 'bg-[#1a1a1a] text-[#9ba1a5] hover:bg-[#252525] hover:text-[#faf9f6] border border-[#faf9f6]/5'
                      }`}
                  >
                    <ThumbsDown className={`size-3.5 ${isDisliked ? 'fill-current' : ''}`} />
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-[#0a0a0a] border-[#faf9f6]/20">
                  <p className="text-[12px] font-['Pavanam',sans-serif]">Don't apply for this job</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onLike}
                    className={`flex items-center justify-center size-8 rounded-full transition-all duration-300 ${isLiked
                      ? 'bg-[#611dcd]/20 text-[#611dcd] border border-[#611dcd]/30 shadow-[0_0_15px_rgba(97,29,205,0.2)]'
                      : 'bg-[#1a1a1a] text-[#9ba1a5] hover:bg-[#252525] hover:text-[#611dcd] border border-[#faf9f6]/5'
                      }`}
                  >
                    <ThumbsUp className={`size-3.5 ${isLiked ? 'fill-current' : ''}`} />
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-[#0a0a0a] border-[#faf9f6]/20">
                  <p className="text-[12px] font-['Pavanam',sans-serif]">Save as favorite</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailBadge({ text, className = "" }: { text: string; className?: string }) {
  if (!text) return null;
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <div className={`flex gap-2 items-center min-w-0 max-w-full cursor-help ${className}`}>
            <div className="size-1 rounded-full bg-[#faf9f6]/60 shrink-0" />
            <p className="font-['Pavanam',sans-serif] text-[#faf9f6]/80 text-[13px] lg:text-[14px] truncate">
              {text}
            </p>
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#faf9f6]/30 text-[#faf9f6] px-3 py-1.5 rounded-lg shadow-xl z-[100]"
        >
          <p className="font-['Pavanam',sans-serif] text-[13px]">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
              <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[14px] lg:text-[16px] leading-[18px]">{job.location}</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#faf9f6] rounded-[4px] px-[16px] py-[8px]">
              <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[14px] lg:text-[16px] leading-[18px]">{job.postedTime}</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#faf9f6] rounded-[4px] px-[16px] py-[8px]">
              <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[14px] lg:text-[16px] leading-[18px]">{job.salary}</p>
            </div>
            {job.workType && (
              <div className="bg-[#1a1a1a] border border-[#faf9f6] rounded-[4px] px-[16px] py-[8px]">
                <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[14px] lg:text-[16px] leading-[18px]">{job.workType}</p>
              </div>
            )}
            {job.jobType && (
              <div className="bg-[#1a1a1a] border border-[#faf9f6] rounded-[4px] px-[16px] py-[8px]">
                <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[14px] lg:text-[16px] leading-[18px]">{job.jobType}</p>
              </div>
            )}
          </div>
        </div>

        {/* Live HTML Description */}
        <div className="job-description-content">
          <style dangerouslySetInnerHTML={{
            __html: `
            .job-description-content {
              color: #faf9f6;
              font-family: 'Pavanam', sans-serif;
              line-height: 1.6;
            }
            .job-description-content h1, 
            .job-description-content h2, 
            .job-description-content h3 {
              color: #faf9f6;
              margin-top: 2rem;
              margin-bottom: 1rem;
              line-height: 1.2;
            }
            .job-description-content h1 { font-size: 2.5rem; }
            .job-description-content h2 { font-size: 2rem; }
            .job-description-content h3 { font-size: 1.5rem; }
            .job-description-content p {
              margin-bottom: 1.25rem;
              font-size: 1.125rem;
              opacity: 0.9;
            }
            .job-description-content ul, 
            .job-description-content ol {
              margin-bottom: 1.5rem;
              padding-left: 1.5rem;
            }
            .job-description-content li {
              margin-bottom: 0.5rem;
              position: relative;
              font-size: 1.125rem;
              opacity: 0.9;
            }
            .job-description-content ul li::before {
              content: "•";
              position: absolute;
              left: -1rem;
              color: #611dcd;
            }
            .job-description-content strong {
              color: #fff;
              font-weight: 600;
            }
          `}} />
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
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
  description: string;
}

const formatSalary = (pay: RecommendedJob['job']['pay']) => {
  if (!pay || (!pay.min && !pay.max)) return 'Salary not specified';
  const formatAmount = (amount: number | null) => {
    if (amount === null) return '';
    return amount >= 1000 ? `$${Math.round(amount / 1000)}K` : `$${amount}`;
  };
  if (pay.min && pay.max) return `${formatAmount(pay.min)}-${formatAmount(pay.max)}`;
  return formatAmount(pay.min || pay.max);
};

const getMatchPath = (score: number) => {
  if (score >= 0.9) return svgPaths.p38a04c80;
  if (score >= 0.8) return svgPaths.p2996e700;
  if (score >= 0.7) return svgPaths.p10ec5000;
  if (score >= 0.6) return svgPaths.p241ef740;
  return svgPaths.p3d0e500;
};

export function JobQueue({ onNavigate }: { onNavigate?: (page: 'dashboard' | 'queue' | 'applications' | 'profile') => void }) {
  const [autoApplyOn, setAutoApplyOn] = useState(true);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [likedJobs, setLikedJobs] = useState<Set<number>>(new Set());
  const [dislikedJobs, setDislikedJobs] = useState<Set<number>>(new Set());

  const { useFetchRecommendedJobs } = JobService();
  const { data: recommendedJobsData, isLoading } = useFetchRecommendedJobs(50);

  const handleLike = (e: React.MouseEvent, jobId: number) => {
    e.stopPropagation();
    setLikedJobs(prev => {
      const next = new Set(prev);
      if (next.has(jobId)) {
        next.delete(jobId);
      } else {
        next.add(jobId);
        // Remove from dislike if liked
        const nextDisliked = new Set(dislikedJobs);
        nextDisliked.delete(jobId);
        setDislikedJobs(nextDisliked);
      }
      return next;
    });
  };

  const handleDislike = (e: React.MouseEvent, jobId: number) => {
    e.stopPropagation();
    setDislikedJobs(prev => {
      const next = new Set(prev);
      if (next.has(jobId)) {
        next.delete(jobId);
      } else {
        next.add(jobId);
        // Remove from like if disliked
        const nextLiked = new Set(likedJobs);
        nextLiked.delete(jobId);
        setLikedJobs(nextLiked);
      }
      return next;
    });
  };

  const jobs: Job[] = (recommendedJobsData?.data || []).map(item => ({
    id: item.id,
    title: item.job.title,
    company: item.job.company,
    location: item.job.location,
    postedTime: formatDistanceToNow(new Date(item.job.postedAt), { addSuffix: true }),
    salary: formatSalary(item.job.pay),
    match: Math.round(item.score * 100),
    matchPath: getMatchPath(item.score),
    description: item.job.description,
    workType: item.job.position,
    jobType: item.job.platform,
  }));

  useEffect(() => {
    if (jobs.length > 0 && selectedJobId === null) {
      setSelectedJobId(jobs[0].id);
    }
  }, [jobs, selectedJobId]);

  const selectedJob = jobs.find(j => j.id === selectedJobId) || jobs[0];

  return (
    <DashboardLayout currentTab="queue" onNavigate={onNavigate} showBackground={false} contentScrollable={false}>
      <div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden relative">
        {/* Left Sidebar - Job List */}
        <div className="w-full lg:w-[384px] bg-[#0f0f0f] border-r border-[#1a1a1a] flex flex-col shrink-0 h-[40vh] lg:h-full overflow-hidden">
          {/* Auto-Apply Banner */}
          <div className="p-[16px] border-b border-[#1a1a1a] shrink-0">
            <AutoApplyBanner isOn={autoApplyOn} onToggle={() => setAutoApplyOn(!autoApplyOn)} />
          </div>

          {/* Job Cards - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            {isLoading ? (
              <div className="p-8 text-center text-[#faf9f6] opacity-60 font-['Pavanam',sans-serif]">
                Loading opportunities...
              </div>
            ) : jobs.length > 0 ? (
              jobs.map(job => (
                <JobCardSidebar
                  key={job.id}
                  job={job}
                  isSelected={selectedJobId === job.id}
                  onClick={() => setSelectedJobId(job.id)}
                  isLiked={likedJobs.has(job.id)}
                  isDisliked={dislikedJobs.has(job.id)}
                  onLike={(e) => handleLike(e, job.id)}
                  onDislike={(e) => handleDislike(e, job.id)}
                />
              ))
            ) : (
              <div className="p-8 text-center text-[#faf9f6] opacity-60 font-['Pavanam',sans-serif]">
                No recommended jobs found.
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Job Details - Scrollable */}
        <div className="flex-1 relative h-full overflow-hidden">
          <BackgroundDecor />
          <div className="h-full overflow-y-auto relative z-10">
            {selectedJob ? (
              <JobDetailsPanel job={selectedJob} />
            ) : !isLoading && (
              <div className="h-full flex items-center justify-center text-[#faf9f6] opacity-60 font-['Pavanam',sans-serif]">
                Select a job to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}