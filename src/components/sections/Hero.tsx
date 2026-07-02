"use client";

import React, { useRef, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ShieldCheck, Clock, Percent, Landmark, Headphones } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "No NOC Needed",       sub: "For all nationalities" },
  { icon: Percent,     label: "0% Income Tax",       sub: "Keep all your earnings" },
  { icon: Landmark,    label: "Bank Account Included", sub: "Setup assistance" },
  { icon: Clock,       label: "100% Visa Eligible",  sub: "Sponsor your family" },
];

const avatars = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
];

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#F5EFE6] flex flex-col justify-between">

      {/* ════════════════════════════════════════════════════
          FULL-SCREEN BACKGROUND IMAGE (COMPLETELY STATIC)
          The background does not move or tilt on hover.
      ════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/uae-bg.png"
          alt="UAE Freelance Licence card on podium background"
          fill
          className="object-cover object-[70%_center] lg:object-[64%_center]"
          priority
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay for text readability (fades from solid cream to transparent) */}
      <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#F5EFE6] via-[#F5EFE6]/90 to-transparent z-[1] pointer-events-none" />
      
      {/* Subtle top & bottom blends */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#F5EFE6]/70 to-transparent z-[1] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#F5EFE6]/45 to-transparent z-[1] pointer-events-none" />

      {/* ════════════════════════════════════════════════════
          MAIN CONTENT — z-10 above background
      ════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col justify-center flex-grow pt-32 pb-6">

        {/* ─── LEFT COLUMN CONTENT ─── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-7 max-w-[480px] lg:max-w-[500px]"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(207,154,53,0.35)] bg-[rgba(245,239,230,0.9)] w-fit shadow-sm">
            <div className="w-[18px] h-[14px] rounded-sm overflow-hidden flex shrink-0">
              <div className="w-[28%] h-full bg-[#FF0000]" />
              <div className="w-[72%] h-full flex flex-col">
                <div className="w-full flex-1 bg-[#00732F]" />
                <div className="w-full flex-1 bg-white" />
                <div className="w-full flex-1 bg-black" />
              </div>
            </div>
            <span className="font-sans font-semibold text-[13px] text-[#6B4F1C]">UAE Freelance Licensing</span>
          </div>

          {/* Headline — exact 3-line format */}
          <h1 className="font-serif font-bold text-[#180F09] leading-[1.1] tracking-tight text-[clamp(40px,4.5vw,68px)]">
            You have the skill.
            <span className="block">We&apos;ll make it</span>
            <span className="block">legal.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-[rgba(24,15,9,0.62)] text-[16.5px] leading-relaxed max-w-[420px]">
            Getting a UAE freelance licence feels complicated. Different free zones,
            hidden costs, visa confusion. UAE Filing cuts through all of it. We handle
            the paperwork, you keep building.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Primary Gold CTA */}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#CF9A35] hover:bg-[#B8862E] text-white font-sans font-semibold text-[15px] px-6 h-[50px] rounded-full transition-all duration-300 shadow-sm"
            >
              Get your licence now
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform text-[14px]">→</span>
            </button>
            
            {/* Secondary White CTA */}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#FEFCF7] text-[#180F09] font-sans font-semibold text-[15px] px-6 h-[50px] rounded-full border border-[rgba(24,15,9,0.12)] shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              Check eligibility →
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {avatars.map((src, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-[#F5EFE6] overflow-hidden shadow-sm">
                  <Image src={src} alt={`Client ${i + 1}`} width={36} height={36} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[#CF9A35] text-[15px] leading-none">★</span>)}
              </div>
              <p className="font-sans text-[rgba(24,15,9,0.5)] text-[13px]">500+ freelancers licensed across UAE</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ════════════════════════════════════════════════════
          TRUST BAR — bottom white rounded card (4 columns)
      ════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full px-6 lg:px-10 pb-10"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[rgba(24,15,9,0.06)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4">
              {trustItems.map((item, i) => (
                <div key={i} className={`flex items-center gap-3 ${i !== trustItems.length - 1 ? "md:border-r md:border-[rgba(24,15,9,0.07)] md:pr-5" : ""} ${i !== 0 ? "md:pl-5" : ""}`}>
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-[rgba(207,154,53,0.1)] flex items-center justify-center">
                    <item.icon className="w-[18px] h-[18px] text-[#CF9A35]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[13px] text-[#180F09] leading-tight">{item.label}</p>
                    <p className="font-sans text-[11.5px] text-[rgba(24,15,9,0.5)] leading-tight">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
