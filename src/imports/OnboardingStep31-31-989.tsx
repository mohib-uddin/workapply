import svgPaths from "./svg-nocihy808v";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";
import imgEllipse101 from "figma:asset/de59f52f1c96c28d9c40d37ee54c2a7d54b5f63c.png";

function Notifications() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="notifications">
          <mask height="24" id="mask0_31_561" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_31_561)">
            <path d={svgPaths.p22390780} fill="var(--fill-0, #FAF9F6)" id="notifications_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProfileIcon() {
  return (
    <div className="content-stretch flex flex-col h-[51px] items-center justify-center p-[10px] relative rounded-[26px] shrink-0 w-[50px]" data-name="Profile Icon">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[26px]" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-nowrap text-white">
        <p className="leading-[28px]">SB</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Notifications />
      <ProfileIcon />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex items-start justify-between left-1/2 px-[50px] py-[10px] top-0 translate-x-[-50%] w-[1920px]" data-name="Nav Bar">
      <div className="relative shrink-0 size-[50px]" data-name="Logo 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo4} />
      </div>
      <Frame />
    </div>
  );
}

function ProgressIndicator() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Progress indicator">
      <div className="[grid-area:1_/_1] bg-[#1a1a1a] h-[25px] ml-0 mt-[5px] w-[1600px]" />
      <div className="[grid-area:1_/_1] bg-[#611dcd] h-[35px] ml-0 mt-0 rounded-[1px] w-[240px]" />
      <p className="[grid-area:1_/_1] font-['Pavanam:Regular',sans-serif] leading-[22px] ml-[1634.5px] mt-[7px] not-italic relative text-[20px] text-center text-nowrap text-white translate-x-[-50%]">3 of 20</p>
    </div>
  );
}

function ArrowTopLeft() {
  return (
    <div className="relative size-[28px]" data-name="arrow_top_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="arrow_top_left">
          <mask height="28" id="mask0_31_565" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
          </mask>
          <g mask="url(#mask0_31_565)">
            <path d={svgPaths.pa520dc0} fill="var(--fill-0, #FAF9F6)" id="arrow_top_left_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center mr-[-88px] relative shrink-0" data-name="Arrow Button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowTopLeft />
        </div>
      </div>
      <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[28px] text-center text-nowrap text-white">Back</p>
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] gap-[12px] grow items-center min-h-px min-w-px mr-[-88px] not-italic relative shrink-0 text-center text-white" data-name="Title">
      <p className="leading-[52px] relative shrink-0 text-[52px] w-full">What is your ideal salary range?</p>
      <p className="leading-[28px] relative shrink-0 text-[28px] w-full">We want to help you find roles that value your skills.</p>
    </div>
  );
}

function TitleBackButton() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[88px] py-0 relative shrink-0 w-full" data-name="Title+ back button">
      <ArrowButton />
      <Title />
    </div>
  );
}

function ProgressTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[126px] items-start relative shrink-0" data-name="Progress + Title">
      <ProgressIndicator />
      <TitleBackButton />
    </div>
  );
}

function Minimum() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Minimum">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] gap-[18px] items-start justify-center not-italic p-[32px] relative text-white w-full">
          <p className="leading-[28px] relative shrink-0 text-[28px] w-full">Minimum</p>
          <p className="leading-[40px] relative shrink-0 text-[40px] w-full">$75K</p>
        </div>
      </div>
    </div>
  );
}

function Maximum() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Maximum">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] gap-[18px] items-start justify-center not-italic p-[32px] relative text-white w-full">
          <p className="leading-[28px] relative shrink-0 text-[28px] w-full">Maximum</p>
          <p className="leading-[40px] relative shrink-0 text-[40px] w-full">$125K</p>
        </div>
      </div>
    </div>
  );
}

function InputFields() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-[724px]" data-name="Input fields">
      <Minimum />
      <Maximum />
    </div>
  );
}

