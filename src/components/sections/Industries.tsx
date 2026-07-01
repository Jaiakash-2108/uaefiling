"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Code, Palette, Megaphone, GraduationCap, Heart, Calculator, Building, ShoppingCart, Sparkles } from "lucide-react";

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variants: Variants;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description, variants }) => (
  <motion.div 
    variants={variants}
    className="group relative p-8 rounded-[20px] bg-[#FFFFFF] border border-[rgba(24,15,9,0.06)] hover:border-[#CF9A35]/40 transition-all duration-500 hover:shadow-[0_12px_30px_rgba(24,15,9,0.03)] hover:-translate-y-1 overflow-hidden"
  >
    <div className="relative z-10">
      {/* Minimal Icon layout - no heavy background boxes */}
      <div className="h-12 w-12 flex items-center justify-start text-[#CF9A35] mb-6 group-hover:scale-105 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-[1.125rem] font-serif font-semibold mb-3 text-[#180F09]">{title}</h3>
      <p className="text-[0.875rem] text-[rgba(24,15,9,0.7)] leading-relaxed font-sans">{description}</p>
    </div>
  </motion.div>
);

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const industries = [
    {
      icon: <Code size={26} strokeWidth={1.5} />,
      title: "Technology & Software",
      description: "Developers, cybersecurity, SaaS builders, tech consultants.",
    },
    {
      icon: <Palette size={26} strokeWidth={1.5} />,
      title: "Creative & Media",
      description: "Filmmakers, designers, photographers, animators, producers.",
    },
    {
      icon: <Megaphone size={26} strokeWidth={1.5} />,
      title: "Marketing & Advertising",
      description: "Strategists, digital marketers, copywriters, media buyers.",
    },
    {
      icon: <GraduationCap size={26} strokeWidth={1.5} />,
      title: "Education & Training",
      description: "Tutors, coaches, trainers, curriculum designers.",
    },
    {
      icon: <Heart size={26} strokeWidth={1.5} />,
      title: "Health & Wellness",
      description: "Trainers, nutritionists, therapists, wellness coaches.",
    },
    {
      icon: <Calculator size={26} strokeWidth={1.5} />,
      title: "Finance & Consulting",
      description: "Advisors, accountants, consultants, analysts.",
    },
    {
      icon: <Building size={26} strokeWidth={1.5} />,
      title: "Construction & Real Estate",
      description: "Project managers, designers, architects, consultants.",
    },
    {
      icon: <ShoppingCart size={26} strokeWidth={1.5} />,
      title: "E-commerce & Retail",
      description: "Online sellers, marketplace managers, e-commerce specialists.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="industries" ref={sectionRef} className="w-full pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[80px] px-6 bg-[#FFFFFF] text-[#180F09]">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#B8862E] font-sans font-semibold mb-4 flex items-center gap-2 justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 tracking-tight">
            Your sector. Fully covered.
          </h2>
          <p className="text-lg md:text-xl text-[rgba(24,15,9,0.65)] mx-auto font-sans">
            We've licensed freelancers across every major UAE industry. Yours is next.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} variants={cardVariants} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
