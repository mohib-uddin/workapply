import svgPaths from "./svg-r274ab17tg";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";
import imgEllipse101 from "figma:asset/de59f52f1c96c28d9c40d37ee54c2a7d54b5f63c.png";

function ArrowForward() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward">
          <path d={svgPaths.p54e7200} fill="var(--fill-0, #FEF7FF)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex gap-[4px] items-center justify-center opacity-50 px-[12px] py-[8px] relative rounded-[40px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#faf9f6] text-[40px] text-nowrap">Continue</p>
      <ArrowForward />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[calc(50%-0.5px)] top-[833px] translate-x-[-50%] w-[661px]">
      <Button />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[28px] text-center text-white w-[min-content]">You can always update this later in your profile</p>
    </div>
  );
}

function ProgressIndicator() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Progress indicator">
      <div className="[grid-area:1_/_1] bg-[#1a1a1a] h-[25px] ml-0 mt-[5px] w-[1600px]" />
      <div className="[grid-area:1_/_1] bg-[#611dcd] h-[35px] ml-0 mt-0 rounded-[1px] w-[320px]" />
      <p className="[grid-area:1_/_1] font-['Pavanam:Regular',sans-serif] leading-[22px] ml-[1634px] mt-[7px] not-italic relative text-[20px] text-center text-nowrap text-white translate-x-[-50%]">4 of 20</p>
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
      <p className="leading-[52px] relative shrink-0 text-[52px] w-full">Which job titles best match your career goals?</p>
      <p className="leading-[28px] relative shrink-0 text-[28px] w-full">Select one or more roles you’re interested in</p>
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

function KeyboardArrowDown() {
  return (
    <div className="relative size-[32px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="keyboard_arrow_down">
          <mask height="32" id="mask0_31_569" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_31_569)">
            <path d={svgPaths.p297b7480} fill="var(--fill-0, #FAF9F6)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[903px]" data-name="Text">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[28px] text-center text-nowrap text-white">Search and select job titles</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <KeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start p-[16px] relative rounded-[4px] shrink-0" data-name="Menu">
      <div aria-hidden="true" className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text />
    </div>
  );
}

function Option() {
  return (
    <div className="relative shrink-0 w-full" data-name="Option">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[28px] text-center text-nowrap text-white">Option 1</p>
        </div>
      </div>
    </div>
  );
}

function Option1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Option">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[28px] text-center text-nowrap text-white">Option 2</p>
        </div>
      </div>
    </div>
  );
}

function Option2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Option">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[28px] text-center text-nowrap text-white">Option 3</p>
        </div>
      </div>
    </div>
  );
}

function Option3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Option">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[28px] text-center text-nowrap text-white">Option 4</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Options">
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
    </div>
  );
}

function DropdownMenu() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[282px] items-start relative rounded-[4px] shrink-0 w-[935px]" data-name="Dropdown Menu">
      <Menu />
      <Options />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <DropdownMenu />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[96px] items-center left-[calc(50%-0.5px)] top-[220px] translate-x-[-50%]" data-name="Content">
      <ProgressTitle />
      <Frame1 />
    </div>
  );
}

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

function LayoutTag() {
  return (
    <div className="absolute contents h-[96px] left-[calc(50%+768px)] top-[473px] w-[89px]" data-name="Layout tag">
      <div className="absolute flex h-[96px] items-center justify-center left-[calc(50%+768px)] top-[473px] w-[36px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[96px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[calc(50%+833.5px)] not-italic text-[#8bff7e] text-[28px] text-center top-[511.02px] translate-x-[-50%] w-[47px]">96px</p>
    </div>
  );
}

export default function OnboardingStep() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Onboarding step 4">
      <Frame2 />
      <div className="absolute flex h-[1265.3px] items-center justify-center left-[calc(50%+0.44px)] top-[350px] translate-x-[-50%] w-[1532.834px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[85.214deg]">
          <div className="h-[1442px] relative w-[1149px]" data-name="Ellipse 10 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEllipse101} />
          </div>
        </div>
      </div>
      <Content />
      <NavBar />
      <LayoutTag />
    </div>
  );
}