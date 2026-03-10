import React from 'react';
import { Link } from 'react-router-dom';
import imgLogoWithTextWhite from "figma:asset/fd7a6d759e2c2f6e2a387703f814a9dfb349d19f.png";
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import svgPaths from "../../imports/svg-4m1rw42oa4";

const footerLinks = [
  {
    title: "Home",
    links: [
      { name: "About Us", href: "/about" },
      // Our Partners & Careers don't have dedicated pages yet, keep as non-clickable
      { name: "Our Partners", href: "#", disabled: true },
      { name: "Careers", href: "#", disabled: true }
    ]
  },
  {
    title: "Solutions",
    links: [
      { name: "Dental Solutions", href: "/solutions/dental" },
      { name: "Medical Solutions", href: "/solutions/medical" },
      { name: "Doctors Corner", href: "#", disabled: true },
      { name: "Education & Learning", href: "/education" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Events", href: "/events" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "FAQ", href: "#", disabled: true },
      { name: "Download Center", href: "#", disabled: true }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#", disabled: true },
      { name: "Terms & Conditions", href: "#", disabled: true }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-black text-white relative pt-24 pb-12 overflow-hidden w-full">
      {/* Background Pattern - specific positioning from Figma */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={imgGroup381671} 
          alt="" 
          className="w-full h-full object-cover opacity-25 md:opacity-30 mix-blend-screen" 
        />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)] relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-8 max-w-[360px]">
            <Link to="/" className="h-[67px] w-[163px]">
              <img src={imgLogoWithTextWhite} alt="Zircon Logo" className="w-full h-full object-contain" />
            </Link>
            <p className="text-base text-white/80 font-['Arial'] leading-relaxed">
              Trusted enabler for healthcare solutions dedicated to enabling excellence across dental and medical practice.
            </p>
            <div className="flex flex-col gap-1 text-base text-white font-['Arial']">
              <a href="mailto:info@zircon.ae" className="hover:text-[#dd005c] transition-colors">info@zircon.ae</a>
              <a href="tel:+971123456789" className="hover:text-[#dd005c] transition-colors">+971 12 345 6789</a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-12">
            {footerLinks.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h4 className="text-[18px] font-semibold font-['Montserrat']">{col.title}</h4>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      {link.disabled ? (
                        <span className="text-sm text-white/40 font-['Arial'] whitespace-nowrap cursor-default">
                          {link.name}
                        </span>
                      ) : (
                        <Link to={link.href} className="text-sm text-white/70 hover:text-white transition-colors font-['Arial'] whitespace-nowrap">
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                  {/* Social Icons inside Legal Column as per design */}
                  {col.title === "Legal" && (
                    <div className="flex gap-2 mt-4">
                      {["WhatsApp", "Instagram", "LinkedIn", "Twitter"].map((social, sIdx) => {
                        const iconKey = {
                          WhatsApp: 'p2d44a700',
                          Instagram: 'p2d20a880',
                          LinkedIn: 'p30e2100',
                          Twitter: 'p271d5f00'
                        }[social];
                        return (
                          <a 
                            key={sIdx} 
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform"
                            aria-label={social}
                          >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d={svgPaths[iconKey as keyof typeof svgPaths]} fill="white" />
                            </svg>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-white/70 text-base font-['Arial']">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p3eb19400} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p10b08580} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>2026 Zircon, All right reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
