import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import svgPaths from "../../imports/svg-76zdggpx2y";
import heroVideo from '@/assets/hero-video.mp4';

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:h-[700px] w-full bg-black overflow-hidden flex items-center justify-center pt-[88px] sm:pt-[92px] md:pt-[96px] pb-12 md:pb-0">
      {/* Orb: one shared container for radial circle + video (same size, clipped to circle) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="relative rounded-full overflow-hidden aspect-square w-[clamp(260px,45vw,500px)]">
          {/* Radial circle (background layer) */}
          <div
            className="absolute inset-0 w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(0,136,179,0.35)_0%,rgba(0,136,179,0.12)_40%,transparent_70%)]"
            aria-hidden
          />
          {/* Video: fills same circle exactly, clipped by container */}
          <video
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Black overlay to dull the video */}
          <div className="absolute inset-0 w-full h-full rounded-full bg-black/50 pointer-events-none" aria-hidden />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(16px,3vw,48px)] text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-gradient-to-r from-[#DD005C] to-[#0088b3] px-5 py-1 rounded-full mb-6 md:mb-8"
        >
          <span className="text-white text-xs md:text-sm font-medium tracking-wide">#1 Innovative Equipment</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.15] mb-6 md:mb-8 max-w-5xl mx-auto drop-shadow-2xl"
        >
          Powering Dental Solutions, Medical Equipments Innovation for a Healthier Tomorrow
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 text-sm md:text-[18px] max-w-2xl mx-auto mb-8 md:mb-12 font-['Arial'] leading-relaxed"
        >
          Bridging global innovation with regional healthcare professionals across the GCC
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto min-h-[48px] group bg-gradient-to-r from-[#DD005C] to-[#0088b3] text-white pl-6 pr-3 py-2.5 rounded-full flex items-center justify-center gap-2.5 font-semibold text-[15px] transition-all hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(221,0,92,0.4)] cursor-pointer"
          >
            Request Consultation
            <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/40 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                <path d={svgPaths.p2a145500} fill="white" />
              </svg>
            </div>
          </Link>
          <button className="w-full sm:w-auto min-h-[48px] bg-white text-[#070707] px-8 py-2.5 rounded-full font-semibold text-[15px] hover:bg-gray-100 transition-all cursor-pointer shadow-lg">
            Request a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};
