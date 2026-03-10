import React from 'react';
import { motion } from 'motion/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";
import svgPaths from "../../imports/svg-oa709jqtgm";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path 
        d={svgPaths.p5d80e00} 
        fill={filled ? "#1C55E0" : "transparent"} 
        stroke={filled ? "none" : "#D4D3D3"} 
      />
    </svg>
  );
}

const testimonials = [
  {
    initials: "AB",
    name: "Alice Brown",
    role: "Project Coordinator",
    text: "This product has transformed the way our team collaborates. The intuitive interface allows us to work seamlessly, increasing our productivity immensely.",
    rating: 4
  },
  {
    initials: "CD",
    name: "Charlie Davis",
    role: "HR Specialist",
    text: "We've seen a significant reduction in onboarding time for new employees since using this tool. It’s easy to navigate and the support team is always ready to help!",
    rating: 4
  },
  {
    initials: "EF",
    name: "Eva Fox",
    role: "Data Analyst",
    text: "The analytics provided by this platform are outstanding. They have enabled us to make data-driven decisions that have boosted our overall performance.",
    rating: 4
  },
  {
    initials: "GH",
    name: "George Harris",
    role: "Operations Manager",
    text: "Implementation was a breeze. The system is robust and handles our complex workflows without any hiccups. A game changer for our operations.",
    rating: 5
  },
  {
    initials: "IL",
    name: "Isabella Lee",
    role: "Marketing Director",
    text: "I love the clean design and the power of the reporting tools. It gives me all the insights I need to steer our marketing strategy effectively.",
    rating: 5
  }
];

export function TestimonialsSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        // Mobile: 1.05–1.2 cards per view, slide = 85% viewport (readable card + peek)
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "6%",
          variableWidth: true,
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="relative bg-[#fafbff] py-16 overflow-hidden w-full">
      {/* Background Pattern - subtle */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={imgGroup381671} 
          alt="" 
          className="w-full h-full object-cover opacity-15 md:opacity-20 mix-blend-screen grayscale"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-10 md:mb-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-5 py-0.5 rounded-full bg-gradient-to-r from-[#dd005c] to-[#0088b3] mb-4"
          >
            <span className="text-white text-xs md:text-sm font-semibold font-['Montserrat']"># Testimonial</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#070707] font-['Montserrat'] max-w-3xl leading-tight"
          >
            Client Success Stories
          </motion.h2>
        </div>

        <div className="testimonial-slider-container testimonial-slider-mobile w-full relative overflow-hidden">
          <Slider {...settings}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="testimonial-slide-wrapper">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.1 }}
                  className="bg-white p-5 sm:p-6 rounded-[24px] shadow-[0px_2px_12px_0px_rgba(31,45,61,0.08)] flex flex-col h-full min-h-[200px] md:min-h-[240px] w-full border border-[#f0f0f0]"
                >
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <StarIcon key={s} filled={s <= item.rating} />
                    ))}
                  </div>
                  
                  <p className="text-base leading-relaxed text-[#2f2a2a] font-['Montserrat'] mb-4 flex-grow line-clamp-4">
                    {item.text}
                  </p>
                  
                  <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-50">
                    <div className="w-8 h-8 rounded-full bg-[#2F2A2A] flex items-center justify-center text-[#ebeff8] font-semibold text-[10px] font-['Montserrat'] shrink-0">
                      {item.initials}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-[#2f2a2a] font-['Montserrat'] leading-tight truncate">{item.name}</span>
                      <span className="text-[10px] text-[#2f2a2a]/60 font-['Montserrat'] leading-tight truncate">{item.role}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      <style>{`
        .testimonial-slider-container .slick-track {
          display: flex !important;
          gap: 16px !important;
        }
        .testimonial-slider-container .slick-slide {
          height: inherit !important;
        }
        .testimonial-slider-container .slick-list {
          overflow: hidden !important;
        }
        /* Padding left/right between cards so they don't merge */
        .testimonial-slider-container .testimonial-slide-wrapper {
          padding: 0 8px !important;
          box-sizing: border-box !important;
        }
        /* Mobile only: wide slide (88vw) so card is 85–90% of screen, one card + peek */
        @media (max-width: 639px) {
          .testimonial-slider-mobile .slick-slide {
            width: 88vw !important;
            min-width: 88vw !important;
            max-width: 88vw !important;
            box-sizing: border-box;
          }
          .testimonial-slider-mobile .testimonial-slide-wrapper {
            padding: 12px 8px !important;
            width: 100% !important;
            min-width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }
        }
        .testimonial-slider-container .slick-dots li button:before {
          color: #0088b3;
        }
        .testimonial-slider-container .slick-dots li.slick-active button:before {
          color: #dd005c;
        }
      `}</style>
    </section>
  );
}
