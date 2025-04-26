import React from "react";

interface QuickViewButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const QuickViewButton = ({ onClick, className = "" }: QuickViewButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
      className={`w-full text-sm font-medium tracking-wide py-4 block bg-white text-black font-helvetica-compressed transition-colors duration-600 hover:bg-black hover:text-white ${className}`}
    >
      QUICK VIEW
    </button>
  );
};

export default QuickViewButton;
