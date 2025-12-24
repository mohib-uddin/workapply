import svgPaths from "@/components/ui/icons/onboarding-step-svg";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

function NotificationIcon() {
  return (
    <div className="relative shrink-0 size-[20px] lg:size-[22px] xl:size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <mask height="24" id="mask0_10_340" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" width="24" />
          </mask>
          <g mask="url(#mask0_10_340)">
            <path d={svgPaths.p22390780} fill="#FAF9F6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProfileIcon({ initials }: { initials: string }) {
  return (
    <div className="flex items-center justify-center p-[8px] lg:p-[9px] xl:p-[10px] rounded-full border border-white h-[38px] w-[38px] lg:h-[44px] lg:w-[44px] xl:h-[51px] xl:w-[50px]">
      <p className="font-['Pavanam',sans-serif] text-white text-[18px] lg:text-[22px] xl:text-[28px] leading-[1.0]">
        {initials}
      </p>
    </div>
  );
}

function NavBar({ userInitials = "SB" }: { userInitials?: string }) {
  return (
    <div className="bg-[#1a1a1a] w-full flex items-center justify-between px-[20px] sm:px-[30px] lg:px-[40px] xl:px-[50px] py-[8px] lg:py-[9px] xl:py-[10px]">
      <div className="relative shrink-0 size-[36px] lg:size-[44px] xl:size-[50px]">
        <img alt="WorkApply Logo" className="absolute inset-0 w-full h-full object-cover" src={imgLogo4} />
      </div>
      <div className="flex gap-[16px] lg:gap-[20px] xl:gap-[24px] items-center">
        <button className="hover:opacity-80 transition-opacity">
          <NotificationIcon />
        </button>
        <ProfileIcon initials={userInitials} />
      </div>
    </div>
  );
}

function ArrowForwardIcon() {
  return (
    <div className="relative shrink-0 size-[20px] lg:size-[22px] xl:size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p54e7200} fill="#1D1B20" />
      </svg>
    </div>
  );
}


interface OnboardingStepPageProps {
  userName?: string;
  userInitials?: string;
  onContinue?: () => void;
}

export function OnboardingStepPage({
  userName = "Miles",
  userInitials = "SB",
  onContinue
}: OnboardingStepPageProps) {
  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    } else {
      // Navigate to next step
      console.log('Continue to next onboarding step');
    }
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Background Decorative Element */}
      <BackgroundDecor />

      {/* Nav Bar */}
      <NavBar userInitials={userInitials} />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8 lg:py-12">
        <div className="w-full max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[1490px] flex flex-col gap-[80px] sm:gap-[100px] lg:gap-[120px] xl:gap-[148px] items-center text-center">

          {/* Thank You Message */}
          <h1 className="font-['Pavanam',sans-serif] text-white text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[52px] leading-[1.0] w-full">
            Thank you for uploading your resume, {userName}!
          </h1>

          {/* Preferences Section */}
          <div className="flex flex-col gap-[16px] lg:gap-[20px] xl:gap-[24px] items-center w-full">
            <h2 className="font-['Pavanam',sans-serif] text-white text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[52px] leading-[1.0] w-full">
              Next, let's set up your preferences.
              <br />
              Tell us about yourself so we can surface opportunities that fit you best.
            </h2>
            <p className="font-['Pavanam',sans-serif] text-white text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[28px] leading-[1.0] w-full">
              You only have to do this once!
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleContinue}
            className="bg-[#faf9f6] hover:bg-white transition-colors flex gap-[4px] items-center justify-center px-[12px] py-[8px] rounded-[35px] group"
          >
            <p className="font-['Pavanam',sans-serif] text-black text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] leading-[1.0]">
              Let's go
            </p>
            <ArrowForwardIcon />
          </button>

        </div>
      </div>
    </div>
  );
}