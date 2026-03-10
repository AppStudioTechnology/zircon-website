import svgPaths from "./svg-is8rmt8e20";
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import imgNavbar from "figma:asset/fd8f43b2f1287a0cc5ab0084c44366bbffc35bb7.png";
import imgFrame1321316702 from "figma:asset/980fe28127a3c04aaa3333223ddfee8c382273af.png";
import imgEllipse6 from "figma:asset/5d6531cce9805eaca09e685a33e01a15bc7000b7.png";
import imgFrame1321316707 from "figma:asset/20ffb66f7d22aceb7e9e9f22a06aba748096f4ea.png";
import imgFrame1321316706 from "figma:asset/2db6bbf3e398e787e49344d38fce323ff3d1ec4d.png";
import imgFrame1321316708 from "figma:asset/dad07aed070e2b090d846d77a4805ece9dd189f5.png";

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

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[440px]">
      <Link />
    </div>
  );
}

function Frame7() {
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

function Frame38() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-center text-white">More</p>
      <Icon1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[25px] items-center justify-center relative shrink-0">
      <Frame7 />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white w-[68px] whitespace-pre-wrap">About Us</p>
      <Button />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Our Partners</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Doctors Corner</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Events</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Education</p>
      <Frame38 />
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

function Frame4() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-[440px]">
      <Frame2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#070707] content-stretch flex items-center justify-between left-1/2 pl-[24px] pr-[8px] py-[8px] rounded-[44px] top-0 w-[1280px]">
      <Frame5 />
      <Frame6 />
      <Frame4 />
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
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #DD005C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Frame1 />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dd005c] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">Events</p>
      </div>
    </div>
  );
}

