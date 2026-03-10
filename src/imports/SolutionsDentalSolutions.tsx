import svgPaths from "./svg-dkkv2zaan2";
import imgNavbar from "figma:asset/fd8f43b2f1287a0cc5ab0084c44366bbffc35bb7.png";
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";

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

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[440px]">
      <Link />
    </div>
  );
}

function Frame40() {
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

function Frame43() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-white">More</p>
      <Icon1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[25px] items-center justify-center relative shrink-0">
      <Frame40 />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white w-[68px] whitespace-pre-wrap">About Us</p>
      <Button />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Our Partners</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Doctors Corner</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Events</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Education</p>
      <Frame43 />
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

function Frame6() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-[440px]">
      <Frame2 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#070707] content-stretch flex items-center justify-between left-1/2 pl-[24px] pr-[8px] py-[8px] rounded-[44px] top-0 w-[1280px]">
      <Frame8 />
      <Frame10 />
      <Frame6 />
    </div>
  );
}

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
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #CC0A63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Frame1 />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cc0a63] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">Solutions</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center px-[80px] relative shrink-0">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[72px] not-italic relative shrink-0 text-[64px] text-center text-white whitespace-nowrap">
        <p className="mb-0">Comprehensive Healthcare</p>
        <p>Solutions Portfolio</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] pt-[8px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[32.5px] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="mb-0">From dental implants to medical equipment, we provide end-to-end</p>
        <p>solutions for modern healthcare facilities.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[145px] w-[1216px]" data-name="Container">
      <Frame44 />
      <Heading />
      <Container3 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute bg-black h-[510px] left-[32px] overflow-clip rounded-[12px] top-[32px] w-[1376px]">
      <Frame41 />
      <div className="absolute h-[594px] left-0 top-0 w-[1376px]" data-name="Group 38167 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-15 md:opacity-20 mix-blend-screen" src={imgGroup381671} />
      </div>
      <Container />
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-white h-[574px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 2">
      <Frame42 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center not-italic relative shrink-0 text-center whitespace-pre-wrap">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[56px] min-w-full relative shrink-0 text-[#1b1b1b] text-[48px] w-[min-content]">Advanced Dental Solutions</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#575757] text-[14px] w-[888px]">Our comprehensive portfolio supports precision, efficiency, and confidence across modern healthcare environments. Each solution is carefully curated to meet the highest standards of quality, clinical relevance, and reliability.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_32_7041)" id="Frame">
          <path d={svgPaths.p189a4c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p3b0f9f40} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p170bea00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_32_7041">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame3 />
    </div>
  );
}

function ContainerBackgroundColor2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center p-[8px] relative rounded-[6.4px] shrink-0" data-name="Container+BackgroundColor">
      <Svg />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-[175px]" data-name="Container">
      <p className="font-['Montserrat:Bold',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-white">Implants</p>
      <p className="font-['Montserrat:Medium',sans-serif] h-[14.5px] leading-[14.5px] relative shrink-0 text-[#e9e9e9] text-[12px] w-full whitespace-pre-wrap">21 products</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function ButtonGradient() {
  return (
    <div className="bg-gradient-to-r from-[#dd005c] relative rounded-[12px] shrink-0 to-[#0088b3] w-full" data-name="Button+Gradient">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative w-full">
          <ContainerBackgroundColor2 />
          <Container8 />
          <Svg1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p2d92f400} id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M8 14.6667V8" id="Vector_2" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p332e8680} id="Vector_3" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M5 2.84668L11 6.28001" id="Vector_4" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame5 />
    </div>
  );
}

function ContainerBackgroundColor3() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative rounded-[6.4px] shrink-0" data-name="Container+BackgroundColor">
      <Svg2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] gap-[6px] items-start not-italic relative shrink-0 text-[#2f2f2f] w-[175px]" data-name="Container">
      <p className="leading-[20px] relative shrink-0 text-[14px]">Dental Consumables</p>
      <p className="leading-[14.5px] opacity-60 relative shrink-0 text-[12px]">14 products</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-[287px]" data-name="button">
      <ContainerBackgroundColor3 />
      <Container9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_32_7034)" id="Frame">
          <path d={svgPaths.p3b666c00} id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M13.3332 2V4.66667" id="Vector_2" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M14.6667 3.3333H12" id="Vector_3" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M2.6668 11.3333V12.6666" id="Vector_4" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_32_7034">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame7 />
    </div>
  );
}

