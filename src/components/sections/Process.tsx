"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { Check, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProcessStep {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  details: string[];
}

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [activeStep, setActiveStep] = useState(0);

  const steps: ProcessStep[] = [
    {
      id: "1",
      title: "Talk to an advisor",
      subTitle: "Free. No commitment.",
      description: "30-minute call. Tell us your profession, visa, and goals. We match you to your perfect free zone and licence type.",
      details: [
        "Personalized consultation",
        "Free zone feasibility check",
        "Activity code selection",
        "Custom price quote",
      ],
    },
    {
      id: "2",
      title: "Submit documents",
      subTitle: "Checklist provided. Clear.",
      description: "Passport copy, photo, simple forms. We give you an exact checklist. We verify everything before submission to avoid rejections.",
      details: [
        "Simplified checklist",
        "Document pre-verification",
        "Application form prep",
        "No NOC required check",
      ],
    },
    {
      id: "3",
      title: "Approval & tracking",
      subTitle: "Real-time updates via WhatsApp.",
      description: "We submit. We track. You get WhatsApp updates at every stage — no radio silence. You know exactly where you stand.",
      details: [
        "Government coordination",
        "WhatsApp progress tracking",
        "Priority processing option",
        "Zero agent bureaucracy",
      ],
    },
    {
      id: "4",
      title: "Licence + Next Steps",
      subTitle: "3–5 working days. Complete.",
      description: "Licence issued in 3–5 working days. We help you open your bank account. We guide your visa application. You're fully operational.",
      details: [
        "Official licence delivery",
        "Bank matching & introduction",
        "Residency visa application",
        "Emirates ID processing",
      ],
    },
  ];

  return (
    <section id="process" ref={sectionRef} className="w-full py-[60px] lg:py-[80px] px-6 bg-[#FEFCF7] text-[#180F09]">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center mb-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#B8862E] font-sans font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            The Process
          </span>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl mb-6">
            Four simple steps. From confusion to done.
          </h2>
          <p className="text-[rgba(24,15,9,0.65)] font-sans text-lg md:text-xl">
            Most people finish everything in 2–3 weeks. Some faster. Zero surprises along the way.
          </p>
        </motion.div>

        {/* Stepper Container */}
        <div className="flex flex-col gap-10">
          
          {/* Step Indicators - Horizontal on Desktop, Vertical on Mobile */}
          <div className="relative w-full">
            
            {/* Desktop Horizontal Line Indicators */}
            <div className="hidden md:block absolute top-6 left-8 right-8 h-[2px] bg-[rgba(24,15,9,0.06)] z-0">
              <motion.div 
                className="h-full bg-[#CF9A35]"
                initial={{ width: 0 }}
                animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            {/* Steps Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 relative z-10">
              {steps.map((step, index) => {
                const isCompleted = index < activeStep;
                const isActive = index === activeStep;
                
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className="flex md:flex-col items-center gap-4 md:gap-3 focus:outline-none group text-left md:text-center w-full md:w-auto"
                  >
                    {/* Circle Badge */}
                    <div 
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-sans font-semibold text-base transition-all duration-300 ${
                        isCompleted
                          ? "bg-[#CF9A35] border-[#CF9A35] text-[#FFFFFF]"
                          : isActive
                          ? "bg-[#FFFFFF] border-[#CF9A35] text-[#CF9A35] shadow-[0_4px_15px_rgba(207,154,53,0.15)] scale-105"
                          : "bg-[#FEFCF7] border-[rgba(24,15,9,0.1)] text-[rgba(24,15,9,0.4)]"
                      }`}
                    >
                      {isCompleted ? (
                        <Check size={18} strokeWidth={2.5} />
                      ) : (
                        <span>{step.id}</span>
                      )}
                    </div>

                    {/* Step Label Info */}
                    <div className="flex flex-col">
                      <span 
                        className={`font-sans font-semibold text-[0.95rem] transition-colors duration-300 ${
                          isActive ? "text-[#180F09]" : "text-[rgba(24,15,9,0.5)] group-hover:text-[#180F09]"
                        }`}
                      >
                        Step {step.id}
                      </span>
                      <span className="font-sans text-[0.8rem] text-[rgba(24,15,9,0.4)] hidden md:block">
                        {step.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Active Step Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full bg-[#FFFFFF] border border-[rgba(24,15,9,0.06)] rounded-[24px] p-8 md:p-10 shadow-[0_10px_30px_rgba(24,15,9,0.02)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Title & Description */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <span className="text-[0.75rem] font-sans font-bold uppercase tracking-wider text-[#B8862E] mb-2">
                    {steps[activeStep].subTitle}
                  </span>
                  <h3 className="font-serif font-semibold text-2xl md:text-3xl text-[#180F09] mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="font-sans text-[0.95rem] text-[rgba(24,15,9,0.75)] leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </div>

                {/* Right Column: Checklists */}
                <div className="md:col-span-5 flex flex-col gap-3 bg-[rgba(207,154,53,0.02)] border border-[rgba(207,154,53,0.06)] rounded-2xl p-6">
                  <span className="font-sans font-semibold text-xs tracking-wider uppercase text-[rgba(24,15,9,0.4)] mb-2 block">
                    What is covered:
                  </span>
                  {steps[activeStep].details.map((detail, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-[rgba(207,154,53,0.1)] flex items-center justify-center shrink-0">
                        <Check size={12} className="text-[#CF9A35]" strokeWidth={3} />
                      </div>
                      <span className="font-sans text-[0.875rem] text-[rgba(24,15,9,0.8)]">{detail}</span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between mt-2">
            <Button 
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="bg-[#FFFFFF] hover:bg-[#FEFCF7] text-[#180F09] border border-[rgba(24,15,9,0.08)] flex items-center gap-2 px-5 py-5 rounded-lg text-sm font-sans"
            >
              <ChevronLeft size={16} />
              Previous
            </Button>
            <Button 
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className="bg-[#180F09] hover:bg-[#2A1F16] text-[#FFFFFF] flex items-center gap-2 px-6 py-5 rounded-lg text-sm font-sans"
            >
              Next
              <ChevronRight size={16} />
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
