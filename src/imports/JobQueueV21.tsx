import svgPaths from "./svg-t1wsh1779p";
import imgImage2 from "figma:asset/606ff6f6ae510f80abfe4b65682d6695e1dc1d9b.png";
import imgWaveCircleWhite50X501 from "figma:asset/85ef7a7284b26057657fc5cbaeefab0d1429915e.png";

function Toggle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40.4px]" data-name="Toggle">
      <div className="absolute inset-[0_-3.96%_-28%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 25.6">
          <g id="Toggle">
            <rect fill="var(--fill-0, #611DCD)" height="20" id="Rectangle 43" rx="10" width="40.4" />
            <g filter="url(#filter0_d_40_1224)" id="Ellipse 22">
              <ellipse cx="30" cy="10" fill="var(--fill-0, #FAF9F6)" rx="8" ry="7.6" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.2" id="filter0_d_40_1224" width="24" x="18" y="2.4">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.126366 0 0 0 0 0.0147008 0 0 0 0 0.303716 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_40_1224" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_40_1224" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] gap-[4px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[#faf9f6] text-[16px] w-full">
        <p className="leading-[18px]">{`Auto-Apply is currently ON. `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#9ba1a5] text-[12px] w-full">
        <p className="leading-[14px]">Your applications for these jobs will be submitted in the next 24 hours. You can turn it off here at any time.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-black relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative w-full">
          <Toggle />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] grow items-start min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#faf9f6]" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-nowrap">
        <p className="leading-[24px]">Sr. Frontend Developer</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[16px] w-[min-content]">
        <p className="leading-[18px]">NVIDIA</p>
      </div>
    </div>
  );
}

function Match() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Match">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[55px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[55px]">
            <div className="absolute inset-[0_0.35%_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.8094 55.0001">
                <path d={svgPaths.p38a04c80} fill="var(--fill-0, #9BA1A5)" id="Ellipse 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam:Regular',sans-serif] h-[16px] justify-center leading-[0] ml-[28px] mt-[28px] not-italic relative text-[#faf9f6] text-[16px] text-center translate-x-[-50%] translate-y-[-50%] w-[34px]">
        <p className="leading-[18px]">95%</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full">
      <Title />
      <Match />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">Austin, TX</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">12h ago</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">$102K</p>
      </div>
    </div>
  );
}

function Deets() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Deets">
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Deets />
    </div>
  );
}

function JobCardHorizontal() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start px-[32px] py-[24px] relative shrink-0 w-[384px]" data-name="Job Card Horizontal">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0px_0px_1px] border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame7 />
    </div>
  );
}

function Title1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] grow items-start min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#faf9f6]" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[24px]">Sr. Principal Engineer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[18px]">NVIDIA</p>
      </div>
    </div>
  );
}

function Match1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Match">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[55px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[55px]">
            <div className="absolute inset-[0_0.35%_0.78%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.8093 54.5696">
                <path d={svgPaths.p3d0e500} fill="var(--fill-0, #611DCD)" id="Ellipse 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam:Regular',sans-serif] h-[16px] justify-center leading-[0] ml-[28px] mt-[28px] not-italic relative text-[#faf9f6] text-[16px] text-center translate-x-[-50%] translate-y-[-50%] w-[34px]">
        <p className="leading-[18px]">74%</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full">
      <Title1 />
      <Match1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">Austin, TX</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">12h ago</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">$102K</p>
      </div>
    </div>
  );
}

function Deets1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Deets">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Deets1 />
    </div>
  );
}

function JobCardHorizontal1() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex flex-col items-start p-[32px] relative shrink-0 w-[384px]" data-name="Job Card Horizontal">
      <div aria-hidden="true" className="absolute border-[#611dcd] border-[0px_0px_0px_18px] border-solid inset-0 pointer-events-none" />
      <Frame14 />
    </div>
  );
}

function Title2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] grow items-start min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#faf9f6]" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[24px]">Product Designer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[18px]">TechCorp</p>
      </div>
    </div>
  );
}

function Match2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Match">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[55px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[55px]">
            <div className="absolute inset-[0_0.35%_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.8093 55">
                <path d={svgPaths.p2996e700} fill="var(--fill-0, #9BA1A5)" id="Ellipse 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam:Regular',sans-serif] h-[16px] justify-center leading-[0] ml-[28px] mt-[28px] not-italic relative text-[#faf9f6] text-[16px] text-center translate-x-[-50%] translate-y-[-50%] w-[34px]">
        <p className="leading-[18px]">86%</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full">
      <Title2 />
      <Match2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">Austin, TX</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">12h ago</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">$102K</p>
      </div>
    </div>
  );
}

function Deets2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Deets">
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Deets2 />
    </div>
  );
}

