import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "@/components/ui/icons/user-profile-svg";
import svgPathsDashboard from "@/components/ui/icons/dashboard-svg";
import svgPathsSubscription from "@/components/ui/icons/subscription-svg";
import imgProfile from "figma:asset/0ac032a0fe674838ee325c4730b1ba299bfc7fcd.png";
import imgWaveCircleWhite from "figma:asset/85ef7a7284b26057657fc5cbaeefab0d1429915e.png";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import SubscriptionService from '@/services/subscription.service';
import UserService from '@/services/user.service';
import { useFetchResume } from '@/services/resume-upload.service';
import { Spinner } from '@/components/ui/Spinner';

// Left Sidebar - Profile Section
function LeftSidebar() {
  const navigate = useNavigate();
  const { useFetchCurrentUser, useFetchUserOnboardingData } = UserService();
  const { data: user } = useFetchCurrentUser();
  const { data: onboarding } = useFetchUserOnboardingData();
  const { data: resume } = useFetchResume();

  const primaryJobTitle = onboarding?.jobTitle?.[0] || 'Member';
  const location = onboarding?.zipCode ? `${onboarding.zipCode}` : 'United States';

  // Format last uploaded date
  const lastUpload = resume?.data?.[0]?.uploadedAt
    ? new Date(resume.data[0].uploadedAt).toLocaleString('en-US', {
      month: 'numeric', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: 'numeric', hour12: true
    }) + ' ' + (new Intl.DateTimeFormat().resolvedOptions().timeZone === 'America/Los_Angeles' ? 'PDT' : '')
    : 'No resume uploaded';

  const handlePreview = () => {
    if (resume?.data?.[0]?.fileUrl) {
      window.open(resume.data[0].fileUrl, '_blank');
    }
  };

  const handleUploadClick = () => {
    navigate('/upload');
  };

  return (
    <div className="w-full lg:w-[311px] bg-[#0f0f0f] flex flex-col relative overflow-y-auto shrink-0 border-r border-[#1a1a1a]">
      <BackgroundDecor />

      <div className="relative z-10 p-[20px] lg:p-[24px] flex flex-col gap-[24px]">
        {/* Profile Card */}
        <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[17px] items-center pb-[20px] pt-[50px] px-[12px] relative w-full">
              {/* Photo and Name */}
              <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full">
                <div className="relative shrink-0 size-[136px]">
                  <img alt="Profile" className="block max-w-none size-full rounded-full" src={imgProfile} />
                </div>
                <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[28px] text-center">
                  <p className="leading-[28px]">{user?.name || 'User'}</p>
                </div>
              </div>

              {/* Profile Details */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-[221px]">
                {/* Basic Info */}
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  {/* Job Title */}
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p2faa1100} fill="#FAF9F6" />
                      </svg>
                    </div>
                    <div className="basis-0 flex flex-col font-['Pavanam',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
                      <p className="leading-[18px]">{primaryJobTitle}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p1e747100} fill="#FAF9F6" />
                      </svg>
                    </div>
                    <div className="basis-0 flex flex-col font-['Pavanam',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
                      <p className="leading-[18px]">{user?.email || ''}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <path d={svgPaths.pfd825f0} fill="#FAF9F6" />
                      </svg>
                    </div>
                    <div className="basis-0 flex flex-col font-['Pavanam',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
                      <p className="leading-[18px]">{location}</p>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  {/* LinkedIn */}
                  {onboarding?.profileLinks?.map((link: any, idx: number) => (
                    <div key={idx} className="content-stretch flex gap-[10px] items-center justify-center leading-[0] not-italic relative shrink-0 w-full">
                      <div className="flex flex-col font-['Roboto_Flex',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-nowrap text-white">
                        <p className="leading-[12px]">{link.type === 'linkedin' ? 'in' : link.type[0].toUpperCase()}</p>
                      </div>
                      <div className="basis-0 flex flex-col font-['Pavanam',sans-serif] grow justify-center min-h-px min-w-px relative shrink-0 text-[#faf9f6] text-[16px]">
                        <p className="leading-[18px] truncate">{link.url.replace(/^https?:\/\/(www\.)?/, '')}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Applications Sent */}
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[12px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <path d={svgPaths.p3ab7dd80} fill="#FAF9F6" />
                    </svg>
                  </div>
                  <div className="basis-0 flex flex-col font-['Pavanam',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
                    <p className="leading-[18px]">167 applications sent</p>
                  </div>
                </div>
              </div>

              {/* Edit Profile Button */}
              <div className="bg-[#faf9f6] relative rounded-[35px] shrink-0 w-full cursor-pointer hover:bg-[#e0e0e0] transition-colors">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative w-full">
                    <p className="font-['Pavanam',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Edit Profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full">
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="flex flex-col font-['Pavanam',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[28px] text-center w-[92px]">
                  <p className="leading-[28px]">Resume</p>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-center text-nowrap">
                    <p className="leading-[18px] truncate max-w-[200px]">{resume?.data?.[0]?.fileName || 'No file'}</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div className="basis-0 flex flex-col font-['Pavanam',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
                    <p className="leading-[18px]">Last Uploaded: {lastUpload}</p>
                  </div>
                </div>
              </div>

              <div
                className="content-stretch flex gap-[2px] items-start relative shrink-0 cursor-pointer"
                onClick={handlePreview}
              >
                <p className="font-['Pavanam',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white underline">Preview Resume</p>
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none scale-y-[-100%]">
                    <div className="relative size-[17px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <path d={svgPaths.p3b1034c0} fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-[#faf9f6] relative rounded-[35px] shrink-0 w-full cursor-pointer hover:bg-[#e0e0e0] transition-colors"
                onClick={handleUploadClick}
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative w-full">
                    <p className="font-['Pavanam',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Upload</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tag/Chip Component
function Tag({ text }: { text: string }) {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[2px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[2.5px]" />
      <p className="font-['Pavanam',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">{text}</p>
    </div>
  );
}

// Bullet Point Component
function BulletPoint({ text }: { text: string }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="white" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[18px]">{text}</p>
      </div>
    </div>
  );
}

// Edit Button Component
function EditButton() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[35px] shrink-0 cursor-pointer hover:bg-[#e0e0e0] transition-colors">
      <p className="font-['Pavanam',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Edit</p>
      <div className="relative shrink-0 size-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p7fe0970} fill="#1D1B20" />
        </svg>
      </div>
    </div>
  );
}

// Right Content Area
function RightContent() {
  const [activeTab, setActiveTab] = useState<'profile' | 'subscription'>('profile');
  const navigate = useNavigate();
  const { useFetchUserOnboardingData } = UserService();
  const { data: onboarding, isLoading, isError } = useFetchUserOnboardingData();

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#0f0f0f]">
        <Spinner className="size-12 text-[#611dcd]" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#0f0f0f]">
        <p className="text-white text-xl">Failed to load profile details.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto relative bg-[#0f0f0f]">
      <div className="px-[20px] sm:px-[40px] lg:px-[60px] xl:px-[80px] py-[32px] lg:py-[50px]">
        {/* Tabs */}
        <div className="flex items-center justify-center mb-[32px] lg:mb-[48px]">
          <div className="content-stretch flex items-center relative rounded-[4px] shrink-0 w-full max-w-[402px]">
            <div
              className={`basis-0 ${activeTab === 'profile' ? 'bg-[#faf9f6]' : 'bg-transparent'} grow min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 cursor-pointer transition-colors`}
              onClick={() => setActiveTab('profile')}
            >
              {activeTab === 'subscription' && (
                <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
              )}
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[32px] py-[10px] relative w-full">
                  <div className={`flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap ${activeTab === 'profile' ? 'text-black' : 'text-[#faf9f6]'}`}>
                    <p className="leading-[24px]">Profile Details</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`basis-0 ${activeTab === 'subscription' ? 'bg-[#faf9f6]' : 'bg-transparent'} grow min-h-px min-w-px relative rounded-br-[4px] rounded-tr-[4px] shrink-0 cursor-pointer transition-colors`}
              onClick={() => setActiveTab('subscription')}
            >
              {activeTab === 'profile' && (
                <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
              )}
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[32px] py-[10px] relative w-full">
                  <div className={`flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap ${activeTab === 'subscription' ? 'text-black' : 'text-[#faf9f6]'}`}>
                    <p className="leading-[24px]">Subscription Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' ? (
          <div className="flex flex-col gap-[32px] lg:gap-[40px] max-w-[1000px] mx-auto">
            {/* Job Preferences */}
            <div className="bg-[#1a1a1a] rounded-[4px] p-[20px] lg:p-[32px]">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full mb-[24px]">
                <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-nowrap text-white">
                  <p className="leading-[28px]">Job Preferences</p>
                </div>
                <EditButton />
              </div>

              <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[24px]">
                {/* Labels Column */}
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 lg:w-[203px]">
                  <BulletPoint text="Job Titles" />
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <BulletPoint text="Work Location Preference" />
                    </div>
                  </div>
                  <BulletPoint text="Employment Type" />
                  <BulletPoint text="Target Industries" />
                  <BulletPoint text="Target Salary" />
                  <BulletPoint text="Open to Relocation?" />
                  <BulletPoint text="Sponsorship Required?" />
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <BulletPoint text="Work Authorization Status" />
                    </div>
                  </div>
                  <BulletPoint text="Security clearance" />
                </div>

                {/* Values Column */}
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 flex-1">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 flex-wrap">
                    {onboarding?.jobTitle?.map((title: string, idx: number) => (
                      <Tag key={idx} text={title} />
                    ))}
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 flex-wrap">
                    {onboarding?.workLocation?.map((loc: string, idx: number) => (
                      <Tag key={idx} text={loc.charAt(0).toUpperCase() + loc.slice(1)} />
                    ))}
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 flex-wrap">
                    {onboarding?.workType?.map((type: string, idx: number) => (
                      <Tag key={idx} text={type.charAt(0).toUpperCase() + type.slice(1)} />
                    ))}
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 flex-wrap">
                    {onboarding?.industries?.slice(0, 6).map((ind: string, idx: number) => (
                      <Tag key={idx} text={ind.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')} />
                    ))}
                    {onboarding?.industries && onboarding.industries.length > 6 && <Tag text={`+${onboarding.industries.length - 6} more`} />}
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.salaryPreference || 'Not specified'}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.relocation === 'yes' ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.sponsorship === 'yes' ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.workAuthorization ? (onboarding.workAuthorization.charAt(0).toUpperCase() + onboarding.workAuthorization.slice(1)) : ''}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.securityClearance === 'yes' ? `Yes (${onboarding.clearanceLevel})` : 'No'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Background */}
            <div className="bg-[#1a1a1a] rounded-[4px] p-[20px] lg:p-[32px]">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full mb-[24px]">
                <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-nowrap text-white">
                  <p className="leading-[28px]">Professional Background</p>
                </div>
                <EditButton />
              </div>

              <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[24px]">
                {/* Labels Column */}
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 lg:w-[203px]">
                  <BulletPoint text="Employment Status" />
                  <BulletPoint text="Experience Level" />
                  <BulletPoint text="Years of Experience" />
                  <BulletPoint text="Education" />
                </div>

                {/* Values Column */}
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 flex-1">
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.employmentStatus ? (onboarding.employmentStatus.charAt(0).toUpperCase() + onboarding.employmentStatus.slice(1)) : ''}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.experienceLevel ? (onboarding.experienceLevel.charAt(0).toUpperCase() + onboarding.experienceLevel.slice(1)) : ''} level</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.yearsExperience} years</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white">
                      <p className="leading-[18px]">{onboarding?.educationLevel ? (onboarding.educationLevel.charAt(0).toUpperCase() + onboarding.educationLevel.slice(1)) : ''}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demographics */}
            <div className="bg-[#1a1a1a] rounded-[4px] p-[20px] lg:p-[32px]">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full mb-[24px]">
                <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-nowrap text-white">
                  <p className="leading-[28px]">Demographics</p>
                </div>
                <EditButton />
              </div>

              <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[24px]">
                {/* Labels Column */}
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 lg:w-[203px]">
                  <BulletPoint text="Gender" />
                  <BulletPoint text="Sexual Orientation" />
                  <BulletPoint text="Ethnicity" />
                  <BulletPoint text="Disability" />
                </div>

                {/* Values Column */}
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 flex-1">
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.gender ? (onboarding.gender.charAt(0).toUpperCase() + onboarding.gender.slice(1)) : ''}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.sexualOrientation ? (onboarding.sexualOrientation.charAt(0).toUpperCase() + onboarding.sexualOrientation.slice(1)) : ''}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.ethnicity ? (onboarding.ethnicity.charAt(0).toUpperCase() + onboarding.ethnicity.slice(1)) : ''}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">{onboarding?.disability === 'yes' ? 'Yes' : 'None'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <SubscriptionDetails />
        )}
      </div>
    </div>
  );
}

