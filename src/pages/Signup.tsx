import { useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from "@/components/ui/icons/signup-wave-svg";
import imgWaveCircleWhite200X2001 from "figma:asset/0a4654ea4398cf8f615304c83010e8a0c575f917.png";
import onboardingSvg from "@/assets/icons/onboarding-svg";
import AuthService from '@/services/auth.service';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

function Wave() {
  return (
    <div className="h-[100px] relative w-[263.925px]">
      <div className="absolute inset-[-12.5%_-0.68%_-12.5%_-0.88%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268.056 125.002">
          <g>
            <path d={svgPaths.p1b04f4be} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p3cd69100} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.peaddd80} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p2d3af780} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p13fe4c80} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wave1() {
  return (
    <div className="h-[100px] relative w-[262.425px]">
      <div className="absolute inset-[-12.5%_-0.69%_-12.5%_-0.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 265.728 125.002">
          <g>
            <path d={svgPaths.p9644080} stroke="white" strokeWidth="25" />
            <path d={svgPaths.p28352f80} stroke="white" strokeWidth="25" />
            <path d={svgPaths.p33173980} stroke="white" strokeWidth="25" />
            <path d={svgPaths.p2233d3c0} stroke="white" strokeWidth="25" />
            <path d={svgPaths.p2ac9e900} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wave2() {
  return (
    <div className="h-[100px] relative w-[262.425px]">
      <div className="absolute inset-[-12.5%_-0.69%_-12.5%_-0.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 265.728 125.002">
          <g>
            <path d={svgPaths.p2b6cb40} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.pb422500} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p1a6b8312} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p2233d3c0} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p1565040} stroke="white" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wave3() {
  return (
    <div className="h-[100px] relative w-[314.425px]">
      <div className="absolute inset-[-12.5%_-0.41%_-12.5%_-0.48%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317.208 125.002">
          <g>
            <path d={svgPaths.p36ebc500} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p369429c0} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p3c871f80} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p2233d3c0} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.pf2a8ec0} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p2ac9e900} stroke="white" strokeOpacity="0.2" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

interface SignUpPageProps {
  onSignInClick: () => void;
  onSignUpComplete?: () => void;
}

