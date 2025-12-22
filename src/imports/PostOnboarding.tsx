import svgPaths from "./svg-da6wtfarnd";
import imgLogo4 from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";

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

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] gap-[100px] items-center leading-[52px] left-[75px] not-italic text-[52px] text-center text-white top-1/2 translate-y-[-50%] w-[1773px]">
      <p className="relative shrink-0 w-full">Thank you for answering all our questions!</p>
      <p className="relative shrink-0 w-full">{`You're all set. We're now personalizing your job matches.`}</p>
    </div>
  );
}

export default function PostOnboarding() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Post Onboarding">
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
    </div>
  );
}