function ContainerBackgroundColor4() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative rounded-[6.4px] shrink-0" data-name="Container+BackgroundColor">
      <Svg3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] gap-[6px] items-start not-italic relative shrink-0 text-[#2f2f2f] w-[175px]" data-name="Container">
      <p className="leading-[20px] relative shrink-0 text-[14px]">Regeneration</p>
      <p className="leading-[14.5px] opacity-60 relative shrink-0 text-[12px]">8 products</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-[287px]" data-name="button">
      <ContainerBackgroundColor4 />
      <Container10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_32_7026)" id="Frame">
          <path d={svgPaths.p233b30c0} id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_32_7026">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame9 />
    </div>
  );
}

function ContainerBackgroundColor5() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative rounded-[6.4px] shrink-0" data-name="Container+BackgroundColor">
      <Svg4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] gap-[6px] items-start not-italic relative shrink-0 text-[#2f2f2f] w-[175px]" data-name="Container">
      <p className="leading-[20px] relative shrink-0 text-[14px]">Endodontics</p>
      <p className="leading-[14.5px] opacity-60 relative shrink-0 text-[12px]">5 products</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-[287px]" data-name="button">
      <ContainerBackgroundColor5 />
      <Container11 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M4 12H9.33333" id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M2 14.6667H14" id="Vector_2" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p4075a00} id="Vector_3" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M6 9.3333H7.33333" id="Vector_4" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p2494b80} id="Vector_5" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.pb2cd980} id="Vector_6" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Svg5() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame11 />
    </div>
  );
}

function ContainerBackgroundColor6() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative rounded-[6.4px] shrink-0" data-name="Container+BackgroundColor">
      <Svg5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] gap-[6px] items-start not-italic relative shrink-0 text-[#2f2f2f] w-[175px]" data-name="Container">
      <p className="leading-[20px] relative shrink-0 text-[14px]">Dental Equipment</p>
      <p className="leading-[14.5px] opacity-60 relative shrink-0 text-[12px]">14 products</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-[287px]" data-name="button">
      <ContainerBackgroundColor6 />
      <Container12 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p3a29aa00} id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p24bd1ac0} id="Vector_2" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p12d29900} id="Vector_3" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p3cc99500} id="Vector_4" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Svg6() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame12 />
    </div>
  );
}

function ContainerBackgroundColor7() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative rounded-[6.4px] shrink-0" data-name="Container+BackgroundColor">
      <Svg6 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] gap-[6px] items-start not-italic relative shrink-0 text-[#2f2f2f] w-[175px]" data-name="Container">
      <p className="leading-[20px] relative shrink-0 text-[14px]">Digital</p>
      <p className="leading-[14.5px] opacity-60 relative shrink-0 text-[12px]">9 products</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-[287px]" data-name="button">
      <ContainerBackgroundColor7 />
      <Container13 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p3690d800} id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M4.30195 10H11.698" id="Vector_2" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M5.6668 1.3333H10.3335" id="Vector_3" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame13 />
    </div>
  );
}

function ContainerBackgroundColor8() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative rounded-[6.4px] shrink-0" data-name="Container+BackgroundColor">
      <Svg7 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] gap-[6px] items-start not-italic relative shrink-0 text-[#2f2f2f] w-[175px]" data-name="Container">
      <p className="leading-[20px] relative shrink-0 text-[14px]">Dental Lab</p>
      <p className="leading-[14.5px] opacity-60 relative shrink-0 text-[12px]">11 products</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-[287px]" data-name="button">
      <ContainerBackgroundColor8 />
      <Container14 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_32_7008)" id="Frame">
          <path d={svgPaths.p36f21e00} id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.pdcb7b00} id="Vector_2" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M6 6H6.00667" id="Vector_3" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M10 6H10.0067" id="Vector_4" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_32_7008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg8() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame14 />
    </div>
  );
}

function ContainerBackgroundColor9() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative rounded-[6.4px] shrink-0" data-name="Container+BackgroundColor">
      <Svg8 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] gap-[6px] items-start not-italic relative shrink-0 text-[#2f2f2f] w-[175px]" data-name="Container">
      <p className="leading-[20px] relative shrink-0 text-[14px]">Mouth Care</p>
      <p className="leading-[14.5px] opacity-60 relative shrink-0 text-[12px]">6 products</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-[287px]" data-name="button">
      <ContainerBackgroundColor9 />
      <Container15 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <ButtonGradient />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(0,0,0,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Container7 />
      </div>
    </div>
  );
}

function ContainerBackgroundColor1() {
  return (
    <div className="bg-[#fff6fb] content-stretch flex h-full items-start relative shrink-0 w-[319px]" data-name="Container+BackgroundColor">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3eb22f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p39a52200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p31ad3c00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Svg9() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Frame15 />
    </div>
  );
}

