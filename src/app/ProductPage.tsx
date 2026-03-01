import React from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { solutionsData } from './data/solutionsData';
import { ChevronRight, ArrowRight, Check, Shield, Zap, Activity, Layers, ExternalLink, FileDown } from 'lucide-react';

// Common Assets
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import imgImage13 from "figma:asset/b6e38249502522d7aac2bb634bd51bfcaa37dd22.png";
import imgBackground from "figma:asset/c29c9bb037b6a3069cc041e18252bb6a19a2116f.png";
import imgImage14 from "figma:asset/1cd5ba22af3455afca7d35e5bb8b0891e851a759.png";
import imgImage15 from "figma:asset/4f8c1a35aab65224dbe0518b64ce8fed9dc75f84.png";

// Superline 11 Assets
import imgSuperlineHero from "figma:asset/2e956ec405402943452bcba07860ec9ace663208.png";
import imgSuperlineDimensions from "figma:asset/9aeb939e1e5e71f7f6f59da2d5afc87c4c28198a.png";

// Implantium Assets
import imgImplantiumHero from "figma:asset/164a1c337866b5ab0f36e75f9cb75d06351e34a6.png";
import imgImplantiumDimensions from "figma:asset/16efc1e42ad79e08a37c6e9782b6fae05ff133fa.png";
import imgPreOperative from "figma:asset/dd2c1dd13fce21f9961430b648fd1ed373269f63.png";
import imgImplantPlacement from "figma:asset/9e0c43ce60d1a76207b2468aa6ae54b8c3591fed.png";
import imgHealingAbutment from "figma:asset/7328563220b50a1408bfc8f4db32fa07adf0ad5f.png";
import imgStep4Healing from "figma:asset/87132da5e0764cdee84f42a243756e685a6cc805.png"; // step 4 healing image
import img6MonthFollowUp from "figma:asset/af78fe4052b5f85331e6efbe5b41a6caf1642b5d.png";
import img1YearFollowUp from "figma:asset/7d85495cf8878a200fd90e2d2f70dbd3eb612734.png";

// Surgical Kit Assets
import imgSurgicalKitHero from "../assets/surgical-kit.png";

// Components
import { InterchangeableAbutments } from './components/InterchangeableAbutments';
import { FeaturedShortImplant } from './components/FeaturedShortImplant';
import { ClinicalCase } from './components/ClinicalCase';
import { SurgicalKitContent } from './components/SurgicalKitContent';

// SVGs
import highlightSvgPaths from "../imports/svg-kqbjwpljaa";

