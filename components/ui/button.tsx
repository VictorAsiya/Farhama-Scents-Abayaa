"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "uppercase tracking-widest font-semibold transition-all duration-300",
        // sizes
        {
          "px-4 py-1 text-sm": size === "sm",
          "px-6 py-2 text-sm": size === "md",
          "px-8 py-2 text-base": size === "lg",
        },
        // variants
        {
          "border border-white text-white hover:text-black  hover:bg-brandWhite": variant === "primary",
          "border border-white text-white hover:bg-brandBlack": variant === "secondary",
          "border border-black text-black hover:bg-black hover:text-white":
            variant === "outline",
        },
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
