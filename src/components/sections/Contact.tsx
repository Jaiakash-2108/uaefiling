"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="contact" ref={sectionRef} className="w-full py-[60px] lg:py-[80px] px-6 bg-[#FEFCF7] text-[#180F09]">
      <div className="max-w-[1100px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Text & Trust Points */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#B8862E] font-sans font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Ready To Start?
            </span>

            {/* Headline */}
            <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-[56px] mb-6 tracking-tight leading-[1.1]">
              Let's figure this out together.
            </h2>

            {/* Paragraph */}
            <p className="text-[rgba(24,15,9,0.65)] font-sans text-lg leading-relaxed mb-10">
              30-minute call. Free. No payment until you decide to move forward. We'll tell you exactly which licence fits, what it costs, and how long it takes.
            </p>

            {/* Trust Points */}
            <ul className="flex flex-col gap-5 text-base font-medium text-[#180F09]">
              {[
                "No commitment required",
                "Plain English answers",
                "Response in < 2 hours",
                "Your documents stay secure"
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#CF9A35]/10 flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="#CF9A35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>


          {/* Right Column: Minimal Form Card */}
          <motion.div 
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#FFFFFF] p-8 md:p-10 rounded-2xl shadow-[0_12px_40px_rgba(24,15,9,0.04)] border border-[rgba(24,15,9,0.02)] relative overflow-hidden">
              {/* Subtle top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#CF9A35]/30 to-transparent opacity-50"></div>
              
              <h3 className="font-serif text-2xl font-semibold mb-8">Book your free call</h3>
              
              <form className="flex flex-col gap-6 font-sans">
                {/* Full Name */}
                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="fullName" className="text-[13px] font-semibold text-[#180F09] uppercase tracking-wider">Full Name *</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Your name" 
                    required
                    className="w-full pb-3 border-b border-[rgba(24,15,9,0.1)] bg-transparent text-[#180F09] placeholder-[rgba(24,15,9,0.3)] outline-none focus:border-[#CF9A35] transition-colors rounded-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="email" className="text-[13px] font-semibold text-[#180F09] uppercase tracking-wider">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="you@email.com" 
                    required
                    className="w-full pb-3 border-b border-[rgba(24,15,9,0.1)] bg-transparent text-[#180F09] placeholder-[rgba(24,15,9,0.3)] outline-none focus:border-[#CF9A35] transition-colors rounded-none"
                  />
                </div>

                {/* WhatsApp / Phone */}
                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="phone" className="text-[13px] font-semibold text-[#180F09] uppercase tracking-wider">WhatsApp / Phone *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+971 50 000 0000" 
                    required
                    className="w-full pb-3 border-b border-[rgba(24,15,9,0.1)] bg-transparent text-[#180F09] placeholder-[rgba(24,15,9,0.3)] outline-none focus:border-[#CF9A35] transition-colors rounded-none"
                  />
                  <p className="text-[11px] text-[rgba(24,15,9,0.5)]">We'll use this on the call</p>
                </div>

                {/* Profession & Visa Status Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* Profession */}
                  <div className="flex flex-col gap-2 relative group">
                    <label htmlFor="profession" className="text-[13px] font-semibold text-[#180F09] uppercase tracking-wider">Your profession *</label>
                    <input 
                      type="text" 
                      id="profession" 
                      placeholder="e.g. Developer, Designer" 
                      required
                      className="w-full pb-3 border-b border-[rgba(24,15,9,0.1)] bg-transparent text-[#180F09] placeholder-[rgba(24,15,9,0.3)] outline-none focus:border-[#CF9A35] transition-colors rounded-none"
                    />
                  </div>

                  {/* Visa Status */}
                  <div className="flex flex-col gap-2 relative group">
                    <label htmlFor="visa" className="text-[13px] font-semibold text-[#180F09] uppercase tracking-wider">Current visa status</label>
                    <select 
                      id="visa" 
                      className="w-full pb-3 border-b border-[rgba(24,15,9,0.1)] bg-transparent text-[#180F09] outline-none focus:border-[#CF9A35] transition-colors appearance-none cursor-pointer rounded-none"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-[rgba(24,15,9,0.3)]">Select status</option>
                      <option value="employment">On employment visa (UAE)</option>
                      <option value="dependent">On spouse / parent visa</option>
                      <option value="visit">On visit visa</option>
                      <option value="outside">Outside UAE</option>
                      <option value="other">Other / Prefer not to say</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-0 bottom-4 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#180F09" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="mt-6 w-full py-4 px-6 bg-[#180F09] text-white font-sans font-medium rounded-lg hover:bg-[#2A1F16] transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>Confirm my consultation</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <p className="text-center text-[11px] text-[rgba(24,15,9,0.4)] mt-2">
                  100% secure. We never share your details.
                </p>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
