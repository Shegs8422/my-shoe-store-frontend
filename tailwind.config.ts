// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // Set default sans font to Helvetica
      sans: ["Helvetica", "system-ui", "sans-serif"],
      // Variants
      helvetica: ["Helvetica", "system-ui", "sans-serif"],
      "helvetica-condensed": ["Helvetica Condensed", "system-ui", "sans-serif"],
      "helvetica-compressed": [
        "Helvetica Compressed",
        "system-ui",
        "sans-serif",
      ],
      "helvetica-ultra": [
        "Helvetica Ultra Compressed",
        "system-ui",
        "sans-serif",
      ],
    },
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
      },
      borderRadius: {
        // Keep your custom border radius
        sm: "3px",
      },
      // Keep other extensions
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
