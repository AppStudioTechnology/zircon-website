import svgPaths from "./svg-oa709jqtgm";
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import imgEllipse6 from "figma:asset/2126a896edaae5b9f5b4e97a113e3c7b90c09ccb.png";
import imgFrame1321316702 from "figma:asset/da24c98bfb003eaebed2c2ac173e717a7f98a5b7.png";
import imgFrame1321316703 from "figma:asset/ba88097ac730a4b5f2ecba39c27e57c7f081fc24.png";
import imgFrame1321316704 from "figma:asset/2e093adb19bf0f0f06182f509ced24d17546fb64.png";
import img3DCancerIconWithScanner2 from "figma:asset/7e2efc14d6625919f00fad1168741e482ff6c378.png";
import img3DCancerIconWithScanner1 from "figma:asset/24aa6accb92de4e7aee89a2ebc34fc2a19c94cc6.png";
import imgLogoWithTextWhite from "figma:asset/fd7a6d759e2c2f6e2a387703f814a9dfb349d19f.png";

function Frame1() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] h-[32px] items-center justify-center px-[24px] py-[4px] relative rounded-[56px] shrink-0 to-[#0088b3]">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white"># Categories</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-[986px]">
      <Frame1 />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[48px] text-center text-white w-[min-content] whitespace-pre-wrap">Comprehensive Healthcare Solutions</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[20px] not-italic relative shrink-0 text-white w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] relative shrink-0 text-[24px]">Dental Solutions</p>
      <p className="font-['Arial:Regular',sans-serif] min-w-full relative shrink-0 text-[14px] w-[min-content] whitespace-pre-wrap">Advanced dental equipment, consumables, and digital solutions</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start p-[24px] relative rounded-[24px] shrink-0 w-[629px]" style={{ backgroundImage: "linear-gradient(138.02deg, rgb(221, 0, 92) 0.28306%, rgb(0, 136, 179) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[48px] min-w-full not-italic relative shrink-0 text-[40px] text-white w-[min-content] whitespace-pre-wrap">01</p>
      <Frame54 />
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Learn More</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[20px] not-italic relative shrink-0 text-[#070707] w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] relative shrink-0 text-[24px]">Medical Solutions</p>
      <p className="font-['Arial:Regular',sans-serif] min-w-full relative shrink-0 text-[14px] w-[min-content] whitespace-pre-wrap">Comprehensive medical equipment and consumables for clinical excellence</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start p-[24px] relative rounded-[24px] shrink-0 w-[629px]">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[48px] min-w-full not-italic relative shrink-0 text-[#070707] text-[40px] w-[min-content] whitespace-pre-wrap">02</p>
      <Frame57 />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070707] text-[16px] underline">Learn More</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-full">
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame60 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0 w-[1280px]">
      <Frame21 />
      <Frame58 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-[80px] w-[1280px]">
      <Frame59 />
    </div>
  );
}

function Desktop3() {
  return (
    <div className="bg-black h-[621px] overflow-clip relative shrink-0 w-[1440px]" data-name="Desktop - 121">
      <div className="absolute h-[621px] left-0 top-0 w-[1439px]" data-name="Group 38167 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-15 md:opacity-20 mix-blend-screen" src={imgGroup381671} />
      </div>
      <Frame32 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Desktop3 />
    </div>
  );
}

function LandingPage1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[1440px]" data-name="Landing Page 2">
      <Frame62 />
    </div>
  );
}

function Asset() {
  return <div className="absolute h-[520px] left-[450px] opacity-50 top-[228px] w-[548px]" data-name="Asset 1 2" />;
}

function Frame2() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] h-[32px] items-center justify-center px-[24px] py-[4px] relative rounded-[56px] shrink-0 to-[#0088b3]">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white"># Testimonial</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Content">
      <Frame2 />
      <p className="font-['Montserrat:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[#070707] text-[48px] text-center w-[1134px] whitespace-pre-wrap">Client Success Stories</p>
    </div>
  );
}

