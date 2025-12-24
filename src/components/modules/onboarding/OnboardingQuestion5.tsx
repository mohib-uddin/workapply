import { useState } from 'react';
import svgPaths from "@/assets/icons/onboarding-svg";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

// Shared Components
function NotificationIcon() {
  return (
    <div className="relative shrink-0 size-[16px] lg:size-[18px] xl:size-[20px] 2xl:size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p22390780} fill="#FAF9F6" />
      </svg>
    </div>
  );
}

function ProfileIcon({ initials = "SB" }: { initials?: string }) {
  return (
    <div className="flex items-center justify-center p-[6px] lg:p-[7px] xl:p-[8px] 2xl:p-[10px] rounded-full border border-white h-[28px] w-[28px] lg:h-[34px] lg:w-[34px] xl:h-[42px] xl:w-[42px] 2xl:h-[51px] 2xl:w-[50px]">
      <p className="font-['Pavanam',sans-serif] text-white text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[28px] leading-[1.0]">
        {initials}
      </p>
    </div>
  );
}

function NavBar({ userInitials }: { userInitials?: string }) {
  return (
    <div className="bg-[#1a1a1a] w-full flex items-center justify-between px-[20px] sm:px-[30px] lg:px-[35px] xl:px-[40px] 2xl:px-[50px] py-[6px] lg:py-[7px] xl:py-[8px] 2xl:py-[10px]">
      <div className="relative shrink-0 size-[28px] lg:size-[34px] xl:size-[42px] 2xl:size-[50px]">
        <img alt="WorkApply Logo" className="absolute inset-0 w-full h-full object-cover" src={imgLogo4} />
      </div>
      <div className="flex gap-[12px] lg:gap-[14px] xl:gap-[18px] 2xl:gap-[24px] items-center">
        <button className="hover:opacity-80 transition-opacity">
          <NotificationIcon />
        </button>
        <ProfileIcon initials={userInitials} />
      </div>
    </div>
  );
}

function ProgressIndicator({ current, total }: { current: number; total: number }) {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[650px] 2xl:max-w-[1000px] flex items-center gap-[10px] lg:gap-[12px] xl:gap-[16px] 2xl:gap-[20px]">
      <div className="flex-1 relative h-[16px] lg:h-[20px] xl:h-[24px] 2xl:h-[30px]">
        <div className="absolute inset-0 bg-[#1a1a1a] rounded-[1px]" />
        <div
          className="absolute left-0 top-0 bottom-0 bg-[#611dcd] rounded-[1px] transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <p className="font-['Pavanam',sans-serif] text-white text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] whitespace-nowrap">
        {current} of {total}
      </p>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex gap-[4px] items-center hover:opacity-80 transition-opacity group"
    >
      <div className="relative size-[18px] lg:size-[20px] xl:size-[22px] 2xl:size-[28px] scale-y-[-1]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path d={svgPaths.pa520dc0} fill="#FAF9F6" />
        </svg>
      </div>
      <p className="font-['Pavanam',sans-serif] text-white text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] leading-[1.0]">
        Back
      </p>
    </button>
  );
}


interface OnboardingQuestion5Props {
  onBack: () => void;
  onContinue: (experience: string) => void;
  userInitials?: string;
}

const experienceLevels = [
  'Entry Level (<1 year)',
  'Junior (1-3 years)',
  'Mid level (3-5 years)',
  'Senior level (5-8 years)',
  'Lead / Principal ( 8+ years)'
];

