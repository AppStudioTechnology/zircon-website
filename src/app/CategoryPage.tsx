import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { solutionsData, hasProductDetailPage } from './data/solutionsData';
import { ChevronRight, ArrowRight, Layers, Syringe, Activity, Settings, Monitor, FlaskConical, Smile, Package, ClipboardList, Droplets, Home as HomeIcon } from 'lucide-react';
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import imgImage12 from "figma:asset/164a1c337866b5ab0f36e75f9cb75d06351e34a6.png";
import imgImage14 from "figma:asset/1cd5ba22af3455afca7d35e5bb8b0891e851a759.png";

// Icon mapping for categories (size 18 to match w-9 h-9 product list container)
const categoryIcons: Record<string, React.ReactNode> = {
  implants: <Layers size={18} />,
  'dental-consumables': <Syringe size={18} />,
  endodontics: <Activity size={18} />,
  'dental-equipment': <Settings size={18} />,
  digital: <Monitor size={18} />,
  'dental-lab': <FlaskConical size={18} />,
  'mouth-care': <Smile size={18} />,
  'general-consumables': <Package size={18} />,
  'or-consumables': <ClipboardList size={18} />,
  disinfectant: <Droplets size={18} />,
  homecare: <HomeIcon size={18} />,
};

export const CategoryPage = () => {
  const { typeId, categoryId } = useParams();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  const typeData = solutionsData.find(s => s.id === typeId);
  const categoryData = typeData?.categories.find(c => c.id === categoryId);

  if (!categoryData) return <div className="pt-32 text-center font-bold">Category not found</div>;

  // For demonstration, use the Implants image for all categories unless we have specific ones
  const mainImage = categoryId === 'implants' ? imgImage12 : imgImage12; 
  const bottomImage = categoryId === 'implants' ? imgImage14 : null;

  return (
    <div className="bg-white min-h-screen">
      {/* Category Hero */}
      <section className="bg-black pt-[136px] sm:pt-[140px] md:pt-[144px] pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={imgGroup381671} 
            alt="" 
            className="w-full h-full object-cover opacity-15 md:opacity-20 mix-blend-screen"
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)] relative z-10">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-5">
            <ol className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[10px] font-['Montserrat'] font-medium uppercase tracking-[0.12em] text-white/60">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden className="text-white/40 select-none"><ChevronRight size={10} strokeWidth={2.5} /></li>
              <li><Link to={`/solutions/${typeId}`} className="hover:text-white transition-colors">{typeData?.name}</Link></li>
              <li aria-hidden className="text-white/40 select-none"><ChevronRight size={10} strokeWidth={2.5} /></li>
              <li className="text-white/90" aria-current="page">{categoryData.name}</li>
            </ol>
          </nav>
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] mb-4 leading-tight"
            >
              {categoryData.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-sm md:text-base font-['Montserrat'] max-w-2xl mx-auto leading-relaxed"
            >
              {categoryData.description || `Our ${categoryData.name.toLowerCase()} solutions are designed to support predictable, long-term clinical success across a wide range of indications.`}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-6 md:mb-10">
            <h2 className="text-[#070707] text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] leading-tight">
              Product Lines
            </h2>
            <p className="text-[#070707] text-xs md:text-sm font-['Montserrat'] max-w-md leading-relaxed">
              Ensure every medical device meets accuracy standards and complies with international healthcare regulations.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Left side: Product List */}
            <div className="flex-1 w-full space-y-1">
              {categoryData.products.map((product, idx) => {
                const isHovered = hoveredProduct === product.id;
                const isActive = hoveredProduct ? isHovered : (idx === 1);

                return (
                  <motion.div
                    key={product.id}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    className={`relative transition-all duration-300 group ${
                      isActive ? 'bg-[#fff6fb]' : 'bg-transparent'
                    }`}
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
                      isActive ? 'bg-[#DD005C]' : 'bg-[#EBEBEB]'
                    }`} />
                    
                    <div className="pl-4 pr-3 py-3 md:pl-6 md:pr-4 md:py-4 flex gap-3 md:gap-4 items-start">
                      <div className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#DD005C] to-[#0088B3] text-white' 
                          : 'bg-[#212121] text-white'
                      }`}>
                         {categoryIcons[categoryId] || <Layers size={18} />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className={`text-sm sm:text-base font-semibold font-['Montserrat'] mb-1 md:mb-2 transition-colors duration-300 ${
                          isActive 
                            ? 'bg-clip-text bg-gradient-to-r from-[#DD005C] to-[#0088B3] text-transparent' 
                            : 'text-[#070707]'
                        }`}>
                          {product.name}
                        </h3>
                        <p className="text-[#070707]/80 text-xs font-['Montserrat'] leading-relaxed mb-2 md:mb-3 line-clamp-2">
                          {product.description || `A premium ${categoryData.name.toLowerCase()} solution designed for excellent clinical results and long-term stability.`}
                        </p>
                        
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              {hasProductDetailPage(product) ? (
                                <Link 
                                  to={`/solutions/${typeId}/${categoryId}/${product.id}`}
                                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#DD005C] to-[#0088B3] text-white px-3 py-1.5 rounded-md text-[10px] font-semibold font-['Montserrat'] shadow-md hover:opacity-90 transition-opacity"
                                >
                                  View Details
                                  <ChevronRight size={12} />
                                </Link>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 bg-[#E5E5E5] text-[#9CA3AF] px-3 py-1.5 rounded-md text-[10px] font-semibold font-['Montserrat'] cursor-not-allowed">
                                  View Details
                                  <ChevronRight size={12} />
                                </span>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right side: Product Showcase */}
            <div className="w-full lg:w-[380px] lg:shrink-0 lg:sticky lg:top-[100px] mt-8 lg:mt-0">
              <div className="flex flex-col items-center gap-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={hoveredProduct || 'default'}
                  className="w-full aspect-square max-w-[320px] flex items-center justify-center"
                >
                  <img 
                    src={mainImage} 
                    alt="Product Showcase" 
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
                
                {bottomImage && (
                  <div className="flex flex-col items-center gap-4 w-full">
                    <p className="text-xs font-['Montserrat'] text-[#4A4A4A] text-center">
                      All sizes share <span className="text-[#0542BD] font-semibold">one universal connection</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