function JobCardHorizontal2() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start px-[32px] py-[24px] relative shrink-0 w-[384px]" data-name="Job Card Horizontal">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0px_0px_1px] border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame19 />
    </div>
  );
}

function Title3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] grow items-start min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#faf9f6]" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[24px]">Data Scientist</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[18px]">Kinetix</p>
      </div>
    </div>
  );
}

function Match3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Match">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[55px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[55px]">
            <div className="absolute inset-[0_0.35%_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.8093 55.0001">
                <path d={svgPaths.p10ec5000} fill="var(--fill-0, #9BA1A5)" id="Ellipse 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam:Regular',sans-serif] h-[16px] justify-center leading-[0] ml-[28px] mt-[28px] not-italic relative text-[#faf9f6] text-[16px] text-center translate-x-[-50%] translate-y-[-50%] w-[34px]">
        <p className="leading-[18px]">89%</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full">
      <Title3 />
      <Match3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">Austin, TX</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">12h ago</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">$102K</p>
      </div>
    </div>
  );
}

function Deets3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Deets">
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Deets3 />
    </div>
  );
}

function JobCardHorizontal3() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start px-[32px] py-[24px] relative shrink-0 w-[384px]" data-name="Job Card Horizontal">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0px_0px_1px] border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame24 />
    </div>
  );
}

function Title4() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] grow items-start min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#faf9f6]" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[24px]">Product Designer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[18px]">Revature</p>
      </div>
    </div>
  );
}

function Match4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Match">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[55px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[55px]">
            <div className="absolute inset-[0_0.35%_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.8093 55">
                <path d={svgPaths.p241ef740} fill="var(--fill-0, #9BA1A5)" id="Ellipse 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam:Regular',sans-serif] h-[16px] justify-center leading-[0] ml-[28px] mt-[28px] not-italic relative text-[#faf9f6] text-[16px] text-center translate-x-[-50%] translate-y-[-50%] w-[34px]">
        <p className="leading-[18px]">78%</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full">
      <Title4 />
      <Match4 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">Austin, TX</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">12h ago</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">$102K</p>
      </div>
    </div>
  );
}

function Deets4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Deets">
      <Frame26 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Deets4 />
    </div>
  );
}

function JobCardHorizontal4() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start px-[32px] py-[24px] relative shrink-0 w-[384px]" data-name="Job Card Horizontal">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0px_0px_1px] border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame29 />
    </div>
  );
}

function Title5() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] grow items-start min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#faf9f6]" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[24px]">Sr. Principal Engineer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[18px]">NVIDIA</p>
      </div>
    </div>
  );
}

function Match5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Match">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[55px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[55px]">
            <div className="absolute inset-[0_0.35%_14.06%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.8092 47.2654">
                <path d={svgPaths.p14407100} fill="var(--fill-0, #9BA1A5)" id="Ellipse 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam:Regular',sans-serif] h-[16px] justify-center leading-[0] ml-[28px] mt-[28px] not-italic relative text-[#faf9f6] text-[16px] text-center translate-x-[-50%] translate-y-[-50%] w-[34px]">
        <p className="leading-[18px]">64%</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full">
      <Title5 />
      <Match5 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">Austin, TX</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">12h ago</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">$102K</p>
      </div>
    </div>
  );
}

function Deets5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Deets">
      <Frame31 />
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame30 />
      <Deets5 />
    </div>
  );
}

function JobCardHorizontal5() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start px-[32px] py-[24px] relative shrink-0 w-[384px]" data-name="Job Card Horizontal">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0px_0px_1px] border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame34 />
    </div>
  );
}

function Title6() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] grow items-start min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#faf9f6]" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[24px]">Sr. Principal Engineer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[18px]">NVIDIA</p>
      </div>
    </div>
  );
}

function Match6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Match">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[55px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[55px]">
            <div className="absolute inset-[0_0.35%_0.78%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.8093 54.5696">
                <path d={svgPaths.p3d0e500} fill="var(--fill-0, #9BA1A5)" id="Ellipse 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam:Regular',sans-serif] h-[16px] justify-center leading-[0] ml-[28px] mt-[28px] not-italic relative text-[#faf9f6] text-[16px] text-center translate-x-[-50%] translate-y-[-50%] w-[34px]">
        <p className="leading-[18px]">74%</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full">
      <Title6 />
      <Match6 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">Austin, TX</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">12h ago</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 24" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-nowrap">
        <p className="leading-[18px]">$102K</p>
      </div>
    </div>
  );
}

function Deets6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Deets">
      <Frame36 />
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame35 />
      <Deets6 />
    </div>
  );
}

