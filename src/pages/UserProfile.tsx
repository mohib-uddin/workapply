import React, { useState } from 'react';
import svgPaths from "@/components/ui/icons/user-profile-svg";
import svgPathsDashboard from "@/components/ui/icons/dashboard-svg";
import svgPathsSubscription from "@/components/ui/icons/subscription-svg";
import imgLogo from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";
import imgProfile from "figma:asset/0ac032a0fe674838ee325c4730b1ba299bfc7fcd.png";
import imgWaveCircleWhite from "figma:asset/85ef7a7284b26057657fc5cbaeefab0d1429915e.png";

// Purple Scatter Background (for left sidebar)
function ScatterBackground() {
  return (
    <div className="absolute left-0 bottom-0 w-[400px] h-[400px] pointer-events-none opacity-60">
      <svg className="block w-full h-full" viewBox="0 0 1474 1457" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={svgPathsDashboard.p3df66900} fill="#8149E4" fillOpacity="0.6" />
      </svg>
    </div>
  );
}

// Navigation Bar
function TopNavBar({ currentTab, onTabChange, onProfileClick }: { currentTab: 'dashboard' | 'queue' | 'applications'; onTabChange: (tab: 'dashboard' | 'queue' | 'applications') => void; onProfileClick: () => void }) {
  return (
    <div className="bg-[#0f0f0f] w-full flex h-[56px] items-center justify-between px-[20px] sm:px-[40px] lg:px-[80px] py-0 border-b border-[#1a1a1a] shrink-0">
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
      <div className="content-stretch flex gap-[40px] lg:gap-[100px] h-full items-center justify-end relative shrink-0">
        {/* Menu Options */}
        <div className="hidden md:flex content-stretch gap-[24px] lg:gap-[40px] h-full items-center relative shrink-0">
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
        <div className="content-stretch flex gap-[24px] lg:gap-[36px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[28px] cursor-pointer">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path d={svgPathsDashboard.p3d8d6500} fill="#FAF9F6" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[28px] cursor-pointer" onClick={onProfileClick}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path d={svgPathsDashboard.pd664880} fill="#FAF9F6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Left Sidebar - Profile Section
function LeftSidebar() {
  return (
    <div className="w-full lg:w-[311px] bg-[#0f0f0f] flex flex-col relative overflow-y-auto shrink-0">
      <ScatterBackground />

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
                  <p className="leading-[28px]">Michael Greenbaum</p>
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
                      <p className="leading-[18px]">Software Engineer</p>
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
                      <p className="leading-[18px]">michael@gmail.com</p>
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
                      <p className="leading-[18px]">New York, NY</p>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  {/* LinkedIn */}
                  <div className="content-stretch flex gap-[10px] items-center justify-center leading-[0] not-italic relative shrink-0 w-full">
                    <div className="flex flex-col font-['Roboto_Flex',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-nowrap text-white">
                      <p className="leading-[12px]">in</p>
                    </div>
                    <div className="basis-0 flex flex-col font-['Pavanam',sans-serif] grow justify-center min-h-px min-w-px relative shrink-0 text-[#faf9f6] text-[16px]">
                      <p className="leading-[18px]">linkedin.com/in/mchel</p>
                    </div>
                  </div>

                  {/* Portfolio */}
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p28975300} fill="#FAF9F6" />
                      </svg>
                    </div>
                    <div className="basis-0 flex flex-col font-['Pavanam',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
                      <p className="leading-[18px]">portfolio.com</p>
                    </div>
                  </div>
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
                    <p className="leading-[18px]">Michael_Greenbaum_Resume.pdf</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div className="basis-0 flex flex-col font-['Pavanam',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
                    <p className="leading-[18px]">Last Uploaded: 1/7/2025, 1:24 AM PDT</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex gap-[2px] items-start relative shrink-0 cursor-pointer">
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

              <div className="bg-[#faf9f6] relative rounded-[35px] shrink-0 w-full cursor-pointer hover:bg-[#e0e0e0] transition-colors">
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
        {activeTab === 'profile' && (
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
                  <div className="content-stretch flex gap-[24px] h-[26px] items-center relative shrink-0 flex-wrap">
                    <Tag text="Software Engineer" />
                    <Tag text="Data Engineer" />
                    <Tag text="Data Analyst" />
                  </div>
                  <div className="content-stretch flex gap-[24px] h-[26px] items-center relative shrink-0 flex-wrap">
                    <Tag text="Remote" />
                    <Tag text="Hybrid" />
                  </div>
                  <div className="content-stretch flex gap-[24px] h-[26px] items-center relative shrink-0 flex-wrap">
                    <Tag text="Full time" />
                    <Tag text="Contract" />
                  </div>
                  <div className="content-stretch flex gap-[24px] h-[26px] items-center relative shrink-0 flex-wrap">
                    <Tag text="Biotechnology" />
                    <Tag text="Cybersecurity" />
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">$98k - $102k</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">Yes</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">No</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">US Citizen</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">No</p>
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
                      <p className="leading-[18px]">Currently employed</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">Junior level</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">2 years</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white">
                      <p className="leading-[18px]">B.S. Informatics, University of California, Berkeley</p>
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
                      <p className="leading-[18px]">Male</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">Heterosexual</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">American</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 h-[26px]">
                    <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18px]">None</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'subscription' && (
          <SubscriptionContent />
        )}
      </div>
    </div>
  );
}

