import React from "react";

interface MarqueeBannerProps {
  message: string;
  className?: string;
}

const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  message,
  className = "",
}) => {
  // Add extra spacing between repeated messages for better readability
  // Use a middot and more spaces for clear separation
  const separator = " \u00B7 "; // middot with spaces
  const repeatedMessage = Array(4).fill(message.trim()).join(separator);

  return (
    <div
      className={`w-full bg-inherit h-8 flex items-center overflow-hidden select-none ${className}`}
      style={{
        fontFamily:
          '"Helvetica Neue Condensed", "HelveticaNeue-CondensedBold", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
      }}
    >
      <div
        className="whitespace-nowrap text-inherit mix-blend-difference animate-marquee font-bold text-xs tracking-wide px-6"
        style={{
          fontFamily:
            '"Helvetica Neue Condensed", "HelveticaNeue-CondensedBold", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
          letterSpacing: "0.08em",
        }}
      >
        {repeatedMessage}
      </div>
    </div>
  );
};

export default MarqueeBanner;
