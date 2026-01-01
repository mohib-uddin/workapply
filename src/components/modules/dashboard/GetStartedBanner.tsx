import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import svgPaths from "@/components/ui/icons/dashboard-svg";

function ArrowTopLeft() {
    return (
        <div className="relative size-[14px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p2dcba880} fill="#1D1B20" />
            </svg>
        </div>
    );
}

export function GetStartedBanner() {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-[1400px] mt-[32px] px-4 md:px-0">
            <div className="bg-[#1a1a1a] relative rounded-[4px] w-full p-[32px] lg:p-[48px] flex flex-col items-center justify-center text-center overflow-hidden">
                {/* Consistent Border Implementation matching the app's JobCards */}
                <div aria-hidden="true" className="absolute border border-[#faf9f6]/90 border-solid inset-0 pointer-events-none rounded-[5px]" />

                <div className="relative z-10 flex flex-col items-center max-w-[900px]">
                    <h2 className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[24px] md:text-[32px] lg:text-[38px] leading-[1.2] mb-[12px]">
                        Ready to Start Your Automated Job Search?
                    </h2>
                    <p className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] opacity-80 mb-[32px]">
                        Let us apply to hundreds of jobs on your behalf. Choose a plan and we'll start applying to new opportunities daily!
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('/subscriptions')}
                        className="bg-[#faf9f6] relative rounded-[35px] text-[#1a1a1a] px-[32px] py-[12px] lg:py-[14px] flex items-center justify-center gap-[10px] cursor-pointer hover:bg-white transition-colors shadow-lg"
                    >
                        <p className="font-['Pavanam',sans-serif] text-[18px] lg:text-[22px] font-medium leading-tight">
                            Get Started Now
                        </p>
                        <div className="flex items-center justify-center size-[18px] rotate-180">
                            <ArrowTopLeft />
                        </div>
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
