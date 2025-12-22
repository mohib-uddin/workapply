import svgPaths from "./svg-mi6e3fakxq";
import imgWaveCircleWhite200X2001 from "figma:asset/0a4654ea4398cf8f615304c83010e8a0c575f917.png";

function InputField() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#9ba1a5] text-[28px] text-nowrap">Email</p>
        </div>
      </div>
    </div>
  );
}

function InputField1() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="Input Field">
      <div aria-hidden="true" className="absolute border border-[#9ba1a5] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#9ba1a5] text-[28px] text-nowrap">Password</p>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pb-[5px] pt-0 px-0 top-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#faf9f6] text-[20px] text-nowrap">Forgot password?</p>
    </div>
  );
}

function Link14PxWhiteOnHoverPurpleUnderline() {
  return (
    <div className="basis-0 grow h-[18px] min-h-px min-w-px relative shrink-0" data-name="Link [14px][white][on hover; Purple underline]">
      <Text />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-[482px]">
      <Link14PxWhiteOnHoverPurpleUnderline />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <InputField />
      <InputField1 />
      <Frame />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#faf9f6] relative rounded-[35px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Pavanam:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[40px] text-black text-nowrap">Login</p>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pb-[5px] pt-0 px-0 top-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Pavanam:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#faf9f6] text-[20px] text-nowrap">Sign up here.</p>
    </div>
  );
}

function Link14PxWhiteOnHoverPurpleUnderline1() {
  return (
    <div className="basis-0 grow h-[18px] min-h-px min-w-px relative shrink-0" data-name="Link [14px][white][on hover; Purple underline]">
      <Text1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#faf9f6] text-[20px] text-nowrap">New to WorkApply?</p>
      <Link14PxWhiteOnHoverPurpleUnderline1 />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-start justify-center left-[calc(75%+15px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[672px]" data-name="Form">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[52px] not-italic relative shrink-0 text-[52px] text-white w-full">Sign in to your account</p>
      <Frame2 />
      <Button />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <div className="relative shrink-0 size-[60px]" data-name="Wave_Circle_White_200x200 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWaveCircleWhite200X2001} />
      </div>
      <p className="font-['Pavanam:Regular',sans-serif] leading-[52px] not-italic relative shrink-0 text-[52px] text-center text-nowrap text-white">WorkApply</p>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] items-start left-[755px] top-1/2 translate-y-[-50%] w-[700px]" data-name="Left Content">
      <p className="font-['Pavanam:Regular',sans-serif] leading-[52px] not-italic relative shrink-0 text-[52px] text-right text-white w-full">Find your next job with</p>
      <Frame1 />
    </div>
  );
}

function LeftFrame() {
  return (
    <div className="absolute h-[1080px] left-0 overflow-clip top-0 w-[960px]" data-name="Left Frame">
      <LeftContent />
    </div>
  );
}

function Wave() {
  return (
    <div className="h-[100.264px] relative w-[263.925px]" data-name="Wave">
      <div className="absolute inset-[-12.47%_-0.69%_-12.47%_-0.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268.078 125.266">
          <g id="Wave">
            <path d={svgPaths.p1e8d2440} id="Vector 13" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p1da6f000} id="Vector 16" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.pa154980} id="Vector 14" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p39be0f00} id="Vector 15" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p2e7b0b80} id="Vector 17" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wave1() {
  return (
    <div className="h-[100.264px] relative w-[262.425px]" data-name="Wave">
      <div className="absolute inset-[-12.47%_-0.69%_-12.47%_-0.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 265.751 125.266">
          <g id="Wave">
            <path d={svgPaths.p128f7c00} id="Vector 13" stroke="var(--stroke-0, white)" strokeWidth="25" />
            <path d={svgPaths.p2d6ae500} id="Vector 16" stroke="var(--stroke-0, white)" strokeWidth="25" />
            <path d={svgPaths.p5972480} id="Vector 14" stroke="var(--stroke-0, white)" strokeWidth="25" />
            <path d={svgPaths.p14f06dc0} id="Vector 15" stroke="var(--stroke-0, white)" strokeWidth="25" />
            <path d={svgPaths.p2526c000} id="Vector 17" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wave2() {
  return (
    <div className="h-[100.264px] relative w-[262.425px]" data-name="Wave">
      <div className="absolute inset-[-12.47%_-0.69%_-12.47%_-0.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 265.751 125.266">
          <g id="Wave">
            <path d={svgPaths.p95ee940} id="Vector 13" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p1d733440} id="Vector 16" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p3894e880} id="Vector 14" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p14f06dc0} id="Vector 15" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p2526c000} id="Vector 17" stroke="var(--stroke-0, white)" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wave3() {
  return (
    <div className="h-[100.264px] relative w-[314.425px]" data-name="Wave">
      <div className="absolute inset-[-12.47%_-0.41%_-12.47%_-0.48%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317.232 125.266">
          <g id="Wave">
            <path d={svgPaths.pf073700} id="Vector 13" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p35591280} id="Vector 16" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.pf4af900} id="Vector 14" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p14f06dc0} id="Vector 15" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p25be2e80} id="Vector 18" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
            <path d={svgPaths.p2560b700} id="Vector 17" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LogoWave() {
  return (
    <div className="absolute contents h-[1101.925px] left-[110px] top-[-19px] w-[100.264px]" data-name="Logo_Wave">
      <div className="absolute flex h-[263.925px] items-center justify-center left-[110px] top-[-19px] w-[100.264px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Wave />
        </div>
      </div>
      <div className="absolute flex h-[262.425px] items-center justify-center left-[110px] top-[244.5px] w-[100.264px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <Wave1 />
        </div>
      </div>
      <div className="absolute flex h-[262.425px] items-center justify-center left-[110px] top-[506.5px] w-[100.264px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Wave2 />
        </div>
      </div>
      <div className="absolute flex h-[314.425px] items-center justify-center left-[110px] top-[768.5px] w-[100.264px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <Wave3 />
        </div>
      </div>
    </div>
  );
}

function LayoutTag() {
  return (
    <div className="absolute contents left-1/2 top-[-105px]" data-name="Layout tag">
      <div className="absolute border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] left-1/2 top-[-75px] w-[960px]" />
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[calc(50%+511.5px)] not-italic text-[#8bff7e] text-[28px] text-center text-nowrap top-[-105px] translate-x-[-50%]">50% vw</p>
    </div>
  );
}

function LayoutTag1() {
  return (
    <div className="absolute contents left-[calc(50%+141px)] top-[190px]" data-name="Layout tag">
      <div className="absolute border-[#8bff7e] border-[2px_2px_0px] border-solid h-[36px] left-[calc(50%+141px)] top-[223px] w-[703px]" />
      <p className="absolute font-['Pavanam:Regular',sans-serif] leading-[28px] left-[calc(50%+516.98px)] not-italic text-[#8bff7e] text-[28px] text-center text-nowrap top-[190px] translate-x-[-50%]">70% of container</p>
    </div>
  );
}

export default function LoginPageV() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Login page v2">
      <Form />
      <LeftFrame />
      <LogoWave />
      <div className="absolute flex h-[901px] items-center justify-center left-1/2 top-[102px] translate-x-[-50%] w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[901px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 901 1">
                <line id="Line 18" stroke="var(--stroke-0, #9BA1A5)" x2="901" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <LayoutTag />
      <LayoutTag1 />
    </div>
  );
}