import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import imgKeyValue from "figma:asset/b105e1a4b830e46319b9138d0315752d28ed4e25.png";
import imgPattern from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";

export const AboutKeyValue = () => {
  return (
    <section className="relative w-full bg-black py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={imgPattern} alt="" className="w-full h-full object-cover opacity-15 md:opacity-20 mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-[clamp(16px,4vw,60px)]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 aspect-[16/10] rounded-[24px] overflow-hidden shadow-2xl"
          >
            <img 
              src={imgKeyValue} 
              alt="Medical Practice" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-[1px] bg-[#0542BD]" />
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Our Values</span>
              </div>
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] leading-tight">
                Zircon Key Value
              </h2>
              <div className="flex flex-col gap-4 text-white/60 text-[13px] md:text-[14px] font-['Montserrat'] leading-relaxed max-w-[520px]">
                <p>In healthcare, trust is the foundation of every meaningful outcome.</p>
                <p>
                  We act as strategic enablers, connecting global manufacturers with healthcare professionals across the GCC and translating innovation into solutions that align with real clinical needs. Our role extends beyond distribution to include education, technical support, and long-term partnership.
                </p>
                <p>
                  Every solution we deliver is backed by a strong operational backbone and a network designed for sustainable success. Zircon is where trust becomes a platform for progress.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="self-start h-[48px] bg-gradient-to-r from-[#dd005c] to-[#0542BD] pl-6 pr-1.5 rounded-full flex items-center gap-4 group cursor-pointer hover:scale-[1.02] transition-all shadow-xl active:scale-95"
            >
              <span className="text-white font-bold text-[10px] uppercase tracking-widest font-['Montserrat']">Book Now</span>
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center group-hover:bg-white/90 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="rotate-0 transition-transform group-hover:translate-x-0.5">
                  <path d="M19 12H5" stroke="#0542BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 17L19 12" stroke="#0542BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 7L19 12" stroke="#0542BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
