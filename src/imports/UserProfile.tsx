import svgPaths from "./svg-rhxy4hrq0z";
import imgEllipse25 from "figma:asset/0ac032a0fe674838ee325c4730b1ba299bfc7fcd.png";
import imgWaveCircleWhite50X501 from "figma:asset/85ef7a7284b26057657fc5cbaeefab0d1429915e.png";

function ProfileDetails() {
  return (
    <div className="basis-0 bg-[#faf9f6] grow min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Profile details">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">
            <p className="leading-[24px]">Profile Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Subscriptions() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Subscriptions">
      <div aria-hidden="true" className="absolute border border-[#faf9f6] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[20px] text-center text-nowrap">
            <p className="leading-[24px]">Subscription Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0 w-[402px]" data-name="Tab">
      <ProfileDetails />
      <Subscriptions />
    </div>
  );
}

function PhotoName() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full" data-name="Photo + name">
      <div className="relative shrink-0 size-[136px]">
        <img alt="" className="block max-w-none size-full" height="136" src={imgEllipse25} width="136" />
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#faf9f6] text-[28px] text-center w-[min-content]">
        <p className="leading-[28px]">Michael Greenbaum</p>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="work">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="work">
          <mask height="12" id="mask0_40_1698" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_40_1698)">
            <path d={svgPaths.p2faa1100} fill="var(--fill-0, #FAF9F6)" id="work_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Work />
      <div className="basis-0 flex flex-col font-['Pavanam:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
        <p className="leading-[18px]">Software Engineer</p>
      </div>
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="mail">
          <mask height="12" id="mask0_40_1717" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_40_1717)">
            <path d={svgPaths.p1e747100} fill="var(--fill-0, #FAF9F6)" id="mail_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Mail />
      <div className="basis-0 flex flex-col font-['Pavanam:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
        <p className="leading-[18px]">michael@gmail.com</p>
      </div>
    </div>
  );
}

function LocationOn() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="location_on">
          <mask height="12" id="mask0_40_1690" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_40_1690)">
            <path d={svgPaths.pfd825f0} fill="var(--fill-0, #FAF9F6)" id="location_on_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <LocationOn />
      <div className="basis-0 flex flex-col font-['Pavanam:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
        <p className="leading-[18px]">New York, NY</p>
      </div>
    </div>
  );
}

function Basic() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="basic">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Roboto_Flex:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[12px]">in</p>
      </div>
      <div className="basis-0 flex flex-col font-['Pavanam:Regular',sans-serif] grow justify-center min-h-px min-w-px relative shrink-0 text-[#faf9f6] text-[16px]">
        <p className="leading-[18px]">linkedin.com/michaleg</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="link">
          <mask height="12" id="mask0_40_1702" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_40_1702)">
            <path d={svgPaths.p28975300} fill="var(--fill-0, #FAF9F6)" id="link_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <Link />
      <div className="basis-0 flex flex-col font-['Pavanam:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
        <p className="leading-[18px]">portfolio.com</p>
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Socials">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Send() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="send">
          <mask height="12" id="mask0_40_1694" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_40_1694)">
            <path d={svgPaths.p3ab7dd80} fill="var(--fill-0, #FAF9F6)" id="send_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Applications() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Applications">
      <Send />
      <div className="basis-0 flex flex-col font-['Pavanam:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
        <p className="leading-[18px]">167 applications sent</p>
      </div>
    </div>
  );
}

function ProfileDeets() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[221px]" data-name="Profile deets">
      <Basic />
      <Socials />
      <Applications />
    </div>
  );
}

function ProfileInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Profile Info">
      <PhotoName />
      <ProfileDeets />
    </div>
  );
}

function ButtonV() {
  return (
    <div className="bg-[#faf9f6] relative rounded-[35px] shrink-0 w-full" data-name="Button v2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Edit Profile</p>
        </div>
      </div>
    </div>
  );
}

function ProfileButton() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Profile + button">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[17px] items-center pb-[20px] pt-[50px] px-[12px] relative w-full">
          <ProfileInfo />
          <ButtonV />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[28px] text-center w-[92px]">
        <p className="leading-[28px]">Resume</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="text">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-center text-nowrap">
        <p className="leading-[18px]">Michael_Greenbaum_Resume.pdf</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="text">
      <div className="basis-0 flex flex-col font-['Pavanam:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faf9f6] text-[16px]">
        <p className="leading-[18px]">Last Uploaded: 1/7/2025, 1:24 AM PDT</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <Text5 />
      <Text6 />
    </div>
  );
}

function ArrowTopRight() {
  return (
    <div className="relative size-[17px]" data-name="arrow_top_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="arrow_top_right">
          <mask height="17" id="mask0_40_1713" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="17" id="Bounding box" width="17" />
          </mask>
          <g mask="url(#mask0_40_1713)">
            <path d={svgPaths.p3b1034c0} fill="var(--fill-0, white)" id="arrow_top_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Button 2">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Preview Resume</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowTopRight />
        </div>
      </div>
    </div>
  );
}

