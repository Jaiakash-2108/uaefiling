"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck, Clock, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

const trustSignals = [
  { icon: ShieldCheck, text: "500+ Freelancers Licensed" },
  { icon: Clock, text: "3-5 Working Days" },
  { icon: Landmark, text: "0% Personal Income Tax" },
  { icon: CheckCircle2, text: "Bank Setup Included" },
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
            <h1 className="text-[clamp(48px,6vw,80px)] leading-[1.1] font-serif font-bold text-text-primary tracking-tight">
              You have the skill. We&apos;ll make it legal.
            </h1>
            <p className="text-[clamp(18px,2vw,22px)] leading-relaxed text-text-secondary">
              Get your UAE freelance licence in days, not weeks. <br className="hidden md:block" />
              No sponsor. No office. No complications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Get Your Licence
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto">
              Check Eligibility
            </Button>
          </div>

          <div className="pt-8 border-t border-[rgba(0,0,0,0.06)] grid grid-cols-2 gap-x-4 gap-y-6">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-3">
                <signal.icon className="w-5 h-5 text-accent-primary shrink-0" />
                <span className="text-[14px] font-medium text-text-secondary leading-snug">
                  {signal.text}
                </span>
              </div>
            ))}
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
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="w-full aspect-[4/3] bg-background-surface rounded-[24px] shadow-medium border border-[rgba(0,0,0,0.06)] p-8 flex flex-col justify-between z-10"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="text-[12px] uppercase tracking-wider font-bold text-accent-primary">
                  Official Document
                </div>
                <div className="text-[24px] font-serif font-bold text-text-primary">
                  Freelance Permit
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-background-soft flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-accent-primary" />
              </div>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePackage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
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
      </div>
    </section>
  );
};
