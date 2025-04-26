// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import LenisProvider from "@/providers/LenisProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Define all Helvetica font variants
const helvetica = localFont({
  src: "../fonts/helvetica/Helvetica.ttf",
  variable: "--font-helvetica",
});

const helveticaBold = localFont({
  src: "../fonts/helvetica/Helvetica-Bold.ttf",
  variable: "--font-helvetica-bold",
});

const helveticaLight = localFont({
  src: "../fonts/helvetica/helvetica-light.ttf",
  variable: "--font-helvetica-light",
});

const helveticaCompressed = localFont({
  src: "../fonts/helvetica/helvetica-compressed.otf",
  variable: "--font-helvetica-compressed",
});

const helveticaCondensed = localFont({
  src: "../fonts/helvetica/helvetica_condensed.ttf",
  variable: "--font-helvetica-condensed",
});

const helveticaUltraCompressed = localFont({
  src: "../fonts/helvetica/helvetica-ultra-compressed.otf",
  variable: "--font-helvetica-ultra",
});

const helveticaBlack = localFont({
  src: "../fonts/helvetica/helvetica-black.otf",
  variable: "--font-helvetica-black",
});

export const metadata: Metadata = {
  title: "Patta Shoe Store",
  description: "Demo Shoe E-commerce Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${helvetica.variable}
        ${helveticaBold.variable}
        ${helveticaLight.variable}
        ${helveticaCompressed.variable}
        ${helveticaCondensed.variable}
        ${helveticaUltraCompressed.variable}
        ${helveticaBlack.variable}
        font-sans
      `}
    >
      <body className="relative bg-transparent text-black">
        <LenisProvider>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
