import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  variant?: "new" | "sold-out" | "online-exclusive";
  className?: string;
}

export const Badge = ({ children, variant = "new", className }: BadgeProps) => {
  const baseClasses =
    "inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full";

  const variantClasses = {
    new: "bg-black text-white",
    "sold-out": "bg-gray-200 text-gray-800",
    "online-exclusive": "bg-blue-100 text-blue-800",
  };

  return (
    <span className={clsx(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
};
