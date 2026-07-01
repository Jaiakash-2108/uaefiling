"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  XCircle,
  CheckCircle2,
  Calendar,
  PieChart,
  Users,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";

export default function WhyUaeFiling() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    // Typical Agent (Left Side)
    {
      icon: <XCircle className="w-5 h-5 text-red-400/80" strokeWidth={1.5} />,
      title: "Hidden Costs",
      description: "Low price advertised, high cost invoiced later.",
      position: "left",
    },
    {
      icon: <XCircle className="w-5 h-5 text-red-400/80" strokeWidth={1.5} />,
      title: "Upselling",
      description: "Pushes expensive free zone, ignores fit.",
      position: "left",
    },
    {
      icon: <XCircle className="w-5 h-5 text-red-400/80" strokeWidth={1.5} />,
      title: "Generic Advice",
      description: "Same copy-paste advice for everyone.",
      position: "left",
    },
    {
      icon: <XCircle className="w-5 h-5 text-red-400/80" strokeWidth={1.5} />,
      title: "Zero Support",
      description: "Vanishes immediately after payment.",
      position: "left",
    },
    {
      icon: <XCircle className="w-5 h-5 text-red-400/80" strokeWidth={1.5} />,
      title: "Incomplete",
      description: "Bank account? Renewal? Your problem.",
      position: "left",
    },

    // UAE Filing (Right Side)
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#CF9A35]" strokeWidth={1.5} />,
      title: "Full Transparency",
      description: "Full cost upfront. No surprises.",
      position: "right",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#CF9A35]" strokeWidth={1.5} />,
      title: "Perfect Match",
      description: "We find the exact fit for your profession.",
      position: "right",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#CF9A35]" strokeWidth={1.5} />,
      title: "Personalized",
      description: "Tailored for your specific visa and goals.",
      position: "right",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#CF9A35]" strokeWidth={1.5} />,
      title: "Dedicated Advisor",
      description: "One person with you until everything is done.",
      position: "right",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#CF9A35]" strokeWidth={1.5} />,
      title: "All-Inclusive",
      description: "Bank setup + annual renewal included.",
      position: "right",
    },
  ];

  const stats = [
    { value: 5, label: "Working days to licence", prefix: "", suffix: " Days" },
    { value: 0, label: "Personal income tax", prefix: "", suffix: "%" },
    { value: 500, label: "Freelancers helped", prefix: "", suffix: "+" },
  ];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="w-full pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[80px] px-6 bg-[#FEFCF7] text-[#180F09] overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#CF9A35]/5 blur-3xl pointer-events-none"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#180F09]/5 blur-3xl pointer-events-none"
        style={{ y: y2, rotate: rotate2 }}
      />

      <motion.div
        className="max-w-[1280px] mx-auto relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-[0.75rem] uppercase tracking-[0.14em] text-[#B8862E] font-sans font-semibold mb-4 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ShieldCheck className="w-4 h-4" />
            The Difference
          </motion.span>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl mb-4 text-center">
            Most agents confuse you.<br />We clear it up.
          </h2>
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-20 text-[rgba(24,15,9,0.65)] font-sans text-lg md:text-xl" variants={itemVariants}>
          Here's why freelancers choose us over free zone websites and generic agents.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative items-center">
          {/* Left Column - Typical Agent */}
          <div className="space-y-8 order-2 lg:order-1">
            <h3 className="font-sans font-semibold text-center text-red-900/60 uppercase tracking-widest text-sm mb-8">
              Typical Agent
            </h3>
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.15}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-1 lg:order-2 mb-12 lg:mb-0">
            <motion.div className="relative w-full max-w-[340px]" variants={itemVariants}>
              <motion.div
                className="rounded-[32px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative aspect-[3/4]"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern Minimal Workspace"
                  className="w-full h-full object-cover grayscale opacity-90"
                />
                {/* Gold Tint Overlay */}
                <div className="absolute inset-0 bg-[#CF9A35]/10 mix-blend-multiply pointer-events-none" />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#180F09]/80 via-[#180F09]/20 to-transparent flex items-end justify-center p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#FFFFFF] text-[#180F09] px-6 py-3 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Free Consultation <ArrowRight className="w-4 h-4 text-[#CF9A35]" />
                  </motion.button>
                </motion.div>
              </motion.div>
              
              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-[#CF9A35]/30 z-[-1]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-[rgba(24,15,9,0.05)] z-[-1]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column - UAE Filing */}
          <div className="space-y-8 order-3 lg:order-3 bg-[#FFFFFF] p-8 rounded-[32px] shadow-[0_8px_30px_rgba(207,154,53,0.08)] border border-[rgba(207,154,53,0.15)] relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CF9A35]/20 via-[#CF9A35] to-[#CF9A35]/20 rounded-t-[32px]" />
            <h3 className="font-sans font-bold text-center text-[#CF9A35] uppercase tracking-widest text-sm mb-6">
              UAE Filing
            </h3>
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.15}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:divide-x divide-[rgba(24,15,9,0.1)]"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variants: any;
  delay: number;
  direction: "left" | "right";
}

function ServiceItem({ icon, title, description, variants, delay, direction }: ServiceItemProps) {
  const isLeft = direction === "left";
  return (
    <motion.div
      className="flex items-start gap-4 group"
      variants={variants}
      transition={{ delay }}
    >
      <motion.div
        className={`mt-1 shrink-0 ${isLeft ? 'opacity-60 grayscale' : ''}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: delay + 0.2 }}
      >
        {icon}
      </motion.div>
      <div>
        <h4 className={`font-serif text-[1.125rem] leading-snug mb-1 ${isLeft ? 'text-[rgba(24,15,9,0.5)] line-through' : 'text-[#180F09] font-semibold group-hover:text-[#CF9A35] transition-colors duration-300'}`}>
          {title}
        </h4>
        <p className={`font-sans text-[0.875rem] leading-[1.6] ${isLeft ? 'text-[rgba(24,15,9,0.4)]' : 'text-[rgba(24,15,9,0.7)]'}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix: string;
  delay: number;
}

function StatCounter({ value, label, prefix, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center py-4"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
    >
      <motion.div ref={countRef} className="font-serif text-4xl md:text-5xl font-semibold text-[#180F09] flex items-center mb-2 tracking-tight">
        {prefix && <span className="text-[#CF9A35] mr-1">{prefix}</span>}
        <motion.span>{displayValue}</motion.span>
        {suffix && <span className="text-[#CF9A35] ml-1">{suffix}</span>}
      </motion.div>
      <p className="font-sans text-[rgba(24,15,9,0.7)] text-[1rem] font-medium">{label}</p>
    </motion.div>
  );
}