function JobCardHorizontal6() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start px-[32px] py-[24px] relative shrink-0 w-[384px]" data-name="Job Card Horizontal">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0px_0px_1px] border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame39 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1039px] items-start left-0 top-0 w-[384px]">
      <Frame8 />
      <JobCardHorizontal />
      <JobCardHorizontal1 />
      <JobCardHorizontal2 />
      <JobCardHorizontal3 />
      <JobCardHorizontal4 />
      <JobCardHorizontal5 />
      <JobCardHorizontal6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[1024px] left-0 overflow-clip top-[56px] w-[384px]">
      <Frame2 />
    </div>
  );
}

function Compnay() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Compnay">
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-[18px]" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
        </div>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="leading-[24px]">NVIDIA</p>
      </div>
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start justify-center relative shrink-0 w-full" data-name="Title">
      <Compnay />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[52px] text-white w-[min-content]">
        <p className="leading-[52px]">Senior Principal Engineer</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[24px]">Austin, TX</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[24px]">12h ago</p>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[24px]">$102k</p>
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[24px]">Remote</p>
      </div>
    </div>
  );
}

function Tag4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[24px]">Full-time</p>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full" data-name="Details">
      <Tag />
      <Tag1 />
      <Tag2 />
      <Tag3 />
      <Tag4 />
    </div>
  );
}

function HeadingForParagraphs() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading for paragraphs">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[40px] text-nowrap">
            <p className="leading-[40px]">About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeadingForParagraphs1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading for paragraphs">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[40px] text-nowrap">
            <p className="leading-[40px]">Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeadingForParagraphs2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading for paragraphs">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[40px] text-nowrap">
            <p className="leading-[40px]">Responsibilities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeadingForParagraphs3() {
  return (
    <div className="content-stretch flex h-[32px] items-center px-[16px] py-[4px] relative shrink-0 w-[604px]" data-name="Heading for paragraphs">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[40px] text-nowrap">
        <p className="leading-[40px]">Qualifications</p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Description">
      <HeadingForParagraphs />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#faf9f6] text-[0px] w-[min-content]">
        <p className="leading-[24px] text-[20px]">
          <span>{`Judi Health is a health technology company offering a wide range of benefits administration solutions for employers and health plans. This includes Capital Rx, a public benefit corporation that provides full-service pharmacy benefit management (PBM) solutions to self-insured employers; Judi Health™, which offers comprehensive health benefit management solutions for employers, TPAs, and health plans; and Judi®, the industry’s leading proprietary Enterprise Health Platform. To learn more, visit `}</span>
          <a className="cursor-pointer font-['Pavanam:Regular',sans-serif] not-italic text-[#faf9f6]" href="http://www.judi.health/">
            <span className="leading-[24px] text-[20px]" href="http://www.judi.health/">
              www.judi.health
            </span>
          </a>
          .
        </p>
      </div>
      <HeadingForParagraphs1 />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#faf9f6] text-[20px] w-[min-content]">
        <p className="leading-[24px]">Join our mission to transform pharmacy benefits as a Senior Full-stack Software Developer (Rust). In this role you will assist in leading large projects from design to conclusion, help product managers and designers flesh out requirements, collaborate with developers to establish consistent APIs across our services, and employ best practices for interactions with our API from the frontend.</p>
      </div>
      <HeadingForParagraphs2 />
      <div className="flex flex-col font-['Pavanam:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#faf9f6] text-[20px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <ul className="list-disc">
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Lead large projects from design to production.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Work with product managers and designers to refine requirements before implementation.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Demonstrate technical leadership over product features.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Represent product features technically to stakeholders.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Demonstrate ownership and responsibility for large projects throughout their production lifecycles.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Interact with operations teams as needed to support correct product operation.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Build backend applications in Rust on AWS Lambda, API Gateway, SMS, ECS, etc.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Develop code in a stateful web application framework (React/TypeScript).</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Collaborate with developers to establish consistent APIs across our services.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Employ best practices for API interactions with frontend web applications.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Implement backend code in a serverless, cloud application paradigm (Flask/AWS Lambda/ECS).</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Make strong architectural choices through careful evaluation and prior experience.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Work in an Agile/Scrum environment to continually deliver features to stakeholders and clients.</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[24px]">Responsible for adhering to the Capital Rx Code of Conduct</span>
          </li>
        </ul>
      </div>
      <HeadingForParagraphs3 />
      <div className="flex flex-col font-['Pavanam:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#faf9f6] text-[20px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <ul className="list-disc">
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">5+ years of related job experience with a broad range of technical skills.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Desire to work in a health technology company.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Experience working with Rust required.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Experience working with Tokio.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Git code management skills with experience working in a mono repository preferred.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Proficiency working in Linux using Bash, Zsh, Python, Node.js and similar tools.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Python (Flask/SQLAlchemy) and TypeScript (React) experience preferred.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Advanced PostgreSQL database knowledge, e.g. common table expressions, windowing functions, views, stored procedures, full-text or geospatial indexing techniques.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Proficiency targeting infrastructure as code with a security mindset (AWS, Terraform).</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">A history of delivering complex web applications to the cloud.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Strong knowledge of unit testing across multiple paradigms.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Knowledge of integration testing using Playwright or a similar framework.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Experience working with microservices/an API-based application paradigm.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Previous Pharmacy Benefits Manager (PBM) experience preferred.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[24px]">Good written communication skills that enable collaboration in a remote environment.</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[24px]">Ability to work autonomously driving proactive collaboration to deliver results.</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[24px] min-w-full not-italic opacity-0 relative shrink-0 text-[#faf9f6] text-[20px] w-[min-content]">
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">This position description is designed to be flexible, allowing management the opportunity to assign or reassign duties and responsibilities as needed to best meet organizational goals.</p>
        <p className="mb-0">Salary Range</p>
        <p className="mb-0">$150,000 - $180,000 USD</p>
        <p className="mb-0">This position description is designed to be flexible, allowing management the opportunity to assign or reassign duties and responsibilities as needed to best meet organizational goals.</p>
        <p>{`Judi Health values a diverse workplace and celebrates the diversity that each employee brings to the table. We are proud to provide equal employment opportunities to all employees and applicants for employment and prohibit discrimination and harassment of any type without regard to race, color, religion, age, sex, national origin, disability status, medical condition, genetic information, protected veteran status, sexual orientation, gender identity or expression, or any other characteristic protected by federal, state or local laws. `}</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[63px] top-[40px] w-[1428px]" data-name="Content">
      <Title7 />
      <Details />
      <Description />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[1024px] left-[384px] overflow-clip top-[56px] w-[1536px]">
      <Content />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center p-[10px] relative shrink-0" data-name="Logo">
      <div className="relative shrink-0 size-[40px]" data-name="Wave_Circle_White_50x50 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWaveCircleWhite50X501} />
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">WorkApply</p>
      </div>
    </div>
  );
}

function GetStarted() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center relative shrink-0" data-name="Get Started">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Dashboard</p>
      </div>
    </div>
  );
}

