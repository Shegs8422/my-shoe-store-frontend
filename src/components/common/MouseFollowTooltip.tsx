// src/components/common/MouseFollowTooltip.tsx
import React, { forwardRef } from "react";
import { clsx } from "clsx";

interface MouseFollowTooltipProps {
  text: string;
  isVisible: boolean;
}

const MouseFollowTooltip = forwardRef<HTMLSpanElement, MouseFollowTooltipProps>(
  ({ text, isVisible }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          "fixed top-0 left-0 z-50 px-2.5 py-1", // Fixed positioning, adjusted padding slightly
          // --- Glass Effect Styling ---
          "bg-black/40", // Semi-transparent black background (adjust opacity 0-100)
          "backdrop-blur-sm", // Apply background blur (adjust sm, md, lg as needed)
          "rounded-[2px]", // Tailwind's rounded-sm is typically 2px
          // --- Text Styling ---
          "text-white text-[10px] font-medium tracking-wider font-helvetica-compressed", // Uppercase handled by text prop, adjusted size/tracking
          // --- Other ---
          "shadow-md whitespace-nowrap",
          "pointer-events-none",
          "transition-opacity duration-150 ease-out",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ transform: "translate(15px, 10px)" }} // Initial offset from cursor
      >
        {text}
      </span>
    );
  }
);

MouseFollowTooltip.displayName = "MouseFollowTooltip";

export default MouseFollowTooltip;
