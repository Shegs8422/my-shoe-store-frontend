// src/components/layout/Header.tsx
"use client"; // This component uses hooks and browser APIs

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu"; // Adjust path if needed
import MobileMenu from "./MobileMenu"; // Import MobileMenu
import type { NavLink } from "./MobileMenu"; // Import NavLink type
import { useLenisScroll } from "@/contexts/LenisScrollContext"; // Import the new hook
import clsx from "clsx";
import { Globe, Menu } from "lucide-react"; // Import icons from lucide-react
import "./Header.css";

// --- Placeholder Icons ---
// TODO: Replace with actual SVG imports or components
// --- End Placeholder Icons ---

const Header = () => {
  const { lenis } = useLenisScroll(); // Get Lenis instance
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile
  const [hidden, setHidden] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0); // Replaced by Lenis
  const lastScrollY = useRef(0);
  const slowScrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Dropdown state
  const [openDropdown, setOpenDropdown] = useState<
    null | "shop" | "exclusive" | "community" | "ss25"
  >(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);

  // Refs for nav links
  const shopRef = useRef<HTMLAnchorElement>(null);
  const exclusiveRef = useRef<HTMLAnchorElement>(null);
  const communityRef = useRef<HTMLAnchorElement>(null);
  const ss25Ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!lenis) return;

    const handleLenisScroll = (e: any) => { // Type from Lenis event
      const currentScrollY = e.scroll;
      const velocity = e.velocity;
      const direction = e.direction; // 1 down, -1 up

      // Clear any existing slow scroll timer
      if (slowScrollTimerRef.current) {
        clearTimeout(slowScrollTimerRef.current);
        slowScrollTimerRef.current = null;
      }

      // Rule 1: Always show header if near the top
      if (currentScrollY < 50) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Rule 2: Hide on scroll down
      if (direction === 1 && currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setHidden(true);
      }
      // Rule 3: Show on scroll up
      else if (direction === -1 && currentScrollY < lastScrollY.current) {
        setHidden(false);
      }

      // Rule 4: Show if scrolling stops or is very slow
      // Only apply if not already shown by scrolling up or being at the top
      if (Math.abs(velocity) < 0.1 && hidden) { // Check `hidden` to avoid unnecessary sets
        slowScrollTimerRef.current = setTimeout(() => {
          // Check again inside timeout if still hidden and velocity is still low
          // This check might be redundant if lenis events cease on stop,
          // but good for safety if events continue with low velocity.
          if (lenis.velocity < 0.1) { // Check current velocity from lenis instance
             setHidden(false);
          }
        }, 300); // Show after 300ms of slow/no scroll
      }
      
      // Update lastScrollY, but only if change is significant to avoid excessive re-renders
      // This check might be less critical now as setHidden is the main state update
      if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
        lastScrollY.current = currentScrollY;
      }
    };

    lenis.on("scroll", handleLenisScroll);

    return () => {
      lenis.off("scroll", handleLenisScroll);
      if (slowScrollTimerRef.current) {
        clearTimeout(slowScrollTimerRef.current);
      }
    };
  }, [lenis, hidden]); // Add `hidden` to deps: if hidden changes, timer logic might need re-evaluation

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
  const navLinkClasses = clsx(
    "header-nav-link",
    // Layout & Positioning
    "block py-1",
    // Typography
    "text-xs font-medium uppercase tracking-wider font-helvetica-compressed",
    // Transitions & Effects
    "transition-all duration-200 ease-out",
    "group-hover/mainnav:opacity-40 hover:!opacity-100",
    "hover:text-primary",
    "cursor-pointer",
    // Underline effect
    "after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300",
    "hover:after:w-full"
  );

  const utilityLinkClasses = clsx(
    "header-utility",
    // Typography
    "text-xs font-medium uppercase tracking-wider font-helvetica-compressed",
    // Layout
    "flex items-center gap-1.5",
    // Interactions
    "hover:opacity-80 transition-opacity duration-150",
    "cursor-pointer"
  );
  // --- End Base Classes ---

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Handlers for dropdowns
  const handleDropdownOpen = (name: typeof openDropdown) =>
    setOpenDropdown(name);
  const handleDropdownClose = () => {
    // Only close if not hovering dropdown
    setTimeout(() => {
      setOpenDropdown((current) => (isHoveringDropdown ? current : null));
    }, 50);
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-[100]",
          "flex items-center h-20 lg:h-24",
          "pointer-events-auto",
          "transition-transform duration-300 ease-out-cubic",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
        aria-label="Main Navigation"
      >
        <div className="header-background" />
        <div className="container mx-auto px-4 lg:px-6 w-full">
          <nav className="flex justify-between items-center w-full h-full header-nav-wrapper">
            <div className="relative w-full flex justify-between items-center">
              {/* Logo */}
              <div className="flex-shrink-0 header-logo">
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
                <li
                  className="group/dropdown-menu relative"
                  onMouseEnter={() => handleDropdownOpen("shop")}
                  onMouseLeave={handleDropdownClose}
                  onFocus={() => handleDropdownOpen("shop")}
                  onBlur={handleDropdownClose}
                >
                  <Link href="/pages/shop" className={navLinkClasses}>
                    <span className="relative z-[2]">Shop</span>
                  </Link>
                  {openDropdown === "shop" && (
                    <MegaMenu
                      links={shopLinks}
                      className="font-helvetica-condensed"
                      anchorRef={shopRef}
                      onDropdownMouseEnter={() => setIsHoveringDropdown(true)}
                      onDropdownMouseLeave={() => {
                        setIsHoveringDropdown(false);
                        handleDropdownClose();
                      }}
                    />
                  )}
                </li>
                <li
                  className="group/dropdown-menu relative"
                  onMouseEnter={() => handleDropdownOpen("exclusive")}
                  onMouseLeave={handleDropdownClose}
                  onFocus={() => handleDropdownOpen("exclusive")}
                  onBlur={handleDropdownClose}
                >
                  <Link href="/pages/exclusives" className={navLinkClasses}>
                    <span className="relative z-[2]">Exclusive</span>
                  </Link>
                  {openDropdown === "exclusive" && (
                    <MegaMenu
                      links={exclusiveLinks}
                      className="font-helvetica-condensed"
                      anchorRef={exclusiveRef}
                      onDropdownMouseEnter={() => setIsHoveringDropdown(true)}
                      onDropdownMouseLeave={() => {
                        setIsHoveringDropdown(false);
                        handleDropdownClose();
                      }}
                    />
                  )}
                </li>
                <li
                  className="group/dropdown-menu relative"
                  onMouseEnter={() => handleDropdownOpen("community")}
                  onMouseLeave={handleDropdownClose}
                  onFocus={() => handleDropdownOpen("community")}
                  onBlur={handleDropdownClose}
                >
                  <Link href="/pages/community" className={navLinkClasses}>
                    <span className="relative z-[2]">Community</span>
                  </Link>
                  {openDropdown === "community" && (
                    <MegaMenu
                      links={communityLinks}
                      className="font-helvetica-condensed"
                      anchorRef={communityRef}
                      onDropdownMouseEnter={() => setIsHoveringDropdown(true)}
                      onDropdownMouseLeave={() => {
                        setIsHoveringDropdown(false);
                        handleDropdownClose();
                      }}
                    />
                  )}
                </li>
                <li
                  className="group/dropdown-menu relative"
                  onMouseEnter={() => handleDropdownOpen("ss25")}
                  onMouseLeave={handleDropdownClose}
                  onFocus={() => handleDropdownOpen("ss25")}
                  onBlur={handleDropdownClose}
                >
                  <Link
                    href="/collections/spring-summer-2025"
                    className={navLinkClasses}
                  >
                    <span className="relative z-[2]">Spring Summer 2025</span>
                  </Link>
                  {openDropdown === "ss25" && (
                    <MegaMenu
                      links={ss25Links}
                      className="font-helvetica-condensed"
                      anchorRef={ss25Ref}
                      onDropdownMouseEnter={() => setIsHoveringDropdown(true)}
                      onDropdownMouseLeave={() => {
                        setIsHoveringDropdown(false);
                        handleDropdownClose();
                      }}
                    />
                  )}
                </li>
              </ul>

              {/* Utility Navigation */}
              <div className="hidden lg:flex items-center justify-end gap-4 lg:gap-6">
                <button type="button" className={utilityLinkClasses}>
                  <span className="relative z-[2] flex items-center">
                    <Globe className="w-3 h-3 mr-1" /> NL/EN
                  </span>
                </button>
                <button type="button" className={utilityLinkClasses}>
                  <span className="relative z-[2]">Search</span>
                </button>
                <Link href="/account" className={utilityLinkClasses}>
                  <span className="relative z-[2]">Account</span>
                </Link>
                <Link href="/wishlist" className={utilityLinkClasses}>
                  <span className="relative z-[2]">Favorites</span>
                </Link>
                <Link href="/cart" className={utilityLinkClasses}>
                  <span className="relative z-[2]">Cart</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className={clsx(utilityLinkClasses, "lg:hidden")}
                aria-label="Open menu"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="relative z-[2]">
                  <Menu className="w-6 h-6" />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        shopLinks={shopLinks}
        exclusiveLinks={exclusiveLinks}
        communityLinks={communityLinks}
        ss25Links={ss25Links}
      />
    </>
  );
};

export default Header;