function JobQueue() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center relative shrink-0" data-name="Job Queue">
      <div aria-hidden="true" className="absolute border-[#611dcd] border-[0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Job Queue</p>
      </div>
    </div>
  );
}

function Applications() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center relative shrink-0" data-name="Applications">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Applications</p>
      </div>
    </div>
  );
}

function MenuOptions() {
  return (
    <div className="content-stretch flex gap-[40px] h-full items-center relative shrink-0" data-name="Menu Options">
      <GetStarted />
      <JobQueue />
      <Applications />
    </div>
  );
}

function Notifications() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="notifications">
          <mask height="28" id="mask0_40_338" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
          </mask>
          <g mask="url(#mask0_40_338)">
            <path d={svgPaths.p3d8d6500} fill="var(--fill-0, #FAF9F6)" id="notifications_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Person() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="person">
          <mask height="28" id="mask0_40_1201" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
          </mask>
          <g mask="url(#mask0_40_1201)">
            <g id="Rectangle 48"></g>
            <path d={svgPaths.pd664880} fill="var(--fill-0, #FAF9F6)" id="person_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NotifProfile() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name="Notif +profile">
      <Notifications />
      <Person />
    </div>
  );
}

function MenuButtons() {
  return (
    <div className="content-stretch flex gap-[100px] h-full items-center justify-end relative shrink-0" data-name="Menu + buttons">
      <MenuOptions />
      <NotifProfile />
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute bg-[#0f0f0f] content-stretch flex h-[56px] items-center justify-between left-1/2 px-[80px] py-0 top-0 translate-x-[-50%] w-[1920px]" data-name="Top Nav Bar">
      <Logo />
      <MenuButtons />
    </div>
  );
}

export default function JobQueueV() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Job Queue v2.1">
      <Frame />
      <Frame1 />
      <div className="absolute left-[1382px] size-[837px] top-[640px]">
        <div className="absolute inset-[-9.54%_-9.6%_-6%_-7.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 981.811 967.063" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Ellipse 9"></g>
            <defs>
              <g data-figma-scatter="f0.55_w0_aj180_sj0.61_r111_s9403672739201250524_sw100" data-figma-scatter-ref="stroke0_40_1206_ref" id="stroke0_40_1206">
                <path d={svgPaths.p3df66900} fill="var(--stroke-0, #8149E4)" fillOpacity="0.5" />
              </g>
              <path d={svgPaths.p2349e580} id="stroke0_40_1206_ref" />
            </defs>
          </svg>
        </div>
      </div>
      <TopNavBar />
    </div>
  );
}