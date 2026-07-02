"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  oneTimePrice: number;
  monthlyPrice: number;
  ctaText: string;
  isPopular: boolean;
  features: string[];
}

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [isInstallments, setIsInstallments] = useState(false);

  const plans: PricingPlan[] = [
    {
      id: "starter",
      name: "Starter",
      description: "Freelance licence only. Perfect for those who already have residency visa.",
      oneTimePrice: 5555,
      monthlyPrice: 1389,
      ctaText: "Choose Plan",
      isPopular: false,
      features: [
        "Freelance licence (1 activity)",
        "Free zone registration",
        "Document preparation",
        "Dedicated advisor support",
        "Free tax registration support",
      ],
    },
    {
      id: "visa",
      name: "Licence + Visa",
      description: "Complete licence and 2-year residence visa. Our most requested plan.",
      oneTimePrice: 12500,
      monthlyPrice: 3125,
      ctaText: "Start Here",
      isPopular: true,
      features: [
        "Freelance licence (1 activity)",
        "2-year residence visa",
        "Emirates ID card setup",
        "Medical test coordination",
        "Entry permit & status change",
        "Dedicated corporate advisor",
      ],
    },
    {
      id: "complete",
      name: "Complete Setup",
      description: "All-in licensing, visa, corporate banking, and workplace solution for year one.",
      oneTimePrice: 18000,
      monthlyPrice: 4500,
      ctaText: "Choose Plan",
      isPopular: false,
      features: [
        "Everything in Licence + Visa",
        "Bank account setup",
        "Health insurance",
        "Flexi-desk access",
        "Renewal reminder",
        "Priority support",
      ],
    },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="w-full py-[60px] lg:py-[80px] px-6 bg-[#FFFFFF] text-[#180F09]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center mb-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#B8862E] font-sans font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing
          </span>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight">
            No hidden fees. Ever.
          </h2>
          <p className="text-[rgba(24,15,9,0.65)] font-sans text-lg md:text-xl">
            What you see is what you pay. Full transparency. No surprise invoices.
          </p>
        </motion.div>

        {/* Toggle Switcher */}
        <motion.div 
          className="flex justify-center items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className={`font-sans text-sm font-medium transition-colors ${!isInstallments ? "text-[#180F09]" : "text-[rgba(24,15,9,0.4)]"}`}>
            Pay in Full
          </span>
          <button
            onClick={() => setIsInstallments(!isInstallments)}
            className="w-14 h-8 flex items-center rounded-full p-1 bg-[rgba(24,15,9,0.06)] border border-[rgba(24,15,9,0.08)] cursor-pointer outline-none transition-colors duration-300"
            aria-label="Toggle pricing mode"
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-[#180F09] shadow-md"
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{ x: isInstallments ? 22 : 0 }}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`font-sans text-sm font-medium transition-colors ${isInstallments ? "text-[#180F09]" : "text-[rgba(24,15,9,0.4)]"}`}>
              4 Split Payments
            </span>
            <span className="text-[0.65rem] font-sans font-semibold tracking-wider text-[#B8862E] bg-[rgba(207,154,53,0.1)] px-2 py-0.5 rounded-full uppercase">
              0% Interest
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch pt-6 max-w-full">
          {plans.map((plan) => {
            const price = isInstallments ? plan.monthlyPrice : plan.oneTimePrice;
            const suffix = isInstallments ? "/mo" : "";
            
            return (
              <motion.div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-[28px] border transition-all duration-300 bg-[#FFFFFF] ${
                  plan.isPopular
                    ? "border-[#180F09] shadow-[0_15px_40px_rgba(24,15,9,0.08)] lg:-mt-6 lg:mb-6 p-8 md:p-10 z-10"
                    : "border-[rgba(24,15,9,0.06)] hover:border-[rgba(24,15,9,0.15)] shadow-[0_10px_30px_rgba(24,15,9,0.01)] p-8 md:p-10"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: plan.id === "starter" ? 0.1 : plan.id === "visa" ? 0.2 : 0.3 }}
              >
                {/* Popular Ribbon Tag */}
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#180F09] text-[#FFFFFF] text-[0.68rem] tracking-[0.15em] font-sans font-bold uppercase py-1.5 px-5 rounded-full shadow-sm flex items-center gap-1">
                    ★ RECOMMENDED
                  </div>
                )}

                {/* Plan Content */}
                <div>
                  <div className="mb-6">
                    <h3 className="font-serif font-semibold text-2xl text-[#180F09] mb-2">
                      {plan.name}
                    </h3>
                    <p className="font-sans text-xs text-[rgba(24,15,9,0.45)] leading-relaxed min-h-[40px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 flex items-baseline gap-1 text-[#180F09]">
                    <span className="font-sans text-base font-medium">AED</span>
                    <motion.span 
                      key={price}
                      initial={{ filter: "blur(4px)", opacity: 0 }}
                      animate={{ filter: "blur(0px)", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="font-sans text-4xl md:text-5xl font-bold tracking-tight"
                    >
                      {price.toLocaleString()}
                    </motion.span>
                    <span className="font-sans text-sm text-[rgba(24,15,9,0.45)] ml-1">
                      {suffix}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full py-6 rounded-lg font-sans text-sm font-semibold transition-all duration-300 mb-8 ${
                      plan.isPopular 
                        ? 'bg-[#180F09] text-[#FFFFFF] hover:bg-[#2A1F16] shadow-sm' 
                        : 'bg-[#FFFFFF] text-[#180F09] border border-[rgba(24,15,9,0.1)] hover:bg-[#FEFCF7]'
                    }`}
                  >
                    {plan.ctaText}
                  </Button>

                  <hr className="border-[rgba(24,15,9,0.06)] mb-8" />

                  {/* Features List */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[rgba(207,154,53,0.08)] flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-[#CF9A35]" strokeWidth={3} />
                        </div>
                        <span className="font-sans text-[0.875rem] text-[rgba(24,15,9,0.75)] leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Disclaimer */}
        <motion.div 
          className="mt-16 flex items-center justify-center gap-3 p-5 rounded-2xl bg-[rgba(207,154,53,0.02)] border border-[rgba(207,154,53,0.08)] max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          <AlertCircle size={18} className="text-[#CF9A35] shrink-0" />
          <p className="font-sans text-[0.8rem] text-[rgba(24,15,9,0.6)] leading-relaxed">
            Exact pricing depends on free zone, activity, and visa requirements. Talk to an advisor for your custom quote. The consultation is always free.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
