"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, Phone, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const faqs: FAQItem[] = [
    {
      question: "Do I need a local sponsor to get a freelance licence?",
      answer: "No. UAE freelance licences grant you 100% ownership. You do not need a local sponsor or partner.",
    },
    {
      question: "Can I open a corporate bank account with this licence?",
      answer: "Yes. A freelance licence legally establishes you as a sole establishment, allowing you to open a business bank account. We guide you through this exact process.",
    },
    {
      question: "Do I have to rent physical office space?",
      answer: "No. Freelance licences come with a flexi-desk or virtual lease agreement, meaning you can work from anywhere without the cost of physical office rent.",
    },
    {
      question: "Can I sponsor my family (spouse/children)?",
      answer: "Yes. Once your freelance residency visa is issued and you meet the minimum salary requirements, you can sponsor your dependents.",
    },
    {
      question: "Will I have to pay taxes in the UAE?",
      answer: "The UAE has a 0% personal income tax rate. Corporate Tax (9%) only applies if your net profit exceeds AED 375,000 per year. We provide basic tax guidance during setup.",
    },
  ];

  return (
    <section id="faq" ref={sectionRef} className="w-full py-[60px] lg:py-[80px] px-6 bg-[#FFFFFF] text-[#180F09]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & CTA */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#B8862E] font-sans font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              FAQ
            </span>

            {/* Heading */}
            <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight leading-tight">
              Everything you need to know.
            </h2>

            {/* Paragraph */}
            <p className="text-[rgba(24,15,9,0.65)] font-sans text-base leading-relaxed mb-8">
              Here are the answers to the most common questions about freelance licences, residency visas, bank accounts, and taxes in the UAE.
            </p>

            {/* Reach Out Button */}
            <button 
              onClick={() => window.open("tel:+971500000000")} // Placeholder dialer trigger
              className="bg-[#FFFFFF] border border-[rgba(24,15,9,0.08)] hover:bg-[#FEFCF7] py-3.5 px-6 rounded-[12px] flex items-center gap-2.5 text-sm font-sans font-bold shadow-[0_4px_12px_rgba(24,15,9,0.01)] transition-colors cursor-pointer text-[#180F09]"
            >
              <span>Any questions? Reach out</span>
              <Phone size={14} className="text-[#B8862E]" />
            </button>
          </motion.div>

          {/* Right Column: Accordions list */}
          <motion.div 
            className="lg:col-span-7 w-full flex flex-col"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={`w-full border-t border-[rgba(24,15,9,0.06)] py-5 ${
                    index === faqs.length - 1 ? "border-b" : ""
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="font-serif font-semibold text-lg md:text-xl text-[#180F09] group-hover:text-[#CF9A35] transition-colors pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-6 h-6 rounded-full bg-[rgba(24,15,9,0.02)] flex items-center justify-center shrink-0"
                    >
                      <ChevronDown size={16} className="text-[rgba(24,15,9,0.4)]" />
                    </motion.div>
                  </button>

                  {/* Accordion Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-[0.925rem] text-[rgba(24,15,9,0.65)] leading-relaxed mt-4 pr-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
