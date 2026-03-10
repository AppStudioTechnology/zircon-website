import svgPaths from "./svg-todgp7qly0";
import imgNavbar from "figma:asset/fd8f43b2f1287a0cc5ab0084c44366bbffc35bb7.png";
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #ABABAB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1811de30} id="Vector_2" stroke="var(--stroke-0, #ABABAB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[57.359px]" data-name="Container">
      <Frame />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ababab] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">Home</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #CC0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Frame1 />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cc0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">About Us</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center px-[80px] relative shrink-0">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[72px] not-italic relative shrink-0 text-[64px] text-center text-white whitespace-nowrap">
        <p className="mb-0">Where Innovation</p>
        <p>Meets Trust</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] pt-[8px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[32.5px] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="mb-0">A trusted enabler for healthcare solutions dedicated to enabling excellence</p>
        <p>across dental and medical practice.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[calc(50%+32.5px)] w-[1216px]" data-name="Container">
      <Frame24 />
      <Heading />
      <Container3 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Navbar">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavbar} />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-[116.609px]" data-name="Link">
      <Navbar />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[440px]">
      <Link />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center py-[4px] relative rounded-[40px] shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white w-[68px] whitespace-pre-wrap">Home</p>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Montserrat:Regular',sans-serif] leading-[24px] left-[38px] not-italic text-[14px] text-center text-white top-0">Solutions</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[95.563px]" data-name="Button">
      <Text />
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-white">More</p>
      <Icon1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[25px] items-center justify-center relative shrink-0">
      <Frame8 />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white w-[68px] whitespace-pre-wrap">About Us</p>
      <Button />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Our Partners</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Doctors Corner</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Events</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Education</p>
      <Frame23 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] h-[48px] items-center justify-center px-[20px] py-[4px] relative rounded-[56px] shrink-0 to-[#0088b3]">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">Contact Now</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-[440px]">
      <Frame2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#070707] content-stretch flex items-center justify-between left-1/2 pl-[24px] pr-[8px] py-[8px] rounded-[44px] top-0 w-[1280px]">
      <Frame6 />
      <Frame7 />
      <Frame5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-black h-[510px] left-[32px] overflow-clip rounded-[12px] top-[32px] w-[1376px]">
      <div className="absolute h-[594px] left-px top-[82px] w-[1376px]" data-name="Group 38167 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-15 md:opacity-20 mix-blend-screen" src={imgGroup381671} />
      </div>
      <Container />
      <Frame9 />
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-white h-[574px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 2">
      <Frame10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] h-[32px] items-center justify-center px-[24px] py-[4px] relative rounded-[56px] shrink-0 to-[#0088b3]">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white">About Us</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame4 />
      <p className="font-['Inter_Tight:Medium',sans-serif] font-['Montserrat:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#070707] text-[0px] text-[40px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[48px]">{`Zircon Medical Equipment is a trusted enabler for healthcare solutions dedicated to enabling excellence across dental and medical practice. We operate with a clear purpose: `}</span>
        <span className="leading-[48px] text-[#b1b1b1]">to make advanced innovation accessible, practical, and dependable for the professionals who deliver care every day.</span>
      </p>
    </div>
  );
}

