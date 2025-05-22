// src/components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import FooterLinkColumn from "./FooterLinkColumn"; // Import the new component
import AppPromo from "../common/AppPromo"; // Adjust path if needed
import WalletPromo from "../common/WalletPromo"; // Adjust path if needed
import EachOneTeachOne from "../home/EachOneTeachOne"; // Adjust path if needed
import { Facebook, Instagram, Youtube, Music2 } from "lucide-react"; // Import icons

// --- Link Data (Keep as is) ---
const column1Links = [
  { href: "/", label: "HOME" },
  { href: "/pages/about-us-1", label: "ABOUT US" },
  { href: "/pages/stores", label: "STORES" },
  { href: "/pages/support", label: "SUPPORT" },
];

const column2Links = [
  { href: "/pages/careers", label: "CAREERS" },
  { href: "/pages/shipping-returns", label: "SHIPPING" },
  { href: "/pages/returns", label: "RETURNS" },
  { href: "/pages/order-claim", label: "CLAIM PORTAL" },
];

// --- Placeholder Icons (Keep as is) ---
// (FacebookIcon, InstagramIcon, YoutubeIcon, MixcloudIcon...)
// --- End Placeholder Icons ---

// --- Define Style for Legal Links ---
const legalLinkStyle = `
  font-helvetica-compressed // Apply the custom font
  text-xs text-gray-400 // Match existing legal link color
  hover:text-white hover:underline // Hover effect
  transition-colors duration-150
`;

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 lg:pt-16 pb-8 font-helvetica-compressed">
      {" "}
      {/* Optionally apply font globally to footer */}
      <div className="container mx-auto px-4 lg:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          {/* Left Side: Links & Promos */}
          <div className="lg:col-span-7 flex flex-col justify-between mb-10 lg:mb-0">
            {/* Grid for Link Columns - Using the new component */}
            <div className="grid grid-cols-2 gap-x-8 lg:gap-x-16 max-w-xs">
              <FooterLinkColumn links={column1Links} />
              <FooterLinkColumn links={column2Links} />
            </div>

            {/* Social Links (Mobile Only) */}
            <ul className="flex flex-wrap gap-6 mt-8 lg:hidden">
              {/* ... (social links remain the same) ... */}
              <li>
                <a
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                  className="group/button overflow-hidden transition-colors ease-out  block"
                >
                  <Facebook className="text-white size-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  aria-label="Instagram"
                  className="group/button overflow-hidden transition-colors ease-out  block"
                >
                  <Instagram className="text-white size-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  aria-label="YouTube"
                  className="group/button overflow-hidden transition-colors ease-out  block"
                >
                  <Youtube className="text-white size-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.mixcloud.com"
                  aria-label="Mixcloud"
                  className="hover:opacity-75 transition-opacity"
                >
                  <Music2 className="text-white size-4" />
                </a>
              </li>
            </ul>

            {/* Promos */}
            <div className="mt-8 lg:mt-10 space-y-3">
              <AppPromo />
              <WalletPromo />
            </div>
          </div>

          {/* Right Side: Large Text & Social (Desktop) */}
          <div className="lg:col-span-5 flex flex-col lg:justify-between items-start lg:items-end">
            <div className="w-full flex lg:justify-end mb-8 lg:mb-0">
              <EachOneTeachOne />
            </div>
            {/* Social Links (Desktop Only) */}
            <ul className="hidden lg:flex flex-wrap gap-7 mt-8">
              {/* ... (social links remain the same) ... */}
              <li>
                <a
                  href="https://www.facebook.com"
                  aria-label="Facebook"
                  className="group/button overflow-hidden transition-colors ease-out  block"
                >
                  <Facebook className="text-white size-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  aria-label="Instagram"
                  className="group/button overflow-hidden transition-colors ease-out  block"
                >
                  <Instagram className="text-white size-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  aria-label="YouTube"
                  className="group/button overflow-hidden transition-colors ease-out  block"
                >
                  <Youtube className="text-white size-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.mixcloud.com"
                  aria-label="Mixcloud"
                  className="hover:opacity-75 transition-opacity"
                >
                  <Music2 className="text-white size-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Legal & Copyright */}
        <div className="mt-10 lg:mt-16 border-t border-white/20 pt-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-3">
          {/* Apply font to copyright text */}
          <p className="font-helvetica-compressed text-xs text-gray-400 order-2 lg:order-1">
            © {new Date().getFullYear()} Patta.
          </p>
          {/* Apply font class to legal links */}
          <ul className="flex flex-wrap gap-x-4 gap-y-1 order-1 lg:order-2">
            <li>
              <Link
                href="/policies/terms-of-service"
                className={legalLinkStyle}
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/policies/privacy-policy" className={legalLinkStyle}>
                Privacy Policy
              </Link>
            </li>
            {/* Add other legal links here using the same style */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
