"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FileCheck, Percent, Landmark, Globe, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const trustSignals = [
  { icon: FileCheck, text: "No NOC needed" },
  { icon: Percent, text: "0% income tax" },
  { icon: Landmark, text: "Bank account included" },
  { icon: Globe, text: "100% visa eligible" },
];

const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "AED 5,000",
    description: "Perfect for freelancers who already have a residency visa.",
    color: "from-[#CF9A35]/20 to-transparent",
  },
  {
    id: "visa",
    name: "Licence + Visa",
    price: "AED 9,500",
    description: "Full freelance setup including UAE residency and Emirates ID.",
    color: "from-[#B8862E]/20 to-transparent",
  },
  {
    id: "complete",
    name: "Complete Setup",
    price: "AED 12,000",
    description: "Licence, Visa, Corporate Banking, and priority processing.",
    color: "from-[#180F09]/10 to-transparent",
  },
];

export const Hero = () => {
  const [activePackage, setActivePackage] = useState(0);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
      {/* Dynamic Background Glow based on Package */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePackage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={cn(
              "absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full blur-[120px] bg-gradient-radial",
              packages[activePackage].color
            )}
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 max-w-xl"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#CF9A35]/10 text-accent-primary text-[14px] font-semibold tracking-wide border border-[#CF9A35]/20">
              {/* CSS Circular UAE Flag */}
              <div className="w-4 h-4 rounded-full overflow-hidden flex border border-[#CF9A35]/30 shrink-0 shadow-sm">
                <div className="w-[28%] h-full bg-[#FF0000]" />
                <div className="w-[72%] h-full flex flex-col">
                  <div className="w-full flex-1 bg-[#00732F]" />
                  <div className="w-full flex-1 bg-white" />
                  <div className="w-full flex-1 bg-black" />
                </div>
              </div>
              <span>UAE Freelance Licensing</span>
            </div>
            <h1 className="text-[clamp(48px,6vw,80px)] leading-[1.1] font-serif font-bold text-text-primary tracking-tight">
              You have the skill. We&apos;ll make it legal.
            </h1>
            <p className="text-[clamp(18px,2vw,22px)] leading-relaxed text-text-secondary max-w-[95%]">
              Getting a UAE freelance licence feels complicated. Different free zones, hidden costs, visa&nbsp;confusion. UAE Filing cuts through all of it. We handle the paperwork, you keep building.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Get your licence now
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto group">
              Check eligibility <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </motion.div>

        {/* Right Content - Hero Object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center justify-center lg:ml-auto w-full max-w-[500px]"
        >
          {/* Floating Certificate Card */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
            className="w-full min-h-[480px] bg-background-surface rounded-[24px] shadow-medium border border-[rgba(0,0,0,0.06)] p-6 sm:p-8 flex flex-col justify-between z-10"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <div className="text-[12px] uppercase tracking-wider font-bold text-accent-primary">
                  Official Document
                </div>
                <div className="text-[24px] font-serif font-bold text-text-primary">
                  Freelance Permit
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-background-soft flex items-center justify-center shadow-soft shrink-0">
                <ShieldCheck className="w-6 h-6 text-accent-primary" />
              </div>
            </div>

            <div className="flex-1 w-full min-h-[200px] sm:min-h-[240px] rounded-[16px] overflow-hidden relative mb-6 border border-[rgba(0,0,0,0.06)] shadow-sm">
              <Image 
                src="/images/freelancer-dubai.png" 
                alt="Professional freelancer working in Dubai" 
                fill 
                className="object-cover" 
              />
            </div>

            <div className="space-y-4 bg-background-surface min-h-[100px] flex flex-col justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePackage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  <div className="text-[32px] font-medium text-text-primary">
                    {packages[activePackage].price}
                  </div>
                  <div className="text-[15px] text-text-secondary leading-snug">
                    {packages[activePackage].description}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Package Switcher */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 bg-background-surface rounded-full shadow-soft border border-[rgba(0,0,0,0.04)]">
            {packages.map((pkg, index) => (
              <button
                key={pkg.id}
                onClick={() => setActivePackage(index)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary",
                  activePackage === index
                    ? "bg-text-primary text-white shadow-soft"
                    : "text-text-secondary hover:text-text-primary hover:bg-background-soft"
                )}
              >
                {pkg.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Full-width Trust Signals */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-2 pt-8 lg:pt-12 mt-4 lg:mt-8 border-t border-[rgba(0,0,0,0.06)] w-full flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3">
              <signal.icon className="w-5 h-5 text-accent-primary shrink-0" />
              <span className="text-[14px] sm:text-[15px] font-medium text-text-secondary whitespace-nowrap tracking-tight">
                {signal.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
