import { useState, useRef } from 'react';
import svgPaths from "@/components/ui/icons/onboarding-common-svg";
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

function UploadIcon() {
  return (
    <div className="relative shrink-0 size-[48px] lg:size-[54px] xl:size-[62px]">
      <svg className="block size-full" fill="none" viewBox="0 0 50 50">
        <g>
          <mask height="50" id="mask0_227_371" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="0" y="0">
            <rect fill="#FAF9F6" height="50" width="50" />
          </mask>
          <g mask="url(#mask0_227_371)">
            <path d="M22.9163 33.3333V16.3541L17.4997 21.7708L14.583 18.7499L24.9997 8.33325L35.4163 18.7499L32.4997 21.7708L27.083 16.3541V33.3333H22.9163ZM12.4997 41.6666C11.3538 41.6666 10.3729 41.2586 9.55697 40.4426C8.74099 39.6267 8.33301 38.6458 8.33301 37.4999V31.2499H12.4997V37.4999H37.4997V31.2499H41.6663V37.4999C41.6663 38.6458 41.2584 39.6267 40.4424 40.4426C39.6264 41.2586 38.6455 41.6666 37.4997 41.6666H12.4997Z" fill="#FAF9F6" />
          </g>
        </g>
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
      {/* Background Decorative Element */}
      <BackgroundDecor />

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
                    className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.2] border-b-2 border-transparent hover:border-white transition-colors"
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