import svgPaths from "./svg-36ytdz2a6r";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";

function ProgressIndicator() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Progress indicator">
      <div className="[grid-area:1_/_1] bg-[#1a1a1a] h-[25px] ml-0 mt-[5px] w-[1600px]" />
      <div className="[grid-area:1_/_1] bg-[#611dcd] h-[35px] ml-0 mt-0 rounded-[1px] w-[80px]" />
      <p className="[grid-area:1_/_1] font-['Pavanam:Regular',sans-serif] leading-[22px] ml-[1634px] mt-[7px] not-italic relative text-[20px] text-center text-nowrap text-white translate-x-[-50%]">1 of 20</p>
    </div>
  );
}

function ArrowTopLeft() {
  return (
    <div className="relative size-[28px]" data-name="arrow_top_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="arrow_top_left">
          <mask height="28" id="mask0_29_131" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
          </mask>
          <g mask="url(#mask0_29_131)">
            <path d={svgPaths.pa520dc0} fill="var(--fill-0, #FAF9F6)" id="arrow_top_left_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Arrow Button">
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
    <div className="basis-0 content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] gap-[12px] grow items-center min-h-px min-w-px not-italic relative shrink-0 text-center text-white" data-name="Title">
      <p className="leading-[52px] relative shrink-0 text-[52px] w-full">Are you currently living in the United States?</p>
      <p className="leading-[28px] relative shrink-0 text-[28px] w-full">This helps us source the most relevant opportunities for you</p>
    </div>
  );
}

function TitleBackButton() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title + back button">
      <ArrowButton />
      <Title />
    </div>
  );
}

function ProgressIndicatorTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[66px] items-start relative shrink-0" data-name="Progress Indicator + Title">
      <ProgressIndicator />
      <TitleBackButton />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[40px] text-center text-nowrap text-white">Yes</p>
        </div>
      </div>
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[40px] text-center text-nowrap text-white">No</p>
        </div>
      </div>
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-center p-[16px] relative rounded-[4px] shrink-0" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[40px] text-center text-nowrap text-white">Prefer not to say</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-[810px]">
      <RadioButton />
      <RadioButton1 />
      <RadioButton2 />
    </div>
  );
}

function ArrowForward() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward">
          <path d={svgPaths.p54e7200} fill="var(--fill-0, white)" id="icon" />
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
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[661px]">
      <Button />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[28px] text-center text-white w-[min-content]">You can always update this later in your profile</p>
    </div>
  );
}

function Contnet() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[96px] items-center justify-center left-1/2 top-[174px] translate-x-[-50%] w-[1920px]" data-name="Contnet">
      <ProgressIndicatorTitle />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Notifications() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="notifications">
          <mask height="24" id="mask0_29_137" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_29_137)">
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
    <div className="absolute contents h-[96px] left-[1727px] top-[366px] w-[89px]" data-name="Layout tag">
      <div className="absolute flex h-[96px] items-center justify-center left-[1727px] top-[366px] w-[36px]" style={{ "--transform-inner-width": "3.328125", "--transform-inner-height": "1.65625" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[96px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[1792.5px] not-italic text-[#8bff7e] text-[28px] text-center top-[404.02px] translate-x-[-50%] w-[47px]">96px</p>
    </div>
  );
}

function LayoutTag1() {
  return (
    <div className="absolute contents h-[96px] left-[1727px] top-[535px] w-[89px]" data-name="Layout tag">
      <div className="absolute flex h-[96px] items-center justify-center left-[1727px] top-[535px] w-[36px]" style={{ "--transform-inner-width": "3.328125", "--transform-inner-height": "1.65625" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[96px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[1792.5px] not-italic text-[#8bff7e] text-[28px] text-center top-[573.02px] translate-x-[-50%] w-[47px]">96px</p>
    </div>
  );
}

export default function OnboardingStep() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Onboarding step 1">
      <div className="absolute flex items-center justify-center left-[calc(50%-1.5px)] size-[1806.798px] top-[254.1px] translate-x-[-50%]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[36.737deg]">
          <div className="relative size-[1291px]">
            <div className="absolute inset-[-6.92%_-7.47%_-5.91%_-6.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1473.75 1456.64" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Ellipse 9"></g>
                <defs>
                  <g data-figma-scatter="f0.55_w0_aj180_sj0.61_r111_s9403672739201250524_sw120" data-figma-scatter-ref="stroke0_29_135_ref" id="stroke0_29_135">
                    <path d={svgPaths.p3df66900} fill="var(--stroke-0, #8149E4)" fillOpacity="0.4" />
                  </g>
                  <path d={svgPaths.p26259f00} id="stroke0_29_135_ref" />
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Contnet />
      <NavBar />
      <LayoutTag />
      <LayoutTag1 />
    </div>
  );
}