export const ProductPage = () => {
  const { typeId, categoryId, productId } = useParams();
  
  const typeData = solutionsData.find(s => s.id === typeId);
  const categoryData = typeData?.categories.find(c => c.id === categoryId);
  const product = categoryData?.products.find(p => p.id === productId);

  if (!product) return <div className="pt-32 text-center font-bold font-['Montserrat']">Product not found</div>;

  const isSuperline11 = productId === 'superline-11-bone-level';
  const isImplantium = productId === 'implantium-bone-level';
  const isSurgicalKit = productId === 'surgical-kit';
  const hasFullContent = isSuperline11 || isImplantium || isSurgicalKit;
  const hasMediumContent = !hasFullContent && !!product.productLink;

  if (!hasFullContent && !hasMediumContent) {
    return (
      <div className="bg-white min-h-screen">
        {/* Hero Section for products without full content */}
        <section className="bg-black pt-[136px] sm:pt-[140px] md:pt-[144px] pb-16 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img src={imgGroup381671} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)] relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 mb-6 text-[#ABABAB] text-[10px] font-['Montserrat'] font-medium uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-[#ABABAB]" />
              <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={12} className="text-[#ABABAB]" />
              <Link to={`/solutions/${typeId}`} className="hover:text-white transition-colors">{typeData?.name}</Link>
              <ChevronRight size={12} className="text-[#ABABAB]" />
              <Link to={`/solutions/${typeId}/${categoryId}`} className="hover:text-white transition-colors">{categoryData?.name}</Link>
              <ChevronRight size={12} className="text-[#DD005C]" />
              <span className="text-[#DD005C]">{product.name}</span>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] mb-4 leading-tight"
              >
                {product.name}
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-[#DD005C]/10 px-4 py-2 rounded-full mb-6"
              >
                <div className="size-2 rounded-full bg-[#DD005C] animate-pulse" />
                <span className="text-[#DD005C] text-xs font-bold font-['Montserrat'] uppercase tracking-[0.2em]">
                  Coming Soon
                </span>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-sm md:text-base font-['Montserrat'] max-w-2xl mx-auto leading-relaxed mb-8"
              >
                We are currently preparing detailed clinical specifications and high-resolution assets for this solution. 
                Full product information will be available shortly.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link 
                  to={`/solutions/${typeId}/${categoryId}`}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#DD005C] to-[#0542BD] text-white px-8 py-3 rounded-full text-xs font-semibold font-['Montserrat'] flex items-center justify-center gap-3 hover:opacity-90 transition-all"
                >
                  Back to {categoryData?.name}
                  <ArrowRight size={16} />
                </Link>
                <button className="w-full sm:w-auto border border-white/20 text-white px-8 py-3 rounded-full text-xs font-semibold font-['Montserrat'] hover:bg-white/10 transition-all">
                  Request Early Access
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (hasMediumContent) {
    const isImplantCategory = categoryId === 'implants';
    const features = isImplantCategory
      ? [
          { title: 'Precision Engineered', desc: 'Designed for predictable placement and long-term stability.', icon: <Zap size={18} /> },
          { title: 'Clinical Reliability', desc: 'Backed by documented clinical outcomes and quality standards.', icon: <Shield size={18} /> },
          { title: 'Prosthetic Flexibility', desc: 'Compatible with a wide range of restorative options.', icon: <Layers size={18} /> },
          { title: 'Documented Outcomes', desc: 'Evidence-based solutions for modern implant practice.', icon: <Activity size={18} /> },
        ]
      : [
          { title: 'Quality Assured', desc: 'Products meet stringent quality and regulatory standards.', icon: <Shield size={18} /> },
          { title: 'Clinical Grade', desc: 'Suitable for use in professional dental and surgical settings.', icon: <Check size={18} /> },
          { title: 'Easy to Use', desc: 'Designed for efficient workflows and consistent results.', icon: <Zap size={18} /> },
          { title: 'Trusted Supply', desc: 'Reliable availability from established partners.', icon: <Layers size={18} /> },
        ];

    return (
      <div className="bg-white min-h-screen">
        <section className="bg-black pt-[136px] sm:pt-[140px] md:pt-[144px] pb-16 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img src={imgGroup381671} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)] relative z-10">
            <div className="flex items-center gap-1.5 mb-6 text-[#ABABAB] text-[10px] font-['Montserrat'] font-medium uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-[#ABABAB]" />
              <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={12} className="text-[#ABABAB]" />
              <Link to={`/solutions/${typeId}`} className="hover:text-white transition-colors">{typeData?.name}</Link>
              <ChevronRight size={12} className="text-[#ABABAB]" />
              <Link to={`/solutions/${typeId}/${categoryId}`} className="hover:text-white transition-colors">{categoryData?.name}</Link>
              <ChevronRight size={12} className="text-[#DD005C]" />
              <span className="text-[#DD005C]">{product.name}</span>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] mb-4 leading-tight"
              >
                {product.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/80 text-sm md:text-base font-['Montserrat'] max-w-2xl mx-auto leading-relaxed mb-8"
              >
                {product.description || 'Professional-grade solution for modern clinical practice.'}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                <a
                  href={product.productLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#DD005C] to-[#0542BD] text-white px-6 py-3 rounded-full text-xs font-semibold font-['Montserrat'] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  View Product Details
                  <ExternalLink size={14} />
                </a>
                {product.brochureLink && (
                  <a
                    href={product.brochureLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-white/10 text-white px-6 py-3 rounded-full text-xs font-semibold font-['Montserrat'] border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
                  >
                    Download Brochure
                    <FileDown size={14} />
                  </a>
                )}
                <Link
                  to={`/solutions/${typeId}/${categoryId}`}
                  className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-full text-xs font-semibold font-['Montserrat'] flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  Back to {categoryData?.name}
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[#070707] text-2xl md:text-3xl font-bold font-['Montserrat'] mb-2">Key Features</h2>
              <p className="text-[#6B7280] text-sm font-['Arial'] max-w-xl mx-auto">Designed for clinical excellence and reliable outcomes.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((item, i) => (
                <div key={i} className="rounded-2xl p-5 bg-white border border-[#ebebeb] flex gap-4 items-start">
                  <div className="rounded-xl bg-gradient-to-br from-[#0542BD] to-[#021A4C] p-2.5 shrink-0 text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-bold text-[14px] text-[#070707] mb-1">{item.title}</h3>
                    <p className="font-['Arial'] text-[12px] text-[#6B7280] leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Define Product-Specific Content
  const heroImage = isSuperline11 ? imgSuperlineHero : (isImplantium ? imgImplantiumHero : imgSurgicalKitHero);
  const dimensionsImage = isSuperline11 ? imgSuperlineDimensions : imgImplantiumDimensions;
  const connectionTitle = isImplantium ? "Single Connection Across All Diameters" : "Single Connection System";
  const heroTitle = isSurgicalKit ? "Surgical Kit" : (isImplantium ? "Implantium" : product.name);
  const heroSubtitle = isSurgicalKit ? "Simple yet Sophisticated Digital Guide System" : (product.description || 'Developed by Clinicians for Clinicians');
  const highlights = isImplantium ? [
    { title: 'Double-Threaded Tapered Body', desc: 'Provides self-tapping capability and stability.', path: highlightSvgPaths.p5b81480 },
    { title: 'Optimal Thread Design', desc: 'Square-shaped threads for maximum contact.', path: highlightSvgPaths.p1e4c7e00 },
    { title: 'S-Line Cutting Flutes', desc: 'Reduces heat and provides tactile feedback.', path: highlightSvgPaths.p2b642900 }
  ] : [
    { title: 'Tapered Body', desc: 'Provides self-tapping capability and stability.', path: highlightSvgPaths.p5b81480 },
    { title: 'Optimal Thread', desc: 'Square-shaped threads for maximum contact.', path: highlightSvgPaths.p1e4c7e00 },
    { title: 'Cutting Flutes', desc: 'Reduces heat and provides tactile feedback.', path: highlightSvgPaths.p2b642900 }
  ];

  const clinicalSteps = [
    { step: 1, title: "Pre-operative", image: imgPreOperative },
    { step: 2, title: "Superline / Implantium", image: imgImplantPlacement },
    { step: 3, title: "Grafting Material", image: imgHealingAbutment },
    { step: 4, title: "Healing 2 Weeks", image: imgStep4Healing },
    { step: 5, title: "Healing 4 months / Second stage surgery", image: img6MonthFollowUp },
    { step: 6, title: "Final Prosthesis", image: img1YearFollowUp }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - same padding/typography as category hero, layout: text left, image right */}
      <section className="bg-black pt-[136px] sm:pt-[140px] md:pt-[144px] pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={imgGroup381671} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)] relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 mb-6 text-[#ABABAB] text-[10px] font-['Montserrat'] font-medium uppercase tracking-[0.2em]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-[#ABABAB]" />
            <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <ChevronRight size={12} className="text-[#ABABAB]" />
            <Link to={`/solutions/${typeId}`} className="hover:text-white transition-colors">{typeData?.name}</Link>
            <ChevronRight size={12} className="text-[#ABABAB]" />
            <Link to={`/solutions/${typeId}/${categoryId}`} className="hover:text-white transition-colors">{categoryData?.name}</Link>
            <ChevronRight size={12} className="text-[#DD005C]" />
            <span className="text-[#DD005C]">{product.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-6 lg:gap-8 w-full">
            <div className="w-full max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-4"
              >
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] leading-tight mb-1">
                  {heroTitle}
                </h1>
                {isImplantium && (
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] leading-tight">
                    (Bone Level)
                  </h1>
                )}
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/80 text-sm md:text-base font-['Montserrat'] mb-6 max-w-xl leading-relaxed"
              >
                {heroSubtitle}
              </motion.p>

              {/* Badges */}
              <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
                {[
                  { icon: <Shield size={16} />, title: 'Lifetime', subtitle: 'Warranty' },
                  { icon: <Layers size={16} />, title: 'Grade 4', subtitle: 'Titanium' },
                  { icon: <Activity size={16} />, title: 'S.L.A', subtitle: 'Surface' },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                      {badge.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-[10px] font-['Montserrat'] leading-none mb-0.5 uppercase tracking-[0.2em]">{badge.title}</div>
                      <div className="text-[#9CA3AF] text-[9px] font-['Montserrat'] leading-none uppercase">{badge.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button className="bg-gradient-to-r from-[#DD005C] to-[#0542BD] text-white px-6 py-3 rounded-full text-xs font-semibold font-['Montserrat'] flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
                  View Catalog
                  <ArrowRight size={14} />
                </button>
                <button className="bg-white/5 text-white px-6 py-3 rounded-full text-xs font-semibold font-['Montserrat'] border border-white/20 hover:bg-white/10 transition-all">
                  Request a Quote
                </button>
              </div>
            </div>

              <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative w-full flex justify-center lg:justify-end ${isSurgicalKit ? 'max-w-[600px]' : 'max-w-[420px]'}`}
            >
              <div className={`w-full relative ${isSurgicalKit ? 'h-[260px] md:h-[300px]' : 'h-[280px] md:h-[380px]'}`}>
                {isSurgicalKit ? (
                  <img 
                    src={heroImage} 
                    alt={product.name} 
                    className="w-full h-full object-contain object-center pointer-events-none drop-shadow-2xl" 
                  />
                ) : (
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Container">
                    <div className="h-[360px] relative shrink-0 w-[420px]" data-name="image 12">
                      <img 
                        alt={product.name} 
                        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                        src={heroImage} 
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {isSurgicalKit ? (
        <SurgicalKitContent />
      ) : (
        <>
          {/* Surface Technology */}
          <section className="py-16 bg-white">
            <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl mb-3 text-[#070707]">
              Clinically Proven Surface Technology
            </h2>
            <p className="font-['Arial'] text-sm md:text-base text-black/70">
              S.L.A surface treatment provides excellent biocompatibility and allows for faster osseointegration and long-term stability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-2xl border border-[#f3f4f6] bg-gradient-to-br from-[#e3f0fa] to-white flex flex-col gap-3">
              <div className="bg-[#0542BD]/10 px-3 py-1 rounded-full self-start flex items-center gap-2 text-[#0542BD] font-bold text-[10px] uppercase tracking-wider">
                <Activity size={12} /> S.L.A Surface Treatment
              </div>
              <h3 className="font-['Montserrat'] font-bold text-lg md:text-xl">Enhanced Osseointegration</h3>
              <p className="font-['Arial'] text-[13px] text-black/80 leading-relaxed">
                The micro-rough surface created by sandblasting and acid etching promotes rapid bone cell attachment and growth.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Faster Healing', 'Higher Success Rate'].map((tag) => (
                  <div key={tag} className="bg-white border border-[#0542BD]/20 px-2.5 py-1 rounded-full font-['Arial'] text-[#0542BD] text-[10px]">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-[#f3f4f6] bg-gradient-to-br from-[#e3f0fa] to-white flex items-center justify-center">
              <img src={imgImage13} alt="Microscopic view" className="h-[140px] object-contain" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              { title: 'Micro-Structure', desc: 'Optimized surface roughness for maximum bone contact area.', icon: <Layers className="text-[#A4D037]" /> },
              { title: 'Biocompatibility', desc: 'Excellent tissue response with minimal inflammation.', icon: <Shield className="text-[#00FFFF]" /> }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5 bg-gradient-to-br from-[#0542BD] to-[#021A4C] flex gap-4 items-center text-white">
                <div className="bg-white/10 p-2.5 rounded-xl shrink-0">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-bold text-[14px] mb-0.5">{item.title}</h4>
                  <p className="font-['Montserrat'] text-white/70 text-[11px] leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Titanium Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <img src={imgGroup381671} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full max-w-[340px] bg-white rounded-3xl p-4 shadow-2xl">
            <div className="h-[260px] rounded-2xl overflow-hidden bg-[#f3f4f6] flex items-center justify-center mb-4">
              <img src={imgBackground} alt="Titanium" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between px-2">
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-black/40">Material</span>
                <span className="block font-bold text-lg">CP Grade 4</span>
              </div>
              <div className="text-right">
                <span className="block text-[9px] uppercase tracking-wider text-black/40">Standard</span>
                <span className="block font-bold text-[#344ecc] text-lg">ASTM F67</span>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-md">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10 mb-4">
              <span className="text-white text-[9px] font-bold uppercase tracking-widest">Specifications</span>
            </div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-white mb-4 leading-tight">
              Unalloyed Titanium ASTM F67
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Grade 4 Purity', desc: 'Highest purity commercially pure titanium.', icon: <Layers /> },
                { title: 'Biocompatibility', desc: 'Excellent tissue acceptance performance.', icon: <Shield /> },
                { title: 'Mechanical Strength', desc: 'Optimal strength-to-weight ratio.', icon: <Zap /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-white rounded-lg size-10 flex items-center justify-center shrink-0 text-[#0542BD]">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-white/50 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connection System */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 bg-[#0542BD]/5 rounded-full text-[#0542BD] text-[9px] font-bold mb-3 uppercase tracking-wider">
              ENGINEERING EXCELLENCE
            </div>
            <h2 className="text-[#070707] text-2xl md:text-3xl font-bold font-['Montserrat'] mb-3">
              {connectionTitle}
            </h2>
            <p className="text-[#070707]/60 text-sm max-w-xl mx-auto font-['Arial']">
              Revolutionary platform design that simplifies your workflow and reduces inventory complexity.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-5">
              {[
                { title: 'Simplified Inventory', desc: 'Components work on every fixture diameter.' },
                { title: 'Interchangeable Abutments', desc: 'Full-range prosthetic solutions for every clinical situation.' },
                { title: 'Reduced Errors', desc: 'Minimal connection types reduce selection complexity.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="size-5 rounded-full bg-[#0542BD]/10 flex items-center justify-center text-[#0542BD]">
                    <Check size={12} />
                  </div>
                  <div>
                    <h4 className="text-[#070707] text-[13px] font-bold font-['Montserrat'] mb-0.5">{item.title}</h4>
                    <p className="text-[#070707]/50 text-[12px] font-['Arial']">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex justify-center">
              <img src={imgImage14} alt="Connection" className="w-full max-w-[500px] h-auto" />
            </div>
          </div>
        </div>
      </section>

      <InterchangeableAbutments />

      {/* Design Highlights */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 flex flex-col items-center gap-3">
            <h2 className="text-[#070707] text-3xl font-bold font-['Montserrat']">
              Implant Design Highlights
            </h2>
            <p className="text-[#6B7280] text-sm font-['Arial']">
              Every detail engineered for optimal clinical outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {highlights.map((card, i) => (
              <div key={i} className="relative p-[1px] rounded-2xl bg-gradient-to-r from-[#dd005c] to-[#0088b3]">
                <div className="bg-white rounded-[15px] p-5 h-full">
                  <div className="bg-gradient-to-r from-[#dd005c] to-[#0088b3] size-10 rounded-full flex items-center justify-center p-2 mb-4">
                    <svg fill="none" viewBox="0 0 24 24" className="size-full">
                      <path d={card.path} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[#070707] text-lg font-bold font-['Montserrat'] mb-2">{card.title}</h3>
                  <p className="text-[#454545] text-xs font-['Arial'] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dimensions Table */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-['Montserrat'] font-bold text-2xl text-[#070707] mb-3">Available Dimensions</h2>
            <p className="text-[#070707]/50 text-sm">Comprehensive size range to address every clinical situation.</p>
          </div>
          <div className="bg-[#f9fafb] p-6 rounded-2xl border border-[#ebebeb] flex justify-center shadow-inner">
            <img src={dimensionsImage} alt="Specifications" className="w-full max-w-[800px] h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Specialized Content: Featured Product (Superline) or Clinical Case (Implantium) */}
      {isSuperline11 && <FeaturedShortImplant />}
      {isImplantium && <ClinicalCase steps={clinicalSteps} />}
        </>
      )}
    </div>
  );
};
