"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Wallet, FileX, ShieldAlert, HelpCircle, Ban } from 'lucide-react';

const painPoints = [
  {
    number: "01",
    title: "10 Different Answers",
    body: "Googled \"UAE freelance licence\" and got conflicting advice pointing to 5 different free zones.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Hidden Costs Shock",
    body: "Quoted AED 5,000 upfront. Invoice arrived at AED 15,000+. Nobody told you about the \"extras.\"",
    icon: Wallet,
  },
  {
    number: "03",
    title: "Wrong Activity Category",
    body: "Unsure if your job qualifies. No one explained which activity code fits your work.",
    icon: FileX,
  },
  {
    number: "04",
    title: "Agent Red Flags",
    body: "Found an agent. Something felt off. Zero transparency. They vanished after payment.",
    icon: ShieldAlert,
  },
  {
    number: "05",
    title: "Visa Confusion",
    body: "On a spouse visa. Can you even freelance? Nobody could answer definitively.",
    icon: HelpCircle,
  },
  {
    number: "06",
    title: "Bank Rejection",
    body: "Freelancers apply for business accounts and get rejected. Which banks actually accept freelancers?",
    icon: Ban,
  }
];

export default function PainPoints() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#FEFCF7] py-[80px] lg:py-[160px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-[0.75rem] uppercase tracking-[0.14em] text-[#B8862E] font-sans font-semibold mb-4">
            The Real Problem
          </p>
          <h2 className="font-serif text-[#180F09] font-semibold text-3xl md:text-4xl lg:text-5xl mb-6">
            We know exactly what stopped you
          </h2>
          <p className="text-[rgba(24,15,9,0.65)] font-sans text-lg md:text-xl">
            You're not alone. 90% of freelancers we talk to hit the same wall. Here's what it looks like:
          </p>
        </motion.div>

        {/* Tablet & Desktop Accordion */}
        <div className="hidden md:flex flex-row gap-[12px] h-[380px] w-full">
          {painPoints.map((point, index) => {
            const isActive = activeIndex === index;
            const Icon = point.icon;

            return (
              <div
                key={`accordion-${index}`}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                className={`relative h-full bg-[#FFFFFF] rounded-[24px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CF9A35] motion-reduce:transition-none motion-reduce:duration-0 ${
                  isActive 
                    ? "flex-[1_1_0%] border border-[rgba(207,154,53,0.35)] shadow-[0_4px_20px_rgba(0,0,0,0.04)]" 
                    : "flex-[0_0_80px] border border-[rgba(0,0,0,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                } ${index >= 4 ? "hidden lg:block" : "block"}`}
              >
                {/* Active left bar */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[#CF9A35] transition-opacity duration-300 motion-reduce:transition-none motion-reduce:duration-0 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`} 
                />

                {/* Wide inner container to prevent text wrapping during animation */}
                <div className="absolute top-0 left-0 w-[400px] h-full p-8 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className={`w-[48px] h-[48px] rounded-[12px] bg-[rgba(207,154,53,0.12)] flex items-center justify-center shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none motion-reduce:duration-0 ${
                        !isActive ? "-translate-x-[16px]" : "translate-x-0"
                      }`}
                    >
                      <Icon className="text-[#CF9A35]" size={24} strokeWidth={1.5} />
                    </div>
                    <div 
                      className={`font-sans text-[0.75rem] font-bold text-[rgba(24,15,9,0.65)] transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:duration-0 ${
                        !isActive ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0 delay-200"
                      }`}
                    >
                      {point.number}
                    </div>
                  </div>
                  
                  <div 
                    className={`transition-all duration-300 ease-out flex flex-col gap-3 motion-reduce:transition-none motion-reduce:duration-0 ${
                      isActive ? "opacity-100 translate-x-0 delay-200" : "opacity-0 -translate-x-2 pointer-events-none"
                    }`}
                  >
                    <h3 className="font-serif font-semibold text-[#180F09] text-[1.125rem] leading-snug">
                      {point.title}
                    </h3>
                    <p className="font-sans text-[0.9375rem] text-[rgba(24,15,9,0.65)] leading-[1.65] pr-8">
                      {point.body}
                    </p>
                  </div>
                </div>

                {/* Collapsed Vertical Number */}
                <div 
                  className={`absolute top-[120px] left-[50%] -translate-x-[50%] -rotate-90 origin-center transition-all duration-300 ease-out font-sans text-[0.75rem] font-bold text-[rgba(24,15,9,0.65)] motion-reduce:transition-none motion-reduce:duration-0 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-200"
                  }`}
                >
                  {point.number}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Static Grid (<768px) */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={`mobile-${index}`} className="bg-[#FFFFFF] rounded-[24px] p-6 border border-[rgba(0,0,0,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[40px] h-[40px] rounded-[10px] bg-[rgba(207,154,53,0.12)] flex items-center justify-center shrink-0">
                    <Icon className="text-[#CF9A35]" size={20} strokeWidth={1.5} />
                  </div>
                  <div className="font-sans text-[0.75rem] font-bold text-[rgba(24,15,9,0.65)]">
                    {point.number}
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-[#180F09] text-[1rem] leading-snug mb-2">
                  {point.title}
                </h3>
                <p className="font-sans text-[0.875rem] text-[rgba(24,15,9,0.65)] leading-[1.65]">
                  {point.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Note & CTA */}
        <div className="mt-16 flex flex-col items-center">
          <div className="bg-[rgba(207,154,53,0.12)] rounded-[24px] border-l-[3px] border-[#CF9A35] py-4 px-6 mb-10 max-w-2xl mx-auto">
            <p className="font-sans font-semibold text-[#B8862E] text-center">
              If 3+ of these sound like you — you're exactly who we built UAE Filing for. ✓
            </p>
          </div>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#CF9A35] hover:bg-[#B8862E] text-white font-bold py-4 px-8 rounded-full transition-all duration-200 hover:scale-[1.02]"
          >
            Get My Licence
          </button>
        </div>

      </div>
    </section>
  );
}