function Labels() {
  return (
    <div className="[grid-area:1_/_1] font-['Pavanam:Regular',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[22px] ml-0 mt-[39px] not-italic place-items-start relative text-[20px] text-center text-nowrap text-white" data-name="Labels">
      <p className="[grid-area:1_/_1] ml-[18px] mt-0 relative translate-x-[-50%]">$0K</p>
      <p className="[grid-area:1_/_1] ml-[279.5px] mt-0 relative translate-x-[-50%]">$75K</p>
      <p className="[grid-area:1_/_1] ml-[549px] mt-0 relative translate-x-[-50%]">$150K</p>
      <p className="[grid-area:1_/_1] ml-[824px] mt-0 relative translate-x-[-50%]">$225K</p>
      <p className="[grid-area:1_/_1] ml-[1102px] mt-0 relative translate-x-[-50%]">$300K</p>
    </div>
  );
}

function Selected() {
  return (
    <div className="[grid-area:1_/_1] h-[31px] ml-[246px] mt-0 relative w-[173px]" data-name="Selected">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173 31">
        <g id="Selected">
          <rect fill="var(--fill-0, #611DCD)" height="17" id="Rectangle 41" width="130" x="18" y="7" />
          <circle cx="15.5" cy="15.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 20" r="15.5" />
          <circle cx="157.5" cy="15.5" fill="var(--fill-0, #FAF9F6)" id="Ellipse 21" r="15.5" />
        </g>
      </svg>
    </div>
  );
}

function RangeSlider() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[18px] mt-0 place-items-start relative" data-name="Range Slider">
      <div className="[grid-area:1_/_1] bg-[rgba(155,161,165,0.62)] h-[17px] ml-0 mt-[7px] rounded-[2px] w-[1084px]" />
      <Selected />
    </div>
  );
}

function RangeSliderLabels() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Range slider + labels">
      <Labels />
      <RangeSlider />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0">
      <InputFields />
      <RangeSliderLabels />
    </div>
  );
}

function ArrowForward() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward">
          <path d={svgPaths.p54e7200} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[35px] shrink-0" data-name="Button">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[40px] text-black text-nowrap">Continue</p>
      <ArrowForward />
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Button + text">
      <Button />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[28px] text-center text-white w-[min-content]">You can always update this later in your profile</p>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[96px] items-center left-[calc(50%-0.5px)] top-[174px] translate-x-[-50%]" data-name="Content">
      <ProgressTitle />
      <Frame1 />
      <ButtonText />
    </div>
  );
}

function LayoutTag() {
  return (
    <div className="absolute contents h-[96px] left-[calc(50%+767px)] top-[428px] w-[89px]" data-name="Layout tag">
      <div className="absolute flex h-[96px] items-center justify-center left-[calc(50%+767px)] top-[428px] w-[36px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[96px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[calc(50%+832.5px)] not-italic text-[#8bff7e] text-[28px] text-center top-[466.02px] translate-x-[-50%] w-[47px]">96px</p>
    </div>
  );
}

function LayoutTag1() {
  return (
    <div className="absolute contents h-[48px] left-[calc(50%+767px)] top-[674px] w-[94px]" data-name="Layout tag">
      <div className="absolute flex h-[48px] items-center justify-center left-[calc(50%+767px)] top-[674px] w-[36px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[48px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[calc(50%+832px)] not-italic text-[#8bff7e] text-[28px] text-center text-nowrap top-[693.01px] translate-x-[-50%]">48px</p>
    </div>
  );
}

function LayoutTag2() {
  return (
    <div className="absolute contents h-[96px] left-[calc(50%+759px)] top-[783px] w-[89px]" data-name="Layout tag">
      <div className="absolute flex h-[96px] items-center justify-center left-[calc(50%+759px)] top-[783px] w-[36px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[96px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[calc(50%+824.5px)] not-italic text-[#8bff7e] text-[28px] text-center top-[821.02px] translate-x-[-50%] w-[47px]">96px</p>
    </div>
  );
}

export default function OnboardingStep() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Onboarding step 3.1">
      <div className="absolute flex h-[1265.3px] items-center justify-center left-[calc(50%+0.44px)] top-[350px] translate-x-[-50%] w-[1532.834px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[85.214deg]">
          <div className="h-[1442px] relative w-[1149px]" data-name="Ellipse 10 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEllipse101} />
          </div>
        </div>
      </div>
      <NavBar />
      <Content />
      <LayoutTag />
      <LayoutTag1 />
      <LayoutTag2 />
    </div>
  );
}