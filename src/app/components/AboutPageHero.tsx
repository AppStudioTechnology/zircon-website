import React from 'react';
import { motion } from 'motion/react';
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import svgPaths from "../../imports/svg-todgp7qly0";

export const AboutHero = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden pt-[136px] sm:pt-[140px] md:pt-[144px] pb-16 md:pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgGroup381671} 
          alt="" 
          className="w-full h-full object-cover opacity-15 md:opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)]">
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-1.5 mb-6 text-[#ABABAB] text-[10px] font-['Montserrat'] font-medium uppercase tracking-[0.2em]"
        >
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p3a151200} stroke="#ABABAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p1811de30} stroke="#ABABAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Home</span>
          </div>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="#DD005C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#DD005C]">About Us</span>
        </motion.div>

        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] mb-4 leading-tight"
          >
            Where Innovation <br /> Meets Trust
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white/80 text-sm md:text-base font-['Montserrat'] max-w-2xl mx-auto leading-relaxed"
          >
            A trusted enabler for healthcare solutions dedicated to enabling excellence across dental and medical practice.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
