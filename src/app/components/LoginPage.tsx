import { useState } from 'react';
import svgPaths from "../../imports/svg-mi6e3fakxq";
import imgWaveCircleWhite200X2001 from "figma:asset/0a4654ea4398cf8f615304c83010e8a0c575f917.png";

function Wave() {
  return (
    <div className="h-[100.264px] relative w-[263.925px]">
      <div className="absolute inset-[-12.47%_-0.69%_-12.47%_-0.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268.078 125.266">
          <g>
            <path d={svgPaths.p1e8d2440} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p1da6f000} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.pa154980} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p39be0f00} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p2e7b0b80} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wave1() {
  return (
    <div className="h-[100.264px] relative w-[262.425px]">
      <div className="absolute inset-[-12.47%_-0.69%_-12.47%_-0.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 265.751 125.266">
          <g>
            <path d={svgPaths.p128f7c00} stroke="white" strokeWidth="25" />
            <path d={svgPaths.p2d6ae500} stroke="white" strokeWidth="25" />
            <path d={svgPaths.p5972480} stroke="white" strokeWidth="25" />
            <path d={svgPaths.p14f06dc0} stroke="white" strokeWidth="25" />
            <path d={svgPaths.p2526c000} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wave2() {
  return (
    <div className="h-[100.264px] relative w-[262.425px]">
      <div className="absolute inset-[-12.47%_-0.69%_-12.47%_-0.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 265.751 125.266">
          <g>
            <path d={svgPaths.p95ee940} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p1d733440} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p3894e880} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p14f06dc0} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p2526c000} stroke="white" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wave3() {
  return (
    <div className="h-[100.264px] relative w-[314.425px]">
      <div className="absolute inset-[-12.47%_-0.41%_-12.47%_-0.48%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317.232 125.266">
          <g>
            <path d={svgPaths.pf073700} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p35591280} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.pf4af900} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p14f06dc0} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p25be2e80} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p2560b700} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

interface LoginPageProps {
  onSignUpClick: () => void;
}

export function LoginPage({ onSignUpClick }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen w-full flex flex-col lg:flex-row relative overflow-hidden">
      {/* Decorative Wave Pattern - Hidden on mobile */}
      <div className="hidden lg:block absolute left-[60px] xl:left-[110px] top-0 bottom-0 w-[100.264px] pointer-events-none">
        <div className="absolute flex h-[263.925px] items-center justify-center left-0 top-[-19px] w-[100.264px]">
          <div className="flex-none rotate-[90deg]">
            <Wave />
          </div>
        </div>
        <div className="absolute flex h-[262.425px] items-center justify-center left-0 top-[244.5px] w-[100.264px]">
          <div className="flex-none rotate-[90deg] scale-y-[-100%]">
            <Wave1 />
          </div>
        </div>
        <div className="absolute flex h-[262.425px] items-center justify-center left-0 top-[506.5px] w-[100.264px]">
          <div className="flex-none rotate-[90deg]">
            <Wave2 />
          </div>
        </div>
        <div className="absolute flex h-[314.425px] items-center justify-center left-0 top-[768.5px] w-[100.264px]">
          <div className="flex-none rotate-[90deg] scale-y-[-100%]">
            <Wave3 />
          </div>
        </div>
      </div>

      {/* Vertical Divider - Hidden on mobile */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#9ba1a5]" />

      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-6 py-8 lg:py-0 lg:pr-8 xl:pr-16 2xl:pr-20">
        <div className="w-full max-w-[700px] lg:max-w-none lg:w-auto flex flex-col gap-[14px] lg:gap-[18px] xl:gap-[26px] items-center lg:items-end text-center lg:text-right">
          <p className="font-['Pavanam',sans-serif] text-white text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] leading-[1.0]">
            Find your next job with
          </p>
          <div className="flex gap-[8px] lg:gap-[10px] xl:gap-[12px] items-center justify-center lg:justify-end w-full">
            <div className="relative shrink-0 w-[36px] h-[36px] lg:w-[44px] lg:h-[44px] xl:w-[52px] xl:h-[52px] 2xl:w-[60px] 2xl:h-[60px]">
              <img 
                alt="WorkApply Logo" 
                className="absolute inset-0 w-full h-full object-cover" 
                src={imgWaveCircleWhite200X2001} 
              />
            </div>
            <p className="font-['Pavanam',sans-serif] text-white text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] leading-[1.0]">
              WorkApply
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start px-6 py-8 lg:py-0 lg:pl-8 xl:pl-16 2xl:pl-20">
        <div className="w-full max-w-[500px] lg:max-w-[420px] xl:max-w-[520px] 2xl:max-w-[672px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] lg:gap-[38px] xl:gap-[48px] 2xl:gap-[56px]">
            {/* Title */}
            <h1 className="font-['Pavanam',sans-serif] text-white text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] leading-[1.0]">
              Sign in to your account
            </h1>

            {/* Input Fields */}
            <div className="flex flex-col gap-[16px] lg:gap-[18px] xl:gap-[22px] 2xl:gap-[24px]">
              {/* Email Input */}
              <div className="relative rounded-[2px] w-full">
                <div className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-transparent font-['Pavanam',sans-serif] text-[#9ba1a5] text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.2] px-[10px] lg:px-[12px] py-[10px] lg:py-[12px] outline-none placeholder:text-[#9ba1a5]"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative rounded-[2px] w-full">
                <div className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-transparent font-['Pavanam',sans-serif] text-[#9ba1a5] text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.2] px-[10px] lg:px-[12px] py-[10px] lg:py-[12px] outline-none placeholder:text-[#9ba1a5]"
                  required
                />
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <a 
                  href="#" 
                  className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[1.2] border-b-2 border-transparent hover:border-white transition-colors pb-[3px]"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-[#faf9f6] rounded-[35px] w-full py-[6px] lg:py-[7px] xl:py-[8px] px-[12px] hover:bg-opacity-90 transition-opacity"
            >
              <span className="font-['Pavanam',sans-serif] text-black text-[24px] lg:text-[28px] xl:text-[34px] 2xl:text-[40px] leading-[1.2]">
                Login
              </span>
            </button>

            {/* Sign Up Link */}
            <div className="flex gap-[6px] items-center justify-center flex-wrap">
              <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[1.2]">
                New to WorkApply?
              </p>
              <button
                type="button"
                onClick={onSignUpClick}
                className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[1.2] border-b-2 border-transparent hover:border-white transition-colors pb-[3px]"
              >
                Sign up here.
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