export function SignUpPage({ onSignInClick, onSignUpComplete }: SignUpPageProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { useHandleRegisterUser } = AuthService();
  const signupMutation = useHandleRegisterUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    signupMutation.mutate({
      name: `${firstName} ${lastName}`,
      email,
      password,
    });
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen w-full flex flex-col lg:flex-row relative overflow-hidden">
      {/* Decorative Wave Pattern - Hidden on mobile */}
      <div className="hidden lg:block absolute left-[60px] xl:left-[110px] top-0 bottom-0 w-[100px] pointer-events-none">
        <div className="absolute flex h-[263.925px] items-center justify-center left-0 top-[-22px] w-[100px]">
          <div className="flex-none rotate-[90deg]">
            <Wave />
          </div>
        </div>
        <div className="absolute flex h-[262.425px] items-center justify-center left-0 top-[241.5px] w-[100px]">
          <div className="flex-none rotate-[90deg] scale-y-[-100%]">
            <Wave1 />
          </div>
        </div>
        <div className="absolute flex h-[262.425px] items-center justify-center left-0 top-[503.5px] w-[100px]">
          <div className="flex-none rotate-[90deg]">
            <Wave2 />
          </div>
        </div>
        <div className="absolute flex h-[314.425px] items-center justify-center left-0 top-[765.5px] w-[100px]">
          <div className="flex-none rotate-[90deg] scale-y-[-100%]">
            <Wave3 />
          </div>
        </div>
      </div>

      {/* Vertical Divider - Hidden on mobile */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#9ba1a5]" />

      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-6 lg:pl-32 xl:pl-48 2xl:pl-64 py-8 lg:py-0 lg:pr-8 xl:pr-16 2xl:pr-20">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-[700px] lg:max-w-none lg:w-auto flex flex-col gap-[14px] lg:gap-[18px] xl:gap-[26px] 2xl:gap-[32px] items-center lg:items-end text-center lg:text-right"
        >
          <motion.div
            className="relative shrink-0 w-[36px] h-[36px] lg:w-[44px] lg:h-[44px] xl:w-[52px] xl:h-[52px] 2xl:w-[60px] 2xl:h-[60px] cursor-pointer"
            animate={{
              rotate: [0, 0, 360],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut"
            }}
            whileHover={{
              rotate: 20,
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              alt="WorkApply Logo"
              className="absolute inset-0 w-full h-full object-cover"
              src={imgWaveCircleWhite200X2001}
            />
            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full blur-md"
              animate={{
                opacity: [0, 0.4, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 4.5,
              }}
            />
          </motion.div>
          <p className="font-['Pavanam',sans-serif] text-white text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] leading-[1.0]">
            We're happy you're joining us!
          </p>
        </motion.div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start px-6 py-8 lg:py-0 lg:pl-8 xl:pl-16 2xl:pl-20">
        <div className="w-full max-w-[500px] lg:max-w-[380px] xl:max-w-[480px] 2xl:max-w-[672px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] lg:gap-[38px] xl:gap-[48px] 2xl:gap-[56px]">
            {/* Title */}
            <h1 className="font-['Pavanam',sans-serif] text-white text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] leading-[1.0]">
              Let's Get You Set Up.
            </h1>

            {/* Form Fields */}
            <div className="flex flex-col gap-[16px] lg:gap-[18px] xl:gap-[22px] 2xl:gap-[24px]">
              {/* Name Row */}
              <div className="flex flex-col sm:flex-row gap-[16px] lg:gap-[18px] xl:gap-[22px] 2xl:gap-[24px] w-full">
                {/* First Name */}
                <div className="relative rounded-[2px] w-full">
                  <div className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  <input
                    type="text"
                    value={firstName}
                    disabled={signupMutation.isPending}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full bg-transparent font-['Pavanam',sans-serif] text-[#9ba1a5] text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.2] px-[10px] lg:px-[12px] py-[10px] lg:py-[12px] outline-none placeholder:text-[#9ba1a5] disabled:opacity-50"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="relative rounded-[2px] w-full">
                  <div className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  <input
                    type="text"
                    value={lastName}
                    disabled={signupMutation.isPending}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full bg-transparent font-['Pavanam',sans-serif] text-[#9ba1a5] text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.2] px-[10px] lg:px-[12px] py-[10px] lg:py-[12px] outline-none placeholder:text-[#9ba1a5] disabled:opacity-50"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative rounded-[2px] w-full">
                <div className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <input
                  type="email"
                  value={email}
                  disabled={signupMutation.isPending}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-transparent font-['Pavanam',sans-serif] text-[#9ba1a5] text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.2] px-[10px] lg:px-[12px] py-[10px] lg:py-[12px] outline-none placeholder:text-[#9ba1a5] disabled:opacity-50"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative rounded-[2px] w-full">
                <div className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <input
                  type="password"
                  value={password}
                  disabled={signupMutation.isPending}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-transparent font-['Pavanam',sans-serif] text-[#9ba1a5] text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.2] px-[10px] lg:px-[12px] py-[10px] lg:py-[12px] outline-none placeholder:text-[#9ba1a5] disabled:opacity-50"
                  required
                />
              </div>

              {/* Confirm Password Input */}
              <div className="relative rounded-[2px] w-full">
                <div className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
                <input
                  type="password"
                  value={confirmPassword}
                  disabled={signupMutation.isPending}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full bg-transparent font-['Pavanam',sans-serif] text-[#9ba1a5] text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.2] px-[10px] lg:px-[12px] py-[10px] lg:py-[12px] outline-none placeholder:text-[#9ba1a5] disabled:opacity-50"
                  required
                />
              </div>

              {/* Terms & Conditions */}
              <div className="flex gap-[6px] items-center justify-center">
                <p className="font-['Pavanam',sans-serif] text-[#faf9f6]/60 text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-none">
                  By signing up, you agree to our
                </p>
                <a
                  href="#"
                  className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-none border-b border-[#faf9f6]/30 hover:border-[#faf9f6] transition-colors pb-px"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>

            {/* Create Account Button */}
            <motion.button
              whileHover={!signupMutation.isPending ? { scale: 1.05 } : {}}
              whileTap={!signupMutation.isPending ? { scale: 0.95 } : {}}
              type="submit"
              disabled={signupMutation.isPending}
              className={`w-full flex gap-[8px] items-center justify-center px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[8px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] rounded-[35px] transition-all border-none ${!signupMutation.isPending
                ? 'bg-[#faf9f6] hover:bg-white cursor-pointer'
                : 'bg-[#1a1a1a] border border-[#faf9f6]/30 opacity-50 cursor-not-allowed'
                }`}
            >
              {signupMutation.isPending && <Loader2 className="animate-spin text-black" size={24} />}
              <span className={`font-['Pavanam',sans-serif] text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] leading-[1.0] font-medium ${!signupMutation.isPending ? 'text-black' : 'text-[#faf9f6]'}`}>
                {signupMutation.isPending ? 'Creating Account...' : 'Create Account'}
              </span>
              {!signupMutation.isPending && (
                <div className="relative shrink-0 size-[14px] lg:size-[16px] xl:size-[18px] 2xl:size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={onboardingSvg.p54e7200} fill="#1D1B20" />
                  </svg>
                </div>
              )}
            </motion.button>

            {/* Sign In Link */}
            <div className="flex gap-[6px] items-center justify-center">
              <p className="font-['Pavanam',sans-serif] text-[#faf9f6]/60 text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] leading-none">
                Already have an account?
              </p>
              <button
                type="button"
                onClick={onSignInClick}
                disabled={signupMutation.isPending}
                className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] leading-none border-b border-[#faf9f6]/30 hover:border-[#faf9f6] transition-colors pb-px disabled:opacity-50"
              >
                Sign in here.
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}