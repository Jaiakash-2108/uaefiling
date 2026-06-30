"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Professions", href: "#professions" },
  { name: "Industries", href: "#industries" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl",
        "transition-all duration-400 ease-primary",
        isScrolled ? "top-4" : "top-6"
      )}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-background-surface/80 backdrop-blur-[12px] border border-[rgba(0,0,0,0.06)] rounded-full shadow-soft">
        {/* Logo */}
        <Link
          href="/"
          className="text-[20px] font-serif font-bold text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-sm"
        >
          UAE Filing
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-text-secondary hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <Button className="h-[48px] px-6 text-[15px]">Get Started</Button>
        </div>
      </div>
    </header>
  );
};
