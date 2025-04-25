import React from "react";
import { motion } from "framer-motion";

interface QuickViewButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const QuickViewButton = ({ onClick, className = "" }: QuickViewButtonProps) => {
  return (
    <motion.button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
      className={`w-full overflow-hidden relative ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{ rest: {}, hover: {} }}
    >
      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        variants={{ rest: { height: "0%" }, hover: { height: "100%" } }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />
      {/* Text */}
      <motion.span
        className="relative z-10 text-sm font-medium tracking-wide py-4 block bg-white"
        variants={{
          rest: { color: "black" },
          hover: { color: "white" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        QUICK VIEW
      </motion.span>
    </motion.button>
  );
};

export default QuickViewButton;
