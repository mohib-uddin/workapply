import svgPaths from "./svg-hcgyk2p2de";
import imgWaveCircleWhite50X501 from "figma:asset/85ef7a7284b26057657fc5cbaeefab0d1429915e.png";

function Match() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Match">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[70px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[70px]">
            <div className="absolute inset-[0_0.35%_0.78%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.7572 69.4522">
                <path d={svgPaths.p218a8200} fill="var(--fill-0, #9BA1A5)" id="Ellipse 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam:Regular',sans-serif] justify-center ml-[35.5px] mt-[35px] not-italic relative text-[#faf9f6] text-[20px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[24px]">74%</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#faf9f6]" data-name="Title">
      <p className="leading-[28px] relative shrink-0 text-[28px] text-nowrap">Senior Software Engineer</p>
      <p className="leading-[24px] min-w-full relative shrink-0 text-[20px] w-[min-content]">TechCorp</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#faf9f6] text-[20px] text-nowrap">San Francisco, CA</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <p className="basis-0 font-['Pavanam:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[20px]">$98K-$100K</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#faf9f6] text-[20px] text-nowrap">2 days ago</p>
        </div>
      </div>
    </div>
  );
}

function Deets() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Deets">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function ArrowTopLeft() {
  return (
    <div className="relative size-[14px]" data-name="arrow_top_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow_top_left">
          <mask height="14" id="mask0_40_346" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="14" id="Bounding box" width="14" />
          </mask>
          <g mask="url(#mask0_40_346)">
            <path d={svgPaths.p2dcba880} fill="var(--fill-0, #FAF9F6)" id="arrow_top_left_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Arrow Button">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">View Details</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowTopLeft />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#faf9f6] relative rounded-[35px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[28px] text-black text-nowrap">Apply now</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Content">
      <Match />
      <Title />
      <Deets />
      <ArrowButton />
      <Button />
    </div>
  );
}

function JobCard() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-start mix-blend-saturation p-[32px] relative rounded-[4px] shrink-0 w-[342px]" data-name="Job Card">
      <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Content />
    </div>
  );
}

function Match1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Match">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[70px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[70px]">
            <div className="absolute inset-[0_0.35%_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.7574 70.0001">
                <path d={svgPaths.p2462a280} fill="var(--fill-0, #9BA1A5)" id="Ellipse 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam:Regular',sans-serif] justify-center ml-[35px] mt-[35px] not-italic relative text-[#faf9f6] text-[20px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[24px]">94%</p>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#faf9f6]" data-name="Title">
      <p className="leading-[28px] relative shrink-0 text-[28px] text-nowrap">Web Design Engineer</p>
      <p className="leading-[24px] min-w-full relative shrink-0 text-[20px] w-[min-content]">CorpTech</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#faf9f6] text-[20px] text-nowrap">Bellevue, WA</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <p className="basis-0 font-['Pavanam:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[20px]">$98K-$100K</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#faf9f6] text-[20px] text-nowrap">24h ago</p>
        </div>
      </div>
    </div>
  );
}

function Deets1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Deets">
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function ArrowTopLeft1() {
  return (
    <div className="relative size-[14px]" data-name="arrow_top_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow_top_left">
          <mask height="14" id="mask0_40_346" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="14" id="Bounding box" width="14" />
          </mask>
          <g mask="url(#mask0_40_346)">
            <path d={svgPaths.p2dcba880} fill="var(--fill-0, #FAF9F6)" id="arrow_top_left_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowButton1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Arrow Button">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">View Details</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowTopLeft1 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#faf9f6] relative rounded-[35px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[28px] text-black text-nowrap">Apply now</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[278px]" data-name="Content">
      <Match1 />
      <Title1 />
      <Deets1 />
      <ArrowButton1 />
      <Button1 />
    </div>
  );
}

function JobCard1() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start mix-blend-saturation p-[32px] relative rounded-[4px] shrink-0 w-[342px]" data-name="Job Card">
      <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Content1 />
    </div>
  );
}

