"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkles, Star, Check } from "lucide-react";

interface TestimonialReview {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: TestimonialReview[] = [
    {
      name: "Alex M.",
      role: "SOFTWARE ENGINEER",
      quote: "I wasted three weeks trying to figure out which free zone was right for me. UAE Filing sorted it on a 20-minute call and I had my licence 4 days later.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "Sarah K.",
      role: "MARKETING CONSULTANT",
      quote: "The pricing transparency is what sold me. Another agent quoted me 5k and then sent an invoice for 14k. UAE Filing's price was exactly what they said on day one.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    },
    {
      name: "David L.",
      role: "VIDEOGRAPHER",
      quote: "They didn't just get me the licence, they actually walked me into the bank and got my business account opened. That alone was worth the fee.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    },
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="w-full pt-[50px] pb-[80px] lg:pt-[60px] lg:pb-[100px] px-6 bg-[#FEFCF7] text-[#180F09]">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center mb-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#B8862E] font-sans font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Client Success
          </span>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight">
            Built for freelancers, verified by freelancers.
          </h2>
          <p className="text-[rgba(24,15,9,0.65)] font-sans text-lg md:text-xl">
            Join hundreds of professionals who bypassed the bureaucracy and launched their businesses.
          </p>
        </motion.div>

        {/* Content Box */}
        <div className="w-full flex flex-col items-center min-h-[300px] justify-center bg-[#FFFFFF] border border-[rgba(24,15,9,0.04)] rounded-[32px] p-8 md:p-12 shadow-[0_15px_40px_rgba(24,15,9,0.01)] relative">
          
          {/* Decorative Quote Mark Background */}
          <div className="absolute top-8 left-8 text-7xl font-serif text-[rgba(207,154,53,0.06)] select-none pointer-events-none">
            “
          </div>
          <div className="absolute bottom-8 right-8 text-7xl font-serif text-[rgba(207,154,53,0.06)] select-none pointer-events-none">
            ”
          </div>

          {/* Rating Stars */}
          <div className="flex justify-center gap-1 mb-6 relative z-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-[#CF9A35] text-[#CF9A35]" />
            ))}
          </div>

          {/* Testimonial Active Slide */}
          <div className="relative z-10 w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <blockquote className="font-serif font-medium text-xl md:text-2xl text-center italic leading-relaxed text-[#180F09] max-w-2xl mb-5">
                  “{reviews[activeIndex].quote}”
                </blockquote>
                <cite className="font-sans text-[0.68rem] uppercase tracking-[0.2em] font-bold text-[rgba(24,15,9,0.4)] not-italic">
                  {reviews[activeIndex].role} — VERIFIED CLIENT
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Switcher Pill Dock */}
          <div className="flex justify-center mt-10 relative z-10">
            <div className="flex items-center gap-3">
              {reviews.map((review, idx) => {
                const isActive = activeIndex === idx;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="focus:outline-none relative"
                  >
                    {isActive ? (
                      <motion.div
                        layoutId="activeAvatarCapsule"
                        className="bg-[#180F09] text-[#FFFFFF] py-1.5 px-4 rounded-full flex items-center gap-2.5 font-sans font-semibold text-[0.85rem] shadow-[0_4px_12px_rgba(24,15,9,0.12)]"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      >
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-6 h-6 rounded-full object-cover border border-[rgba(255,255,255,0.2)]"
                        />
                        <span className="whitespace-nowrap flex items-center gap-1">
                          {review.name}
                          <Check size={11} className="text-[#CF9A35] stroke-[4]" />
                        </span>
                      </motion.div>
                    ) : (
                      <div className="p-1 flex items-center justify-center">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-8 h-8 rounded-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer border border-[rgba(24,15,9,0.08)]"
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
