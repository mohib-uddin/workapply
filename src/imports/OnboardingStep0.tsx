import svgPaths from "./svg-q3q1toziwl";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";

function Notifications() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="notifications">
          <mask height="24" id="mask0_10_340" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_10_340)">
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] gap-[24px] items-start not-italic relative shrink-0 text-center text-white w-[1490px]">
      <p className="leading-[52px] relative shrink-0 text-[52px] w-full">
        Next, let’s set up your preferences.
        <br aria-hidden="true" />
        {` Tell us about yourself so we can surface opportunities that fit you best.`}
      </p>
      <p className="leading-[28px] relative shrink-0 text-[28px] w-full">You only have to do this once!</p>
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
      <p className="font-['Pavanam:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[40px] text-black text-nowrap">Let’s go</p>
      <ArrowForward />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[148px] items-center left-1/2 top-[312px] translate-x-[-50%] w-[1490px]">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[52px] min-w-full not-italic relative shrink-0 text-[52px] text-center text-white w-[min-content]">Thank you for uploading your resume, Miles!</p>
      <Frame2 />
      <Button />
    </div>
  );
}

function LayoutTag() {
  return (
    <div className="absolute contents h-[146px] left-[1753px] top-[366px] w-[98px]" data-name="Layout tag">
      <div className="absolute flex h-[146px] items-center justify-center left-[1753px] top-[366px] w-[36px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[146px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[1818.5px] not-italic text-[#8bff7e] text-[28px] text-center text-nowrap top-[423.82px] translate-x-[-50%]">148px</p>
    </div>
  );
}

function LayoutTag1() {
  return (
    <div className="absolute contents h-[101px] left-[1753px] top-[687px] w-[98px]" data-name="Layout tag">
      <div className="absolute flex h-[101px] items-center justify-center left-[1753px] top-[687px] w-[36px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[101px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[1818.5px] not-italic text-[#8bff7e] text-[28px] text-center text-nowrap top-[727px] translate-x-[-50%]">148px</p>
    </div>
  );
}

export default function OnboardingStep() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Onboarding step 0">
      <div className="absolute left-[300px] size-[1291px] top-[123px]">
        <div className="absolute inset-[-6.92%_-7.47%_-5.91%_-6.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1473.75 1456.64" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Ellipse 9"></g>
            <defs>
              <g data-figma-scatter="f0.55_w0_aj180_sj0.61_r111_s9403672739201250524_sw120" data-figma-scatter-ref="stroke0_13_542_ref" id="stroke0_13_542">
                <path d={svgPaths.p3df66900} fill="var(--stroke-0, #8149E4)" fillOpacity="0.5" />
              </g>
              <path d={svgPaths.p26259f00} id="stroke0_13_542_ref" />
            </defs>
          </svg>
        </div>
      </div>
      <NavBar />
      <Frame1 />
      <LayoutTag />
      <LayoutTag1 />
    </div>
  );
}