function Rating1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[136px]" data-name="rating">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 24">
        <g id="rating">
          <path d={svgPaths.p5d80e00} fill="var(--fill-0, #1C55E0)" id="Star 1" />
          <path d={svgPaths.p3b0fd700} fill="var(--fill-0, #1C55E0)" id="Star 2" />
          <path d={svgPaths.p392dd600} fill="var(--fill-0, #1C55E0)" id="Star 3" />
          <path d={svgPaths.p232a5990} fill="var(--fill-0, #1C55E0)" id="Star 4" />
          <g id="star">
            <path d={svgPaths.pf1ff400} id="Star 5" stroke="var(--stroke-0, #D4D3D3)" />
            <g id="Mask group">
              <mask height="nan" id="mask0_1_27279" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="nan" x="inf" y="inf">
                <g id="Star 6" />
              </mask>
              <g mask="url(#mask0_1_27279)">
                <rect fill="var(--fill-0, #2F2A2A)" height="22.5" id="Rectangle 1" width="24" x="112" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="rating">
      <Rating1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['Montserrat:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#2f2a2a] text-[18px] whitespace-pre-wrap">This product has transformed the way our team collaborates. The intuitive interface allows us to work seamlessly, increasing our productivity immensely. Highly recommend!</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Rating />
      <Text />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="user_profile">
      <div className="absolute left-0 size-[48px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="var(--fill-0, #2F2A2A)" id="Ellipse 432" r="24" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] left-[calc(50%-1px)] not-italic text-[#ebeff8] text-[18px] text-center top-1/2 whitespace-nowrap">
        <p className="leading-[20px]">AB</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[24px] not-italic relative shrink-0 text-[18px]">
      <p className="col-1 font-['Montserrat:Bold',sans-serif] ml-0 mt-0 relative row-1 text-[#2f2a2a]">Alice Brown</p>
      <p className="col-1 font-['Montserrat:Regular',sans-serif] ml-0 mt-[26.5px] relative row-1 text-[rgba(48,42,42,0.6)]">Project Coordinator</p>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Name">
      <UserProfile />
      <Group />
    </div>
  );
}

function Testmonial() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[45px] shadow-[0px_2px_12px_0px_rgba(31,45,61,0.1)] shrink-0 w-[402px]" data-name="testmonial">
      <Frame6 />
      <Name />
    </div>
  );
}