function ButtonV1() {
  return (
    <div className="bg-[#faf9f6] relative rounded-[35px] shrink-0 w-full" data-name="Button v2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Upload</p>
        </div>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Resume">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Title />
          <Frame />
          <Button />
          <ButtonV1 />
        </div>
      </div>
    </div>
  );
}

function LeftProfile() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[311px]" data-name="Left Profile">
      <ProfileButton />
      <Resume />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="edit">
          <path d={svgPaths.p7fe0970} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonV2() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[35px] shrink-0" data-name="Button v2">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Edit</p>
      <Edit />
    </div>
  );
}

function TitleEditButton() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title + Edit button">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-nowrap text-white">
        <p className="leading-[28px]">Job Preferences</p>
      </div>
      <ButtonV2 />
    </div>
  );
}

function BulletPoint() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Job Titles</p>
      </div>
    </div>
  );
}

function BulletPoint1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bullet point">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
            <p className="leading-[18px]">Work Location Preference</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BulletPoint2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Employment Type</p>
      </div>
    </div>
  );
}

function BulletPoint3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Target Industries</p>
      </div>
    </div>
  );
}

function BulletPoint4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Target Salary</p>
      </div>
    </div>
  );
}

function BulletPoint5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Open to Relocation?</p>
      </div>
    </div>
  );
}

function BulletPoint6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Sponsorship Required?</p>
      </div>
    </div>
  );
}

function BulletPoint7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bullet point">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
            <p className="leading-[18px]">Work Authorization Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BulletPoint8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Security clearance</p>
      </div>
    </div>
  );
}

function Labels() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[203px]" data-name="Labels">
      <BulletPoint />
      <BulletPoint1 />
      <BulletPoint2 />
      <BulletPoint3 />
      <BulletPoint4 />
      <BulletPoint5 />
      <BulletPoint6 />
      <BulletPoint7 />
      <BulletPoint8 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[10px] h-full items-center justify-center p-[4px] relative rounded-[2px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[2.5px]" />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">Software Engineer</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[10px] h-full items-center justify-center p-[4px] relative rounded-[2px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[2.5px]" />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">Data Engineer</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[10px] h-full items-center justify-center p-[4px] relative rounded-[2px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[2.5px]" />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">Data Analyst</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24px] h-[26px] items-center relative shrink-0">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[10px] h-full items-center justify-center p-[4px] relative rounded-[2px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[2.5px]" />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">Remote</p>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[10px] h-full items-center justify-center p-[4px] relative rounded-[2px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[2.5px]" />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">Hybrid</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[24px] h-[26px] items-center relative shrink-0">
      <Tag3 />
      <Tag4 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Full time</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Contract</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[24px] h-[26px] items-center relative shrink-0">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Biotechnology</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#9ba1a5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Cybersecurity</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[24px] h-[26px] items-center relative shrink-0">
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Deet() {
  return (
    <div className="content-stretch flex items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Deet">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">$98k - $120k</p>
      </div>
    </div>
  );
}

function Deet1() {
  return (
    <div className="content-stretch flex items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Deet">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[87px]">
        <p className="leading-[18px]">Yes</p>
      </div>
    </div>
  );
}

function Deet2() {
  return (
    <div className="content-stretch flex items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Deet">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[18px]">No</p>
      </div>
    </div>
  );
}

function Deet3() {
  return (
    <div className="content-stretch flex items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Deet">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">US Citizen</p>
      </div>
    </div>
  );
}

function Deet4() {
  return (
    <div className="content-stretch flex items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Deet">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">No</p>
      </div>
    </div>
  );
}

function Labels1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Labels">
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Deet />
      <Deet1 />
      <Deet2 />
      <Deet3 />
      <Deet4 />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Details">
      <Labels />
      <Labels1 />
    </div>
  );
}

function JobPrefrences() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Job Prefrences">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[23px] items-start p-[32px] relative w-full">
          <TitleEditButton />
          <Details />
        </div>
      </div>
    </div>
  );
}

function Edit1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="edit">
          <path d={svgPaths.p7fe0970} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonV3() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[35px] shrink-0" data-name="Button v2">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Edit</p>
      <Edit1 />
    </div>
  );
}

function TitleEdit() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title + edit">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-nowrap text-white">
        <p className="leading-[28px]">Professional Background</p>
      </div>
      <ButtonV3 />
    </div>
  );
}

function BulletPoint9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Employment Status</p>
      </div>
    </div>
  );
}

function BulletPoint10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Experience Level</p>
      </div>
    </div>
  );
}

function BulletPoint11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Years of Experience</p>
      </div>
    </div>
  );
}

