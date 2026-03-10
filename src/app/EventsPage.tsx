import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  ArrowLeft, 
  ArrowUpRight 
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Assets from Figma
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import imgFrame1321316702 from "figma:asset/980fe28127a3c04aaa3333223ddfee8c382273af.png";
import imgEllipse6 from "figma:asset/5d6531cce9805eaca09e685a33e01a15bc7000b7.png";
import imgFrame1321316707 from "figma:asset/20ffb66f7d22aceb7e9e9f22a06aba748096f4ea.png";
import imgFrame1321316706 from "figma:asset/2db6bbf3e398e787e49344d38fce323ff3d1ec4d.png";
import imgFrame1321316708 from "figma:asset/dad07aed070e2b090d846d77a4805ece9dd189f5.png";

const events = [
  {
    id: 1,
    title: "Advanced Implantology Workshop",
    author: "Nadia Prasetya",
    date: "June 13, 2025",
    readTime: "6 Min read",
    image: imgFrame1321316702,
    authorImage: imgEllipse6
  },
  {
    id: 2,
    title: "GCC Dental Conference 2024",
    author: "Nadia Prasetya",
    date: "June 13, 2025",
    readTime: "6 Min read",
    image: imgFrame1321316707,
    authorImage: imgEllipse6
  },
  {
    id: 3,
    title: "Clinical Excellence Seminar",
    author: "Nadia Prasetya",
    date: "June 13, 2025",
    readTime: "6 Min read",
    image: imgFrame1321316706,
    authorImage: imgEllipse6
  },
  {
    id: 4,
    title: "Digital Workflow Webinar",
    author: "Nadia Prasetya",
    date: "June 13, 2025",
    readTime: "6 Min read",
    image: imgFrame1321316708,
    authorImage: imgEllipse6
  }
];

export const EventsPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 3 : scrollLeft + clientWidth / 3;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - matches category hero height, padding, text */}
      <section className="relative w-full bg-black overflow-hidden pt-[136px] sm:pt-[140px] md:pt-[144px] pb-16 md:pb-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={imgGroup381671} 
            alt="" 
            className="w-full h-full object-cover opacity-15 md:opacity-20 mix-blend-screen" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)]">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-1.5 mb-6 text-[#ABABAB] text-[10px] font-['Montserrat'] font-medium uppercase tracking-[0.2em]"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-[#ABABAB]" />
            <span className="text-[#DD005C]">Events</span>
          </motion.div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] mb-4 leading-tight"
            >
              Events
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white/80 text-sm md:text-base font-['Montserrat'] max-w-2xl mx-auto leading-relaxed"
            >
              Join us at upcoming exhibitions, workshops, and educational events across the GCC
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Events Section - Condensed Layout */}
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex bg-gradient-to-r from-[#DD005C] to-[#0542BD] text-white px-4 py-1 rounded-full text-[10px] font-bold mb-4 uppercase tracking-[0.1em]"
              >
                Our events
              </motion.div>
              
              <h2 className="text-[#070707] text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] leading-tight mb-4">
                Insights That Power Smarter Medical Equipment Decisions
              </h2>
              <p className="text-[#070707]/60 text-sm md:text-base font-['Montserrat'] max-w-lg">
                Explore trends, tips, and updates shaping the future of medical devices and healthcare innovation.
              </p>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-[#EBEBEB] flex items-center justify-center text-[#070707] hover:bg-black hover:text-white transition-all cursor-pointer group"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-[#EBEBEB] flex items-center justify-center text-[#070707] hover:bg-black hover:text-white transition-all cursor-pointer group"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Events Horizontal Scroll - Optimized Sizes */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.map((event, idx) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="min-w-[280px] md:min-w-[340px] h-[440px] rounded-[24px] overflow-hidden relative group snap-start shadow-sm"
              >
                <div className="absolute inset-0 z-0">
                  <ImageWithFallback 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                </div>

                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2.5 mb-3">
                    <img 
                      src={event.authorImage} 
                      alt={event.author} 
                      className="w-7 h-7 rounded-full border border-white/20"
                    />
                    <div className="text-white">
                      <p className="text-[10px] font-['Montserrat'] font-semibold mb-0">{event.author}</p>
                      <div className="flex items-center gap-1.5 text-[9px] opacity-70">
                        <span>{event.date}</span>
                        <div className="w-0.5 h-0.5 rounded-full bg-white" />
                        <span>{event.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-lg font-bold font-['Montserrat'] mb-4 group-hover:text-[#DD005C] transition-colors leading-snug">
                    {event.title}
                  </h3>
                  
                  <Link 
                    to="#" 
                    className="flex items-center gap-1.5 text-white text-[11px] font-semibold hover:gap-2.5 transition-all w-fit"
                  >
                    READ MORE
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