function SubscriptionContent() {
  return (
    <div className="w-full relative">
      {/* Purple scatter particles background */}
      <div className="absolute left-[10%] top-[-200px] w-[400px] h-[400px] pointer-events-none opacity-50">
        <svg className="block w-full h-full" viewBox="0 0 1474 1457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={svgPathsDashboard.p3df66900} fill="#8149E4" fillOpacity="0.4" />
        </svg>
      </div>
      <div className="absolute right-[10%] top-[-100px] w-[400px] h-[400px] pointer-events-none opacity-50">
        <svg className="block w-full h-full" viewBox="0 0 1474 1457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={svgPathsDashboard.p3df66900} fill="#8149E4" fillOpacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Title Section */}
        <div className="flex flex-col gap-[8px] items-center mb-[60px] lg:mb-[80px]">
          <p className="font-['Pavanam',sans-serif] leading-[52px] text-[36px] sm:text-[42px] lg:text-[52px] text-white text-center">WorkApply Subscription Plans</p>
          <p className="font-['Pavanam',sans-serif] leading-[28px] text-[20px] sm:text-[24px] lg:text-[28px] text-center text-white">Find the plan that fits your job search.</p>
        </div>

        {/* Tier Cards */}
        <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[24px] items-stretch justify-center max-w-[1200px] mx-auto mb-[60px]">
          {/* Starter Plan $33 */}
          <div className="relative bg-[rgba(26,26,26,0.7)] rounded-[4px] flex-1 max-w-full lg:max-w-[356px]">
            <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <div className="p-[40px] flex flex-col gap-[40px] h-full justify-between min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
              <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[4px]">
                  <p className="font-['Pavanam',sans-serif] leading-[18px] text-[16px] text-[#faf9f6]">Starter</p>
                  <p className="font-['Pavanam',sans-serif] leading-[28px] text-[28px] text-[#faf9f6]">$33 /Month</p>
                </div>
                <p className="font-['Pavanam',sans-serif] leading-[24px] text-[20px] text-[#faf9f6]">Perfect for job seekers who are exploring opportunities.</p>
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Pavanam',sans-serif] leading-[18px] text-[16px] text-[#faf9f6]">What's Included?</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex gap-[10px] items-start">
                      <div className="relative shrink-0 size-[20px] mt-[2px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPathsSubscription.p13eef200} fill="#FAF9F6" />
                        </svg>
                      </div>
                      <p className="font-['Pavanam',sans-serif] leading-[24px] text-[20px] text-[#faf9f6] flex-1">Auto Apply up to 100 jobs every week</p>
                    </div>
                    <div className="flex gap-[10px] items-start">
                      <div className="relative shrink-0 size-[20px] mt-[2px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPathsSubscription.p13eef200} fill="#FAF9F6" />
                        </svg>
                      </div>
                      <p className="font-['Pavanam',sans-serif] leading-[24px] text-[20px] text-[#faf9f6] flex-1">AI-powered job recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(250,249,246,0.25)] flex gap-[4px] items-center justify-center px-[12px] py-[8px] rounded-[35px] cursor-pointer hover:bg-[rgba(250,249,246,0.35)] transition-colors">
                <p className="font-['Pavanam',sans-serif] leading-[28px] text-[28px] text-black">Select Plan</p>
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPathsSubscription.p3991db40} fill="#0F0F0F" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Plan $55 - Most Popular */}
          <div className="relative bg-[rgba(26,26,26,0.7)] rounded-[4px] flex-1 max-w-full lg:max-w-[356px]">
            <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            {/* Most Popular Badge */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-16px] bg-[#611dcd] rounded-[1.667px] px-[12px] py-[6px] flex items-center gap-[8px]">
              <div aria-hidden="true" className="absolute border-[#611dcd] border-[0.833px] border-solid inset-[-0.833px] pointer-events-none rounded-[2.5px]" />
              <div className="relative size-[16px]">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWaveCircleWhite} />
              </div>
              <p className="font-['Pavanam',sans-serif] leading-[20px] text-[16.667px] text-white">Most Popular</p>
            </div>
            <div className="p-[40px] flex flex-col gap-[40px] h-full justify-between min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
              <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[4px]">
                  <p className="font-['Pavanam',sans-serif] leading-[18px] text-[16px] text-[#faf9f6]">Starter</p>
                  <p className="font-['Pavanam',sans-serif] leading-[28px] text-[28px] text-[#faf9f6]">$55 /Month</p>
                </div>
                <p className="font-['Pavanam',sans-serif] leading-[24px] text-[20px] text-[#faf9f6]">Advanced tools to accelerate your search.</p>
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Pavanam',sans-serif] leading-[18px] text-[16px] text-[#faf9f6]">What's Included?</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex gap-[10px] items-start">
                      <div className="relative shrink-0 size-[20px] mt-[2px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPathsSubscription.p13eef200} fill="#FAF9F6" />
                        </svg>
                      </div>
                      <p className="font-['Pavanam',sans-serif] leading-[24px] text-[20px] text-[#faf9f6] flex-1">Auto Apply up to 100 jobs every week</p>
                    </div>
                    <div className="flex gap-[10px] items-start">
                      <div className="relative shrink-0 size-[20px] mt-[2px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPathsSubscription.p13eef200} fill="#FAF9F6" />
                        </svg>
                      </div>
                      <p className="font-['Pavanam',sans-serif] leading-[24px] text-[20px] text-[#faf9f6] flex-1">AI-powered job recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(250,249,246,0.25)] flex gap-[4px] items-center justify-center px-[12px] py-[8px] rounded-[35px] cursor-pointer hover:bg-[rgba(250,249,246,0.35)] transition-colors">
                <p className="font-['Pavanam',sans-serif] leading-[28px] text-[28px] text-black">Select Plan</p>
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPathsSubscription.p3991db40} fill="#0F0F0F" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Plan $65 */}
          <div className="relative bg-[rgba(26,26,26,0.7)] rounded-[4px] flex-1 max-w-full lg:max-w-[356px]">
            <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <div className="p-[40px] flex flex-col gap-[40px] h-full justify-between min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
              <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[4px]">
                  <p className="font-['Pavanam',sans-serif] leading-[18px] text-[16px] text-[#faf9f6]">Starter</p>
                  <p className="font-['Pavanam',sans-serif] leading-[28px] text-[28px] text-[#faf9f6]">$65 /Month</p>
                </div>
                <p className="font-['Pavanam',sans-serif] leading-[24px] text-[20px] text-[#faf9f6]">Hands-free job applying with deep application customization.</p>
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Pavanam',sans-serif] leading-[18px] text-[16px] text-[#faf9f6]">What's Included?</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex gap-[10px] items-start">
                      <div className="relative shrink-0 size-[20px] mt-[2px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPathsSubscription.p13eef200} fill="#FAF9F6" />
                        </svg>
                      </div>
                      <p className="font-['Pavanam',sans-serif] leading-[24px] text-[20px] text-[#faf9f6] flex-1">Auto Apply up to 100 jobs every week</p>
                    </div>
                    <div className="flex gap-[10px] items-start">
                      <div className="relative shrink-0 size-[20px] mt-[2px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPathsSubscription.p13eef200} fill="#FAF9F6" />
                        </svg>
                      </div>
                      <p className="font-['Pavanam',sans-serif] leading-[24px] text-[20px] text-[#faf9f6] flex-1">AI-powered job recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(250,249,246,0.25)] flex gap-[4px] items-center justify-center px-[12px] py-[8px] rounded-[35px] cursor-pointer hover:bg-[rgba(250,249,246,0.35)] transition-colors">
                <p className="font-['Pavanam',sans-serif] leading-[28px] text-[28px] text-black">Select Plan</p>
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPathsSubscription.p3991db40} fill="#0F0F0F" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="flex flex-col gap-[8px] items-center">
          <p className="font-['Pavanam',sans-serif] leading-[28px] text-[20px] sm:text-[24px] lg:text-[28px] text-center text-white">You can cancel your plan at anytime.</p>
          <p className="font-['Pavanam',sans-serif] leading-[28px] text-[20px] sm:text-[24px] lg:text-[28px] text-center text-white">Need help? Ask Us.</p>
        </div>
      </div>
    </div>
  );
}

export function UserProfile({ onNavigate }: { onNavigate?: (page: 'dashboard' | 'queue' | 'applications' | 'profile') => void }) {
  const handleTabChange = (tab: 'dashboard' | 'queue' | 'applications') => {
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  const handleProfileClick = () => {
    // Already on profile page, do nothing
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Top Navigation */}
      <TopNavBar currentTab="dashboard" onTabChange={handleTabChange} onProfileClick={handleProfileClick} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Right Content */}
        <RightContent />
      </div>
    </div>
  );
}