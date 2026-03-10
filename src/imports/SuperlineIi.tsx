import svgPaths from "./svg-65vlhfxswl";
import imgNavbar from "figma:asset/fd8f43b2f1287a0cc5ab0084c44366bbffc35bb7.png";
import imgImage12 from "figma:asset/2e956ec405402943452bcba07860ec9ace663208.png";
import imgImage13 from "figma:asset/b6e38249502522d7aac2bb634bd51bfcaa37dd22.png";
import imgBackground from "figma:asset/c29c9bb037b6a3069cc041e18252bb6a19a2116f.png";
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import imgImage14 from "figma:asset/1cd5ba22af3455afca7d35e5bb8b0891e851a759.png";
import imgImage15 from "figma:asset/4f8c1a35aab65224dbe0518b64ce8fed9dc75f84.png";
import imgImage16 from "figma:asset/aca4707e9af6caff0e8fdc60d935a7c62fbab8b7.png";
import imgImage17 from "figma:asset/a69c41fb874e10c655ce4a31f0cfd18026c6c7ab.png";

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

function Frame15() {
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

function Frame27() {
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
      <Frame15 />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white w-[68px] whitespace-pre-wrap">About Us</p>
      <Button />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Our Partners</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Doctors Corner</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Events</p>
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Education</p>
      <Frame27 />
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

function Frame16() {
  return (
    <div className="bg-[#070707] relative rounded-[44px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[8px] py-[8px] relative w-full">
          <Frame8 />
          <Frame10 />
          <Frame6 />
        </div>
      </div>
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
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #ABABAB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Frame1 />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ababab] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">Solutions</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #ABABAB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Frame3 />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ababab] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">Dental Solutions</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #ABABAB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Frame4 />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ababab] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">Implants</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #D20761)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Frame5 />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d20761] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">Superline II (bone level)</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-center text-white whitespace-nowrap">
        <p className="leading-[72px]">Superline II</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Heading />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="leading-[32.5px]">Developed by Clinicians for Clinicians</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0" data-name="Container">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Lifetime</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Warranty</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative self-stretch shrink-0" data-name="Container">
      <Overlay />
      <Container8 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3eeeaa80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f14bd80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Grade 4</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Titanium</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative self-stretch shrink-0" data-name="Container">
      <Overlay1 />
      <Container12 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1b8b3180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[normal]">S.L.A</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Surface</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative self-stretch shrink-0" data-name="Container">
      <Overlay2 />
      <Container16 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container11 />
      <Container15 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 11.6667">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 6.66667">
            <path d={svgPaths.p3e05ba00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.83333">
            <path d={svgPaths.p2dc3c480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[18.75%] items-center justify-center overflow-clip" data-name="SVG">
      <Frame11 />
    </div>
  );
}

function ArrowCircleRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ArrowCircleRight">
      <Svg3 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white">View Catalog</p>
      <ArrowCircleRight />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] h-[48px] items-center justify-center pl-[24px] pr-[12px] py-[4px] relative rounded-[56px] shrink-0 to-[#0088b3]">
      <Frame23 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center justify-center px-[24px] py-[4px] relative rounded-[56px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[56px]" />
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070707] text-[16px] text-center">Request a Quote</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame9 />
      <Frame12 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[560px]">
      <Container />
      <Container6 />
      <Frame7 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[560px]" data-name="Container">
      <div className="h-[399px] relative shrink-0 w-[500px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[94px] items-center justify-center relative shrink-0">
      <Frame30 />
      <Container19 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[50px] items-center overflow-clip pb-[50px] pt-[20px] px-[48px] relative rounded-[12px] shrink-0 w-[1376px]">
      <Frame16 />
      <Frame31 />
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Desktop - 2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#070707] text-[48px] whitespace-nowrap">
        <p>
          <span className="leading-[48px]">{`Clinically Proven `}</span>
          <span className="leading-[48px] text-[#070707]">Surface Technology</span>
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[32.5px] whitespace-pre-wrap">S.L.A surface treatment provides excellent biocompatibility and allows for faster osseointegration and long-term stability.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container22 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1d59db00} id="Vector" stroke="var(--stroke-0, #0542BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(5,66,189,0.1)] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Svg4 />
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0542bd] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">S.L.A SURFACE TREATMENT</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323231] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Enhanced Osseointegration</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[26px] whitespace-pre-wrap">The micro-rough surface created by sandblasting and acid etching promotes rapid bone cell attachment and growth, ensuring a strong biological bond.</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(5,66,189,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0542bd] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Faster Healing</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(5,66,189,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0542bd] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Higher Success Rate</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(5,66,189,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0542bd] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Proven Results</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_12px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Container">
      <Overlay3 />
      <Heading2 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container25 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="flex-[1_0_0] h-[286px] min-h-px min-w-px relative rounded-[24px]" data-name="Background+Border" style={{ backgroundImage: "linear-gradient(161.606deg, rgb(227, 240, 250) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[25px] relative size-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex h-[236px] items-center justify-center relative rounded-[10.667px] shrink-0" data-name="Background" style={{ backgroundImage: "linear-gradient(144.095deg, rgba(5, 66, 189, 0.2) 0%, rgba(0, 255, 255, 0.2) 100%)" }}>
      <div className="aspect-[500/362] h-full relative shrink-0" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Background />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="content-stretch flex flex-col items-start p-[25px] relative rounded-[24px] shrink-0" data-name="Background+Border" style={{ backgroundImage: "linear-gradient(142.74deg, rgb(227, 240, 250) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container28 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <BackgroundBorder />
      <BackgroundBorder4 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pdb17300} id="Vector" stroke="var(--stroke-0, #A4D037)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f6e8c0} id="Vector_2" stroke="var(--stroke-0, #A4D037)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32c0b4c0} id="Vector_3" stroke="var(--stroke-0, #A4D037)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(164,208,55,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg5 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Micro-Structure</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#d3d3d3] text-[14px] w-[min-content]">
        <p className="leading-[20px] whitespace-pre-wrap">Optimized surface roughness for maximum bone contact area.</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Background" style={{ backgroundImage: "linear-gradient(164.792deg, rgb(5, 66, 189) 0%, rgb(2, 26, 76) 100%)" }}>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Overlay4 />
        <Frame32 />
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #00FFFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg6 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Biocompatibility</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#bfdbfe] text-[14px] w-[min-content]">
        <p className="leading-[20px] whitespace-pre-wrap">Excellent tissue response with minimal inflammation.</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Background" style={{ backgroundImage: "linear-gradient(164.792deg, rgb(5, 66, 189) 0%, rgb(2, 26, 76) 100%)" }}>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Overlay5 />
        <Frame33 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Background2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Frame34 />
      <Container29 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Desktop1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Desktop - 97">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[90px] py-[80px] relative w-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[36px] whitespace-nowrap">
        <p className="leading-[40px]">Ti</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[128px]" data-name="Background+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(209, 213, 219) 0%, rgb(156, 163, 175) 100%)" }}>
      <Container31 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Background3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] w-full" data-name="Background" style={{ backgroundImage: "linear-gradient(138.431deg, rgb(243, 244, 246) 0%, rgb(229, 231, 235) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip py-[175px] relative rounded-[inherit] size-full">
        <BackgroundShadow />
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Material Grade</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323231] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">CP Grade 4</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-right tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Standard</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344ecc] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[32px]">ASTM F67</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-[478px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container33 />
        <Container36 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white flex-[1_0_0] h-[612px] min-h-px min-w-px relative rounded-[40px]" data-name="Background+Border+Shadow">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[25px] relative size-full">
          <Background3 />
          <Container32 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p95d9c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27180a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Svg7 />
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">PRODUCT SPECIFICATION</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[48px] not-italic relative shrink-0 text-[48px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Unalloyed Titanium</p>
        <p>ASTM F67</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[32.5px] whitespace-pre-wrap">Commercially pure titanium Grade 4 provides the optimal balance of biocompatibility and mechanical strength.</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pdb17300} id="Vector" stroke="var(--stroke-0, #0542BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f6e8c0} id="Vector_2" stroke="var(--stroke-0, #0542BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32c0b4c0} id="Vector_3" stroke="var(--stroke-0, #0542BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Background+Shadow">
      <Svg8 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Grade 4 Titanium</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Highest purity commercially pure titanium for superior quality</p>
        <p>and consistency.</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading4 />
      <Container44 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow1 />
      <Container43 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #0542BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Background+Shadow">
      <Svg9 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Biocompatibility</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Excellent tissue acceptance with proven long-term clinical</p>
        <p>performance.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-[500px] relative self-stretch" data-name="Container">
      <Heading5 />
      <Container47 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow2 />
      <Container46 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1b8b3180} id="Vector" stroke="var(--stroke-0, #0542BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Background+Shadow">
      <Svg10 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Mechanical Strength</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Optimal strength-to-weight ratio for reliable load-bearing</p>
        <p>applications.</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-[500px] relative self-stretch" data-name="Container">
      <Heading6 />
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow3 />
      <Container49 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container45 />
      <Container48 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <Overlay6 />
      <Heading3 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container30() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[64px] items-center justify-center left-1/2 top-[70px] w-[1260px]" data-name="Container">
      <BackgroundBorderShadow />
      <Container39 />
    </div>
  );
}

function Desktop2() {
  return (
    <div className="bg-black h-[752px] overflow-clip relative shrink-0 w-[1440px]" data-name="Desktop - 121">
      <div className="absolute h-[622px] left-0 top-[226px] w-[1440px]" data-name="Group 38167 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-15 md:opacity-20 mix-blend-screen" src={imgGroup381671} />
      </div>
      <Container30 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p150f5b00} id="Vector" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11592600} id="Vector_2" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pb4aa100} id="Vector_3" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p36e45a00} id="Vector_4" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a14b300} id="Vector_5" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2295f880} id="Vector_6" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_7" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3b679680} id="Vector_8" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p241ec400} id="Vector_9" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[#d3e2f5] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Svg11 />
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344ecc] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">UNIFIED PROSTHETIC PLATFORM</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[48px] not-italic relative shrink-0 text-[#070707] text-[48px] text-center whitespace-nowrap">
        <p className="mb-0">Single Connection</p>
        <p>Across All Diameters</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center w-[832px]">
        <p className="leading-[32.5px] whitespace-pre-wrap">Revolutionary platform design that simplifies your workflow and reduces inventory complexity.</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Container">
      <Overlay7 />
      <Heading7 />
      <Container53 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[#d3e2f5] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg12 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Simplified Inventory</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">All implant diameters share the same internal connection across all fixtures.</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <Heading8 />
      <Container58 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay8 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container57 />
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay9() {
  return (
    <div className="bg-[#d3e2f5] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg13 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Interchangeable Options</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Enables seamless use of abutments and prosthetic components.</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <Heading9 />
      <Container61 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay9 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container60 />
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay10() {
  return (
    <div className="bg-[#d3e2f5] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg14 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Reduced Errors</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <Heading10 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Streamlined system minimizes mistakes in treatment planning.</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay10 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container63 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container56 />
      <Container59 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p>
            <span className="leading-[20px]">{`All sizes share `}</span>
            <span className="font-['Montserrat:Bold',sans-serif] leading-[20px] not-italic text-[#344ecc]">one universal connection</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-[494px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[25px] relative w-full">
        <Container64 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[32px] items-center p-[25px] relative rounded-[24px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="h-[257px] relative shrink-0 w-[507px]" data-name="image 14">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
      <HorizontalBorder />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container54 />
    </div>
  );
}

function Desktop3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Desktop - 122">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[90px] py-[80px] relative w-full">
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] w-full" data-name="Background" style={{ backgroundImage: "linear-gradient(134.277deg, rgb(243, 244, 246) 0%, rgb(229, 231, 235) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip py-[175px] relative rounded-[inherit] size-full">
        <div className="absolute inset-[108px_0]" data-name="image 15">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[612px] min-h-px min-w-px relative rounded-[40px]" data-name="Background+Border+Shadow">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[25px] relative size-full">
          <Background4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p36e45a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay11() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Svg15 />
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">PROSTHETIC FLEXIBILITY</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[48px] not-italic relative shrink-0 text-[48px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Interchangeable</p>
        <p>Abutments</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[32.5px] whitespace-pre-wrap">Complete prosthetic freedom with a comprehensive range of abutment options designed for every clinical scenario.</p>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#344ecc] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Svg16 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pt-[2px] relative shrink-0 w-[24px]" data-name="Margin">
      <Background5 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Seamlessly use any abutment with any implant diameter</p>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#344ecc] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Svg17 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pt-[2px] relative shrink-0 w-[24px]" data-name="Margin">
      <Background6 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin1 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Streamlines restorative procedures and reduces chair time</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#344ecc] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Svg18 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pt-[2px] relative shrink-0 w-[24px]" data-name="Margin">
      <Background7 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin2 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Simplify inventory and optimize cost-effectiveness</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <Overlay11 />
      <Heading11 />
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container65() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[64px] items-center justify-center left-1/2 top-[70px] w-[1260px]" data-name="Container">
      <BackgroundBorderShadow1 />
      <Container66 />
    </div>
  );
}

function Desktop4() {
  return (
    <div className="bg-black h-[752px] overflow-clip relative shrink-0 w-[1440px]" data-name="Desktop - 123">
      <div className="absolute h-[622px] left-0 top-[226px] w-[1440px]" data-name="Group 38167 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-15 md:opacity-20 mix-blend-screen" src={imgGroup381671} />
      </div>
      <Container65 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#070707] text-[48px] text-center whitespace-nowrap">
        <p>
          <span className="leading-[48px]">{`Implant Design `}</span>
          <span className="leading-[48px] text-[#070707]">Highlights</span>
        </p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Every detail engineered for optimal clinical outcomes.</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <Heading12 />
      <Container74 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p5b81480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p216d1100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p16d243c0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1de70ff0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p9e82d00} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17e30700} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1169ca00} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1d9c5d00} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pdb85100} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay12() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center relative rounded-[100px] shrink-0 size-[48px] to-[#0088b3]" data-name="Overlay">
      <Svg19 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[362px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 362 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="362" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="font-['Montserrat:Medium',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#070707] text-[24px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">Double-Threaded Tapered</p>
        <p>Body</p>
      </div>
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#454545] text-[14px] w-[min-content] whitespace-pre-wrap">Provides self-tapping capability and excellent primary stability in compromised bone conditions.</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Overlay12 />
        <Frame18 />
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1e4c7e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3ac14500} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay13() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center relative rounded-[100px] shrink-0 size-[48px] to-[#0088b3]" data-name="Overlay">
      <Svg20 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[362px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 362 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="362" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#070707] text-[24px] w-[min-content] whitespace-pre-wrap">Optimal Thread Design</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#454545] text-[14px] w-[min-content] whitespace-pre-wrap">Square-shaped threads with optimized pitch provide maximum bone-to-implant contact (BIC) and ensure long-term stability.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Overlay13 />
        <Frame20 />
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p2b642900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.12 8.12L12 12" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 4.00012L8.12 15.8801" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4141780} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M14.8 14.8L20 20" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Stethoscope() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center overflow-clip px-px py-[2px] relative rounded-[48px] shrink-0 size-[48px] to-[#0088b3]" data-name="Stethoscope">
      <Svg21 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[362px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 362 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="362" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#070707] text-[24px] w-[min-content] whitespace-pre-wrap">S.Long Cutting Flutes</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#454545] text-[14px] w-[min-content] whitespace-pre-wrap">Allows self-tapping in dense bone, reduces heat generation during placement, and provides tactile feedback.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Stethoscope />
        <Frame21 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame19 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame24 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame25 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Frame22 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[90px] py-[80px] relative shrink-0 w-[1440px]" data-name="Section">
      <Container72 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#070707] text-[48px] text-center whitespace-nowrap">
        <p className="leading-[48px]">Available Dimensions</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Comprehensive size range to address every clinical situation.</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <Heading13 />
      <Container77 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <div className="aspect-[1193/470] relative shrink-0 w-full" data-name="image 16">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start px-[90px] py-[80px] relative shrink-0 w-[1440px]" data-name="Section">
      <Container75 />
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p17f48400} id="Vector" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay14() {
  return (
    <div className="bg-[#d3e2f5] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Svg22 />
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344ecc] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">FEATURED PRODUCT</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[48px] not-italic relative shrink-0 text-[#070707] text-[48px] w-full whitespace-pre-wrap">
        <p className="mb-0">7mm Short Implant</p>
        <p>Now Available</p>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Overlay15() {
  return (
    <div className="bg-[rgba(52,78,204,0.2)] relative rounded-[8px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg23 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">Reliable solution for patients with limited bone height in posterior regions</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">
          <Overlay15 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Overlay16() {
  return (
    <div className="bg-[rgba(52,78,204,0.2)] relative rounded-[8px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg24 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Alternative to complex bone grafting and sinus lift procedures</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">
          <Overlay16 />
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #344ECC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Overlay17() {
  return (
    <div className="bg-[rgba(52,78,204,0.2)] relative rounded-[8px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg25 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">
          <Overlay17 />
          <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] whitespace-nowrap">
            <p className="leading-[24px]">Simplified treatment with predictable, long-term success</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
      <BackgroundBorderShadow4 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Heading14 />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[20px] w-full">
        <p className="leading-[32.5px] whitespace-pre-wrap">Expand your treatment options with our short implant solution designed for challenging anatomical situations.</p>
      </div>
      <Container80 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Overlay14 />
      <Frame35 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 11.6667">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 6.66667">
            <path d={svgPaths.p3e05ba00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.83333">
            <path d={svgPaths.p2dc3c480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[18.75%] items-center justify-center overflow-clip" data-name="SVG">
      <Frame14 />
    </div>
  );
}

function ArrowCircleRight1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="ArrowCircleRight">
      <Svg26 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white">View Catalog</p>
      <ArrowCircleRight1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] h-[48px] items-center justify-center pl-[24px] pr-[12px] py-[4px] relative rounded-[56px] shrink-0 to-[#0088b3]">
      <Frame26 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Container">
      <Frame36 />
      <Frame13 />
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="bg-white h-full relative rounded-[40px] shrink-0 w-[576px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[25px] relative rounded-[inherit] size-full">
        <div className="aspect-[550/417] relative shrink-0 w-full" data-name="image 17">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#dd005c] items-start overflow-clip px-[24px] py-[12px] right-[-56.78px] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] to-[#0088b3] top-[37.6px]" data-name="Background+Shadow">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Short Implant</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <div className="flex flex-row items-center self-stretch">
        <BackgroundBorderShadow5 />
      </div>
      <BackgroundShadow4 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[90px] py-[80px] relative shrink-0 w-[1440px]" data-name="Section" style={{ backgroundImage: "linear-gradient(152.582deg, rgb(227, 240, 250) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container78 />
    </div>
  );
}

export default function SuperlineIi() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end relative size-full" data-name="Superline II">
      <Desktop />
      <Desktop1 />
      <Desktop2 />
      <Desktop3 />
      <Desktop4 />
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}