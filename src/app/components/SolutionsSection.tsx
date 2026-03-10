import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";

export function SolutionsSection() {
  return (
    <section className="relative bg-[#070707] py-16 md:py-20 overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={imgGroup381671} 
          alt="" 
          className="w-full h-full object-cover opacity-15 md:opacity-20 mix-blend-screen"
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-10 md:mb-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-5 py-0.5 rounded-full bg-gradient-to-r from-[#dd005c] to-[#0088b3] mb-4"
          >
            <span className="text-white text-xs md:text-sm font-medium font-['Montserrat']"># Categories</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-white font-['Montserrat'] leading-tight"
          >
            Comprehensive Healthcare Solutions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Dental Solutions Card */}
          <Link to="/solutions/dental" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative p-6 rounded-[24px] overflow-hidden flex flex-col gap-6 md:gap-8 min-h-[260px] md:min-h-[280px] w-full"
              style={{ backgroundImage: "linear-gradient(138.02deg, #DD005C 0.28%, #0088B3 100%)" }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  background: [
                    "radial-gradient(600px circle at 0% 0%, rgba(255,255,255,0.15), transparent 40%)",
                    "radial-gradient(100% 100% circle at 100% 100%, rgba(255,255,255,0.15), transparent 40%)",
                    "radial-gradient(600px circle at 0% 100%, rgba(255,255,255,0.15), transparent 40%)",
                    "radial-gradient(600px circle at 100% 0%, rgba(255,255,255,0.15), transparent 40%)",
                    "radial-gradient(600px circle at 0% 0%, rgba(255,255,255,0.15), transparent 40%)"
                  ]
                }}
                transition={{ 
                  opacity: { duration: 0.5 },
                  background: { duration: 12, repeat: Infinity, ease: "linear" }
                }}
                className="absolute inset-0 border border-white/20 rounded-[24px] pointer-events-none" 
              />
              <span className="text-3xl md:text-4xl font-semibold text-white/40 font-['Montserrat']">01</span>
              
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 font-['Montserrat']">Dental Solutions</h3>
                <p className="text-[13px] md:text-sm text-white/80 leading-relaxed font-['Arial'] max-w-sm">
                  Advanced dental equipment, consumables, and digital solutions
                </p>
              </div>
              
              <div className="mt-2">
                <div className="min-h-[40px] text-white font-medium text-sm font-['Montserrat'] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Medical Solutions Card */}
          <Link to="/solutions/medical" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="relative p-6 rounded-[24px] bg-white flex flex-col gap-6 md:gap-8 min-h-[260px] md:min-h-[280px] w-full"
            >
              <div className="absolute inset-0 border border-[#ebebeb] rounded-[24px] pointer-events-none" />
              <span className="text-3xl md:text-4xl font-semibold text-[#070707] font-['Montserrat']">02</span>
              
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-semibold text-[#070707] mb-2 font-['Montserrat']">Medical Solutions</h3>
                <p className="text-[13px] md:text-sm text-[#070707]/60 leading-relaxed font-['Arial'] max-w-sm">
                  Comprehensive medical equipment and consumables for clinical excellence
                </p>
              </div>
              
              <div className="mt-2">
                <div className="min-h-[40px] text-[#070707] font-medium text-sm font-['Montserrat'] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}

