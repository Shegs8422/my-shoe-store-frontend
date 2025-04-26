import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  variant?: "new" | "sold-out" | "online-exclusive" | "coming-soon";
  className?: string;
}

export const Badge = ({ children, variant = "new", className }: BadgeProps) => {
  const baseClasses =
    "inline-flex items-center justify-center px-1 py-[4px] text-xs font-helvetica-compressed tracking-tight rounded-[2px]";

  const variantClasses = {
    new: "bg-black text-white",
    "sold-out": "bg-gray-200 text-gray-800",
    "online-exclusive": "bg-green-500 text-white",
    "coming-soon": "bg-yellow-400 text-white",
  };

  return (
    <span className={clsx(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
};
