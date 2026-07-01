"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Wallet, FileX, ShieldAlert, HelpCircle, Ban } from 'lucide-react';

const painPoints = [
  {
    title: "10 Different Answers",
    body: "Googled \"UAE freelance licence\" and got conflicting advice pointing to 5 different free zones.",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Hidden Costs Shock",
    body: "Quoted AED 5,000 upfront. Invoice arrived at AED 15,000+. Nobody told you about the \"extras.\"",
    icon: Wallet,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Wrong Activity Category",
    body: "Unsure if your job qualifies. No one explained which activity code fits your work.",
    icon: FileX,
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Agent Red Flags",
    body: "Found an agent. Something felt off. Zero transparency. They vanished after payment.",
    icon: ShieldAlert,
    image: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Visa Confusion",
    body: "On a spouse visa. Can you even freelance? Nobody could answer definitively.",
    icon: HelpCircle,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bank Rejection",
    body: "Freelancers apply for business accounts and get rejected. Which banks actually accept freelancers?",
    icon: Ban,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  }
];

export default function PainPoints() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="bg-[#FEFCF7] pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[80px] overflow-hidden relative">
      
      {/* Windows 11 Style Follow-Cursor Tooltip */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100]"
        animate={{
          x: mousePos.x + 16,
          y: mousePos.y + 16,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.02
        }}
        style={{ originX: 0, originY: 0 }}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.1 } }}
              transition={{
                type: "tween",
                ease: [0.16, 1, 0.3, 1], // Snappy but smooth ease-out
                duration: 0.3,
                delay: 0.05
              }}
              className="flex items-center gap-2 bg-[#FFFFFF]/95 backdrop-blur-md text-[#180F09] border border-[rgba(0,0,0,0.08)] shadow-[0_4px_16px_rgba(0,0,0,0.1)] text-[12px] font-medium tracking-wide font-sans py-2 px-3 rounded-md"
            >
              Click to expand
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Header Section (Centered) */}
      <div className="max-w-[1280px] mx-auto px-6">
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
      </div>

      {/* Full-width Carousel Container */}
      <div className="w-full px-4 md:px-8">
        {/* Tablet & Desktop Accordion */}
        <motion.div 
          className="hidden md:flex flex-row gap-[16px] h-[540px] w-full max-w-[1600px] mx-auto pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {painPoints.map((point, index) => {
            const isActive = activeIndex === index;
            const Icon = point.icon;

            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                key={`accordion-${index}`}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    setMousePos({ x: e.clientX, y: e.clientY });
                    setIsHovering(true);
                  }
                }}
                onMouseLeave={() => setIsHovering(false)}
                className={`relative group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:duration-0 ${
                  isActive 
                    ? "flex-[1_1_0%] min-w-[400px] lg:min-w-[500px]" 
                    : "flex-[0_0_90px] min-w-[90px]"
                } ${index >= 4 ? "max-lg:hidden" : ""}`}
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsHovering(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIndex(index);
                      setIsHovering(false);
                    }
                  }}
                  className={`relative w-full h-full bg-[#FFFFFF] rounded-[32px] overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CF9A35] ${
                    isActive 
                      ? "border border-[rgba(207,154,53,0.35)] shadow-[0_8px_30px_rgba(0,0,0,0.08)]" 
                      : "border border-[rgba(0,0,0,0.06)] shadow-soft"
                  }`}
                >
                {/* Background Image with Consistent Minimal Tint */}
                <img 
                  src={point.image} 
                  alt={point.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out grayscale opacity-80"
                  style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
                />
                <div className="absolute inset-0 bg-[#CF9A35]/10 mix-blend-multiply pointer-events-none" />
                
                {/* Gradient Overlay for Text Readability */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/95 to-transparent transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Dark Overlay for inactive cards to make active pop */}
                <div 
                  className={`absolute inset-0 bg-[#180F09]/30 transition-opacity duration-500 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Active left bar */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[#CF9A35] z-20 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`} 
                />

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col z-10 w-full max-w-[380px]">
                  {/* Icon */}
                  <div 
                    className={`w-[52px] h-[52px] rounded-[16px] bg-[#FFFFFF] shadow-sm flex items-center justify-center shrink-0 transition-transform duration-500 ease-out ${
                      !isActive ? "-translate-x-[6px]" : "translate-x-0"
                    }`}
                  >
                    <Icon className="text-[#CF9A35]" size={24} strokeWidth={1.5} />
                  </div>
                  
                  {/* Text Block */}
                  <div 
                    className={`mt-auto transition-all duration-500 ease-out flex flex-col gap-3 ${
                      isActive ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8 pointer-events-none"
                    }`}
                  >
                    <h3 className="font-serif font-semibold text-[#180F09] text-[1.5rem] leading-tight">
                      {point.title}
                    </h3>
                    <p className="font-sans text-[1rem] text-[rgba(24,15,9,0.75)] leading-[1.65]">
                      {point.body}
                    </p>
                  </div>
                </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Static Grid (<768px) */}
        <motion.div 
          className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div 
                key={`mobile-${index}`} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="relative h-[280px] rounded-[24px] overflow-hidden flex flex-col justify-end p-6 border border-[rgba(0,0,0,0.06)] shadow-soft"
              >
                <img src={point.image} alt={point.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" />
                <div className="absolute inset-0 bg-[#CF9A35]/10 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#180F09]/95 via-[#180F09]/50 to-transparent" />
                
                <div className="relative z-10">
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                    <Icon className="text-white" size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif font-semibold text-white text-[1.125rem] leading-snug mb-2">
                    {point.title}
                  </h3>
                  <p className="font-sans text-[0.875rem] text-white/80 leading-[1.65] line-clamp-3">
                    {point.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Note & CTA */}
      <motion.div 
        className="mt-16 flex flex-col items-center px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-[rgba(207,154,53,0.12)] rounded-[24px] border-l-[3px] border-[#CF9A35] py-4 px-6 mb-10 max-w-2xl mx-auto">
          <p className="font-sans font-semibold text-[#B8862E] text-center">
            If 3+ of these sound like you — you're exactly who we built UAE Filing for. ✓
          </p>
        </div>
        
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#CF9A35] hover:bg-[#B8862E] text-white font-bold py-4 px-8 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_14px_rgba(207,154,53,0.4)]"
        >
          Get My Licence
        </button>
      </motion.div>

    </section>
  );
}
