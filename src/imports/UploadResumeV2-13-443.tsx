import svgPaths from "./svg-xdcnv4t029";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] gap-[16px] items-center justify-center not-italic relative shrink-0 text-center text-nowrap text-white w-full">
      <p className="leading-[52px] relative shrink-0 text-[52px]">Let’s start with your resume</p>
      <p className="leading-[28px] relative shrink-0 text-[28px]">We want to get to know you better so we can gather the best opportunities for you</p>
    </div>
  );
}

function TitleV() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Title v2">
      <Frame3 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[62px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
        <g id="Group 1">
          <circle cx="31" cy="31" fill="var(--fill-0, #1A1A1A)" id="Ellipse 19" r="31" />
          <g id="upload">
            <mask height="51" id="mask0_10_344" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="51" x="6" y="5">
              <rect fill="var(--fill-0, #FAF9F6)" height="50" id="Bounding box" width="50" x="6.29663" y="5.88745" />
            </mask>
            <g mask="url(#mask0_10_344)">
              <path d={svgPaths.p1869ab40} fill="var(--fill-0, #FAF9F6)" id="upload_2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pb-[5px] pt-0 px-0 top-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#faf9f6] text-[28px] text-nowrap">Browse</p>
    </div>
  );
}

function Link14PxWhiteOnHoverPurpleUnderline() {
  return (
    <div className="h-[28px] relative shrink-0 w-[82px]" data-name="Link [14px][white][on hover; Purple underline]">
      <Text />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[28px] text-center text-nowrap text-white">Drag and drop to upload or</p>
      <Link14PxWhiteOnHoverPurpleUnderline />
    </div>
  );
}

function Subheading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Subheading">
      <Frame1 />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#9ba1a5] text-[28px] text-center w-full">Supported file types .pdf, .png</p>
      <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#9ba1a5] text-[28px] text-center w-full">Maximum file size: 10MB</p>
    </div>
  );
}

function UploadSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center justify-center left-0 p-[80px] rounded-[8px] top-0 w-[1344px]" data-name="Upload Section">
      <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Group />
      <Subheading />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#1a1a1a] h-[338px] relative shrink-0 w-full">
      <UploadSection />
      <div className="absolute bg-[#faf9f6] h-[10px] left-[2px] rounded-[5.5px] top-[2px] w-[756px]" />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[96px] items-center justify-center left-1/2 top-[263px] translate-x-[-50%] w-[1344px]" data-name="Content">
      <TitleV />
      <Frame2 />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#9ba1a5] text-[28px] text-center w-full">Your resume will be processed securely and confidentially</p>
    </div>
  );
}

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
    <div className="absolute bg-[#1a1a1a] content-stretch flex items-center justify-between left-0 px-[50px] py-[10px] top-0 w-[1920px]" data-name="Nav Bar">
      <div className="relative shrink-0 size-[50px]" data-name="Logo 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo4} />
      </div>
      <Frame />
    </div>
  );
}

function LayoutTag() {
  return (
    <div className="absolute contents left-[288px] top-[134px]" data-name="Layout tag">
      <div className="absolute border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] left-[288px] top-[164px] w-[1344px]" />
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[1004.1px] not-italic text-[#8bff7e] text-[28px] text-center top-[134px] translate-x-[-50%] w-[91px]">70% vw</p>
    </div>
  );
}

function LayoutTag1() {
  return (
    <div className="absolute contents h-[101px] left-[1718px] top-[354px] w-[94px]" data-name="Layout tag">
      <div className="absolute flex h-[101px] items-center justify-center left-[1718px] top-[354px] w-[36px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[101px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[1783px] not-italic text-[#8bff7e] text-[28px] text-center text-nowrap top-[394px] translate-x-[-50%]">96px</p>
    </div>
  );
}

function LayoutTag2() {
  return (
    <div className="absolute contents h-[101px] left-[1711px] top-[793px] w-[94px]" data-name="Layout tag">
      <div className="absolute flex h-[101px] items-center justify-center left-[1711px] top-[793px] w-[36px]" style={{ "--transform-inner-width": "4", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[101px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[1776px] not-italic text-[#8bff7e] text-[28px] text-center text-nowrap top-[833px] translate-x-[-50%]">96px</p>
    </div>
  );
}

export default function UploadResumeV() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Upload Resume v2">
      <div className="absolute left-[422px] size-[1077px] top-[364px]">
        <div className="absolute inset-[-4.09%_-5.97%_-5.45%_-5.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1202.54 1179.66" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Ellipse 9"></g>
            <defs>
              <g data-figma-scatter="f0.55_w0_aj180_sj0.61_r111_s9403672739201250524_sw80" data-figma-scatter-ref="stroke0_10_350_ref" id="stroke0_10_350">
                <path d={svgPaths.p2af38b80} fill="var(--stroke-0, #8149E4)" fillOpacity="0.5" />
              </g>
              <path d={svgPaths.p13d77180} id="stroke0_10_350_ref" />
            </defs>
          </svg>
        </div>
      </div>
      <Content />
      <NavBar />
      <LayoutTag />
      <LayoutTag1 />
      <LayoutTag2 />
    </div>
  );
}