"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Profession {
  name: string;
  category: "tech" | "creative" | "consulting" | "wellness";
}

export default function Professions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "tech" | "creative" | "consulting" | "wellness">("all");

  const professions: Profession[] = [
    // Tech
    { name: "Software Developer", category: "tech" },
    { name: "E-commerce Specialist", category: "tech" },
    { name: "SaaS Builder", category: "tech" },
    { name: "Cybersecurity Analyst", category: "tech" },
    { name: "Tech Consultant", category: "tech" },
    { name: "Web Builder", category: "tech" },
    
    // Creative
    { name: "Graphic Designer", category: "creative" },
    { name: "Content Writer", category: "creative" },
    { name: "Photographer", category: "creative" },
    { name: "Video Editor", category: "creative" },
    { name: "Music Producer", category: "creative" },
    { name: "Animator", category: "creative" },
    { name: "Illustrator", category: "creative" },
    
    // Consulting
    { name: "Marketing Consultant", category: "consulting" },
    { name: "Financial Advisor", category: "consulting" },
    { name: "Project Manager", category: "consulting" },
    { name: "Consultant", category: "consulting" },
    { name: "Business Analyst", category: "consulting" },
    
    // Wellness / Education
    { name: "Personal Trainer", category: "wellness" },
    { name: "Healthcare Expert", category: "wellness" },
    { name: "Tutor", category: "wellness" },
    { name: "Wellness Coach", category: "wellness" },
    { name: "Education Designer", category: "wellness" },
  ];

  // Filtering logic
  const filteredProfessions = professions.filter((prof) => {
    const matchesSearch = prof.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || prof.category === activeTab;
    return matchesSearch && matchesTab;
  });

  // Separate rows for infinite marquee loop
  const primaryRow = professions.filter((_, i) => i % 2 === 0);
  const secondaryRow = professions.filter((_, i) => i % 2 !== 0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="professions" ref={sectionRef} className="w-full pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[80px] px-6 bg-[#FEFCF7] text-[#180F09] overflow-hidden relative">
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#B8862E] font-sans font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Who This Is For
          </span>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl mb-6">
            Your profession. Your licence.
          </h2>
          <p className="text-[rgba(24,15,9,0.65)] font-sans text-lg md:text-xl">
            We support freelancers across 50+ professions. Here are the most common.
          </p>
        </motion.div>

        {/* Search & Tabs Controls */}
        <motion.div 
          className="flex flex-col items-center gap-6 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Minimal Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(24,15,9,0.4)]" />
            <input 
              type="text"
              placeholder="Search your profession..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#FFFFFF] border border-[rgba(24,15,9,0.08)] rounded-full text-base font-sans text-[#180F09] placeholder-[rgba(24,15,9,0.4)] focus:outline-none focus:border-[#CF9A35] transition-colors shadow-soft"
            />
          </div>

          {/* Minimal Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {(["all", "tech", "creative", "consulting", "wellness"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm font-sans font-medium capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#180F09] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] text-[rgba(24,15,9,0.65)] hover:text-[#180F09] border border-[rgba(24,15,9,0.06)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Display Area */}
        <div className="min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${activeTab}-${searchQuery}`}
              className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProfessions.length > 0 ? (
                filteredProfessions.map((prof, idx) => {
                  const isPrimary = ["Software Developer", "Graphic Designer", "Content Writer", "Marketing Consultant", "Photographer", "Video Editor"].includes(prof.name);
                  return (
                    <motion.span
                      key={`${prof.name}-${idx}`}
                      variants={itemVariants}
                      className={`px-5 py-2.5 rounded-full text-[0.95rem] font-sans font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-soft cursor-default ${
                        isPrimary 
                          ? "bg-[#FFFFFF] border-2 border-[#CF9A35] text-[#180F09] font-semibold" 
                          : "bg-[#FFFFFF] border border-[rgba(24,15,9,0.08)] text-[rgba(24,15,9,0.85)] hover:border-[#CF9A35]"
                      }`}
                    >
                      {prof.name}
                    </motion.span>
                  );
                })
              ) : (
                <motion.p 
                  variants={itemVariants}
                  className="text-[rgba(24,15,9,0.5)] font-sans text-base py-8"
                >
                  No professions matching "{searchQuery}" found. Try another term.
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button className="bg-[#180F09] hover:bg-[#180F09]/90 text-[#FFFFFF] font-sans px-8 py-6 text-base rounded-full shadow-lg transition-transform duration-300 hover:scale-102">
            Start free consultation
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
