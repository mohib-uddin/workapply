import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'motion/react';

interface JobQueueWelcomeTourProps {
  open: boolean;
  onClose: () => void;
}

const steps = [
  {
    title: "Welcome to Your Job Queue",
    description: "This is your personalized job queue where WorkApply finds and curates the best job opportunities matched to your profile.",
    features: [
      "Jobs are ranked by match percentage",
      "New opportunities added daily",
      "Tailored to your preferences and experience"
    ]
  },
  {
    title: "We Apply On Your Behalf",
    description: "WorkApply automatically submits applications to these jobs for you - saving you hours of repetitive work.",
    features: [
      "Auto-apply processes jobs in 24 hours",
      "Professional applications every time",
      "Track all submissions in one place"
    ]
  },
  {
    title: "Refine Your Queue",
    description: "Help us learn your preferences by liking or disliking jobs. Your feedback improves future recommendations.",
    features: [
      "👎 Dislike a job and it won't be applied to",
      "👍 Like a job to help improve your queue"
    ]
  }
];

export function JobQueueWelcomeTour({ open, onClose }: JobQueueWelcomeTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    onClose();
    setCurrentStep(0);
  };

  const currentStepData = steps[currentStep];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent 
        className="bg-[#0f0f0f] border-[#1a1a1a] text-[#faf9f6] sm:max-w-[520px] p-0 overflow-hidden"
      >
        <div className="relative">
          {/* Header */}
          <div className="border-b border-[#1a1a1a] px-8 pt-8 pb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="font-['Pavanam',sans-serif] text-[22px] font-medium text-[#faf9f6] mb-3">
                  {currentStepData.title}
                </h2>
                <p className="font-['Pavanam',sans-serif] text-[15px] text-[#9ba1a5] leading-relaxed">
                  {currentStepData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content */}
          <div className="px-8 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {currentStepData.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 bg-[#1a1a1a] rounded-[4px] p-4"
                  >
                    <div className="shrink-0 size-1.5 rounded-full bg-[#faf9f6] mt-2" />
                    <p className="font-['Pavanam',sans-serif] text-[15px] text-[#faf9f6] leading-relaxed">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="border-t border-[#1a1a1a] px-8 py-6">
            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mb-6">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentStep 
                      ? 'w-8 bg-[#faf9f6]' 
                      : idx < currentStep 
                        ? 'w-1 bg-[#faf9f6]/50' 
                        : 'w-1 bg-[#9ba1a5]/20'
                  }`}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`px-5 py-2.5 rounded-[4px] font-['Pavanam',sans-serif] text-[14px] transition-all duration-200 ${
                  currentStep === 0
                    ? 'opacity-0 pointer-events-none'
                    : 'bg-[#1a1a1a] text-[#9ba1a5] hover:bg-[#252525] hover:text-[#faf9f6]'
                }`}
              >
                Back
              </button>

              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-[#faf9f6] hover:bg-white text-[#0f0f0f] rounded-[4px] font-['Pavanam',sans-serif] text-[14px] font-medium transition-all duration-200"
              >
                {currentStep === steps.length - 1 ? "Get Started" : "Next"}
              </button>
            </div>

            <button
              onClick={handleComplete}
              className="w-full mt-3 py-2 text-[#9ba1a5] hover:text-[#faf9f6] font-['Pavanam',sans-serif] text-[13px] transition-colors duration-200"
            >
              Skip tour
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