function ContainerGradient() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center p-[12px] relative rounded-[12px] shrink-0 to-[#0088b3]" data-name="Container+Gradient">
      <Svg9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start not-italic relative shrink-0 w-[515px]" data-name="Container">
      <p className="font-['Montserrat:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#363535] text-[24px]">Implants</p>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#313131] text-[12px]">Premium dental implant systems for immediate and delayed loading protocols.</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <ContainerGradient />
      <Container19 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame16 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344ecc] text-[13.996px] whitespace-nowrap">
        <p className="leading-[20px]">View Details</p>
      </div>
      <Svg10 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d5d5d5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Container18 />
          <Link1 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="leading-[20px]">Showing</span>
        <span className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] text-white">{` `}</span>
        <span className="font-['Montserrat:SemiBold',sans-serif] leading-[20px]">21</span>
        <span className="leading-[20px]">{` products`}</span>
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] relative w-full">
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Container17 />
      <Container20 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg11() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame17 />
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg11 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container22 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Superline (Bone Level)</p>
      <Frame48 />
    </div>
  );
}

function LinkBackgroundColor() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame49 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg12() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame18 />
    </div>
  );
}

function TextWrapper1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg12 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper1 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container23 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Implantium (Bone Level)</p>
      <Frame53 />
    </div>
  );
}

function LinkBackgroundColor1() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg13() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame19 />
    </div>
  );
}

function TextWrapper2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg13 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper2 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container24 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Superline 11 (Bone Level)</p>
      <Frame55 />
    </div>
  );
}

function LinkBackgroundColor2() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame54 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg14() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame20 />
    </div>
  );
}

function TextWrapper3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg14 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper3 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container25 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Simpleline 2 (Tissue Level)</p>
      <Frame57 />
    </div>
  );
}

function LinkBackgroundColor3() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame56 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <LinkBackgroundColor />
      <LinkBackgroundColor1 />
      <LinkBackgroundColor2 />
      <LinkBackgroundColor3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg15() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame21 />
    </div>
  );
}

function TextWrapper4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg15 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper4 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container26 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Bright (Bone Level)</p>
      <Frame60 />
    </div>
  );
}

function LinkBackgroundColor4() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame59 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg16() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame22 />
    </div>
  );
}

function TextWrapper5() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg16 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper5 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container27 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Bright (Tissue Level)</p>
      <Frame62 />
    </div>
  );
}

function LinkBackgroundColor5() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame61 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg17() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame23 />
    </div>
  );
}

function TextWrapper6() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg17 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper6 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container28 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Dynamics Abutments</p>
      <Frame64 />
    </div>
  );
}

function LinkBackgroundColor6() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg18() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame24 />
    </div>
  );
}

function TextWrapper7() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg18 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper7 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container29 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Surgical Motor</p>
      <Frame66 />
    </div>
  );
}

function LinkBackgroundColor7() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame65 />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <LinkBackgroundColor4 />
      <LinkBackgroundColor5 />
      <LinkBackgroundColor6 />
      <LinkBackgroundColor7 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg19() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame25 />
    </div>
  );
}

function TextWrapper8() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg19 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper8 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container30 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Sinus Kit</p>
      <Frame69 />
    </div>
  );
}

function LinkBackgroundColor8() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame68 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg20() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame26 />
    </div>
  );
}

function TextWrapper9() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg20 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper9 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container31 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Help Kit</p>
      <Frame71 />
    </div>
  );
}

function LinkBackgroundColor9() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame70 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg21() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame27 />
    </div>
  );
}

function TextWrapper10() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg21 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper10 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container32 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Osteotome Kit</p>
      <Frame73 />
    </div>
  );
}

function LinkBackgroundColor10() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame72 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg22() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame28 />
    </div>
  );
}

function TextWrapper11() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg22 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper11 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container33 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Trephine Kit</p>
      <Frame75 />
    </div>
  );
}

function LinkBackgroundColor11() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame74 />
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <LinkBackgroundColor8 />
      <LinkBackgroundColor9 />
      <LinkBackgroundColor10 />
      <LinkBackgroundColor11 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg23() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame29 />
    </div>
  );
}

function TextWrapper12() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg23 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper12 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container34 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Surgical Kit</p>
      <Frame78 />
    </div>
  );
}

function LinkBackgroundColor12() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame77 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg24() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame30 />
    </div>
  );
}