function ArrowCircleRight() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ArrowCircleRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ArrowCircleRight">
          <path d={svgPaths.p2a145500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white">More About Us</p>
      <ArrowCircleRight />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] h-[48px] items-center justify-center pl-[24px] pr-[12px] py-[4px] relative rounded-[56px] shrink-0 to-[#0088b3]">
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame18 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p2d7c5000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3cccb600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center relative rounded-[12px] shrink-0 size-[48px] to-[#0088b3]" data-name="Background">
      <Svg />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323231] text-[30px] whitespace-nowrap">
        <p className="leading-[36px]">Our Vision</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Background />
      <Heading1 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[24px]" data-name="Background+Border+Shadow">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-start justify-center p-[32px] relative size-full">
          <Frame25 />
          <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[16px] w-full">
            <p className="leading-[28px] whitespace-pre-wrap">To be the GCC’s most trusted healthcare platform. Connecting global manufacturers with regional healthcare professionals. Delivering reliable, real world care through integrity and long term partnerships.</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3097f700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17b14c70} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center relative rounded-[12px] shrink-0 size-[48px] to-[#0088b3]" data-name="Background">
      <Svg1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323231] text-[30px] whitespace-nowrap">
        <p className="leading-[36px]">Our Mission</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Background1 />
      <Heading2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[16px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">To bridge global innovation with regional healthcare practice through a trusted, dynamic platform that empowers clinical professionals and amplifies the presence of global manufacturers shaping the future of care.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Background+Border+Shadow">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-start justify-center p-[32px] relative w-full">
          <Frame26 />
          <Container5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <BackgroundBorderShadow />
      </div>
      <BackgroundBorderShadow1 />
    </div>
  );
}

function FluentMdl2Commitments() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fluent-mdl2:commitments">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_27103)" id="fluent-mdl2:commitments">
          <path d={svgPaths.p4c1e7f1} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_27103">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stethoscope() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center overflow-clip px-px py-[2px] relative rounded-[48px] shrink-0 size-[48px] to-[#0088b3]" data-name="Stethoscope">
      <FluentMdl2Commitments />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[362px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 362 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="362" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#070707] text-[24px] w-[min-content] whitespace-pre-wrap">10+ Years of Experience</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#454545] text-[14px] w-[min-content] whitespace-pre-wrap">At Zircon, trust is not a statement it is a discipline. It defines how we think, how we act, and how we build lasting relationships across the healthcare ecosystem.</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070707] text-[16px] underline">Learn More</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[24px] shrink-0 w-[410px]">
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Stethoscope />
      <Frame11 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25.99px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.99 20">
        <g id="Group 38167">
          <path d={svgPaths.pa4cb080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stethoscope1() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center overflow-clip px-px py-[2px] relative rounded-[48px] shrink-0 size-[48px] to-[#0088b3]" data-name="Stethoscope">
      <Group />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[362px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 362 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="362" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#070707] text-[24px] w-[min-content] whitespace-pre-wrap">2. 500+ Devices Installed</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#454545] text-[14px] w-[min-content] whitespace-pre-wrap">We connect global manufacturers with regional healthcare professionals, bridging innovation and practice through trust, precision, and collaboration.</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070707] text-[16px] underline">Learn More</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[24px] shrink-0 w-[410px]">
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Stethoscope1 />
      <Frame13 />
    </div>
  );
}

function IxSupport() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ix:support">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ix:support">
          <path clipRule="evenodd" d={svgPaths.p309cdf00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Stethoscope2() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center overflow-clip px-px py-[2px] relative rounded-[48px] shrink-0 size-[48px] to-[#0088b3]" data-name="Stethoscope">
      <IxSupport />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[362px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 362 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="362" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#070707] text-[24px] w-[min-content] whitespace-pre-wrap">24/7 Technical Support</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#454545] text-[14px] w-[min-content] whitespace-pre-wrap">Driven by insight and committed to excellence as a habit, Zircon believes that care is not the end of the chain it is the beginning of everything.</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070707] text-[16px] underline">Learn More</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[24px] shrink-0 w-[410px]">
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Stethoscope2 />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame12 />
      <Frame17 />
      <Frame22 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-[1280px]">
      <Frame19 />
      <Container4 />
      <div className="h-0 relative shrink-0 w-[1280px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line 2" stroke="var(--stroke-0, #B1B1B1)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame15 />
    </div>
  );
}

function Desktop1() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 w-full" data-name="Desktop - 3">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[80px] py-[100px] relative w-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="About Us">
      <Desktop />
      <Desktop1 />
    </div>
  );
}