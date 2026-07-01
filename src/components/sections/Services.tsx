"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const services = [
    {
      title: "Freelance Licence",
      description: "Official UAE permit. Valid across all approved free zones. Your name. One activity included.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Business Bank Account",
      description: "We match you with freelancer-friendly UAE banks. We guide you through application.",
      image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=1200&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "2-Year Residence Visa",
      description: "Live and work in UAE legally. Tied to your freelance licence. Can sponsor dependents.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Emirates ID",
      description: "Processed automatically. No separate application. Included in visa package.",
      image: "/images/emirates-id.png",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Dedicated Advisor",
      description: "One person you can call/WhatsApp. Answer your questions in plain English. On speed dial.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Annual Renewal",
      description: "We remind you. We handle the paperwork. No lapsing. No surprise fines.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop",
      className: "md:col-span-2 md:row-span-1",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" ref={sectionRef} className="w-full pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[80px] px-6 bg-[#FFFFFF] text-[#180F09]">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#B8862E] font-sans font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            What We Handle
          </span>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl mb-6">
            Everything in one place.<br />Nothing to figure out alone.
          </h2>
          <p className="text-[rgba(24,15,9,0.65)] font-sans text-lg md:text-xl">
            From first call to your first paid client — complete support.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[750px]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-[24px] ${service.className} min-h-[240px] md:min-h-0 cursor-pointer`}
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              
              {/* Gold Tint (Subtle) */}
              <div className="absolute inset-0 bg-[#CF9A35]/10 mix-blend-multiply pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#180F09] via-[#180F09]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#FFFFFF] mb-2 transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  {service.title}
                </h3>
                
                {/* Description - Reveals on Hover */}
                <div className="overflow-hidden">
                  <p className="font-sans text-[#FFFFFF]/80 text-[0.95rem] md:text-[1rem] leading-relaxed transform translate-y-[120%] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Top-right Icon indicator */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 border border-white/20">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
