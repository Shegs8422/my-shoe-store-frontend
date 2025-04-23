// src/components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import FooterLinkColumn from "./FooterLinkColumn"; // Import the new component
import AppPromo from "../common/AppPromo"; // Adjust path if needed
import WalletPromo from "../common/WalletPromo"; // Adjust path if needed
import EachOneTeachOne from "../home/EachOneTeachOne"; // Adjust path if needed

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
const FacebookIcon = () => (
  <svg
    aria-hidden="true"
    className="text-white size-4"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Facebook</title>
    <path
      fill="currentColor"
      d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"
    />
  </svg>
);
const InstagramIcon = () => (
  <svg
    aria-hidden="true"
    className="text-white size-4"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <title>Instagram</title>
    <path
      fill="currentColor"
      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
  </svg>
);
const YoutubeIcon = () => (
  <svg
    aria-hidden="true"
    className="text-white size-4"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>YouTube</title>
    <path
      d="M6.66732 10.0026L10.1273 8.00261L6.66732 6.0026V10.0026ZM14.374 4.7826C14.4606 5.09594 14.5206 5.51594 14.5606 6.04927C14.6073 6.5826 14.6273 7.04261 14.6273 7.44261L14.6673 8.00261C14.6673 9.46261 14.5606 10.5359 14.374 11.2226C14.2073 11.8226 13.8206 12.2093 13.2206 12.3759C12.9073 12.4626 12.334 12.5226 11.454 12.5626C10.5873 12.6093 9.79398 12.6293 9.06065 12.6293L8.00065 12.6693C5.20732 12.6693 3.46732 12.5626 2.78065 12.3759C2.18065 12.2093 1.79398 11.8226 1.62732 11.2226C1.54065 10.9093 1.48065 10.4893 1.44065 9.95594C1.39398 9.42261 1.37398 8.96261 1.37398 8.56261L1.33398 8.00261C1.33398 6.54261 1.44065 5.46927 1.62732 4.7826C1.79398 4.1826 2.18065 3.79594 2.78065 3.62927C3.09398 3.5426 3.66732 3.4826 4.54732 3.4426C5.41398 3.39594 6.20732 3.37594 6.94065 3.37594L8.00065 3.33594C10.794 3.33594 12.534 3.4426 13.2206 3.62927C13.8206 3.79594 14.2073 4.1826 14.374 4.7826Z"
      fill="currentColor"
    />
  </svg>
);
const MixcloudIcon = () => <svg className="text-white size-4">...</svg>;

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
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  aria-label="Instagram"
                  className="group/button overflow-hidden transition-colors ease-out  block"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  aria-label="YouTube"
                  className="group/button overflow-hidden transition-colors ease-out  block"
                >
                  <YoutubeIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.mixcloud.com"
                  aria-label="Mixcloud"
                  className="hover:opacity-75 transition-opacity"
                >
                  <MixcloudIcon />
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
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  aria-label="Instagram"
                  className="group/button overflow-hidden transition-colors ease-out  block"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  aria-label="YouTube"
                  className="group/button overflow-hidden transition-colors ease-out  block"
                >
                  <YoutubeIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.mixcloud.com"
                  aria-label="Mixcloud"
                  className="hover:opacity-75 transition-opacity"
                >
                  <MixcloudIcon />
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
