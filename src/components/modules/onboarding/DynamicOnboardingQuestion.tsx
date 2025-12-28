import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import svgPaths from "@/assets/icons/onboarding-svg";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";
import { QuestionConfig } from './questions-data';
import { useOnboardingStore } from '@/store/onboarding.store';
import { processJobTitles } from '@/lib/constants/job-titles';

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
    <div className="w-[85%] lg:w-[80%] flex items-center gap-[10px] lg:gap-[12px] xl:gap-[16px] 2xl:gap-[20px]">
      <div className="flex-1 relative h-[16px] lg:h-[20px] xl:h-[24px] 2xl:h-[30px]">
        <div className="absolute inset-0 bg-[#1a1a1a] rounded-[1px]" />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            restDelta: 0.001
          }}
          className="absolute left-0 top-0 bottom-0 bg-[#611dcd] rounded-[1px]"
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
    <motion.button
      whileHover={{ scale: 1.05, x: -8 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
      className="flex gap-[6px] items-center hover:opacity-80 transition-all group"
    >
      <div className="relative size-[18px] lg:size-[20px] xl:size-[22px] 2xl:size-[28px] transition-transform group-hover:-translate-x-1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path d={svgPaths.pa520dc0} fill="#FAF9F6" />
        </svg>
      </div>
      <p className="font-['Pavanam',sans-serif] text-white text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] leading-[1.0]">
        Back
      </p>
    </motion.button>
  );
}

interface DynamicOnboardingQuestionProps {
  question: QuestionConfig;
  onBack: () => void;
  onContinue: (answer: any) => void;
  userInitials?: string;
  totalSteps: number;
}

