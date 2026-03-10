import React from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { solutionsData } from './data/solutionsData';
import { ArrowRight } from 'lucide-react';

export const SolutionsTypePage = () => {
  const { typeId } = useParams();
  const typeData = solutionsData.find(s => s.id === typeId);

  if (!typeData) return <div className="pt-32 text-center font-bold">Solution not found</div>;

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* Header */}
      <section className="bg-white pt-[136px] sm:pt-[140px] md:pt-[144px] pb-16 md:pb-20 border-b border-[#EBEBEB]">
        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)]">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#070707] text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] leading-tight mb-4"
            >
              {typeData.name} Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[#4A4A4A] text-sm md:text-base max-w-2xl font-['Montserrat'] leading-relaxed"
            >
              Explore our comprehensive range of {typeData.name.toLowerCase()} categories designed to elevate your practice.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {typeData.categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 border border-[#EBEBEB] hover:shadow-xl hover:border-[#0542BD] transition-all group flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-[#F5F5F5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0542BD] group-hover:text-white transition-colors text-[#0542BD]">
                  {/* Icon placeholder */}
                  <span className="text-xl font-bold font-['Montserrat']">{category.name[0]}</span>
                </div>
                <h3 className="text-[#070707] text-2xl font-bold font-['Montserrat'] mb-4">
                  {category.name}
                </h3>
                <p className="text-[#4A4A4A] text-sm font-['Montserrat'] mb-8 flex-1">
                  Comprehensive selection of {category.products.length} {category.name.toLowerCase()} products.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                   {category.products.slice(0, 3).map(p => (
                     <div key={p.id} className="flex items-center gap-2 text-[#ABABAB] text-xs font-medium font-['Montserrat']">
                        <div className="w-1 h-1 rounded-full bg-[#EBEBEB]" />
                        {p.name}
                     </div>
                   ))}
                </div>
                <Link 
                  to={`/solutions/${typeId}/${category.id}`}
                  className="flex items-center justify-between text-[#0542BD] font-bold font-['Montserrat'] text-sm group/link mt-auto"
                >
                  Explore Category
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
