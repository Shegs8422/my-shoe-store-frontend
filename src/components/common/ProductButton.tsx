import React from "react";
import { motion } from "framer-motion";

interface ProductButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "reversed";
  disabled?: boolean;
}

const ProductButton: React.FC<ProductButtonProps> = ({
  onClick,
  children,
  className = "",
  variant = "default",
  disabled = false,
}) => {
  const baseClasses =
    "group/button overflow-hidden ease-out h-auto py-2 px-5 inline-flex items-center justify-center rounded-[2px] w-full relative";
  const variantClasses =
    variant === "default" ? "bg-white text-black" : "bg-black text-white";

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{ rest: {}, hover: {} }}
    >
      {/* Animated overlay */}
      <motion.div
        className={`absolute bottom-0 left-0 w-full ${
          variant === "default" ? "bg-black" : "bg-white"
        }`}
        variants={{ rest: { height: "0%" }, hover: { height: "100%" } }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />
      {/* Text */}
      <motion.span
        className="relative z-10 text-xs font-medium"
        variants={{
          rest: { color: variant === "default" ? "black" : "white" },
          hover: { color: variant === "default" ? "white" : "black" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default ProductButton;
