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
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-primary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none disabled:grayscale active:scale-[0.98]",
          "hover:-translate-y-1",
          {
            "bg-accent-primary text-white hover:bg-accent-hover": variant === "primary",
            "bg-background-surface text-text-primary shadow-soft hover:shadow-medium": variant === "secondary",
            "bg-transparent border-[1.5px] border-[rgba(0,0,0,0.1)] text-text-primary hover:bg-background-soft": variant === "ghost",
            "h-[56px] px-8 text-[18px]": size === "default",
            "h-[64px] px-10 text-[18px]": size === "lg",
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
