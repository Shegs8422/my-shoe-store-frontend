// src/components/layout/FooterLinkColumn.tsx
import React from "react";
import Link from "next/link";
import { clsx } from "clsx"; // Make sure clsx is imported

type FooterLink = {
  label: string;
  href: string;
};

interface FooterLinkColumnProps {
  links: FooterLink[];
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ links }) => {
  // Define the combined style using clsx
  const linkClasses = clsx(
    // --- Base Styles ---
    "font-helvetica-compressed",
    "block py-1", // Keep vertical padding
    "text-white text-xs font-medium uppercase tracking-wider whitespace-nowrap",

    // --- Transition ---
    "transition-opacity duration-300 ease-out", // Apply opacity transition (adjust duration if needed)

    // --- Opacity States ---
    // Default state: Fully opaque
    "opacity-100",

    // When the PARENT 'ul' (group) is hovered, fade THIS link down (unless it's the one being hovered)
    "group-hover/footerlinks:opacity-40", // Adjust opacity value (e.g., 40, 50, 60) for desired fade

    // When THIS specific link is hovered, ensure it's fully opaque again
    // The '!' might not be strictly necessary due to hover specificity, but ensures override
    "hover:!opacity-100"
  );

  return (
    // Add the group name 'group/footerlinks' to the parent ul
    <ul className="group/footerlinks space-y-1">
      {" "}
      {/* Keep existing spacing */}
      {links.map((link) => (
        <li key={link.href} className="w-fit">
          {" "}
          {/* Keep w-fit */}
          <Link href={link.href} className={linkClasses}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinkColumn;