export function DynamicOnboardingQuestion({
  question,
  onBack,
  onContinue,
  userInitials,
  totalSteps,
}: DynamicOnboardingQuestionProps) {
  const { data, updateData } = useOnboardingStore();
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [minSalary, setMinSalary] = useState<number>(question.defaultValue?.[0] || question.min || 0);
  const [maxSalary, setMaxSalary] = useState<number>(question.defaultValue?.[1] || question.max || 300000);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Load existing data
  useEffect(() => {
    const existingValue = data[question.key as keyof typeof data];
    if (question.type === 'multi-select' || question.type === 'multi-combobox') {
      const value = Array.isArray(existingValue) ? existingValue : [];
      // Ensure we only set string arrays, not ProfileLink arrays
      if (value.length > 0 && typeof value[0] === 'string') {
        setSelectedValues(value as string[]);
      } else {
        setSelectedValues([]);
      }
    } else if (question.type === 'input') {
      setInputValue(existingValue as string || '');
    } else if (question.type === 'slider') {
      if (typeof existingValue === 'string' && existingValue.includes('-')) {
        const [min, max] = existingValue.split('-').map(Number);
        setMinSalary(min);
        setMaxSalary(max);
      }
    } else {
      setSelectedValue(existingValue);
    }
  }, [question.key, data]);

  const handleContinue = () => {
    let answer: any;

    if (question.type === 'multi-select' || question.type === 'multi-combobox') {
      if (selectedValues.length === 0) return;
      answer = selectedValues;
    } else if (question.type === 'input') {
      if (!inputValue.trim()) return;
      answer = inputValue.trim();
    } else if (question.type === 'slider') {
      answer = `${minSalary}-${maxSalary}`;
    } else {
      if (selectedValue === null || selectedValue === undefined) return;
      answer = selectedValue;
    }

    // Validate if validation function exists
    if (question.validation && !question.validation(answer)) {
      return;
    }

    updateData(question.key as any, answer);
    onContinue(answer);
  };

  const isContinueDisabled = () => {
    if (question.type === 'multi-select' || question.type === 'multi-combobox') {
      return selectedValues.length === 0;
    } else if (question.type === 'input') {
      return !inputValue.trim();
    } else if (question.type === 'slider') {
      return false;
    } else {
      return selectedValue === null || selectedValue === undefined;
    }
  };

  // Get job titles for combobox
  const jobTitles = question.key === 'jobTitle' ? processJobTitles() : (question.comboboxOptions || []);
  const filteredJobTitles = searchQuery
    ? jobTitles.filter((title: string) => title.toLowerCase().includes(searchQuery.toLowerCase()))
    : jobTitles;

  const formatSalary = (value: number) => {
    if (question.formatValue) {
      return question.formatValue(value);
    }
    return `$${Math.round(value / 1000)}k`;
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value <= maxSalary && value >= (question.min || 0)) {
      setMinSalary(value);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= minSalary && value <= (question.max || 300000)) {
      setMaxSalary(value);
    }
  };

  const toggleSelection = (value: string) => {
    if (question.type === 'multi-select' || question.type === 'multi-combobox') {
      setSelectedValues(prev =>
        prev.includes(value)
          ? prev.filter(v => v !== value)
          : question.maxSelections && prev.length >= question.maxSelections
            ? prev
            : [...prev, value]
      );
    } else {
      setSelectedValue(value);
    }
  };

  const handleSelectAll = () => {
    if (question.type === 'multi-select' && question.multiSelectOptions) {
      if (selectedValues.length === question.multiSelectOptions.length) {
        setSelectedValues([]);
      } else {
        setSelectedValues(question.multiSelectOptions.map(opt => opt.value));
      }
    }
  };

  const renderQuestionContent = () => {
    switch (question.type) {
      case 'select':
        return (
          <div className="w-full max-w-[95%] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1040px] flex flex-wrap justify-center gap-[12px] lg:gap-[20px] xl:gap-[28px] 2xl:gap-[32px] mb-[40px] lg:mb-[60px] xl:mb-[76px] 2xl:mb-[96px]">
            {question.options?.map((option) => (
              <button
                key={String(option.value)}
                onClick={() => setSelectedValue(option.value)}
                className={`min-w-[140px] sm:min-w-[240px] lg:min-w-[280px] xl:min-w-[300px] bg-[#1a1a1a] rounded-[4px] border-[2px] lg:border-[3px] 2xl:border-[4px] px-[16px] py-[10px] lg:px-[20px] lg:py-[12px] xl:px-[24px] xl:py-[16px] 2xl:px-[32px] 2xl:py-[20px] transition-all relative overflow-hidden group/btn ${selectedValue === option.value
                    ? 'border-[#faf9f6]'
                    : 'border-[#faf9f6]/10 hover:border-[#faf9f6]/40'
                  }`}
              >
                {selectedValue === option.value && (
                  <motion.div
                    layoutId="active-glow"
                    className="absolute inset-0 bg-white/5 blur-xl"
                  />
                )}
                <p className="font-['Pavanam',sans-serif] text-white text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] leading-[1.2] relative z-10">
                  {option.label}
                </p>
              </button>
            ))}
          </div>
        );

      case 'multi-select':
        return (
          <div className="w-full max-w-[95%] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1100px] 2xl:max-w-[1300px] flex flex-col gap-[24px] lg:gap-[32px] xl:gap-[40px] 2xl:gap-[48px] mb-[40px] lg:mb-[60px] xl:mb-[76px] 2xl:mb-[96px] items-center">
            {question.showSelectAll && question.multiSelectOptions && (
              <button
                onClick={handleSelectAll}
                className={`w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] bg-[#1a1a1a] rounded-[4px] border-[2px] lg:border-[3px] 2xl:border-[4px] px-[10px] py-[10px] lg:px-[12px] lg:py-[12px] xl:px-[14px] xl:py-[14px] 2xl:px-[16px] 2xl:py-[16px] transition-all ${selectedValues.length === question.multiSelectOptions.length
                    ? 'border-[#faf9f6]'
                    : 'border-[#faf9f6]/10 hover:border-[#faf9f6]/40'
                  }`}
              >
                <p className="font-['Pavanam',sans-serif] text-white text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] leading-[1.0]">
                  {question.selectAllLabel || 'Select All'}
                </p>
              </button>
            )}
            <div className="flex flex-wrap justify-center gap-[12px] lg:gap-[20px] xl:gap-[28px] 2xl:gap-[32px] w-full">
              {question.multiSelectOptions?.map((option, idx) => (
                <button
                  key={option.value}
                  onClick={() => toggleSelection(option.value)}
                  className={`min-w-[140px] sm:min-w-[240px] lg:min-w-[280px] xl:min-w-[300px] bg-[#1a1a1a] rounded-[4px] border-[2px] lg:border-[3px] 2xl:border-[4px] px-[16px] py-[10px] lg:px-[20px] lg:py-[12px] xl:px-[24px] xl:py-[16px] 2xl:px-[32px] 2xl:py-[20px] transition-all flex items-center justify-center text-center ${selectedValues.includes(option.value)
                      ? 'border-[#faf9f6]'
                      : 'border-[#faf9f6]/10 hover:border-[#faf9f6]/40'
                    }`}
                >
                  <p className="font-['Pavanam',sans-serif] text-white text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[32px] leading-tight">
                    {option.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        );

      case 'input':
        return (
          <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[724px] mb-[40px] lg:mb-[50px] xl:mb-[70px] 2xl:mb-[96px]">
            <input
              type={question.inputType || 'text'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={question.placeholder}
              maxLength={question.maxLength}
              className="w-full bg-[#1a1a1a] border border-[#faf9f6] rounded-[4px] px-[12px] lg:px-[14px] xl:px-[16px] py-[10px] lg:py-[12px] xl:py-[14px] 2xl:py-[16px] font-['Pavanam',sans-serif] text-white text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.0] focus:outline-none focus:border-[#faf9f6] focus:border-[2px]"
            />
          </div>
        );

      case 'slider':
        const sliderMax = question.max || 300000;
        const sliderMin = question.min || 0;
        const sliderStep = question.step || 5000;

        return (
          <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[724px] flex flex-col gap-[24px] lg:gap-[32px] xl:gap-[40px] 2xl:gap-[48px] mb-[40px] lg:mb-[50px] xl:mb-[70px] 2xl:mb-[96px]">
            <div className="w-full flex flex-col sm:flex-row gap-[16px] lg:gap-[28px] xl:gap-[48px] 2xl:gap-[64px]">
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
            <div className="w-full">
              <div className="relative w-full h-[36px] lg:h-[40px] xl:h-[46px] 2xl:h-[50px] mb-[8px]">
                <div className="absolute top-1/2 -translate-y-1/2 w-full h-[10px] lg:h-[12px] xl:h-[14px] 2xl:h-[17px] bg-[rgba(155,161,165,0.62)] rounded-[2px]" />
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-[10px] lg:h-[12px] xl:h-[14px] 2xl:h-[17px] bg-[#611dcd] rounded-[2px]"
                  style={{
                    left: `${((minSalary - sliderMin) / (sliderMax - sliderMin)) * 100}%`,
                    right: `${100 - ((maxSalary - sliderMin) / (sliderMax - sliderMin)) * 100}%`
                  }}
                />
                <input
                  type="range"
                  min={sliderMin}
                  max={sliderMax}
                  step={sliderStep}
                  value={minSalary}
                  onChange={handleMinChange}
                  className="absolute top-0 w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:h-[20px] lg:[&::-webkit-slider-thumb]:w-[24px] lg:[&::-webkit-slider-thumb]:h-[24px] xl:[&::-webkit-slider-thumb]:w-[28px] xl:[&::-webkit-slider-thumb]:h-[28px] 2xl:[&::-webkit-slider-thumb]:w-[31px] 2xl:[&::-webkit-slider-thumb]:h-[31px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#faf9f6] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-[20px] [&::-moz-range-thumb]:h-[20px] lg:[&::-moz-range-thumb]:w-[24px] lg:[&::-moz-range-thumb]:h-[24px] xl:[&::-moz-range-thumb]:w-[28px] xl:[&::-moz-range-thumb]:h-[28px] 2xl:[&::-moz-range-thumb]:w-[31px] 2xl:[&::-moz-range-thumb]:h-[31px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#faf9f6] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-lg"
                  style={{ zIndex: minSalary > maxSalary - (sliderMax - sliderMin) * 0.1 ? 5 : 3 }}
                />
                <input
                  type="range"
                  min={sliderMin}
                  max={sliderMax}
                  step={sliderStep}
                  value={maxSalary}
                  onChange={handleMaxChange}
                  className="absolute top-0 w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:h-[20px] lg:[&::-webkit-slider-thumb]:w-[24px] lg:[&::-webkit-slider-thumb]:h-[24px] xl:[&::-webkit-slider-thumb]:w-[28px] xl:[&::-webkit-slider-thumb]:h-[28px] 2xl:[&::-webkit-slider-thumb]:w-[31px] 2xl:[&::-webkit-slider-thumb]:h-[31px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#faf9f6] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-[20px] [&::-moz-range-thumb]:h-[20px] lg:[&::-moz-range-thumb]:w-[24px] lg:[&::-moz-range-thumb]:h-[24px] xl:[&::-moz-range-thumb]:w-[28px] xl:[&::-moz-range-thumb]:h-[28px] 2xl:[&::-moz-range-thumb]:w-[31px] 2xl:[&::-moz-range-thumb]:h-[31px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#faf9f6] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-lg"
                  style={{ zIndex: 4 }}
                />
              </div>
              <div className="flex justify-between w-full px-[2px]">
                {[sliderMin, sliderMin + (sliderMax - sliderMin) * 0.25, sliderMin + (sliderMax - sliderMin) * 0.5, sliderMin + (sliderMax - sliderMin) * 0.75, sliderMax].map((value) => (
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
        );

      case 'multi-combobox':
        return (
          <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[935px] mb-[40px] lg:mb-[50px] xl:mb-[70px] 2xl:mb-[96px]">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-[#1a1a1a] border border-[#9ba1a5] rounded-[4px] px-[12px] lg:px-[14px] xl:px-[16px] py-[10px] lg:py-[12px] xl:py-[14px] 2xl:py-[16px] flex items-center justify-between"
              >
                <p className="font-['Pavanam',sans-serif] text-white text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.0]">
                  {selectedValues.length > 0
                    ? `${selectedValues.length} selected`
                    : question.placeholder || 'Search and select job titles'}
                </p>
                <div className={`relative size-[20px] lg:size-[24px] xl:size-[28px] 2xl:size-[32px] transition-transform ${isDropdownOpen ? '' : 'scale-y-[-1]'}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <path d="M16 20L8 12h16z" fill="#FAF9F6" />
                  </svg>
                </div>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-[6px] lg:mt-[8px] xl:mt-[10px] bg-[#1a1a1a] rounded-[4px] overflow-hidden z-20 max-h-[280px] lg:max-h-[320px] xl:max-h-[360px] overflow-y-auto">
                  <div className="sticky top-0 bg-[#1a1a1a] p-[8px] border-b border-[#9ba1a5]/30">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search job titles..."
                      className="w-full bg-[#0f0f0f] border border-[#9ba1a5] rounded-[4px] px-[12px] py-[8px] font-['Pavanam',sans-serif] text-white text-[14px] focus:outline-none focus:border-[#faf9f6]"
                    />
                  </div>
                  {filteredJobTitles.slice(0, 50).map((title: string, index: number) => (
                    <button
                      key={title}
                      onClick={() => {
                        toggleSelection(title);
                        if (selectedValues.includes(title)) {
                          // Don't close if deselecting
                        } else if (question.maxSelections && selectedValues.length >= question.maxSelections - 1) {
                          setIsDropdownOpen(false);
                        }
                      }}
                      className={`w-full px-[16px] lg:px-[20px] xl:px-[24px] py-[8px] lg:py-[10px] xl:py-[12px] text-left hover:bg-[#2a2a2a] transition-colors ${index !== filteredJobTitles.length - 1 ? 'border-b border-[#9ba1a5]/30' : ''
                        } ${selectedValues.includes(title) ? 'bg-[#611dcd]/20' : ''}`}
                    >
                      <p className="font-['Pavanam',sans-serif] text-white text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.0]">
                        {title}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {selectedValues.length > 0 && (
              <div className="flex flex-wrap gap-[8px] lg:gap-[10px] xl:gap-[12px] mt-[16px] lg:mt-[20px] xl:mt-[24px]">
                {selectedValues.map((title) => (
                  <div
                    key={title}
                    className="bg-[#611dcd] px-[12px] lg:px-[14px] xl:px-[16px] py-[6px] lg:py-[7px] xl:py-[8px] rounded-[20px] flex items-center gap-[6px] lg:gap-[8px]"
                  >
                    <p className="font-['Pavanam',sans-serif] text-white text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[1.0]">
                      {title}
                    </p>
                    <button
                      onClick={() => toggleSelection(title)}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <span className="text-white text-[16px] lg:text-[18px] xl:text-[20px]">×</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'profile-links':
        // For now, return a simple placeholder - this can be expanded later
        return (
          <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[724px] mb-[40px] lg:mb-[50px] xl:mb-[70px] 2xl:mb-[96px]">
            <p className="font-['Pavanam',sans-serif] text-white text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[1.0] text-center">
              Profile links feature coming soon
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen w-full flex flex-col relative overflow-hidden">
      <BackgroundDecor />
      <NavBar userInitials={userInitials} />
      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-[40px] lg:pt-[60px] xl:pt-[80px] 2xl:pt-[100px] relative z-10">
        <div className="w-full flex justify-center mb-[40px] lg:mb-[50px] xl:mb-[66px]">
          <ProgressIndicator current={question.currentStep} total={totalSteps} />
        </div>

        <motion.div
          key={question.key}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full flex flex-col items-center"
        >
          <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[1240px] mb-[40px] lg:mb-[50px] xl:mb-[70px] 2xl:mb-[96px]">
            <div className="flex items-start justify-between gap-[16px] lg:gap-[24px]">
              {/* Left slot for Back Button - fixed width to balance the center */}
              <div className="flex-1 flex justify-start min-w-[80px] lg:min-w-[120px] xl:min-w-[160px]">
                <BackButton onClick={onBack} />
              </div>

              {/* Center slot for Title and Description */}
              <div className="flex-[3] flex flex-col gap-[6px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[12px] text-center">
                <h1 className="font-['Pavanam',sans-serif] text-white text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] leading-[1.1]">
                  {question.title}
                </h1>
                <p className="font-['Pavanam',sans-serif] text-white text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] leading-[1.2] opacity-70 max-w-[800px] mx-auto">
                  {question.description}
                </p>
              </div>

              {/* Right slot for symmetry to keep title centered */}
              <div className="flex-1 hidden sm:flex min-w-[80px] lg:min-w-[120px] xl:min-w-[160px]" aria-hidden="true" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={question.key + "-content"}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 22
              }}
              className="w-full flex justify-center"
            >
              {renderQuestionContent()}
            </motion.div>
          </AnimatePresence>

          <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pb-[40px] mt-auto">
            <div className="w-full max-w-[90%] sm:max-w-[600px] lg:max-w-[661px] flex flex-col gap-[12px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] items-center">
              <motion.button
                whileHover={!isContinueDisabled() ? { scale: 1.05 } : {}}
                whileTap={!isContinueDisabled() ? { scale: 0.95 } : {}}
                onClick={handleContinue}
                disabled={isContinueDisabled()}
                className={`flex gap-[6px] items-center justify-center px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] py-[8px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] rounded-[35px] transition-all border-none ${!isContinueDisabled()
                  ? 'bg-[#faf9f6] hover:bg-white cursor-pointer'
                  : 'bg-[#1a1a1a] border border-[#faf9f6]/30 opacity-50 cursor-not-allowed'
                  }`}
              >
                <p className={`font-['Pavanam',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[40px] leading-[1.0] font-medium ${!isContinueDisabled() ? 'text-black' : 'text-[#faf9f6]'
                  }`}>
                  Continue
                </p>
                <div className="relative shrink-0 size-[14px] lg:size-[16px] xl:size-[18px] 2xl:size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p54e7200} fill={!isContinueDisabled() ? '#1D1B20' : '#FAF9F6'} />
                  </svg>
                </div>
              </motion.button>
              <p className="font-['Pavanam',sans-serif] text-white text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[28px] text-center leading-[1.0] opacity-60">
                You can always update this later in your profile
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