function Match2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Match">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-0 relative size-[70px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[70px]">
            <div className="absolute inset-[0_0.35%_0.78%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.7572 69.4522">
                <path d={svgPaths.p218a8200} fill="var(--fill-0, #9BA1A5)" id="Ellipse 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Pavanam:Regular',sans-serif] justify-center ml-[35.5px] mt-[35px] not-italic relative text-[#faf9f6] text-[20px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[24px]">74%</p>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col font-['Pavanam:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#faf9f6]" data-name="Title">
      <p className="leading-[28px] relative shrink-0 text-[28px] text-nowrap">Software Engineer</p>
      <p className="leading-[24px] min-w-full relative shrink-0 text-[20px] w-[min-content]">Rise Tech</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#faf9f6] text-[20px] text-nowrap">Santa Clara, CA</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <p className="basis-0 font-['Pavanam:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[20px]">$98K-$100K</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#faf9f6] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#faf9f6] text-[20px] text-nowrap">2 days ago</p>
        </div>
      </div>
    </div>
  );
}

function Deets2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Deets">
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function ArrowTopLeft2() {
  return (
    <div className="relative size-[14px]" data-name="arrow_top_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow_top_left">
          <mask height="14" id="mask0_40_346" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="14" id="Bounding box" width="14" />
          </mask>
          <g mask="url(#mask0_40_346)">
            <path d={svgPaths.p2dcba880} fill="var(--fill-0, #FAF9F6)" id="arrow_top_left_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowButton2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Arrow Button">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">View Details</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowTopLeft2 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#faf9f6] relative rounded-[35px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[28px] text-black text-nowrap">Apply now</p>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Content">
      <Match2 />
      <Title2 />
      <Deets2 />
      <ArrowButton2 />
      <Button2 />
    </div>
  );
}

function JobCard2() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start mix-blend-saturation p-[32px] relative rounded-[4px] shrink-0 w-[342px]" data-name="Job Card">
      <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <Content2 />
    </div>
  );
}

function Jobs() {
  return (
    <div className="absolute content-stretch flex gap-[133px] items-center left-[312px] top-[383px] w-[1292px]" data-name="Jobs">
      <JobCard />
      <JobCard1 />
      <JobCard2 />
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
      <div aria-hidden="true" className="absolute border-[#611dcd] border-[0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Dashboard</p>
      </div>
    </div>
  );
}

function JobQueue() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center relative shrink-0" data-name="Job Queue">
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
          <mask height="28" id="mask0_40_333" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
          </mask>
          <g mask="url(#mask0_40_333)">
            <g id="Rectangle 48">
              <mask fill="black" height="26" id="path-2-outside-1_40_333" maskUnits="userSpaceOnUse" width="24" x="1" y="2">
                <rect fill="white" height="26" width="24" x="1" y="2" />
                <path d="M1 2H25V26H1V2Z" />
              </mask>
              <path d="M25 26V24H1V26V28H25V26Z" fill="var(--stroke-0, #611DCD)" mask="url(#path-2-outside-1_40_333)" />
            </g>
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
    <div className="absolute contents left-[630px] top-[904px]" data-name="Layout tag">
      <div className="absolute flex h-[36px] items-center justify-center left-[630px] top-[904px] w-[159px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[159px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[714.83px] not-italic text-[#8bff7e] text-[28px] text-center text-nowrap top-[950px] translate-x-[-50%]">Auto</p>
    </div>
  );
}

function LayoutTag2() {
  return (
    <div className="absolute contents left-[1134px] top-[904px]" data-name="Layout tag">
      <div className="absolute flex h-[36px] items-center justify-center left-[1134px] top-[904px] w-[159px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] w-[159px]" />
        </div>
      </div>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[1218.83px] not-italic text-[#8bff7e] text-[28px] text-center text-nowrap top-[950px] translate-x-[-50%]">Auto</p>
    </div>
  );
}

export default function GetStarted10TopNavBar() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Get Started 1.0 top nav bar">
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
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[52px] left-[calc(50%-388px)] not-italic text-[52px] text-nowrap text-white top-[212px]">Welcome To Your Job Search Journey!</p>
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[calc(50%-289px)] not-italic text-[28px] text-nowrap text-white top-[277px]">We’ve found you some great opportunities to explore</p>
      <Jobs />
      <TopNavBar />
      <LayoutTag />
      <LayoutTag1 />
      <LayoutTag2 />
    </div>
  );
}