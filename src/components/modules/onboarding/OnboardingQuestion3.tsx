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


interface OnboardingQuestion3Props {
  onBack: () => void;
  onContinue: (min: number, max: number) => void;
  userInitials?: string;
}

export function OnboardingQuestion3({ onBack, onContinue, userInitials }: OnboardingQuestion3Props) {
  const [minSalary, setMinSalary] = useState(75);
  const [maxSalary, setMaxSalary] = useState(125);

  const handleContinue = () => {
    onContinue(minSalary, maxSalary);
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value <= maxSalary) {
      setMinSalary(value);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= minSalary) {
      setMaxSalary(value);
    }
  };

  const formatSalary = (value: number) => `$${value}K`;

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
          <ProgressIndicator current={3} total={20} />
        </div>

        {/* Back Button + Title */}
        <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[1200px] mb-[40px] lg:mb-[50px] xl:mb-[70px] 2xl:mb-[96px]">
          <div className="flex items-start gap-[16px] lg:gap-[24px] xl:gap-[40px] 2xl:gap-[60px] mb-[16px] lg:mb-[20px] xl:mb-[24px] 2xl:mb-[30px]">
            <BackButton onClick={onBack} />
          </div>

          <div className="flex flex-col gap-[6px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[12px] text-center">
            <h1 className="font-['Pavanam',sans-serif] text-white text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] leading-[1.0]">
              What is your ideal salary range?
            </h1>
            <p className="font-['Pavanam',sans-serif] text-white text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] leading-[1.0]">
              We want to help you find roles that value your skills.
            </p>
          </div>
        </div>

        {/* Input Fields & Slider */}
        <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[724px] flex flex-col gap-[24px] lg:gap-[32px] xl:gap-[40px] 2xl:gap-[48px] mb-[40px] lg:mb-[50px] xl:mb-[70px] 2xl:mb-[96px]">

          {/* Input Fields */}
          <div className="w-full flex flex-col sm:flex-row gap-[16px] lg:gap-[28px] xl:gap-[48px] 2xl:gap-[64px]">
            {/* Minimum */}
            <div className="flex-1 bg-[#1a1a1a] rounded-[4px] border-l-[2px] lg:border-l-[3px] xl:border-l-[4px] 2xl:border-l-[5px] border-[#faf9f6] p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px]">
              <div className="flex flex-col gap-[10px] lg:gap-[12px] xl:gap-[15px] 2xl:gap-[18px]">
                <p className="font-['Pavanam',sans-serif] text-white text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] leading-[1.0]">
                  Minimum
                </p>
                <p className="font-['Pavanam',sans-serif] text-white text-[24px] lg:text-[28px] xl:text-[34px] 2xl:text-[40px] leading-[1.0]">
                  {formatSalary(minSalary)}
                </p>
              </div>
            </div>

            {/* Maximum */}
            <div className="flex-1 bg-[#1a1a1a] rounded-[4px] border-l-[2px] lg:border-l-[3px] xl:border-l-[4px] 2xl:border-l-[5px] border-[#faf9f6] p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px]">
              <div className="flex flex-col gap-[10px] lg:gap-[12px] xl:gap-[15px] 2xl:gap-[18px]">
                <p className="font-['Pavanam',sans-serif] text-white text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] leading-[1.0]">
                  Maximum
                </p>
                <p className="font-['Pavanam',sans-serif] text-white text-[24px] lg:text-[28px] xl:text-[34px] 2xl:text-[40px] leading-[1.0]">
                  {formatSalary(maxSalary)}
                </p>
              </div>
            </div>
          </div>

          {/* Range Slider */}
          <div className="w-full">
            {/* Slider Container */}
            <div className="relative w-full h-[36px] lg:h-[40px] xl:h-[46px] 2xl:h-[50px] mb-[8px]">
              {/* Track Background */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full h-[10px] lg:h-[12px] xl:h-[14px] 2xl:h-[17px] bg-[rgba(155,161,165,0.62)] rounded-[2px]" />

              {/* Active Track */}
              <div
                className="absolute top-1/2 -translate-y-1/2 h-[10px] lg:h-[12px] xl:h-[14px] 2xl:h-[17px] bg-[#611dcd] rounded-[2px]"
                style={{
                  left: `${(minSalary / 300) * 100}%`,
                  right: `${100 - (maxSalary / 300) * 100}%`
                }}
              />

              {/* Min Slider */}
              <input
                type="range"
                min="0"
                max="300"
                value={minSalary}
                onChange={handleMinChange}
                className="absolute top-0 w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:h-[20px] lg:[&::-webkit-slider-thumb]:w-[24px] lg:[&::-webkit-slider-thumb]:h-[24px] xl:[&::-webkit-slider-thumb]:w-[28px] xl:[&::-webkit-slider-thumb]:h-[28px] 2xl:[&::-webkit-slider-thumb]:w-[31px] 2xl:[&::-webkit-slider-thumb]:h-[31px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#faf9f6] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-[20px] [&::-moz-range-thumb]:h-[20px] lg:[&::-moz-range-thumb]:w-[24px] lg:[&::-moz-range-thumb]:h-[24px] xl:[&::-moz-range-thumb]:w-[28px] xl:[&::-moz-range-thumb]:h-[28px] 2xl:[&::-moz-range-thumb]:w-[31px] 2xl:[&::-moz-range-thumb]:h-[31px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#faf9f6] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-lg"
                style={{ zIndex: minSalary > maxSalary - 20 ? 5 : 3 }}
              />

              {/* Max Slider */}
              <input
                type="range"
                min="0"
                max="300"
                value={maxSalary}
                onChange={handleMaxChange}
                className="absolute top-0 w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:h-[20px] lg:[&::-webkit-slider-thumb]:w-[24px] lg:[&::-webkit-slider-thumb]:h-[24px] xl:[&::-webkit-slider-thumb]:w-[28px] xl:[&::-webkit-slider-thumb]:h-[28px] 2xl:[&::-webkit-slider-thumb]:w-[31px] 2xl:[&::-webkit-slider-thumb]:h-[31px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#faf9f6] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-[20px] [&::-moz-range-thumb]:h-[20px] lg:[&::-moz-range-thumb]:w-[24px] lg:[&::-moz-range-thumb]:h-[24px] xl:[&::-moz-range-thumb]:w-[28px] xl:[&::-moz-range-thumb]:h-[28px] 2xl:[&::-moz-range-thumb]:w-[31px] 2xl:[&::-moz-range-thumb]:h-[31px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#faf9f6] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-lg"
                style={{ zIndex: 4 }}
              />
            </div>

            {/* Labels */}
            <div className="flex justify-between w-full px-[2px]">
              {[0, 75, 150, 225, 300].map((value) => (
                <p
                  key={value}
                  className="font-['Pavanam',sans-serif] text-white text-[12px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] leading-[1.0]"
                >
                  {formatSalary(value)}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Continue Button + Text */}
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pb-[40px]">
          <div className="w-full max-w-[90%] sm:max-w-[600px] lg:max-w-[661px] flex flex-col gap-[12px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] items-center">
            <button
              onClick={handleContinue}
              className="bg-[#faf9f6] hover:bg-white transition-colors flex gap-[6px] items-center justify-center px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[8px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] rounded-[35px]"
            >
              <p className="font-['Pavanam',sans-serif] text-black text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] leading-[1.0]">
                Continue
              </p>
              <div className="relative shrink-0 size-[14px] lg:size-[16px] xl:size-[18px] 2xl:size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p54e7200} fill="#1D1B20" />
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