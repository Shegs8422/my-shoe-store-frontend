// src/components/layout/Header.tsx
"use client"; // This component uses hooks and browser APIs

import React, { useState, useEffect, useRef } from "react"; // Import useState for mobile menu
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu"; // Adjust path if needed
import { useLenisScroll } from "@/contexts/LenisScrollContext"; // Import the new hook
import clsx from "clsx";
import "./Header.css";

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
                        setTimeout(() => {
                          setOpenDropdown((current) =>
                            current === "shop" ? null : current
                          );
                        }, 50);
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
                        setTimeout(() => {
                          setOpenDropdown((current) =>
                            current === "exclusive" ? null : current
                          );
                        }, 50);
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
                        setTimeout(() => {
                          setOpenDropdown((current) =>
                            current === "community" ? null : current
                          );
                        }, 50);
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
                        setTimeout(() => {
                          setOpenDropdown((current) =>
                            current === "ss25" ? null : current
                          );
                        }, 50);
                      }}
                    />
                  )}
                </li>
              </ul>

              {/* Utility Navigation */}
              <div className="hidden lg:flex items-center justify-end gap-4 lg:gap-6">
                <button type="button" className={utilityLinkClasses}>
                  <span className="relative z-[2]">
                    <GlobeIcon /> NL/EN
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
                  <MenuIcon />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* TODO: Implement Mobile Menu Drawer Component */}
      {/* <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} /> */}
    </>
  );
};

export default Header;
