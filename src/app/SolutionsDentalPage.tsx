import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { solutionsData, hasProductDetailPage } from './data/solutionsData';
import { ChevronRight, ArrowRight, Download, MessageCircle, Layers, Syringe, Activity, Settings, Monitor, FlaskConical, Smile } from 'lucide-react';
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";

// Category Icon Mapping
const categoryIcons: Record<string, React.ReactNode> = {
  implants: <Layers size={24} />,
  'dental-consumables': <Syringe size={24} />,
  endodontics: <Activity size={24} />,
  'dental-equipment': <Settings size={24} />,
  digital: <Monitor size={24} />,
  'dental-lab': <FlaskConical size={24} />,
  'mouth-care': <Smile size={24} />,
};

export const SolutionsDentalPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dentalData = solutionsData.find(s => s.id === 'dental')!;
  
  const activeCategoryId = searchParams.get('category') || dentalData.categories[0].id;
  const activeCategory = dentalData.categories.find(c => c.id === activeCategoryId) || dentalData.categories[0];

  const handleCategoryChange = (id: string) => {
    setSearchParams({ category: id });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-black pt-[136px] sm:pt-[140px] md:pt-[144px] pb-16 md:pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={imgGroup381671} 
            alt="" 
            className="w-full h-full object-cover opacity-15 md:opacity-20 mix-blend-screen"
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)] relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 mb-6 text-[#ABABAB] text-[10px] font-['Montserrat'] font-medium uppercase tracking-[0.2em] justify-center">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-[#ABABAB]" />
            <span className="text-white/60">Solutions</span>
            <ChevronRight size={12} className="text-[#DD005C]" />
            <span className="text-[#DD005C]">Dental</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] mb-4 leading-tight"
            >
              Advanced Dental Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-sm md:text-base font-['Montserrat'] max-w-2xl mx-auto leading-relaxed"
            >
              Our comprehensive portfolio supports precision, efficiency, and confidence across modern healthcare environments. Each solution is carefully curated to meet the highest standards of quality, clinical relevance, and reliability.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Area: Sidebar + Grid */}
      <section className="pt-12 md:pt-16 pb-32">
        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)]">
          <div className="flex flex-col lg:flex-row gap-8 items-start relative">
            
            {/* Sidebar - Level 2 (Section Sticky) */}
            <aside className="w-full lg:w-[280px] lg:sticky lg:top-[120px] bg-[#FCF6F9] rounded-[24px] shrink-0 self-start p-3 border border-[#F5F5F5] z-10 transition-all duration-300">
              <div className="flex flex-col gap-1.5">
                {dentalData.categories.map((category) => {
                  const isActive = activeCategoryId === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 text-left group cursor-pointer ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#DD005C] to-[#2D73B6] text-white shadow-md' 
                          : 'bg-transparent text-[#070707] hover:bg-white/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-[#F1F1F1] text-[#4A4A4A]'
                        }`}>
                          {React.cloneElement(categoryIcons[category.id] as React.ReactElement, { size: 18 })}
                        </div>
                        <div>
                          <div className={`text-[14px] font-bold font-['Montserrat'] leading-tight ${isActive ? 'text-white' : 'text-[#070707]'}`}>
                            {category.name}
                          </div>
                          <div className={`text-[11px] font-medium font-['Montserrat'] mt-0.5 ${isActive ? 'text-white/80' : 'text-[#ABABAB]'}`}>
                            {category.products.length} products
                          </div>
                        </div>
                      </div>
                      {isActive && <ChevronRight size={16} className="text-white ml-2" />}
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Content Panel - Level 3 */}
            <div className="flex-1 bg-white rounded-2xl border border-[#F5F5F5] overflow-hidden">
              {/* Category Header */}
              <div className="p-5 md:p-6 border-b border-[#F5F5F5] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-gradient-to-br from-[#DD005C] to-[#0088b3] rounded-lg flex items-center justify-center text-white shadow-md">
                      {categoryIcons[activeCategoryId] || <Layers size={20} />}
                   </div>
                   <div>
                     <h3 className="text-[#070707] text-xl font-semibold font-['Montserrat']">{activeCategory.name}</h3>
                     <p className="text-[#ABABAB] text-xs font-medium font-['Montserrat']">Premium dental {activeCategory.name.toLowerCase()} for clinical excellence.</p>
                   </div>
                </div>
                <Link 
                  to={`/solutions/dental/${activeCategoryId}`}
                  className="text-[#0542BD] font-semibold font-['Montserrat'] text-xs flex items-center gap-1.5 hover:translate-x-0.5 transition-transform"
                >
                  View Details
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Product Grid */}
              <div className="p-5 md:p-6">
                <div className="mb-4 text-[#ABABAB] text-[10px] font-bold font-['Montserrat'] uppercase tracking-widest">
                  Showing {activeCategory.products.length} products
                </div>
                
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {activeCategory.products.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="bg-[#FFF6FB] rounded-xl p-4 border border-transparent hover:border-[#DD005C]/20 hover:shadow-[0_12px_24px_-8px_rgba(221,0,92,0.08)] transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div className="mb-3">
                        <h4 className="text-[#070707] text-sm font-semibold font-['Montserrat'] group-hover:text-[#DD005C] transition-colors leading-tight">
                          {product.name}
                        </h4>
                        <div className="text-[#4A4A4A] text-[9px] font-bold font-['Montserrat'] uppercase tracking-[0.12em] opacity-40 mt-1">
                          Clinical {activeCategory.name.replace('Dental ', '')}
                        </div>
                      </div>
                      
                      {hasProductDetailPage(product) ? (
                        <Link 
                          to={`/solutions/dental/${activeCategoryId}/${product.id}`}
                          className="text-[#DD005C] font-semibold font-['Montserrat'] text-[10px] uppercase tracking-widest flex items-center gap-1.5"
                        >
                          View Details
                          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      ) : (
                        <span className="text-[#ABABAB] font-semibold font-['Montserrat'] text-[10px] uppercase tracking-widest flex items-center gap-1.5 cursor-not-allowed">
                          View Details
                          <ChevronRight size={12} />
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Support Banner */}
              <div className="m-5 md:m-6 p-5 md:p-6 bg-white border border-[#F5F5F5] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h5 className="text-[#070707] text-base font-semibold font-['Montserrat'] mb-1">Need help finding the right solution?</h5>
                  <p className="text-[#4A4A4A] text-xs font-['Montserrat']">Our experts are here to assist you in selecting the best equipment for your practice.</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button className="px-4 py-2.5 rounded-full border border-[#DD005C] text-[#DD005C] font-semibold font-['Montserrat'] text-xs hover:bg-[#DD005C] hover:text-white transition-all">
                    Download Catalogue
                  </button>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-[#DD005C] to-[#0088b3] text-white px-5 py-2.5 rounded-full text-xs font-semibold font-['Montserrat'] hover:opacity-90 shadow-md shadow-[#DD005C]/20"
                  >
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
