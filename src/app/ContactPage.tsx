import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CalendarDays } from 'lucide-react';
import imgGroup381671 from "figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png";

export const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling can be wired to backend or service later
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-black pt-[136px] sm:pt-[140px] md:pt-[144px] pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={imgGroup381671} 
            alt="" 
            className="w-full h-full object-cover opacity-15 md:opacity-20 mix-blend-screen"
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-[clamp(16px,3vw,48px)] relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 mb-6 text-[#ABABAB] text-[10px] font-['Montserrat'] font-medium uppercase tracking-[0.2em] justify-center">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#ABABAB]" />
            <span className="text-[#DD005C]">Contact Us</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] mb-4 leading-tight"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-sm md:text-base font-['Montserrat'] max-w-2xl mx-auto leading-relaxed"
            >
              From dental implants to medical equipment, we provide end-to-end solutions for modern healthcare facilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-[clamp(16px,3vw,48px)]">
          <div className="flex flex-col items-center gap-4 text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DD005C] to-[#0088B3] px-6 py-1.5 rounded-full">
              <span className="text-white text-xs font-semibold font-['Montserrat'] tracking-[0.2em] uppercase">
                Book Appointment
              </span>
            </div>
            <h2 className="text-[#070707] text-2xl sm:text-3xl md:text-4xl font-medium font-['Montserrat'] leading-tight max-w-2xl">
              Schedule Expert Support for Your Medical Equipment
            </h2>
            <p className="text-[#4A4A4A] text-sm md:text-base font-['Montserrat'] max-w-xl leading-relaxed">
              Book a professional visit to install, maintain, or repair your devices quickly and safely.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#F5F5F5] border border-[#EBEBEB] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-6 md:gap-8"
          >
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-[#070707] text-sm md:text-base font-medium font-['Montserrat']">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your complete name"
                  className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm md:text-base font-['Montserrat'] text-[#070707] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0088B3] focus:border-[#0088B3]"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[#070707] text-sm md:text-base font-medium font-['Montserrat']">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Active email address"
                  className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm md:text-base font-['Montserrat'] text-[#070707] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0088B3] focus:border-[#0088B3]"
                  required
                />
              </div>

              {/* Facility */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="facility" className="text-[#070707] text-sm md:text-base font-medium font-['Montserrat']">
                  Facility Name / Institution
                </label>
                <input
                  id="facility"
                  name="facility"
                  type="text"
                  placeholder="Clinic or hospital name"
                  className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm md:text-base font-['Montserrat'] text-[#070707] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0088B3] focus:border-[#0088B3]"
                />
              </div>

              {/* Service Type */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="serviceType" className="text-[#070707] text-sm md:text-base font-medium font-['Montserrat']">
                  Type of Service Needed
                </label>
                <div className="relative">
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="w-full appearance-none rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm md:text-base font-['Montserrat'] text-[#070707] focus:outline-none focus:ring-2 focus:ring-[#0088B3] focus:border-[#0088B3]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose requested service
                    </option>
                    <option value="installation">Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="repair">Repair</option>
                    <option value="training">Training</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                    ▾
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-[#070707] text-sm md:text-base font-medium font-['Montserrat']">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Reachable contact number"
                  className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm md:text-base font-['Montserrat'] text-[#070707] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0088B3] focus:border-[#0088B3]"
                />
              </div>

              {/* Preferred Date & Time */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="datetime" className="text-[#070707] text-sm md:text-base font-medium font-['Montserrat']">
                  Preferred Date &amp; Time
                </label>
                <div className="relative">
                  <input
                    id="datetime"
                    name="datetime"
                    type="datetime-local"
                    className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 pr-10 text-sm md:text-base font-['Montserrat'] text-[#070707] focus:outline-none focus:ring-2 focus:ring-[#0088B3] focus:border-[#0088B3]"
                  />
                  <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={18} />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="notes" className="text-[#070707] text-sm md:text-base font-medium font-['Montserrat']">
                Additional Notes or Device Details
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                placeholder="Details or special request"
                className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm md:text-base font-['Montserrat'] text-[#070707] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0088B3] focus:border-[#0088B3] resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DD005C] to-[#0088B3] text-white px-10 py-3 rounded-full text-xs md:text-sm font-semibold font-['Montserrat'] tracking-[0.2em] uppercase hover:opacity-90 transition-all shadow-md"
              >
                Book Appointment
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