function BulletPoint12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Education</p>
      </div>
    </div>
  );
}

function Labels2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Labels">
      <BulletPoint9 />
      <BulletPoint10 />
      <BulletPoint11 />
      <BulletPoint12 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Currently employed</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Junior level</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">2 years</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">B.S. Informatics, University of California, Berkeley</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Info">
      <Frame1 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Details">
      <Labels2 />
      <Info />
    </div>
  );
}

function ProfessionalBackground() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Professional Background">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[23px] items-start p-[30px] relative w-full">
          <TitleEdit />
          <Details1 />
        </div>
      </div>
    </div>
  );
}

function Edit2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="edit">
          <path d={svgPaths.p7fe0970} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonV4() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[35px] shrink-0" data-name="Button v2">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Edit</p>
      <Edit2 />
    </div>
  );
}

function TitleEdit1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title + edit">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-nowrap text-white">
        <p className="leading-[28px]">Demographics</p>
      </div>
      <ButtonV4 />
    </div>
  );
}

function BulletPoint13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Gender</p>
      </div>
    </div>
  );
}

function BulletPoint14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Sexual Orientation</p>
      </div>
    </div>
  );
}

function BulletPoint15() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Ethnicity</p>
      </div>
    </div>
  );
}

function BulletPoint16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Bullet point">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 26" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Disability</p>
      </div>
    </div>
  );
}

function Labels3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Labels">
      <BulletPoint13 />
      <BulletPoint14 />
      <BulletPoint15 />
      <BulletPoint16 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Male</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Heterosexual</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">American</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0">
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">None</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Info">
      <Frame5 />
      <Frame16 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Details">
      <Labels3 />
      <Info1 />
    </div>
  );
}

function Demographics() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Demographics">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[23px] items-start p-[30px] relative w-full">
          <TitleEdit1 />
          <Details2 />
        </div>
      </div>
    </div>
  );
}

function ProfileInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Profile Info">
      <JobPrefrences />
      <ProfessionalBackground />
      <Demographics />
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1012px]" data-name="Right Content">
      <ProfileInfo1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <LeftProfile />
      <RightContent />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-[273px] top-[121px] w-[1344px]" data-name="Content">
      <Tab />
      <Frame20 />
    </div>
  );
}

function LayoutTag() {
  return (
    <div className="absolute contents left-[273px] top-[70px]" data-name="Layout tag">
      <div className="absolute border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] left-[273px] top-[100px] w-[1344px]" />
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[989.1px] not-italic text-[#8bff7e] text-[28px] text-center top-[70px] translate-x-[-50%] w-[91px]">70% vw</p>
    </div>
  );
}

function LayoutTag1() {
  return (
    <div className="absolute contents left-[273px] top-[130px]" data-name="Layout tag">
      <div className="absolute border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] left-[273px] top-[160px] w-[309px]" />
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[437.68px] not-italic text-[#8bff7e] text-[28px] text-center text-nowrap top-[130px] translate-x-[-50%]">20%</p>
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
      <div className="flex flex-col font-['Pavanam:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[18px]">Job Queue</p>
      </div>
    </div>
  );
}

function Applications1() {
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
      <Applications1 />
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
          <mask height="28" id="mask0_40_1680" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
            <rect fill="var(--fill-0, #FAF9F6)" height="28" id="Bounding box" width="28" />
          </mask>
          <g mask="url(#mask0_40_1680)">
            <g id="Rectangle 48">
              <mask fill="black" height="26" id="path-2-outside-1_40_1680" maskUnits="userSpaceOnUse" width="24" x="1" y="2">
                <rect fill="white" height="26" width="24" x="1" y="2" />
                <path d="M1 2H25V26H1V2Z" />
              </mask>
              <path d="M25 26V24H1V26V28H25V26Z" fill="var(--stroke-0, #611DCD)" mask="url(#path-2-outside-1_40_1680)" />
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

export default function UserProfile() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="User Profile">
      <div className="absolute left-[calc(50%-788px)] size-[796px] top-[593px] translate-x-[-50%]">
        <div className="absolute inset-[-7.75%_-10.09%_-7.44%_-8.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 945.062 916.916" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Ellipse 9"></g>
            <defs>
              <g data-figma-scatter="f0.55_w0_aj180_sj0.61_r111_s9403672739201250524_sw100" data-figma-scatter-ref="stroke0_40_1706_ref" id="stroke0_40_1706">
                <path d={svgPaths.p3df66900} fill="var(--stroke-0, #8149E4)" fillOpacity="0.5" />
              </g>
              <path d={svgPaths.p1c7405f0} id="stroke0_40_1706_ref" />
            </defs>
          </svg>
        </div>
      </div>
      <Content />
      <LayoutTag />
      <LayoutTag1 />
      <TopNavBar />
    </div>
  );
}