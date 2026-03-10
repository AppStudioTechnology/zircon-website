import React from 'react';
import { motion } from 'motion/react';
import { Layers, Shield, Zap, Activity } from 'lucide-react';
import imgImage15 from "figma:asset/4f8c1a35aab65224dbe0518b64ce8fed9dc75f84.png";
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";

export const InterchangeableAbutments = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={imgGroup381671} 
          alt="" 
          className="w-full h-full object-cover opacity-15 md:opacity-20 mix-blend-screen"
        />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Product Image Card - Matching Titanium Section Style */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[340px] bg-white rounded-3xl p-4 shadow-2xl"
        >
          <div className="h-[260px] rounded-2xl overflow-hidden bg-[#f3f4f6] flex items-center justify-center mb-4">
            <img 
              src={imgImage15} 
              alt="Interchangeable Abutments" 
              className="w-[80%] h-auto object-contain"
            />
          </div>
          <div className="flex justify-between px-2">
            <div>
              <span className="block text-[9px] uppercase tracking-wider text-black/40">Category</span>
              <span className="block font-bold text-lg">Prosthetics</span>
            </div>
            <div className="text-right">
              <span className="block text-[9px] uppercase tracking-wider text-black/40">System</span>
              <span className="block font-bold text-[#344ecc] text-lg">Universal</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content - Matching Titanium Section Style */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 max-w-md"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10 mb-4">
            <span className="text-white text-[9px] font-bold uppercase tracking-widest">
              PROSTHETIC FLEXIBILITY
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Montserrat'] font-bold text-3xl text-white mb-4 leading-tight">
            Interchangeable Abutments
          </h2>

          {/* List of features */}
          <div className="space-y-4">
            {[
              { 
                title: 'Clinical Freedom', 
                desc: 'Seamlessly use any abutment with any implant diameter.', 
                icon: <Zap /> 
              },
              { 
                title: 'Time Efficient', 
                desc: 'Streamlines restorative procedures and reduces chair time.', 
                icon: <Activity /> 
              },
              { 
                title: 'Cost-Effective', 
                desc: 'Simplify inventory and optimize practice overhead.', 
                icon: <Shield /> 
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="bg-white rounded-lg size-10 flex items-center justify-center shrink-0 text-[#0542BD]">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">{item.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
