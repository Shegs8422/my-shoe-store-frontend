// src/components/layout/MobileMenu.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  shopLinks: NavLink[];
  exclusiveLinks: NavLink[];
  communityLinks: NavLink[];
  ss25Links: NavLink[];
}

const AccordionItem: React.FC<{ title: string; links: NavLink[]; onClose: () => void }> = ({ title, links, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 px-6 text-left text-lg font-medium text-white hover:bg-gray-800 transition-colors"
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="py-2 px-6 bg-gray-800">
              {links.map((link) => (
                <li key={link.href} className="my-1">
                  <Link
                    href={link.href}
                    onClick={onClose} // Close menu on link click
                    className="block py-2 text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  shopLinks,
  exclusiveLinks,
  communityLinks,
  ss25Links,
}) => {
  const panelVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const overlayVariants = {
    open: { opacity: 1, transition: { duration: 0.3 } },
    closed: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 z-[110]"
            onClick={onClose} // Close on overlay click
          />

          {/* Panel */}
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 h-full w-full max-w-md bg-black text-white shadow-xl z-[120] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-grow overflow-y-auto">
              <AccordionItem title="Shop" links={shopLinks} onClose={onClose} />
              <AccordionItem title="Exclusive" links={exclusiveLinks} onClose={onClose} />
              <AccordionItem title="Community" links={communityLinks} onClose={onClose} />
              <AccordionItem title="Spring Summer 2025" links={ss25Links} onClose={onClose} />

              {/* Other static links */}
              <div className="border-b border-gray-700">
                 <Link
                    href="/account"
                    onClick={onClose}
                    className="block py-4 px-6 text-left text-lg font-medium text-white hover:bg-gray-800 transition-colors"
                  >
                    Account
                  </Link>
              </div>
              <div className="border-b border-gray-700">
                 <Link
                    href="/wishlist"
                    onClick={onClose}
                    className="block py-4 px-6 text-left text-lg font-medium text-white hover:bg-gray-800 transition-colors"
                  >
                    Favorites
                  </Link>
              </div>
               <div className="border-b border-gray-700">
                 <Link
                    href="/cart"
                    onClick={onClose}
                    className="block py-4 px-6 text-left text-lg font-medium text-white hover:bg-gray-800 transition-colors"
                  >
                    Cart
                  </Link>
              </div>
            </nav>

            {/* Footer/Utility section if needed */}
            <div className="p-6 border-t border-gray-700">
              {/* Example: Language switcher or other utility */}
              <button className="flex items-center text-gray-300 hover:text-white transition-colors w-full text-left">
                {/* <Globe size={20} className="mr-2" /> NL/EN */}
                <span>Language: NL/EN</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
export type { NavLink }; // Export NavLink for use in Header.tsx if needed
