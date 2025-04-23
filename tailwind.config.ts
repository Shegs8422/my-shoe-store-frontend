// tailwind.config.ts
import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Keep 'sans' for your default readable font stack
        sans: ["Inter", ...defaultTheme.fontFamily.sans], // Or whatever your base font should be

        // Add your custom font using the CSS variable from layout.tsx
        "helvetica-compressed": [
          "var(--font-helvetica-compressed)",
          "sans-serif",
        ],
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
