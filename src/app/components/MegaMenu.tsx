import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { solutionsData, hasProductDetailPage } from '../data/solutionsData';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const [activeType, setActiveType] = useState<'dental' | 'medical'>('dental');
  const [activeCategory, setActiveCategory] = useState(solutionsData[0].categories[0].id);

  const currentTypeData = solutionsData.find(s => s.id === activeType)!;
  const currentCategoryData = currentTypeData.categories.find(c => c.id === activeCategory) || currentTypeData.categories[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 top-24"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 left-0 w-full bg-white border-b border-[#EBEBEB] z-50 overflow-hidden shadow-2xl"
          >
            <div className="max-w-[1600px] mx-auto flex h-[500px]">
              
              {/* LEFT - Primary Switch */}
              <div className="w-[200px] border-r border-[#F5F5F5] p-6 flex flex-col gap-2">
                {solutionsData.map((type) => (
                  <Link
                    key={type.id}
                    to={`/solutions/${type.id}`}
                    onClick={onClose}
                    onMouseEnter={() => {
                      setActiveType(type.id as 'dental' | 'medical');
                      setActiveCategory(type.categories[0].id);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold font-['Montserrat'] uppercase transition-all ${
                      activeType === type.id 
                        ? 'bg-gradient-to-r from-[#DD005C] to-[#0088b3] text-white shadow-lg shadow-[#DD005C]/20' 
                        : 'text-[#070707] hover:bg-gray-50'
                    }`}
                  >
                    {type.name}
                    {activeType === type.id && <ChevronRight size={16} />}
                  </Link>
                ))}
              </div>

              {/* CENTER - Categories (Level 2) */}
              <div className="w-[350px] border-r border-[#F5F5F5] p-6 overflow-y-auto custom-scrollbar bg-[#FAFAFA]">
                <h3 className="text-[#ABABAB] text-[10px] font-bold uppercase tracking-widest mb-4 font-['Montserrat']">
                  Categories
                </h3>
                <div className="flex flex-col gap-1">
                  {currentTypeData.categories.map((category) => (
                    <button
                      key={category.id}
                      onMouseEnter={() => setActiveCategory(category.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold font-['Montserrat'] transition-all text-left ${
                        activeCategory === category.id 
                          ? 'bg-white text-[#DD005C] shadow-sm border border-[#EBEBEB]' 
                          : 'text-[#4A4A4A] hover:text-[#DD005C] hover:bg-white/50'
                      }`}
                    >
                      {category.name}
                      {activeCategory === category.id && <ChevronRight size={14} />}
                    </button>
                  ))}
                </div>
                <Link
                  to={`/solutions/${activeType}`}
                  onClick={onClose}
                  className="mt-6 flex items-center gap-2 text-[#DD005C] text-xs font-bold font-['Montserrat'] group"
                >
                  View all {activeType} solutions
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* RIGHT - Preview (Level 3) */}
              <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 className="text-[#070707] text-2xl font-bold font-['Montserrat']">
                      {currentCategoryData.name}
                    </h4>
                    <p className="text-[#4A4A4A] text-sm font-['Montserrat'] mt-1">
                      Explore our premium selection of {currentCategoryData.name.toLowerCase()}
                    </p>
                  </div>
                    <Link
                      to={`/solutions/${activeType}/${activeCategory}`}
                      onClick={onClose}
                      className="flex items-center gap-2 bg-gradient-to-r from-[#DD005C] to-[#0088b3] text-white px-5 py-2 rounded-lg text-sm font-bold font-['Montserrat'] hover:opacity-90 transition-opacity shadow-lg shadow-[#DD005C]/10"
                    >
                      View All {currentCategoryData.name}
                    </Link>
                </div>

                <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                  {currentCategoryData.products.slice(0, 15).map((product) =>
                    hasProductDetailPage(product) ? (
                      <Link
                        key={product.id}
                        to={`/solutions/${activeType}/${activeCategory}/${product.id}`}
                        onClick={onClose}
                        className="text-[#4A4A4A] text-sm font-medium font-['Montserrat'] hover:text-[#DD005C] hover:translate-x-1 transition-all flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EBEBEB]" />
                        {product.name}
                      </Link>
                    ) : (
                      <span
                        key={product.id}
                        className="text-[#ABABAB] text-sm font-medium font-['Montserrat'] flex items-center gap-2 cursor-not-allowed"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]" />
                        {product.name}
                      </span>
                    )
                  )}
                  {currentCategoryData.products.length > 15 && (
                    <div className="text-[#ABABAB] text-sm font-medium font-['Montserrat'] italic">
                      + {currentCategoryData.products.length - 15} more products
                    </div>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