function Frame39() {
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
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-center text-white whitespace-nowrap">
        <p className="leading-[72px]">Events</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="leading-[32.5px]">Join us at upcoming exhibitions, workshops, and educational events across the GCC</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[189px] w-[1216px]" data-name="Container">
      <Frame39 />
      <Heading />
      <Container3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-black h-[510px] left-[32px] overflow-clip rounded-[12px] top-[32px] w-[1376px]">
      <div className="absolute h-[594px] left-0 top-0 w-[1376px]" data-name="Group 38167 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-15 md:opacity-20 mix-blend-screen" src={imgGroup381671} />
      </div>
      <Frame8 />
      <Container />
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-white h-[574px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 2">
      <Frame9 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] h-[32px] items-center justify-center px-[24px] py-[4px] relative rounded-[56px] shrink-0 to-[#0088b3]">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Our events</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[732px]">
      <Frame3 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[56px] not-italic relative shrink-0 text-[#070707] text-[48px] w-[821px] whitespace-pre-wrap">Insights That Power Smarter Medical Equipment Decisions</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#070707] text-[14px] w-[448px] whitespace-pre-wrap">Explore trends, tips, and updates shaping the future of medical devices and healthcare innovation.</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="ArrowRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="ArrowRight">
          <rect height="47" rx="23.5" stroke="var(--stroke-0, #EBEBEB)" width="47" x="0.5" y="0.5" />
          <path d={svgPaths.p241c8f70} fill="var(--fill-0, #070707)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="ArrowRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="ArrowRight">
          <rect height="47" rx="23.5" stroke="var(--stroke-0, #EBEBEB)" width="47" x="0.5" y="0.5" />
          <path d={svgPaths.p142a77f0} fill="var(--fill-0, #070707)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <ArrowRight />
      <ArrowRight1 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[80px] top-[80px] w-[1280px]">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">June 13, 2025</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 7" r="2" />
        </svg>
      </div>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">6 Min read</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[150px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full whitespace-pre-wrap">Nadia Prasetya</p>
      <Frame12 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]">
        <img alt="" className="block max-w-none size-full" height="36" src={imgEllipse6} width="36" />
      </div>
      <Frame13 />
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ArrowUpRight">
          <path d={svgPaths.p24654af0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Read More</p>
      <ArrowUpRight />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start justify-end min-h-px min-w-px py-[14px] relative rounded-[8px] w-full">
      <div className="absolute bg-gradient-to-t from-[#1b1b1b] from-[5.214%] h-[330px] left-[-14px] to-[77.628%] to-[rgba(27,27,27,0)] top-[262px] w-[416px]" />
      <Frame20 />
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[372px] whitespace-pre-wrap">Advanced Implantology Workshop</p>
      <Frame28 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col h-[600px] items-start justify-end overflow-clip p-[14px] relative rounded-[24px] shrink-0 w-[416px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgFrame1321316702} />
      <Frame24 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">June 13, 2025</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 7" r="2" />
        </svg>
      </div>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">6 Min read</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[150px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full whitespace-pre-wrap">Nadia Prasetya</p>
      <Frame15 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]">
        <img alt="" className="block max-w-none size-full" height="36" src={imgEllipse6} width="36" />
      </div>
      <Frame14 />
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ArrowUpRight">
          <path d={svgPaths.p24654af0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Read More</p>
      <ArrowUpRight1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start justify-end min-h-px min-w-px py-[14px] relative rounded-[8px] w-full">
      <div className="absolute bg-gradient-to-t from-[#1b1b1b] from-[5.214%] h-[330px] left-[-14px] to-[77.628%] to-[rgba(27,27,27,0)] top-[262px] w-[416px]" />
      <Frame21 />
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[372px] whitespace-pre-wrap">GCC Dental Conference 2024</p>
      <Frame29 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col h-[600px] items-start justify-end overflow-clip p-[14px] relative rounded-[24px] shrink-0 w-[416px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgFrame1321316707} />
      <Frame25 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">June 13, 2025</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 7" r="2" />
        </svg>
      </div>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">6 Min read</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[150px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full whitespace-pre-wrap">Nadia Prasetya</p>
      <Frame17 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]">
        <img alt="" className="block max-w-none size-full" height="36" src={imgEllipse6} width="36" />
      </div>
      <Frame16 />
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ArrowUpRight">
          <path d={svgPaths.p24654af0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Read More</p>
      <ArrowUpRight2 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start justify-end min-h-px min-w-px py-[14px] relative rounded-[8px] w-full">
      <div className="absolute bg-gradient-to-t from-[#1b1b1b] from-[5.214%] h-[330px] left-[-14px] to-[77.628%] to-[rgba(27,27,27,0)] top-[262px] w-[416px]" />
      <Frame22 />
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[372px] whitespace-pre-wrap">GCC Dental Conference 2024</p>
      <Frame30 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col h-[600px] items-start justify-end overflow-clip p-[14px] relative rounded-[24px] shrink-0 w-[416px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgFrame1321316706} />
      <Frame26 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">June 13, 2025</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 7" r="2" />
        </svg>
      </div>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">6 Min read</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[150px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full whitespace-pre-wrap">Nadia Prasetya</p>
      <Frame19 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]">
        <img alt="" className="block max-w-none size-full" height="36" src={imgEllipse6} width="36" />
      </div>
      <Frame18 />
    </div>
  );
}

function ArrowUpRight3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ArrowUpRight">
          <path d={svgPaths.p24654af0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Read More</p>
      <ArrowUpRight3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start justify-end min-h-px min-w-px py-[14px] relative rounded-[8px] w-full">
      <div className="absolute bg-gradient-to-t from-[#1b1b1b] from-[5.214%] h-[330px] left-[-14px] to-[77.628%] to-[rgba(27,27,27,0)] top-[262px] w-[416px]" />
      <Frame23 />
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[372px] whitespace-pre-wrap">{`Digital Workflow Webinar `}</p>
      <Frame31 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col h-[600px] items-start justify-end overflow-clip p-[14px] relative rounded-[24px] shrink-0 w-[416px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgFrame1321316708} />
      <Frame27 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[79px] top-[344px]">
      <Frame33 />
      <Frame36 />
      <Frame35 />
      <Frame37 />
    </div>
  );
}

function Desktop1() {
  return (
    <div className="bg-white h-[1024px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 99">
      <Frame32 />
      <Frame34 />
    </div>
  );
}

export default function Events() {
  return (
    <div className="content-stretch flex flex-col items-end relative size-full" data-name="Events">
      <Desktop />
      <Desktop1 />
    </div>
  );
}