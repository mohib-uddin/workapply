import { useState } from 'react';
import svgPaths from "@/assets/icons/onboarding-svg";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";

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

function ScatterBackground() {
  return (
    <div className="absolute left-[-15%] sm:left-[-10%] lg:left-[-5%] xl:left-[0%] bottom-[-20%] sm:bottom-[-15%] lg:bottom-[-10%] w-[130%] sm:w-[120%] lg:w-[110%] xl:w-[100%] h-auto pointer-events-none">
      <svg className="block w-full h-auto" viewBox="0 0 1149 634" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <use xlinkHref="#stroke0_q3" transform="translate(1151.79 992.716) scale(0.537083) rotate(6.92844)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1250.32 1100.88) scale(0.398478) rotate(94.3091)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1084.65 1142.3) scale(0.327193) rotate(18.0054)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1104.36 1391.34) scale(0.551642) rotate(-156.609)" />
        <use xlinkHref="#stroke0_q3" transform="translate(917.515 1314.54) scale(0.260068) rotate(-56.3223)" />
        <use xlinkHref="#stroke0_q3" transform="translate(988.763 1284.63) scale(0.264313) rotate(103.48)" />
        <use xlinkHref="#stroke0_q3" transform="translate(828.518 1379.93) scale(0.278281) rotate(-83.9397)" />
        <use xlinkHref="#stroke0_q3" transform="translate(874.444 1265.97) scale(0.407539) rotate(80.9963)" />
        <use xlinkHref="#stroke0_q3" transform="translate(812.977 1334.33) scale(0.267553) rotate(117.109)" />
        <use xlinkHref="#stroke0_q3" transform="translate(655.046 1243.61) scale(0.457084) rotate(33.9959)" />
        <use xlinkHref="#stroke0_q3" transform="translate(566.486 1319.65) scale(0.216367) rotate(-12.7275)" />
        <use xlinkHref="#stroke0_q3" transform="translate(621.339 1308.65) scale(0.245528) rotate(106.322)" />
        <use xlinkHref="#stroke0_q3" transform="translate(566.966 1263.31) scale(0.319975) rotate(86.8873)" />
        <use xlinkHref="#stroke0_q3" transform="translate(521.886 1288.4) scale(0.245616) rotate(121.43)" />
        <use xlinkHref="#stroke0_q3" transform="translate(378.831 1339.32) scale(0.276333) rotate(-101.405)" />
        <use xlinkHref="#stroke0_q3" transform="translate(373.513 1200.52) scale(0.224477) rotate(45.7147)" />
        <use xlinkHref="#stroke0_q3" transform="translate(381.979 1141.68) scale(0.39605) rotate(82.0435)" />
        <use xlinkHref="#stroke0_q3" transform="translate(220.318 1056.34) scale(0.464901) rotate(25.7817)" />
        <use xlinkHref="#stroke0_q3" transform="translate(231.855 1187.68) scale(0.342645) rotate(-150.624)" />
        <use xlinkHref="#stroke0_q3" transform="translate(114.036 1091.32) scale(0.274974) rotate(-75.3104)" />
        <use xlinkHref="#stroke0_q3" transform="translate(61.0421 1078.08) scale(0.459858) rotate(-92.2956)" />
        <use xlinkHref="#stroke0_q3" transform="translate(84.5226 871.896) scale(0.249108) rotate(20.8576)" />
        <use xlinkHref="#stroke0_q3" transform="translate(72.514 943.879) scale(0.275691) rotate(-114.792)" />
        <use xlinkHref="#stroke0_q3" transform="translate(158.105 720.724) scale(0.466517) rotate(87.6585)" />
        <use xlinkHref="#stroke0_q3" transform="translate(22.5014 768.821) scale(0.23862) rotate(-74.8901)" />
        <use xlinkHref="#stroke0_q3" transform="translate(66.2091 753.174) scale(0.255709) rotate(-127.676)" />
        <use xlinkHref="#stroke0_q3" transform="translate(169.155 654.314) scale(0.37885) rotate(152.28)" />
        <use xlinkHref="#stroke0_q3" transform="translate(-4.37618 535.526) scale(0.394866) rotate(-34.1506)" />
        <use xlinkHref="#stroke0_q3" transform="translate(6.21873 428.891) scale(0.483246) rotate(-23.9808)" />
        <use xlinkHref="#stroke0_q3" transform="translate(124.027 465.506) scale(0.271396) rotate(-110.67)" />
        <use xlinkHref="#stroke0_q3" transform="translate(199.609 461.001) scale(0.485746) rotate(-138.575)" />
        <use xlinkHref="#stroke0_q3" transform="translate(303.611 314.188) scale(0.295929) rotate(163.547)" />
        <use xlinkHref="#stroke0_q3" transform="translate(265.89 135.432) scale(0.393976) rotate(33.953)" />
        <use xlinkHref="#stroke0_q3" transform="translate(270.218 125.522) scale(0.382283) rotate(-6.46612)" />
        <use xlinkHref="#stroke0_q3" transform="matrix(0.142535 -0.36782 0.36782 0.142535 321.093 184.586)" />
        <use xlinkHref="#stroke0_q3" transform="translate(466.734 -24.969) scale(0.534995) rotate(34.0829)" />
        <use xlinkHref="#stroke0_q3" transform="translate(599.96 38.3436) scale(0.228176) rotate(82.7933)" />
        <use xlinkHref="#stroke0_q3" transform="translate(629.477 -22.1174) scale(0.379183) rotate(48.9055)" />
        <use xlinkHref="#stroke0_q3" transform="translate(707.28 129.112) scale(0.264245) rotate(-151.737)" />
        <use xlinkHref="#stroke0_q3" transform="translate(776.369 25.6734) scale(0.228048) rotate(91.2008)" />
        <use xlinkHref="#stroke0_q3" transform="translate(739.766 106.758) scale(0.223522) rotate(-87.7207)" />
        <use xlinkHref="#stroke0_q3" transform="translate(764.058 42.9692) scale(0.297873) rotate(-18.5026)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1025.18 123.378) scale(0.490442) rotate(150.065)" />
        <use xlinkHref="#stroke0_q3" transform="translate(951.573 189.511) scale(0.29873) rotate(-112.371)" />
        <use xlinkHref="#stroke0_q3" transform="translate(919.547 148.623) scale(0.530684) rotate(-40.1427)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1133 135.711) scale(0.277643) rotate(58.9931)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1233.22 248.791) scale(0.295403) rotate(142.763)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1093.5 303.525) scale(0.477658) rotate(-48.288)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1155.27 337.506) scale(0.466324) rotate(-27.9212)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1281.78 367.903) scale(0.278965) rotate(28.8506)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1223.07 465.058) scale(0.447965) rotate(-25.561)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1364.73 501.502) scale(0.28133) rotate(59.1269)" />
        <use xlinkHref="#stroke0_q3" transform="matrix(0.32478 -0.165179 0.165179 0.32478 1272.49 605.519)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1312.06 618.326) scale(0.421061) rotate(16.0791)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1348.88 836.371) scale(0.248843) rotate(-122.91)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1373.97 769.372) scale(0.222028) rotate(66.0627)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1392.96 806.84) scale(0.339738) rotate(81.8713)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1271.73 905.953) scale(0.237843) rotate(-20.6227)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1225.72 1059.96) scale(0.415434) rotate(-87.3626)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1321.58 1012.36) scale(0.246104) rotate(102.355)" />
        <use xlinkHref="#stroke0_q3" transform="translate(1344.83 1039.17) scale(0.494025) rotate(107.801)" />
        <defs>
          <g id="stroke0_q3">
            <path d={svgPaths.p2af38b80} fill="#8149E4" fillOpacity="0.4" />
          </g>
        </defs>
      </svg>
    </div>
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
      {/* Background */}
      <ScatterBackground />

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