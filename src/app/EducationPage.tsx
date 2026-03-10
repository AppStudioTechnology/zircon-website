import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  BookOpen, 
  Globe, 
  Users, 
  FileText, 
  Download,
  Calendar,
  User
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Assets
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import imgPortraitBusinessPersonWork2 from "figma:asset/481a7834bff186e4fc664707ce8196d3277e158b.png";

const courses = [
  {
    id: 1,
    title: "Digital Workflow Mastery",
    description: "Complete digital dentistry workflow from intraoral scanning to final restoration delivery.",
    image: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBvZmZpY2V8ZW58MXx8fHwxNzcwODAzNzY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "8 weeks",
    modules: "12 Modules",
    delivery: "Online + Hands-on",
    students: "450 Students"
  },
  {
    id: 2,
    title: "Advanced Implantology",
    description: "Deep dive into complex surgical techniques and immediate loading protocols.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    duration: "12 weeks",
    modules: "18 Modules",
    delivery: "In-Person Clinic",
    students: "320 Students"
  },
  {
    id: 3,
    title: "Prosthetic Excellence",
    description: "Achieving superior esthetics and function through advanced prosthetic design.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    duration: "6 weeks",
    modules: "8 Modules",
    delivery: "Hybrid Learning",
    students: "580 Students"
  },
  {
    id: 4,
    title: "Soft Tissue Management",
    description: "Predictable periodontal and peri-implant soft tissue grafting techniques.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    duration: "4 weeks",
    modules: "10 Modules",
    delivery: "Intensive Workshop",
    students: "210 Students"
  }
];

const caseStudies = [
  {
    id: 1,
    title: "Complex Sinus Augmentation Case",
    author: "Dr. James Wilson",
    date: "January 2024",
    downloads: "1240 downloads",
    image: imgPortraitBusinessPersonWork2
  },
  {
    id: 2,
    title: "Full Arch Immediate Loading",
    author: "Dr. Elena Rodriguez",
    date: "December 2023",
    downloads: "980 downloads",
    image: "https://images.unsplash.com/photo-1660737217649-e3bd4ef2888a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50JTIwc3VyZ2VyeSUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcwODAzNzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Digital Smile Design Workflow",
    author: "Dr. James Wilson",
    date: "January 2024",
    downloads: "1520 downloads",
    image: "https://images.unsplash.com/photo-1643386106343-18d5d3c64d47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBzdXJnaWNhbCUyMGluc3RydW1lbnRzJTIwdHJheXxlbnwxfHx8fDE3NzA4MDM3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export const EducationPage = () => {
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
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] mb-4 leading-tight"
            >
              Advance Your <br /> Clinical Excellence
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white/80 text-sm md:text-base font-['Montserrat'] max-w-2xl mx-auto leading-relaxed"
            >
              Access world-class courses, clinical case studies, webinars, and comprehensive resources to elevate your practice.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Professional Courses Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#DD005C] to-[#0542BD] text-white px-6 py-1.5 rounded-full text-sm font-semibold mb-6"
            >
              # 24/7 Response Guarantee
            </motion.div>
            
            <h2 className="text-[#070707] text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] leading-tight mb-4">
              Professional Courses
            </h2>
            <p className="text-[#070707]/60 text-sm md:text-base font-['Montserrat']">
              Structured learning programs designed by industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[24px] p-5 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[16/10] rounded-[8px] overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                <div className="h-px bg-[#EBEBEB] w-full mb-4" />
                
                <h3 className="text-[#070707] text-xl font-bold font-['Montserrat'] mb-3 group-hover:text-[#0542BD] transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-[#070707]/70 text-xs font-['Montserrat'] leading-relaxed mb-6 flex-grow">
                  {course.description}
                </p>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#070707]" />
                    <span className="text-[#555] text-[10px] font-['Montserrat']">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-[#070707]" />
                    <span className="text-[#555] text-[10px] font-['Montserrat']">{course.modules}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-[#070707]" />
                    <span className="text-[#555] text-[10px] font-['Montserrat']">{course.delivery}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-[#070707]" />
                    <span className="text-[#555] text-[10px] font-['Montserrat']">{course.students}</span>
                  </div>
                </div>

                <Link 
                  to="#" 
                  className="mt-auto flex items-center justify-between pl-6 pr-1 py-1 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300 group/btn"
                >
                  <span className="text-sm font-semibold font-['Montserrat']">Enroll Now</span>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover/btn:bg-white transition-colors">
                    <ArrowRight size={16} className="text-white group-hover/btn:text-black transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Case Studies Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-10 md:mb-12">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] leading-tight mb-3">
              Clinical Case Studies
            </h2>
            <p className="text-white/60 text-sm md:text-base font-['Montserrat']">
              Real-world cases demonstrating clinical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {caseStudies.map((study, idx) => (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[20px] p-3 flex flex-col h-full group shadow-lg"
              >
                <div className="aspect-[16/10] rounded-[16px] overflow-hidden mb-4 relative">
                  <ImageWithFallback 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                <div className="px-1.5 pb-1.5 flex-grow">
                  <h3 className="text-[#070707] text-lg md:text-xl font-bold font-['Montserrat'] mb-3 group-hover:text-[#0542BD] transition-colors leading-tight">
                    {study.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <User size={12} className="text-[#323231]" />
                      <span className="text-[#323231] text-xs font-['Montserrat']">{study.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#323231]" />
                      <span className="text-[#323231] text-xs font-['Montserrat']">{study.date}</span>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-[#f3f4f6] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[#323231]">
                      <Download size={12} />
                      <span className="text-xs font-['Montserrat']">{study.downloads}</span>
                    </div>
                    
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[#f3f4f6] transition-colors group/pdf">
                      <FileText size={14} className="text-[#323231]" />
                      <span className="text-xs font-bold font-['Montserrat'] text-[#323231]">View PDF</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
