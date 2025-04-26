// src/components/layout/Header.tsx
"use client"; // This component uses hooks and browser APIs

import React, { useState, useEffect } from "react"; // Import useState for mobile menu
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu"; // Adjust path if needed
import { useLenisScroll } from "@/contexts/LenisScrollContext"; // Import the new hook
import clsx from "clsx";

// --- Placeholder Icons ---
// TODO: Replace with actual SVG imports or components
const GlobeIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 10 10" fill="currentColor">
    <circle cx="5" cy="5" r="4.5" />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
// --- End Placeholder Icons ---

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile
  const [hidden, setHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > scrollPosition) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      setScrollPosition(currentScrollPosition);

      // Clear the timeout if it exists
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Set a timeout to show the header after 3 seconds of inactivity
      timeoutId = setTimeout(() => {
        setHidden(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [scrollPosition]);

  // --- Link Data ---
  const shopLinks = [
    { label: "New Arrivals", href: "/pages/shop" },
    { label: "Footwear", href: "/pages/footwear" },
    { label: "Tops", href: "/collections/tops-1" },
    { label: "Bottoms", href: "/collections/bottoms" },
    { label: "Accessories", href: "/collections/accessories" },
    { label: "Spring Summer 2025", href: "/collections/spring-summer-2025" },
    {
      label: "Autumn Winter 2024",
      href: "/collections/autumn-winter-2024-collection",
    },
    { label: "Brands", href: "/pages/brands" },
    { label: "View All", href: "/collections/all" },
  ];

  const exclusiveLinks = [
    { label: "Explore", href: "/pages/exclusives" },
    { label: "In-Store Exclusives", href: "/collections/in-store-exclusives" },
    { label: "Lookbooks", href: "/pages/lookbooks" },
  ];

  const communityLinks = [
    { label: "News", href: "/blogs/news" },
    { label: "Events", href: "/blogs/events" },
    { label: "Stores", href: "/pages/stores" },
    { label: "Explore", href: "/pages/community" },
    { label: "Patta Running", href: "/pages/patta-running" },
    { label: "Patta Cycling", href: "/pages/patta-cycling" },
    { label: "Patta Foundation", href: "/pages/patta-foundation" },
  ];

  const ss25Links = [
    { label: "Collection", href: "/collections/spring-summer-2025" },
    { label: "Lookbook", href: "/blogs/lookbooks/patta-spring-summer-2025" },
  ];
  // --- End Link Data ---

  // --- Base classes ---
  const navLinkClasses = `
    relative z-10 block py-1
    text-white text-xs font-medium uppercase tracking-wider
    transition-all duration-200 ease-out
    group-hover/mainnav:opacity-40 hover:!opacity-100
    hover:text-primary
    after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
    hover:after:w-full
    font-helvetica-compressed
  `;
  const utilityLinkClasses = `
    text-white text-xs font-medium uppercase tracking-wider
    hover:opacity-80 transition-opacity duration-150
    flex items-center gap-1.5
    font-helvetica-compressed
  `;
  // --- End Base Classes ---

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-[100] bg-transparent",
          "flex items-center h-20 lg:h-24",
          "pointer-events-auto",
          "mix-blend-difference",
          "transition-transform duration-300 ease-out-cubic",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-4 lg:px-6 w-full bg-transparent">
          <nav className="flex justify-between items-center w-full h-full bg-transparent">
            {/* Logo */}
            <div className="flex-shrink-0 z-10">
              <Link href="/" aria-label="Go to homepage">
                <Image
                  src="/patta-logo-white.svg"
                  alt="Patta Logo"
                  width={90}
                  height={50}
                  className="w-auto h-12 lg:h-16"
                  priority
                />
              </Link>
            </div>

            {/* Main Navigation (Desktop) - Centered */}
            <ul className="group/mainnav hidden lg:flex flex-row items-center justify-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <li className="group/dropdown-menu relative">
                <Link href="/pages/shop" className={navLinkClasses}>
                  Shop
                </Link>
                <div className="absolute top-full left-0 pt-5 group-hover/dropdown-menu:pointer-events-auto">
                  <div
                    className="
                      opacity-0 invisible scale-95
                      group-hover/dropdown-menu:visible
                      group-hover/dropdown-menu:opacity-100
                      group-hover/dropdown-menu:scale-100
                      group-hover/dropdown-menu:translate-y-0
                      translate-y-1
                      transition-all duration-300 ease-out-cubic
                      will-change-transform origin-top-left
                      shadow-xl
                    "
                  >
                    <MegaMenu
                      links={shopLinks}
                      className="font-helvetica-condensed"
                    />
                  </div>
                </div>
              </li>
              <li className="group/dropdown-menu relative">
                <Link href="/pages/exclusives" className={navLinkClasses}>
                  Exclusive
                </Link>
                <div className="absolute top-full left-0 pt-5 group-hover/dropdown-menu:pointer-events-auto">
                  <div
                    className="
                      opacity-0 invisible scale-95
                      group-hover/dropdown-menu:visible
                      group-hover/dropdown-menu:opacity-100
                      group-hover/dropdown-menu:scale-100
                      group-hover/dropdown-menu:translate-y-0
                      translate-y-1
                      transition-all duration-300 ease-out-cubic
                      will-change-transform origin-top-left
                      shadow-xl
                    "
                  >
                    <MegaMenu
                      links={exclusiveLinks}
                      className="font-helvetica-condensed"
                    />
                  </div>
                </div>
              </li>
              <li className="group/dropdown-menu relative">
                <Link href="/pages/community" className={navLinkClasses}>
                  Community
                </Link>
                <div className="absolute top-full left-0 pt-5 group-hover/dropdown-menu:pointer-events-auto">
                  <div
                    className="
                      opacity-0 invisible scale-95
                      group-hover/dropdown-menu:visible
                      group-hover/dropdown-menu:opacity-100
                      group-hover/dropdown-menu:scale-100
                      group-hover/dropdown-menu:translate-y-0
                      translate-y-1
                      transition-all duration-300 ease-out-cubic
                      will-change-transform origin-top-left
                      shadow-xl
                    "
                  >
                    <MegaMenu
                      links={communityLinks}
                      className="font-helvetica-condensed"
                    />
                  </div>
                </div>
              </li>
              <li className="group/dropdown-menu relative">
                <Link
                  href="/collections/spring-summer-2025"
                  className={navLinkClasses}
                >
                  Spring Summer 2025
                </Link>
                <div className="absolute top-full left-0 pt-5 group-hover/dropdown-menu:pointer-events-auto">
                  <div
                    className="
                      opacity-0 invisible scale-95
                      group-hover/dropdown-menu:visible
                      group-hover/dropdown-menu:opacity-100
                      group-hover/dropdown-menu:scale-100
                      group-hover/dropdown-menu:translate-y-0
                      translate-y-1
                      transition-all duration-300 ease-out-cubic
                      will-change-transform origin-top-left
                      shadow-xl
                    "
                  >
                    <MegaMenu
                      links={ss25Links}
                      className="font-helvetica-condensed"
                    />
                  </div>
                </div>
              </li>
            </ul>

            {/* Utility Navigation (Desktop) */}
            <div className="hidden lg:flex items-center justify-end gap-4 lg:gap-6">
              <button type="button" className={utilityLinkClasses}>
                <GlobeIcon /> NL/EN
              </button>
              <button
                type="button"
                className={utilityLinkClasses}
                aria-label="Search"
              >
                Search
              </button>
              <Link
                href="/account"
                className={utilityLinkClasses}
                aria-label="Account"
              >
                Account
              </Link>
              <Link
                href="/wishlist"
                className={utilityLinkClasses}
                aria-label="Wishlist"
              >
                Favorites
              </Link>
              <Link
                href="/cart"
                className={utilityLinkClasses}
                aria-label="Cart"
              >
                Cart
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`${utilityLinkClasses} lg:hidden z-10`}
              aria-label="Open menu"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <MenuIcon />
            </button>
          </nav>
        </div>
      </header>

      {/* TODO: Implement Mobile Menu Drawer Component */}
      {/* <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} /> */}
    </>
  );
};

export default Header;
