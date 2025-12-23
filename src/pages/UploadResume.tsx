import { useState, useRef } from 'react';
import svgPaths from "@/components/ui/icons/onboarding-common-svg";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";

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

function UploadIcon() {
  return (
    <div className="relative shrink-0 size-[48px] lg:size-[54px] xl:size-[62px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
        <g>
          <circle cx="31" cy="31" fill="#1A1A1A" r="31" />
          <g>
            <mask height="51" id="mask0_10_344" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="51" x="6" y="5">
              <rect fill="#FAF9F6" height="50" width="50" x="6.29663" y="5.88745" />
            </mask>
            <g mask="url(#mask0_10_344)">
              <path d={svgPaths.p1869ab40} fill="#FAF9F6" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ScatterBackground() {
  return (
    <div className="absolute left-[-15%] sm:left-[-10%] lg:left-[-5%] xl:left-[0%] bottom-[-20%] sm:bottom-[-15%] lg:bottom-[-10%] w-[130%] sm:w-[120%] lg:w-[110%] xl:w-[100%] h-auto pointer-events-none">
      <svg className="block w-full h-auto" viewBox="0 0 1149 634" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <use xlinkHref="#stroke0_77_1594" transform="translate(1151.79 992.716) scale(0.537083) rotate(6.92844)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1250.32 1100.88) scale(0.398478) rotate(94.3091)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1084.65 1142.3) scale(0.327193) rotate(18.0054)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1104.36 1391.34) scale(0.551642) rotate(-156.609)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(917.515 1314.54) scale(0.260068) rotate(-56.3223)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(988.763 1284.63) scale(0.264313) rotate(103.48)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(828.518 1379.93) scale(0.278281) rotate(-83.9397)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(874.444 1265.97) scale(0.407539) rotate(80.9963)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(812.977 1334.33) scale(0.267553) rotate(117.109)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(655.046 1243.61) scale(0.457084) rotate(33.9959)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(566.486 1319.65) scale(0.216367) rotate(-12.7275)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(621.339 1308.65) scale(0.245528) rotate(106.322)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(566.966 1263.31) scale(0.319975) rotate(86.8873)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(521.886 1288.4) scale(0.245616) rotate(121.43)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(378.831 1339.32) scale(0.276333) rotate(-101.405)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(373.513 1200.52) scale(0.224477) rotate(45.7147)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(381.979 1141.68) scale(0.39605) rotate(82.0435)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(220.318 1056.34) scale(0.464901) rotate(25.7817)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(231.855 1187.68) scale(0.342645) rotate(-150.624)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(114.036 1091.32) scale(0.274974) rotate(-75.3104)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(61.0421 1078.08) scale(0.459858) rotate(-92.2956)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(84.5226 871.896) scale(0.249108) rotate(20.8576)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(72.514 943.879) scale(0.275691) rotate(-114.792)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(158.105 720.724) scale(0.466517) rotate(87.6585)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(22.5014 768.821) scale(0.23862) rotate(-74.8901)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(66.2091 753.174) scale(0.255709) rotate(-127.676)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(169.155 654.314) scale(0.37885) rotate(152.28)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(-4.37618 535.526) scale(0.394866) rotate(-34.1506)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(6.21873 428.891) scale(0.483246) rotate(-23.9808)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(124.027 465.506) scale(0.271396) rotate(-110.67)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(199.609 461.001) scale(0.485746) rotate(-138.575)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(303.611 314.188) scale(0.295929) rotate(163.547)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(265.89 135.432) scale(0.393976) rotate(33.953)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(270.218 125.522) scale(0.382283) rotate(-6.46612)" />
        <use xlinkHref="#stroke0_77_1594" transform="matrix(0.142535 -0.36782 0.36782 0.142535 321.093 184.586)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(466.734 -24.969) scale(0.534995) rotate(34.0829)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(599.96 38.3436) scale(0.228176) rotate(82.7933)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(629.477 -22.1174) scale(0.379183) rotate(48.9055)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(707.28 129.112) scale(0.264245) rotate(-151.737)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(776.369 25.6734) scale(0.228048) rotate(91.2008)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(739.766 106.758) scale(0.223522) rotate(-87.7207)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(764.058 42.9692) scale(0.297873) rotate(-18.5026)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1025.18 123.378) scale(0.490442) rotate(150.065)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(951.573 189.511) scale(0.29873) rotate(-112.371)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(919.547 148.623) scale(0.530684) rotate(-40.1427)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1133 135.711) scale(0.277643) rotate(58.9931)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1233.22 248.791) scale(0.295403) rotate(142.763)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1093.5 303.525) scale(0.477658) rotate(-48.288)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1155.27 337.506) scale(0.466324) rotate(-27.9212)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1281.78 367.903) scale(0.278965) rotate(28.8506)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1223.07 465.058) scale(0.447965) rotate(-25.561)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1364.73 501.502) scale(0.28133) rotate(59.1269)" />
        <use xlinkHref="#stroke0_77_1594" transform="matrix(0.32478 -0.165179 0.165179 0.32478 1272.49 605.519)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1312.06 618.326) scale(0.421061) rotate(16.0791)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1348.88 836.371) scale(0.248843) rotate(-122.91)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1373.97 769.372) scale(0.222028) rotate(66.0627)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1392.96 806.84) scale(0.339738) rotate(81.8713)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1271.73 905.953) scale(0.237843) rotate(-20.6227)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1225.72 1059.96) scale(0.415434) rotate(-87.3626)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1321.58 1012.36) scale(0.246104) rotate(102.355)" />
        <use xlinkHref="#stroke0_77_1594" transform="translate(1344.83 1039.17) scale(0.494025) rotate(107.801)" />
        <defs>
          <g id="stroke0_77_1594">
            <path d={svgPaths.p2af38b80} fill="#8149E4" fillOpacity="0.4" />
          </g>
        </defs>
      </svg>
    </div>
  );
}

interface UploadResumePageProps {
  userInitials?: string;
  onUploadComplete?: () => void;
}

export function UploadResumePage({ userInitials = "SB", onUploadComplete }: UploadResumePageProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const validTypes = ['application/pdf', 'image/png'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      alert('Please upload a PDF or PNG file');
      return;
    }

    if (file.size > maxSize) {
      alert('File size must be less than 10MB');
      return;
    }

    setUploadedFile(file);
    console.log('File uploaded:', file.name);

    // Trigger navigation to onboarding step after a short delay
    setTimeout(() => {
      if (onUploadComplete) {
        onUploadComplete();
      }
    }, 1500);
  };

  const onBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Background Decorative Element - Purple Scatter Ring */}
      <ScatterBackground />

      {/* Nav Bar */}
      <NavBar userInitials={userInitials} />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8 lg:py-12">
        <div className="w-full max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[1344px] flex flex-col gap-[48px] lg:gap-[64px] xl:gap-[80px] 2xl:gap-[96px] items-center">
          {/* Title Section */}
          <div className="flex flex-col gap-[12px] lg:gap-[14px] xl:gap-[16px] items-center text-center w-full">
            <h1 className="font-['Pavanam',sans-serif] text-white text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] leading-[1.0]">
              Let's start with your resume
            </h1>
            <p className="font-['Pavanam',sans-serif] text-white text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.2] max-w-[90%] lg:max-w-full">
              We want to get to know you better so we can gather the best opportunities for you
            </p>
          </div>

          {/* Upload Area */}
          <div className="w-full relative">
            {/* Progress Bar (shown when file is uploaded) */}
            {uploadedFile && (
              <div className="absolute top-[2px] left-[2px] h-[8px] lg:h-[10px] bg-[#faf9f6] rounded-[5.5px] w-[50%] z-10" />
            )}

            <div
              className={`bg-[#1a1a1a] border ${dragActive ? 'border-[#faf9f6] border-2' : 'border-[#faf9f6]'} border-solid rounded-[6px] lg:rounded-[8px] w-full p-[40px] sm:p-[50px] lg:p-[60px] xl:p-[70px] 2xl:p-[80px] flex flex-col gap-[12px] lg:gap-[14px] xl:gap-[16px] items-center justify-center transition-all cursor-pointer hover:border-opacity-80`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={onBrowseClick}
            >
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.png"
                onChange={handleChange}
              />

              <UploadIcon />

              <div className="flex flex-col gap-[6px] lg:gap-[8px] items-center w-full">
                <div className="flex gap-[6px] lg:gap-[8px] items-center justify-center flex-wrap">
                  <p className="font-['Pavanam',sans-serif] text-white text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.2] text-center">
                    Drag and drop to upload or
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBrowseClick();
                    }}
                    className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.2] border-b-2 border-transparent hover:border-white transition-colors pb-[2px]"
                  >
                    Browse
                  </button>
                </div>
                <p className="font-['Pavanam',sans-serif] text-[#9ba1a5] text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] leading-[1.2] text-center">
                  Supported file types .pdf, .png
                </p>
                <p className="font-['Pavanam',sans-serif] text-[#9ba1a5] text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] leading-[1.2] text-center">
                  Maximum file size: 10MB
                </p>
              </div>

              {uploadedFile && (
                <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[14px] lg:text-[16px] xl:text-[18px] leading-[1.2] mt-[8px]">
                  Uploaded: {uploadedFile.name}
                </p>
              )}
            </div>
          </div>

          {/* Bottom Text */}
          <p className="font-['Pavanam',sans-serif] text-[#9ba1a5] text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] leading-[1.2] text-center">
            Your resume will be processed securely and confidentially
          </p>
        </div>
      </div>
    </div>
  );
}