function SubscriptionDetails() {
  const navigate = useNavigate();
  const { useFetchCurrentSubscription } = UserService();
  const { data: subscription } = useFetchCurrentSubscription();

  if (!subscription) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] relative px-[20px]">
        <div className="relative bg-[rgba(26,26,26,0.7)] rounded-[4px] p-[24px] lg:p-[32px] max-w-[700px] w-full flex flex-col items-center text-center gap-[24px] z-10 overflow-hidden">
          <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />

          <div className="flex flex-col gap-[12px] items-center relative z-10">
            <p className="font-['Pavanam',sans-serif] leading-[28px] lg:leading-[32px] text-[20px] lg:text-[24px] text-[#faf9f6]">
              Looks like you&apos;re still on a free plan! Upgrade to unlock premium tools like Auto Apply and get the most out of WorkApply.
            </p>
          </div>

          <button
            onClick={() => navigate('/subscriptions')}
            className="bg-[#faf9f6] rounded-[35px] px-[20px] py-[10px] flex items-center gap-[8px] cursor-pointer hover:bg-white transition-all border-none relative z-10 group"
          >
            <p className="font-['Pavanam',sans-serif] leading-tight text-[18px] lg:text-[20px] text-black font-medium">
              View Pricing Plans
            </p>
            <div className="size-[14px] lg:size-[16px] group-hover:translate-x-1 transition-transform">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
  }

  const plan = subscription.pricingPlan;
  const renewalDate = new Date(subscription.expiresAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="max-w-[900px] mx-auto flex flex-col gap-[24px]">
      {/* Main Subscription Card */}
      <div className="bg-[rgba(26,26,26,0.7)] rounded-[4px] relative overflow-hidden">
        <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />

        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#611dcd] opacity-10 blur-[100px] -mr-32 -mt-32 pointer-events-none" />

        <div className="p-[24px] lg:p-[32px] relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[24px] mb-[32px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[12px]">
                <h2 className="font-['Pavanam',sans-serif] text-[24px] lg:text-[32px] text-[#faf9f6] leading-tight">
                  {plan?.name} Plan
                </h2>
                <div className="bg-[#611dcd] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[6px]">
                  <div className="size-[8px] rounded-full bg-white animate-pulse" />
                  <span className="text-white text-[12px] font-['Pavanam',sans-serif] leading-tight tracking-wider uppercase">Active</span>
                </div>
              </div>
              <p className="text-[#faf9f6] text-[16px] lg:text-[18px] font-['Pavanam',sans-serif] leading-[1.2] opacity-70 max-w-[450px]">
                {plan?.description}
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-[4px]">
              <div className="flex items-baseline gap-[4px]">
                <span className="text-[#faf9f6] text-[28px] lg:text-[36px] font-['Pavanam',sans-serif] leading-tight">${plan?.price}</span>
                <span className="text-[#faf9f6] text-[16px] font-['Pavanam',sans-serif] opacity-50">/{plan?.interval === 'Monthly' ? 'Month' : plan?.interval}</span>
              </div>
              <p className="text-[#faf9f6] text-[14px] lg:text-[16px] font-['Pavanam',sans-serif] opacity-60">
                {subscription.autoRenew ? 'Next billing:' : 'Expires:'} <span className="text-white font-medium">{renewalDate}</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] pb-[32px] border-b border-[#faf9f6]/10">
            {/* Features Column */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[#faf9f6] text-[14px] lg:text-[16px] font-['Pavanam',sans-serif] opacity-50 uppercase tracking-widest font-semibold">
                Included Features
              </h3>
              <div className="flex flex-col gap-[10px]">
                {plan?.features?.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-[10px]">
                    <div className="mt-[4px] shrink-0 size-[16px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="#faf9f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[#faf9f6] text-[16px] lg:text-[18px] font-['Pavanam',sans-serif] leading-tight">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan Config/Usage Column */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[#faf9f6] text-[14px] lg:text-[16px] font-['Pavanam',sans-serif] opacity-50 uppercase tracking-widest font-semibold">
                Plan Configuration
              </h3>
              <div className="flex flex-col gap-[16px]">
                <div className="relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none opacity-40" />
                  <div className="flex flex-row items-center p-[12px]">
                    <div className="flex flex-col gap-[2px] w-full">
                      <p className="text-[#faf9f6] text-[12px] font-['Pavanam',sans-serif] opacity-50">Daily Applications</p>
                      <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] lg:text-[18px]">{plan?.config?.jobsToApplyEachDay || 0} applications/day</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[10px]">
                  <div className={`size-[10px] rounded-full ${subscription.autoRenew ? 'bg-white' : 'bg-red-500 opacity-80'}`} />
                  <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] lg:text-[18px]">
                    Auto-Renewal: <span className="font-medium">{subscription.autoRenew ? 'Enabled' : 'Disabled'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-[32px] flex flex-col sm:flex-row gap-[16px] justify-between items-center">
            <div className="font-['Pavanam',sans-serif] text-[14px] text-[#faf9f6] opacity-50 italic">
              Member since {subscription?.audit?.createdAt ? new Date(subscription.audit.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'N/A'}
            </div>
            <div className="flex gap-[12px] w-full sm:w-auto">
              <button
                onClick={() => navigate('/subscriptions')}
                className="flex-1 sm:flex-none border border-[#faf9f6]/40 text-[#faf9f6] px-[20px] py-[8px] rounded-full hover:bg-[#faf9f6]/10 transition-colors font-['Pavanam',sans-serif] text-[16px] lg:text-[18px]"
              >
                Change Plan
              </button>
              <button className="flex-1 sm:flex-none bg-[#faf9f6] text-black px-[20px] py-[8px] rounded-full hover:bg-white transition-all font-['Pavanam',sans-serif] text-[16px] lg:text-[18px] font-medium">
                Manage Billing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Help/Support */}
      <div className="relative bg-[rgba(26,26,26,0.7)] p-[20px] lg:p-[24px] rounded-[4px]">
        <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[20px] relative z-10">
          <div className="flex items-center gap-[16px]">
            <div className="bg-[#611dcd]/80 p-[10px] rounded-full shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-[#faf9f6] text-[18px] lg:text-[20px] font-['Pavanam',sans-serif] leading-tight">Need help?</p>
              <p className="text-[#faf9f6] text-[14px] lg:text-[16px] font-['Pavanam',sans-serif] opacity-50">Manual assistance is available 24/7 for {plan?.name} members.</p>
            </div>
          </div>
          <button className="text-white hover:text-white/80 transition-colors font-['Pavanam',sans-serif] text-[16px] underline underline-offset-4 decoration-[#611dcd] decoration-2">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

export function UserProfile({ onNavigate }: { onNavigate?: (page: 'dashboard' | 'queue' | 'applications' | 'profile') => void }) {
  return (
    <DashboardLayout currentTab="profile" onNavigate={onNavigate} showBackground={false} contentScrollable={false}>
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Right Content */}
        <RightContent />
      </div>
    </DashboardLayout>
  );
}