function Rating3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[136px]" data-name="rating">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 24">
        <g id="rating">
          <path d={svgPaths.p5d80e00} fill="var(--fill-0, #1C55E0)" id="Star 1" />
          <path d={svgPaths.p3b0fd700} fill="var(--fill-0, #1C55E0)" id="Star 2" />
          <path d={svgPaths.p392dd600} fill="var(--fill-0, #1C55E0)" id="Star 3" />
          <path d={svgPaths.p232a5990} fill="var(--fill-0, #1C55E0)" id="Star 4" />
          <g id="star">
            <path d={svgPaths.pf1ff400} id="Star 5" stroke="var(--stroke-0, #D4D3D3)" />
            <g id="Mask group">
              <mask height="nan" id="mask0_1_27279" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="nan" x="inf" y="inf">
                <g id="Star 6" />
              </mask>
              <g mask="url(#mask0_1_27279)">
                <rect fill="var(--fill-0, #2F2A2A)" height="22.5" id="Rectangle 1" width="24" x="112" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Rating2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="rating">
      <Rating3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['Montserrat:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#2f2a2a] text-[18px] whitespace-pre-wrap">{`We've seen a significant reduction in onboarding time for new employees since using this tool. It’s easy to navigate and the support team is always ready to help!`}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Rating2 />
      <Text1 />
    </div>
  );
}

function UserProfile1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="user_profile">
      <div className="absolute left-0 size-[48px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="var(--fill-0, #2F2A2A)" id="Ellipse 432" r="24" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] left-[calc(50%-1px)] not-italic text-[#ebeff8] text-[18px] text-center top-1/2 whitespace-nowrap">
        <p className="leading-[20px]">CD</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[24px] not-italic relative shrink-0 text-[18px]">
      <p className="col-1 font-['Montserrat:Bold',sans-serif] ml-0 mt-0 relative row-1 text-[#2f2a2a]">Charlie Davis</p>
      <p className="col-1 font-['Montserrat:Regular',sans-serif] ml-0 mt-[26.5px] relative row-1 text-[rgba(48,42,42,0.6)]">HR Specialist</p>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Name">
      <UserProfile1 />
      <Group1 />
    </div>
  );
}

function Testmonial1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[45px] shadow-[0px_2px_12px_0px_rgba(31,45,61,0.1)] shrink-0 w-[402px]" data-name="testmonial">
      <Frame8 />
      <Name1 />
    </div>
  );
}

function Rating5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[136px]" data-name="rating">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 24">
        <g id="rating">
          <path d={svgPaths.p5d80e00} fill="var(--fill-0, #1C55E0)" id="Star 1" />
          <path d={svgPaths.p3b0fd700} fill="var(--fill-0, #1C55E0)" id="Star 2" />
          <path d={svgPaths.p392dd600} fill="var(--fill-0, #1C55E0)" id="Star 3" />
          <path d={svgPaths.p232a5990} fill="var(--fill-0, #1C55E0)" id="Star 4" />
          <g id="star">
            <path d={svgPaths.pf1ff400} id="Star 5" stroke="var(--stroke-0, #D4D3D3)" />
            <g id="Mask group">
              <mask height="nan" id="mask0_1_27279" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="nan" x="inf" y="inf">
                <g id="Star 6" />
              </mask>
              <g mask="url(#mask0_1_27279)">
                <rect fill="var(--fill-0, #2F2A2A)" height="22.5" id="Rectangle 1" width="24" x="112" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Rating4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="rating">
      <Rating5 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['Montserrat:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#2f2a2a] text-[18px] whitespace-pre-wrap">The analytics provided by this platform are outstanding. They have enabled us to make data-driven decisions that have boosted our overall performance.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Rating4 />
      <Text2 />
    </div>
  );
}

function UserProfile2() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="user_profile">
      <div className="absolute left-0 size-[48px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="var(--fill-0, #2F2A2A)" id="Ellipse 432" r="24" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] left-[calc(50%-1px)] not-italic text-[#ebeff8] text-[18px] text-center top-1/2 whitespace-nowrap">
        <p className="leading-[20px]">EF</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[24px] not-italic relative shrink-0 text-[18px]">
      <p className="col-1 font-['Montserrat:Bold',sans-serif] ml-0 mt-0 relative row-1 text-[#2f2a2a]">Eva Fox</p>
      <p className="col-1 font-['Montserrat:Regular',sans-serif] ml-0 mt-[26.5px] relative row-1 text-[rgba(48,42,42,0.6)]">Data Analyst</p>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Name">
      <UserProfile2 />
      <Group2 />
    </div>
  );
}

function Testmonial2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[45px] shadow-[0px_2px_12px_0px_rgba(31,45,61,0.1)] shrink-0 w-[402px]" data-name="testmonial">
      <Frame9 />
      <Name2 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-full" data-name="testimonials">
      <Testmonial />
      <Testmonial1 />
      <Testmonial2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[48px] items-center left-1/2 top-[calc(50%-0.75px)] w-[1266px]">
      <Content />
      <Testimonials />
    </div>
  );
}

function Desktop1() {
  return (
    <div className="bg-[#fafbff] h-[748px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 98">
      <div className="absolute h-[621px] left-px top-[127px] w-[1439px]" data-name="Group 38167 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-15 md:opacity-20 mix-blend-screen" src={imgGroup381671} />
      </div>
      <Asset />
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] h-[32px] items-center justify-center px-[24px] py-[4px] relative rounded-[56px] shrink-0 to-[#0088b3]">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white"># Blogs</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[732px]">
      <Frame3 />
      <p className="font-['Montserrat:Medium',sans-serif] leading-[56px] min-w-full not-italic relative shrink-0 text-[#070707] text-[48px] w-[min-content] whitespace-pre-wrap">Insights That Power Smarter Medical Equipment Decisions</p>
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

function Frame23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <ArrowRight />
      <ArrowRight1 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[80px] top-[80px] w-[1280px]">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame24() {
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

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[150px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full whitespace-pre-wrap">Nadia Prasetya</p>
      <Frame24 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]">
        <img alt="" className="block max-w-none size-full" height="36" src={imgEllipse6} width="36" />
      </div>
      <Frame25 />
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ArrowUpRight">
          <path d={svgPaths.p24654af0} fill="var(--fill-0, #F57C3C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f57c3c] text-[14px]">Read More</p>
      <ArrowUpRight />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start justify-end min-h-px min-w-px py-[14px] relative rounded-[8px] w-full">
      <div className="absolute bg-gradient-to-t from-[#1b1b1b] from-[53.5%] h-[411px] left-[-14px] to-[77.628%] to-[rgba(27,27,27,0)] top-[181px] w-[416px]" />
      <Frame33 />
      <div className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[372px] whitespace-pre-wrap">
        <p className="mb-0">{`How Preventive Maintenance Reduces Downtime `}</p>
        <p>in Healthcare Facilities</p>
      </div>
      <Frame41 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col h-[600px] items-start justify-end overflow-clip p-[14px] relative rounded-[24px] shrink-0 w-[416px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgFrame1321316702} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[24px] to-[rgba(0,0,0,0.8)]" />
      </div>
      <Frame37 />
    </div>
  );
}

function Frame27() {
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

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[150px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full whitespace-pre-wrap">Nadia Prasetya</p>
      <Frame27 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]">
        <img alt="" className="block max-w-none size-full" height="36" src={imgEllipse6} width="36" />
      </div>
      <Frame26 />
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ArrowUpRight">
          <path d={svgPaths.p24654af0} fill="var(--fill-0, #F57C3C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f57c3c] text-[14px]">Read More</p>
      <ArrowUpRight1 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start justify-end min-h-px min-w-px py-[14px] relative rounded-[8px] w-full">
      <div className="absolute bg-gradient-to-t from-[#1b1b1b] from-[53.5%] h-[411px] left-[-14px] to-[77.628%] to-[rgba(27,27,27,0)] top-[181px] w-[416px]" />
      <Frame34 />
      <div className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[372px] whitespace-pre-wrap">
        <p className="mb-0">{`How Preventive Maintenance Reduces Downtime `}</p>
        <p>in Healthcare Facilities</p>
      </div>
      <Frame42 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col h-[600px] items-start justify-end overflow-clip p-[14px] relative rounded-[24px] shrink-0 w-[416px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgFrame1321316703} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[24px] to-[rgba(0,0,0,0.8)]" />
      </div>
      <Frame38 />
    </div>
  );
}

function Frame29() {
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

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[150px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full whitespace-pre-wrap">Nadia Prasetya</p>
      <Frame29 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]">
        <img alt="" className="block max-w-none size-full" height="36" src={imgEllipse6} width="36" />
      </div>
      <Frame28 />
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ArrowUpRight">
          <path d={svgPaths.p24654af0} fill="var(--fill-0, #F57C3C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f57c3c] text-[14px]">Read More</p>
      <ArrowUpRight2 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start justify-end min-h-px min-w-px py-[14px] relative rounded-[8px] w-full">
      <div className="absolute bg-gradient-to-t from-[#1b1b1b] from-[53.5%] h-[411px] left-[-14px] to-[77.628%] to-[rgba(27,27,27,0)] top-[181px] w-[416px]" />
      <Frame35 />
      <div className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[372px] whitespace-pre-wrap">
        <p className="mb-0">{`How Preventive Maintenance Reduces Downtime `}</p>
        <p>in Healthcare Facilities</p>
      </div>
      <Frame43 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col h-[600px] items-start justify-end overflow-clip p-[14px] relative rounded-[24px] shrink-0 w-[416px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgFrame1321316704} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[24px] to-[rgba(0,0,0,0.8)]" />
      </div>
      <Frame39 />
    </div>
  );
}

function Frame31() {
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

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[150px]">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full whitespace-pre-wrap">Nadia Prasetya</p>
      <Frame31 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]">
        <img alt="" className="block max-w-none size-full" height="36" src={imgEllipse6} width="36" />
      </div>
      <Frame30 />
    </div>
  );
}

function ArrowUpRight3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ArrowUpRight">
          <path d={svgPaths.p24654af0} fill="var(--fill-0, #F57C3C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f57c3c] text-[14px]">Read More</p>
      <ArrowUpRight3 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start justify-end min-h-px min-w-px py-[14px] relative rounded-[8px] w-full">
      <div className="absolute bg-gradient-to-t from-[#1b1b1b] from-[53.5%] h-[411px] left-[-14px] to-[77.628%] to-[rgba(27,27,27,0)] top-[181px] w-[416px]" />
      <Frame36 />
      <div className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[372px] whitespace-pre-wrap">
        <p className="mb-0">{`How Preventive Maintenance Reduces Downtime `}</p>
        <p>in Healthcare Facilities</p>
      </div>
      <Frame44 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col h-[600px] items-start justify-end overflow-clip p-[14px] relative rounded-[24px] shrink-0 w-[416px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgFrame1321316702} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[24px] to-[rgba(0,0,0,0.8)]" />
      </div>
      <Frame40 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[79px] top-[344px]">
      <Frame49 />
      <Frame50 />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Desktop2() {
  return (
    <div className="bg-white h-[1024px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 99">
      <Frame48 />
      <Frame51 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-white w-[597px] whitespace-pre-wrap">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[56px] relative shrink-0 text-[48px] w-[567px]">Connecting Innovation and Care, One Device Away</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]">Empowering healthcare providers with trusted medical equipment and responsive technical support every step forward.</p>
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

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Request Consultation</p>
      <ArrowCircleRight />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] h-[48px] items-center justify-center pl-[24px] pr-[12px] py-[4px] relative rounded-[56px] shrink-0 to-[#0088b3]">
      <Frame20 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center justify-center px-[24px] py-[4px] relative rounded-[56px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[56px]" />
      <p className="font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070707] text-[16px] text-center w-[118px] whitespace-pre-wrap">Learn More</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame5 />
      <Frame />
    </div>
  );
}

function Frame47() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(30%-48.6px)] top-1/2 w-[642px]">
      <Frame46 />
      <Frame4 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute bg-[#0542bd] h-[606px] left-[24px] overflow-clip rounded-[24px] top-[24px] w-[1392px]">
      <p className="-translate-x-1/2 absolute bg-clip-text font-['Montserrat:SemiBold',sans-serif] leading-[normal] left-[calc(50%-34px)] not-italic text-[316px] text-center top-[calc(75%-144.5px)]" style={{ backgroundImage: "linear-gradient(180.88deg, rgba(255, 255, 255, 0.06) 32.445%, rgba(255, 255, 255, 0.3) 71.887%)", WebkitTextFillColor: "transparent" }}>
        Zircon
      </p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[290px] items-center justify-center left-[calc(70%+104.45px)] top-[calc(75%+63.5px)] w-[735.696px]">
        <div className="flex-none rotate-180">
          <div className="blur-[20px] h-[290px] relative w-[735.696px]" data-name="3d-cancer-icon-with-scanner 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DCancerIconWithScanner2} />
          </div>
        </div>
      </div>
      <Frame47 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(70%+58.1px)] size-[719px] top-[calc(75%-95px)]" data-name="3d-cancer-icon-with-scanner 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DCancerIconWithScanner1} />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="h-[67px] relative shrink-0 w-[163px]" data-name="logo-with-text-white">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoWithTextWhite} />
      </div>
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content] whitespace-pre-wrap">Trusted enabler for healthcare solutions dedicated to enabling excellence across dental and medical practice.</p>
      <div className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-white w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0">{`info@zircon.ae `}</p>
        <p className="mb-0">{`+971 12 345 6789 `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col h-[251px] items-start justify-end relative shrink-0 w-[357px]">
      <Frame13 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 text-white">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px]">Home</p>
      <div className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0">{`About Us `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Our Partners `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Partners `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Careers</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 text-white">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px]">Solutions</p>
      <div className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0">{`Dental Solutions `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Medical Solutions `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Doctors Corner `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Education & Learning`}</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 text-white">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px]">Resources</p>
      <div className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0">{`Events `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Testimonials `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`FAQ `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Download Center</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 text-white">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px]">Legal</p>
      <div className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0">{`Privacy Policy `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function WhatsApp() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="WhatsApp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g filter="url(#filter0_i_1_19532)" id="WhatsApp">
          <g clipPath="url(#clip0_1_19532)">
            <path d={svgPaths.p2d44a700} fill="var(--fill-0, white)" id="Container" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36" id="filter0_i_1_19532" width="32" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_19532" />
          </filter>
          <clipPath id="clip0_1_19532">
            <rect fill="white" height="32" rx="16" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g filter="url(#filter0_i_1_19527)" id="Instagram">
          <g clipPath="url(#clip0_1_19527)">
            <path d={svgPaths.p2d20a880} fill="var(--fill-0, white)" id="Container" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36" id="filter0_i_1_19527" width="32" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_19527" />
          </filter>
          <clipPath id="clip0_1_19527">
            <rect fill="white" height="32" rx="16" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g filter="url(#filter0_i_1_22469)" id="LinkedIn">
          <g clipPath="url(#clip0_1_22469)">
            <path d={svgPaths.p30e2100} fill="var(--fill-0, white)" id="Container" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36" id="filter0_i_1_22469" width="32" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_22469" />
          </filter>
          <clipPath id="clip0_1_22469">
            <rect fill="white" height="32" rx="16" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Twitter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g filter="url(#filter0_i_1_26333)" id="Twitter">
          <g clipPath="url(#clip0_1_26333)">
            <path d={svgPaths.p271d5f00} fill="var(--fill-0, white)" id="Container" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36" id="filter0_i_1_26333" width="32" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_26333" />
          </filter>
          <clipPath id="clip0_1_26333">
            <rect fill="white" height="32" rx="16" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <WhatsApp />
      <Instagram />
      <LinkedIn />
      <Twitter />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative">
      <Frame64 />
      <Frame16 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[720px]">
      <Frame10 />
      <Frame11 />
      <Frame14 />
      <Frame63 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[225px] items-start justify-center relative shrink-0 w-full">
      <Frame18 />
      <Frame12 />
    </div>
  );
}

function VuesaxLinearCopyright1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/copyright">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="copyright">
          <path d={svgPaths.p3eb19400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p10b08580} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearCopyright() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="vuesax/linear/copyright">
      <VuesaxLinearCopyright1 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <VuesaxLinearCopyright />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">2026 Zircon, All right reserved</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[710px] w-[1302px]">
      <Frame19 />
      <Frame65 />
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-black h-[1024px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 96">
      <div className="absolute h-[621px] left-px top-[592px] w-[1439px]" data-name="Group 38167 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-15 md:opacity-20 mix-blend-screen" src={imgGroup381671} />
      </div>
      <Frame45 />
      <Frame66 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <LandingPage1 />
      <Desktop1 />
      <Desktop2 />
      <Desktop />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Landing Page 2">
      <Frame61 />
    </div>
  );
}