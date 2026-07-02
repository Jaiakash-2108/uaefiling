import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-sans font-semibold transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#180F09] focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none disabled:grayscale active:scale-[0.98]",
          {
            "bg-[#180F09] text-[#FFFFFF] hover:bg-[#2A1F16] shadow-sm": variant === "primary",
            "bg-[#FFFFFF] text-[#180F09] shadow-soft hover:shadow-medium border border-[rgba(24,15,9,0.06)]": variant === "secondary",
            "bg-transparent border border-[rgba(24,15,9,0.1)] text-[#180F09] hover:bg-[#FEFCF7]": variant === "ghost",
            "h-[50px] px-6 text-[15px]": size === "default",
            "h-[56px] px-8 text-[16px]": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
