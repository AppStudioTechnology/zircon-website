import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import imgNavbar from "figma:asset/fd8f43b2f1287a0cc5ab0084c44366bbffc35bb7.png";
import { MegaMenu } from './MegaMenu';
import { solutionsData } from '../data/solutionsData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Solutions', href: '#', hasMegaMenu: true },
  // These items don't have dedicated pages yet; keep them visible but non-clickable
  { name: 'Our Partners', href: '#', disabled: true },
  { name: 'Doctors Corner', href: '#', disabled: true },
  { name: 'Events', href: '/events' },
  { name: 'Education', href: '/education' },
  { name: 'More', href: '#', hasDropdown: true, disabled: true },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation: Close mega menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location.pathname]);

  const toggleMegaMenu = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    setMegaMenuOpen(!megaMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled ? 'py-0' : 'py-0'
        }`}
      >
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full bg-[#070707] flex items-center justify-between pl-[clamp(16px,3vw,48px)] pr-[clamp(8px,2vw,24px)] py-3 shadow-2xl backdrop-blur-md relative border-b border-white/5"
        >
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img 
                src={imgNavbar} 
                alt="Zircon" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            {/* Navigation - Desktop */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasMegaMenu && setMegaMenuOpen(true)}
                >
                  {link.hasMegaMenu ? (
                    <button
                      ref={solutionsButtonRef}
                      onClick={toggleMegaMenu}
                      aria-expanded={megaMenuOpen}
                      aria-controls="solutions-mega-menu"
                      className={`group flex items-center gap-1 text-[13px] xl:text-[14px] font-medium transition-colors whitespace-nowrap px-3 py-2 rounded-full cursor-pointer ${
                        location.pathname.startsWith('/solutions')
                          ? 'text-[#0088B3] bg-white/10'
                          : 'text-white hover:text-[#0088B3]'
                      }`}
                    >
                      {link.name}
                      <svg className={`w-4 h-4 transition-transform shrink-0 ${megaMenuOpen ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  ) : link.disabled ? (
                    <span
                      className="group flex items-center gap-1 text-white/50 text-[13px] xl:text-[14px] font-medium px-3 py-2 rounded-full cursor-default"
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  ) : (
                    <Link
                      to={link.href.startsWith('#') ? '#' : link.href}
                      className={`group flex items-center gap-1 text-[13px] xl:text-[14px] font-medium transition-colors whitespace-nowrap px-3 py-2 rounded-full ${
                        location.pathname === link.href
                          ? 'text-[#0088B3] bg-white/10'
                          : 'text-white hover:text-[#0088B3]'
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 md:gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#DD005C] to-[#0542BD] text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium hover:opacity-90 transition-opacity active:scale-95 whitespace-nowrap min-h-[44px] shadow-lg shadow-[#DD005C]/20"
              >
                Contact Now
              </Link>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-white cursor-pointer"
                aria-label="Toggle Mobile Menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="absolute top-full left-0 right-0 mt-4 bg-[#070707] rounded-3xl p-6 shadow-2xl lg:hidden flex flex-col gap-2 border border-white/10 max-h-[80vh] overflow-y-auto"
                >
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      {link.hasMegaMenu ? (
                        <>
                          <button
                            onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                            className={`flex items-center justify-between text-base font-medium py-3 border-b border-white/5 rounded-lg px-2 -mx-2 ${
                              location.pathname.startsWith('/solutions') ? 'text-[#0088B3] bg-white/10' : 'text-white'
                            }`}
                          >
                            {link.name}
                            {mobileSolutionsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                          <AnimatePresence>
                            {mobileSolutionsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden flex flex-col bg-white/5 rounded-xl mt-2 px-4"
                              >
                                {solutionsData.map((type) => (
                                  <div key={type.id} className="py-2">
                                    <Link
                                      to={`/solutions/${type.id}`}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-[#0088B3] text-sm font-bold uppercase tracking-wider block py-2"
                                    >
                                      {type.name} Solutions
                                    </Link>
                                    <div className="flex flex-col gap-1 ml-2">
                                      {type.categories.map((cat) => (
                                        <Link
                                          key={cat.id}
                                          to={`/solutions/${type.id}/${cat.id}`}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="text-white/80 text-sm py-2 hover:text-white transition-colors"
                                        >
                                          {cat.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : link.disabled ? (
                        <button
                          type="button"
                          className="w-full text-left text-white/50 text-base font-medium py-3 transition-colors border-b border-white/5 last:border-0 cursor-default"
                          disabled
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          to={link.href.startsWith('#') ? '#' : link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`text-base font-medium py-3 transition-colors border-b border-white/5 last:border-0 rounded-lg px-2 -mx-2 ${
                            location.pathname === link.href
                              ? 'text-[#0088B3] bg-white/10'
                              : 'text-white hover:text-[#0088B3]'
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
      </header>

      {/* Mega Menu Integration */}
      <div 
        onMouseLeave={() => setMegaMenuOpen(false)}
        className="relative z-50"
        id="solutions-mega-menu"
      >
        <MegaMenu 
          isOpen={megaMenuOpen} 
          onClose={() => setMegaMenuOpen(false)} 
        />
      </div>
    </>
  );
};
