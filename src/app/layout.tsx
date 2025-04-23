// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local"; // Corrected import name convention
import LenisProvider from "@/providers/LenisProvider"; // Assuming you have this
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Define the local font
const helveticaCompressed = localFont({
  src: [
    // Add other weights/styles of the same family if you have them:
    {
      path: "../assets/fonts/helvetica/helvetica-compressed-5871d14b6903a.otf", // Example
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap", // Good practice for font loading
  variable: "--font-helvetica-compressed", // CSS variable name
});

export const metadata: Metadata = {
  title: "Patta Shoe Store",
  description: "Demo Shoe E-commerce Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  // Use Readonly type for props
  children: React.ReactNode;
}>) {
  return (
    // Apply the font variable to the HTML tag for global access
    <html lang="en" className={`${helveticaCompressed.variable} font-sans`}>
      {/* font-sans is a fallback from Tailwind */}
      <body className="bg-white text-black">
        {" "}
        {/* Base body styles */}
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