function TextWrapper13() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg24 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper13 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container35 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Prosthetic Kit</p>
      <Frame80 />
    </div>
  );
}

function LinkBackgroundColor13() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame79 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg25() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame31 />
    </div>
  );
}

function TextWrapper14() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg25 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper14 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container36 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Implant Guide Kit</p>
      <Frame82 />
    </div>
  );
}

function LinkBackgroundColor14() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame81 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg26() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame32 />
    </div>
  );
}

function TextWrapper15() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg26 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper15 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container37 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Ridge Spreader Kit</p>
      <Frame84 />
    </div>
  );
}

function LinkBackgroundColor15() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame83 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <LinkBackgroundColor12 />
      <LinkBackgroundColor13 />
      <LinkBackgroundColor14 />
      <LinkBackgroundColor15 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg27() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame33 />
    </div>
  );
}

function TextWrapper16() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg27 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper16 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container38 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Planning Kit</p>
      <Frame87 />
    </div>
  );
}

function LinkBackgroundColor16() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame86 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg28() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame34 />
    </div>
  );
}

function TextWrapper17() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg28 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper17 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container39 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Polymer Guide Kit</p>
      <Frame89 />
    </div>
  );
}

function LinkBackgroundColor17() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame88 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg29() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame35 />
    </div>
  );
}

function TextWrapper18() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg29 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper18 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container40 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">GBR Kit</p>
      <Frame91 />
    </div>
  );
}

function LinkBackgroundColor18() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame90 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg30() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame36 />
    </div>
  );
}

function TextWrapper19() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg30 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper19 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container41 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Drill Stopper Kit</p>
      <Frame93 />
    </div>
  );
}

function LinkBackgroundColor19() {
  return (
    <div className="bg-[#fff6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Link+BackgroundColor">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame92 />
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <LinkBackgroundColor16 />
      <LinkBackgroundColor17 />
      <LinkBackgroundColor18 />
      <LinkBackgroundColor19 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute left-0 size-[12px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CB0B63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg31() {
  return (
    <div className="bg-[rgba(0,0,0,0)] overflow-clip relative shrink-0 size-[12px]" data-name="SVG">
      <Frame37 />
    </div>
  );
}

function TextWrapper20() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text-wrapper">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cb0b63] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Details</p>
      </div>
      <Svg31 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <TextWrapper20 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container42 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-full whitespace-pre-wrap">Slimline (One Body Implant)</p>
      <Frame95 />
    </div>
  );
}

function LinkBackgroundColor20() {
  return (
    <div className="bg-[#fff6fb] content-stretch flex flex-col items-start justify-center px-[16px] py-[20px] relative rounded-[12px] shrink-0" data-name="Link+BackgroundColor">
      <Frame94 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-px min-w-px relative">
      <Frame46 />
      <Frame58 />
      <Frame67 />
      <Frame76 />
      <Frame85 />
      <LinkBackgroundColor20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[20px] relative w-full">
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame51 />
      <Container21 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative" data-name="Container">
      <Frame52 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white content-stretch flex h-[776px] items-start relative shrink-0 w-full" data-name="Container">
      <ContainerBackgroundColor1 />
      <Container16 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[44px] not-italic relative shrink-0 text-black w-[305px]" data-name="Container">
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] leading-[24px] left-0 text-[16px] top-0">Need help finding the right solution?</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[20px] left-0 text-[12px] top-[24px]">Our experts are here to assist you</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[25px] py-[14px] relative rounded-[9999px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Montserrat:SemiBold',sans-serif] from-[#dd005c] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center to-[#0088b3] whitespace-nowrap" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[24px]">Download Catalogue</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="aspect-[146/48] bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center px-[20px] py-[4px] relative rounded-[56px] self-stretch shrink-0 to-[#0088b3]">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">Contact Now</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button8 />
      <Frame38 />
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function ContainerBackgroundColor10() {
  return (
    <div className="bg-[#fff6fb] relative shrink-0 w-full" data-name="Container+BackgroundColor">
      <div aria-hidden="true" className="absolute border-[#dd005c] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[20px] relative w-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function ContainerBackgroundColor() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Container+BackgroundColor">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container5 />
        <ContainerBackgroundColor10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-[1280px]" data-name="Container">
      <Frame39 />
      <ContainerBackgroundColor />
    </div>
  );
}

function Desktop1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Desktop - 113">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[80px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

export default function SolutionsDentalSolutions() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Solutions/Dental Solutions">
      <Desktop />
      <Desktop1 />
    </div>
  );
}