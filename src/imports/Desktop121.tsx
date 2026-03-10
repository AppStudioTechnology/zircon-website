import svgPaths from "./svg-b2hkngcsnk";
import imgBackground from "figma:asset/c29c9bb037b6a3069cc041e18252bb6a19a2116f.png";
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";

function Container1() {
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
      <Container1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Background() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] w-full" data-name="Background" style={{ backgroundImage: "linear-gradient(138.431deg, rgb(243, 244, 246) 0%, rgb(229, 231, 235) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip py-[175px] relative rounded-[inherit] size-full">
        <BackgroundShadow />
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Material Grade</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323231] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">CP Grade 4</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-right tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Standard</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344ecc] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[32px]">ASTM F67</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[478px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container3 />
        <Container6 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white flex-[1_0_0] h-[612px] min-h-px min-w-px relative rounded-[40px]" data-name="Background+Border+Shadow">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[25px] relative size-full">
          <Background />
          <Container2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Svg() {
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

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Svg />
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">PRODUCT SPECIFICATION</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[48px] not-italic relative shrink-0 text-[48px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Unalloyed Titanium</p>
        <p>ASTM F67</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[32.5px] whitespace-pre-wrap">Commercially pure titanium Grade 4 provides the optimal balance of biocompatibility and mechanical strength.</p>
      </div>
    </div>
  );
}

function Svg1() {
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
      <Svg1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Grade 4 Titanium</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Highest purity commercially pure titanium for superior quality</p>
        <p>and consistency.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading1 />
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow1 />
      <Container13 />
    </div>
  );
}

function Svg2() {
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
      <Svg2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Biocompatibility</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Excellent tissue acceptance with proven long-term clinical</p>
        <p>performance.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-[500px] relative self-stretch" data-name="Container">
      <Heading2 />
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow2 />
      <Container16 />
    </div>
  );
}

function Svg3() {
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
      <Svg3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Mechanical Strength</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Optimal strength-to-weight ratio for reliable load-bearing</p>
        <p>applications.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-[500px] relative self-stretch" data-name="Container">
      <Heading3 />
      <Container20 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow3 />
      <Container19 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container15 />
      <Container18 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <Overlay />
      <Heading />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[64px] items-center justify-center left-1/2 top-[70px] w-[1260px]" data-name="Container">
      <BackgroundBorderShadow />
      <Container9 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-black relative size-full" data-name="Desktop - 121">
      <div className="absolute h-[622px] left-0 top-[226px] w-[1440px]" data-name="Group 38167 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-15 md:opacity-20 mix-blend-screen" src={imgGroup381671} />
      </div>
      <Container />
    </div>
  );
}