export function OnboardingQuestion5({ onBack, onContinue, userInitials }: OnboardingQuestion5Props) {
  const [selectedExperience, setSelectedExperience] = useState<string>('');

  const handleContinue = () => {
    if (selectedExperience) {
      onContinue(selectedExperience);
    }
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Background Decor */}
      <BackgroundDecor />

      {/* Nav Bar */}
      <NavBar userInitials={userInitials} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-[40px] lg:pt-[60px] xl:pt-[80px] 2xl:pt-[100px] relative z-10">

        {/* Progress Indicator */}
        <div className="w-full flex justify-center mb-[40px] lg:mb-[50px] xl:mb-[66px]">
          <ProgressIndicator current={5} total={20} />
        </div>

        {/* Back Button + Title */}
        <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[1200px] mb-[40px] lg:mb-[50px] xl:mb-[70px] 2xl:mb-[96px]">
          <div className="flex items-start gap-[16px] lg:gap-[24px] xl:gap-[40px] 2xl:gap-[60px] mb-[16px] lg:mb-[20px] xl:mb-[24px] 2xl:mb-[30px]">
            <BackButton onClick={onBack} />
          </div>

          <div className="flex flex-col gap-[6px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[12px] text-center">
            <h1 className="font-['Pavanam',sans-serif] text-white text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] leading-[1.0]">
              Which best describes your experience level?
            </h1>
            <p className="font-['Pavanam',sans-serif] text-white text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] leading-[1.0]">
              Please choose one of the below
            </p>
          </div>
        </div>

        {/* Options - Two rows */}
        <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[90%] xl:max-w-[95%] 2xl:max-w-[1400px] flex flex-col gap-[20px] lg:gap-[24px] xl:gap-[28px] 2xl:gap-[32px] mb-[40px] lg:mb-[50px] xl:mb-[70px] 2xl:mb-[96px]">
          {/* Top Row - 3 buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-[12px] lg:gap-[20px] xl:gap-[50px] 2xl:gap-[85px]">
            {experienceLevels.slice(0, 3).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedExperience(level)}
                className={`flex-1 bg-[#1a1a1a] rounded-[4px] border px-[10px] py-[10px] lg:px-[12px] lg:py-[12px] xl:px-[14px] xl:py-[14px] 2xl:px-[16px] 2xl:py-[16px] transition-all ${selectedExperience === level
                  ? 'border-[#faf9f6] border-[2px] lg:border-[3px] xl:border-[4px]'
                  : 'border-[#faf9f6] border-[1px] hover:border-[2px]'
                  }`}
              >
                <p className="font-['Pavanam',sans-serif] text-white text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] leading-[1.0]">
                  {level}
                </p>
              </button>
            ))}
          </div>

          {/* Bottom Row - 2 buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-[12px] lg:gap-[20px] xl:gap-[50px] 2xl:gap-[85px]">
            {experienceLevels.slice(3).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedExperience(level)}
                className={`flex-1 bg-[#1a1a1a] rounded-[4px] border px-[10px] py-[10px] lg:px-[12px] lg:py-[12px] xl:px-[14px] xl:py-[14px] 2xl:px-[16px] 2xl:py-[16px] transition-all ${selectedExperience === level
                  ? 'border-[#faf9f6] border-[2px] lg:border-[3px] xl:border-[4px]'
                  : 'border-[#faf9f6] border-[1px] hover:border-[2px]'
                  }`}
              >
                <p className="font-['Pavanam',sans-serif] text-white text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] leading-[1.0]">
                  {level}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button + Text */}
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pb-[40px]">
          <div className="w-full max-w-[90%] sm:max-w-[600px] lg:max-w-[661px] flex flex-col gap-[12px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] items-center">
            <button
              onClick={handleContinue}
              disabled={!selectedExperience}
              className={`flex gap-[6px] items-center justify-center px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[8px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] rounded-[35px] transition-all ${selectedExperience
                ? 'bg-[#faf9f6] hover:bg-white cursor-pointer'
                : 'bg-[#0f0f0f] border border-[#faf9f6] opacity-50 cursor-not-allowed'
                }`}
            >
              <p className={`font-['Pavanam',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] leading-[1.0] ${selectedExperience ? 'text-black' : 'text-[#faf9f6]'
                }`}>
                Continue
              </p>
              <div className="relative shrink-0 size-[14px] lg:size-[16px] xl:size-[18px] 2xl:size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p54e7200} fill={selectedExperience ? '#1D1B20' : 'white'} />
                </svg>
              </div>
            </button>
            <p className="font-['Pavanam',sans-serif] text-white text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[28px] text-center leading-[1.0]">
              You can always update this later in your profile
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}