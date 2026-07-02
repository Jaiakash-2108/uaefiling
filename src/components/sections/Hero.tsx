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

// ── Trust bar items (from MD) ──
const trustItems = [
  { icon: ShieldCheck, label: "100% Legal", sub: "& Government Approved" },
  { icon: Clock,       label: "3–5 Working Days", sub: "Fast Processing" },
  { icon: Percent,     label: "0% Personal",      sub: "Income Tax" },
  { icon: Landmark,    label: "Bank Account",      sub: "Assistance" },
  { icon: Headphones,  label: "End-to-End",        sub: "Expert Support" },
];

// ── Real client avatars from Testimonials section ──
const avatars = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
];

export const Hero = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse-tracking motion values
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring physics — premium, weighted feel
  const springConfig = { stiffness: 100, damping: 18, mass: 1.2 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  // Map to tilt angles: rotateX ±8°, rotateY ±10°
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      rawX.set((e.clientX - rect.left) / rect.width - 0.5);
      rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [rawX, rawY]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#F5EFE6]">

      {/* ══════════════════════════════════════════
          FULL-BLEED BACKGROUND IMAGE (right side)
          Matches reference: warm photorealistic
          skyline + podium scene
      ══════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/uae-hero-bg.png"
          alt="UAE Dubai skyline background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Left fade overlay — so left column text is clean & readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE6] via-[#F5EFE6]/85 to-transparent" />
        {/* Top fade for nav breathing room */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F5EFE6]/60 to-transparent" />
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT — Two column layout
      ══════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10 pt-40 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-screen">

        {/* ─────────────────────────────
            LEFT COLUMN
        ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-7 max-w-[520px]"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(207,154,53,0.35)] bg-[rgba(245,239,230,0.85)] backdrop-blur-sm w-fit">
            <div className="w-[18px] h-[14px] rounded-sm overflow-hidden flex shrink-0">
              <div className="w-[28%] h-full bg-[#FF0000]" />
              <div className="w-[72%] h-full flex flex-col">
                <div className="w-full flex-1 bg-[#00732F]" />
                <div className="w-full flex-1 bg-white" />
                <div className="w-full flex-1 bg-black" />
              </div>
            </div>
            <span className="font-sans text-[#6B4F1C] font-semibold text-[13px]">
              UAE Freelance Licensing
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-bold text-[#180F09] leading-[1.05] tracking-tight text-[clamp(48px,5.8vw,80px)]">
            You have the<br />
            skill. We&apos;ll make<br />
            it legal.
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-[rgba(24,15,9,0.62)] text-[17px] leading-relaxed max-w-[440px]">
            Getting a UAE freelance licence feels complicated. Different free
            zones, hidden costs, visa confusion. UAE Filing cuts through all of
            it. We handle the paperwork, you keep building.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Primary */}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#180F09] hover:bg-[#2A1F16] text-white font-sans font-semibold text-[15px] px-6 h-[50px] rounded-lg transition-all duration-300 shadow-sm"
            >
              Get Started
              <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300 text-[14px]">
                →
              </span>
            </button>
            {/* Secondary */}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#FEFCF7] text-[#180F09] font-sans font-semibold text-[15px] px-6 h-[50px] rounded-lg border border-[rgba(24,15,9,0.12)] transition-all duration-300 shadow-sm"
            >
              Book a Free Consultation
              <span className="text-[#CF9A35] text-[16px]">🗓</span>
            </button>
          </div>

          {/* Social Proof — Real avatars from Testimonials */}
          <div className="flex items-center gap-4">
            {/* Real photo avatars */}
            <div className="flex -space-x-2.5">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[#F5EFE6] overflow-hidden shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`Client ${i + 1}`}
                    width={36}
                    height={36}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div>
              {/* Stars */}
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#CF9A35] text-[15px] leading-none">★</span>
                ))}
              </div>
              <p className="font-sans text-[rgba(24,15,9,0.55)] text-[13px]">
                500+ freelancers licensed across UAE
              </p>
            </div>
          </div>
        </motion.div>

        {/* ─────────────────────────────
            RIGHT COLUMN — 3D Card area
            (Card is placed over the bg image)
        ───────────────────────────── */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="hidden lg:flex items-center justify-center relative"
          style={{ perspective: 1000 }}
        >
          {/* The 3D Floating Licence Card */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -14, 0], rotate: [0, 0.5, 0, -0.5, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="relative w-[340px] cursor-default"
          >
            {/* ── Outer Bezel: gold gradient border ── */}
            <div
              className="rounded-[22px] p-[2.5px] shadow-[0_40px_100px_rgba(0,0,0,0.2),0_8px_30px_rgba(207,154,53,0.3)]"
              style={{
                background: "linear-gradient(135deg, #D4A853 0%, #F0D080 40%, #B8862E 70%, #E8C050 100%)",
              }}
            >
              {/* ── Inner Card: ivory/cream finish ── */}
              <div className="rounded-[20px] overflow-hidden bg-[#FDFAF3] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9)]">

                {/* Subtle diagonal line texture overlay */}
                <div
                  className="absolute inset-0 rounded-[20px] opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #B8862E 0px, #B8862E 1px, transparent 1px, transparent 8px)",
                  }}
                />

                {/* Top gold stripe */}
                <div className="h-[5px] w-full bg-gradient-to-r from-[#B8862E] via-[#E8C96A] to-[#B8862E]" />

                <div className="px-8 py-7 flex flex-col items-center gap-5 relative">

                  {/* Card title */}
                  <div className="text-center space-y-0.5">
                    <p className="font-sans font-bold text-[10px] tracking-[0.22em] text-[#9A6F20] uppercase">
                      United Arab Emirates
                    </p>
                    <p className="font-sans font-bold text-[10px] tracking-[0.22em] text-[#9A6F20] uppercase">
                      Freelance Permit
                    </p>
                  </div>

                  {/* UAE Golden Hawk Emblem — detailed SVG */}
                  <div className="w-[120px] h-[120px] flex items-center justify-center">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                      <defs>
                        <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#C8922A" />
                          <stop offset="40%" stopColor="#E8C96A" />
                          <stop offset="100%" stopColor="#A07020" />
                        </linearGradient>
                        <linearGradient id="hg2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#D4A853" />
                          <stop offset="100%" stopColor="#8B6520" />
                        </linearGradient>
                      </defs>
                      {/* Left wing */}
                      <path d="M100,80 C80,70 45,60 15,72 C30,68 55,70 80,85 Z" fill="url(#hg1)" />
                      <path d="M100,90 C78,82 40,75 10,90 C28,82 58,80 85,95 Z" fill="url(#hg1)" />
                      <path d="M100,100 C78,95 42,92 12,108 C30,98 60,95 88,106 Z" fill="url(#hg1)" />
                      {/* Right wing */}
                      <path d="M100,80 C120,70 155,60 185,72 C170,68 145,70 120,85 Z" fill="url(#hg1)" />
                      <path d="M100,90 C122,82 160,75 190,90 C172,82 142,80 115,95 Z" fill="url(#hg1)" />
                      <path d="M100,100 C122,95 158,92 188,108 C170,98 140,95 112,106 Z" fill="url(#hg1)" />
                      {/* Body */}
                      <ellipse cx="100" cy="105" rx="16" ry="32" fill="url(#hg2)" />
                      {/* Head */}
                      <ellipse cx="100" cy="72" rx="12" ry="14" fill="url(#hg2)" />
                      {/* Crown feathers */}
                      <line x1="92" y1="60" x2="90" y2="50" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="100" y1="58" x2="100" y2="46" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="108" y1="60" x2="110" y2="50" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round"/>
                      {/* Shield/Scroll */}
                      <rect x="84" y="132" width="32" height="20" rx="4" fill="url(#hg1)" />
                      <rect x="80" y="148" width="40" height="8" rx="2" fill="#8B6520" opacity="0.5"/>
                      {/* UAE flag in shield (tiny) */}
                      <rect x="86" y="134" width="4" height="16" fill="#FF0000" rx="1"/>
                      <rect x="90" y="134" width="7" height="5" fill="#00732F" rx="0.5"/>
                      <rect x="90" y="139" width="7" height="5" fill="white" rx="0.5"/>
                      <rect x="90" y="144" width="7" height="6" fill="#1A1A1A" rx="0.5"/>
                      {/* Tail feathers */}
                      <path d="M92,136 L87,162 M96,137 L93,164 M100,138 L100,165 M104,137 L107,164 M108,136 L113,162" stroke="#B8862E" strokeWidth="1.8" strokeLinecap="round" opacity="0.8"/>
                    </svg>
                  </div>

                  {/* Thin gold divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(184,134,46,0.4)] to-transparent" />

                  {/* Licence label */}
                  <p className="font-sans font-semibold text-[13px] text-[#9A6F20] tracking-[0.12em]">
                    Freelance Licence
                  </p>

                  {/* Bottom decorative bars */}
                  <div className="w-full flex items-center justify-between opacity-25 mt-1">
                    <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#D4A853] to-transparent rounded-full" />
                    <span className="text-[8px] text-[#B8862E] tracking-[0.3em]">✦  ✦  ✦</span>
                    <div className="w-20 h-[1.5px] bg-gradient-to-l from-[#D4A853] to-transparent rounded-full" />
                  </div>

                </div>

                {/* Bottom gold stripe */}
                <div className="h-[4px] w-full bg-gradient-to-r from-[#B8862E] via-[#E8C96A] to-[#B8862E]" />
              </div>
            </div>

            {/* Glow beneath card */}
            <div className="absolute -bottom-5 left-[15%] right-[15%] h-8 bg-[rgba(207,154,53,0.4)] blur-2xl rounded-full pointer-events-none" />
          </motion.div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          BOTTOM TRUST BAR
          Matches reference: rounded white card,
          full-width, 5 items with gold icons
      ══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full px-6 lg:px-10 pb-10"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Rounded white card — exactly as in reference */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[rgba(24,15,9,0.06)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {trustItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 ${
                    i !== trustItems.length - 1
                      ? "md:border-r md:border-[rgba(24,15,9,0.07)] md:pr-4"
                      : ""
                  } ${i !== 0 ? "md:pl-4" : ""}`}
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-[rgba(207,154,53,0.1)] flex items-center justify-center">
                    <item.icon className="w-[18px] h-[18px] text-[#CF9A35]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[13px] text-[#180F09] leading-tight">
                      {item.label}
                    </p>
                    <p className="font-sans text-[11.5px] text-[rgba(24,15,9,0.5)] leading-tight">
                      {item.sub}
                    </p>
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
