import svgPaths from "@/components/ui/icons/onboarding-common-svg";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";
import React from "react";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

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


interface PostOnboardingProps {
  userInitials?: string;
  onComplete?: () => void;
}

export function PostOnboarding({ userInitials, onComplete }: PostOnboardingProps) {
  // Auto-navigate to dashboard after 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="bg-[#0f0f0f] min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Background Circle */}
      <BackgroundDecor />

      {/* Nav Bar */}
      <NavBar userInitials={userInitials} />

      {/* Main Content - Centered Text */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[1773px] flex flex-col gap-[50px] lg:gap-[70px] xl:gap-[85px] 2xl:gap-[100px] text-center">
          <h1 className="font-['Pavanam',sans-serif] text-white text-[28px] sm:text-[32px] lg:text-[38px] xl:text-[46px] 2xl:text-[52px] leading-[1.0]">
            Thank you for answering all our questions!
          </h1>
          <p className="font-['Pavanam',sans-serif] text-white text-[28px] sm:text-[32px] lg:text-[38px] xl:text-[46px] 2xl:text-[52px] leading-[1.0]">
            You're all set. We're now personalizing your job matches.
          </p>
        </div>
      </div>
    </div>
  );
}