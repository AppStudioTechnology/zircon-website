import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Layers, Activity, ArrowRight, Zap, Target, Box, Settings } from 'lucide-react';
import svgPaths from "../../imports/svg-rljdxlgavg";

// Assets
import imgHeroKit from "../../assets/surgical-kit.png";
import imgSequenceOverview from "figma:asset/cab179256ab9b1e23cfdb5f48790c7c65f5a3544.png";
import imgClinicalBenefits from "figma:asset/973b3e9e1cd8cb4397ce7b1c090fa9c90848df62.png";
import imgGridBg from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import imgComponentsBreakdown from "figma:asset/f5f9b9ce4b7c93d0be8db94c0a4690ba03478056.png";
import imgSequenceFX3610 from "figma:asset/0616590f5299e6e46f706da31a11d680caafe0c0.png";

export const SurgicalKitContent = () => {
  return (
    <div className="bg-white">
      {/* Product Overview - match Superline 11 section style */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl mb-3 text-[#070707]">Product Overview</h2>
            <p className="font-['Arial'] text-sm md:text-base text-black/70">
              The Dentium Guided Surgery Kit is available in two configurations to match different clinical needs:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Left Box: Overview Description */}
            <div className="p-6 rounded-2xl border border-[#f3f4f6] bg-gradient-to-br from-[#e3f0fa] to-white flex flex-col gap-3">
              <div className="bg-[#0542BD]/10 px-3 py-1 rounded-full self-start flex items-center gap-2 text-[#0542BD] font-bold text-[10px] uppercase tracking-wider">
                <Settings size={12} /> SURGICAL KIT
              </div>
              <h3 className="font-['Montserrat'] font-bold text-lg md:text-xl text-[#323231]">Dentium Guided Surgery Kit</h3>
              <p className="font-['Arial'] text-[13px] text-black/80 leading-relaxed">
                Designed to support accurate, predictable, and minimally invasive implant placement, the Dentium Guided Surgery Kit offers a complete digital solution for guided implant surgery. Engineered for clinical efficiency, the system provides clear path and depth control while maintaining a streamlined surgical workflow.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Faster Healing', 'Higher Success Rate', 'Proven Results'].map((tag) => (
                  <div key={tag} className="bg-white border border-[#0542BD]/20 px-2.5 py-1 rounded-full font-['Arial'] text-[#0542BD] text-[10px]">{tag}</div>
                ))}
              </div>
            </div>

            {/* Right Box: Sequence Image */}
            <div className="p-6 rounded-2xl border border-[#f3f4f6] bg-gradient-to-br from-[#e3f0fa] to-white flex items-center justify-center overflow-hidden">
              <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0542BD]/20 to-[#00FFFF]/20">
                <img src={imgSequenceOverview} alt="Drilling Sequence" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Configuration Cards - match dark cards from ProductPage */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl p-5 bg-[#323231] flex gap-4 flex-col text-white">
              <h4 className="font-['Montserrat'] font-bold text-[14px] mb-0.5">Digital Full Kit (XGSFK)</h4>
              <p className="font-['Montserrat'] text-white/70 text-[11px] leading-snug">
                Compatible with Platform Ø3.6, Ø4.0, and Ø4.5 fixtures. Features a hybrid design that supports procedures from the initial drill through countersinking.
              </p>
            </div>
            <div className="rounded-2xl p-5 bg-gradient-to-br from-[#0542BD] to-[#021A4C] flex gap-4 flex-col text-white">
              <h4 className="font-['Montserrat'] font-bold text-[14px] mb-0.5">Digital Simple Kit (XGSSK)</h4>
              <p className="font-['Montserrat'] text-white/70 text-[11px] leading-snug">
                Designed for Platform Ø3.6 fixtures with Ø3.0 narrow sleeves. Focused on straightforward path and depth guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Clinical Benefits - match Titanium section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={imgGridBg} alt="" className="w-full h-full object-cover opacity-15 md:opacity-20 mix-blend-screen" />
        </div>
        
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
            {/* Drills Image */}
            <div className="w-full max-w-[340px]">
              <div className="bg-white rounded-3xl p-4 shadow-2xl">
                <div className="h-[260px] rounded-2xl overflow-hidden bg-[#f3f4f6] flex items-center justify-center mb-4">
                  <img src={imgClinicalBenefits} alt="Guide Drills" className="w-full h-full object-contain" />
                </div>
                <div className="flex justify-between px-2">
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-black/40">Material</span>
                    <span className="block font-bold text-lg">CP Grade 4</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[9px] uppercase tracking-wider text-black/40">Standard</span>
                    <span className="block font-bold text-[#344ecc] text-lg">ASTM F67</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Content */}
            <div className="flex-1 max-w-md">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10 mb-4">
                <span className="text-white text-[9px] font-bold uppercase tracking-widest">Key Clinical Benefits</span>
              </div>
              <h2 className="font-['Montserrat'] font-bold text-3xl text-white mb-4 leading-tight">Guide System Benefits</h2>
              <div className="space-y-4">
                {[
                  "Accurate path and depth control for predictable implant placement",
                  "Reduced surgical variability and improved safety",
                  "Efficient workflow with clearly sequenced drilling steps",
                  "Designed to support flapless and minimally invasive procedures",
                  "Organized kit layout for fast intraoperative handling"
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-white rounded-lg size-10 flex items-center justify-center shrink-0 text-[#0542BD]">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-white text-sm">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Digital Full Kit (XGSFK) - Drilling Sequence */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 bg-[#0542BD]/5 rounded-full text-[#0542BD] text-[9px] font-bold mb-3 uppercase tracking-wider">
              UNIFIED PROSTHETIC PLATFORM
            </div>
            <h2 className="text-[#070707] text-2xl md:text-3xl font-bold font-['Montserrat'] mb-3">Digital Full Kit (XGSFK)</h2>
            <p className="text-[#070707]/60 text-sm max-w-xl mx-auto font-['Arial']">SuperLine FX4510SWC Drilling Sequence</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
            {/* List */}
            <div className="w-full lg:w-auto space-y-4">
              {[
                "Tissue Punch",
                "Flat Drill",
                "Guide Drill",
                "Final Drill (FX 36, FX 40, FX 45 options)",
                "Adapter for implant placement"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-[#d3e2f5] rounded-xl size-10 flex items-center justify-center shrink-0">
                    <Check size={18} className="text-[#344ecc]" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-black text-sm md:text-base font-semibold font-['Montserrat']">{item}</h4>
                </div>
              ))}
            </div>

            {/* Image Box */}
            <div className="w-full max-w-[500px]">
              <div className="bg-white border border-[#f3f4f6] rounded-2xl p-6 shadow-sm flex flex-col items-center gap-4">
                <div className="w-full aspect-[2.5/1] relative">
                  <img src={imgComponentsBreakdown} alt="Components Breakdown" className="w-full h-full object-contain" />
                </div>
                <p className="text-xs font-['Montserrat'] text-black/60 text-center">
                  All sizes share <span className="font-bold text-[#344ecc]">one universal connection</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FX3610 Drilling Sequence - match Titanium section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={imgGridBg} alt="" className="w-full h-full object-cover opacity-15 md:opacity-20 mix-blend-screen" />
        </div>
        
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Drills Image */}
            <div className="w-full max-w-[340px]">
              <div className="bg-white rounded-3xl p-4 shadow-2xl">
                <div className="h-[260px] rounded-2xl overflow-hidden bg-[#f3f4f6] flex items-center justify-center">
                  <img src={imgSequenceFX3610} alt="FX3610 Drilling Sequence" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-md">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10 mb-4">
                <span className="text-white text-[9px] font-bold uppercase tracking-widest">Prosthetic Flexibility</span>
              </div>
              <h2 className="font-['Montserrat'] font-bold text-3xl text-white mb-4 leading-tight">SuperLine FX3610SWC Drilling Sequence</h2>
              <div className="space-y-4">
                {["Tissue Punch", "Flat Drill", "Guide Drill", "Final Drill (FX 36)"].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-white rounded-lg size-10 flex items-center justify-center shrink-0 text-[#0542BD]">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <p className="text-white text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Kit Components Cards - match ProductPage card grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl mb-3 text-[#070707]">Kit Components</h2>
            <p className="font-['Arial'] text-sm md:text-base text-black/70">
              Every detail engineered for optimal clinical outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Guide Drills', 
                desc: 'Precision-engineered guide drills designed to work seamlessly with surgical sleeves, ensuring controlled osteotomy preparation.',
                path: svgPaths.p5b81480 
              },
              { 
                title: 'Tissue Punch', 
                desc: 'Used for soft tissue removal in flapless procedures, enabling minimally invasive access.',
                path: svgPaths.p1e4c7e00 
              },
              { 
                title: 'Ti-Sleeve and Ti-Open Sleeve', 
                desc: 'High-precision titanium sleeves designed for durability, accuracy, and repeated clinical use.',
                path: svgPaths.p2b642900 
              }
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-2xl border border-[#f3f4f6] bg-gradient-to-br from-[#e3f0fa] to-white flex flex-col gap-3 group hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-[#DD005C] to-[#0088b3] size-10 rounded-full flex items-center justify-center p-2 text-white shrink-0">
                   <svg fill="none" viewBox="0 0 24 24" className="size-full">
                      <path d={card.path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg text-[#070707]">{card.title}</h3>
                <p className="font-['Arial'] text-[13px] text-black/80 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
