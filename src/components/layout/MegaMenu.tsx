// src/components/layout/MegaMenu.tsx
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { RefObject } from "react";
import "./MegaMenu.css";

type MenuLink = {
  label: string;
  href: string;
};

interface MegaMenuProps {
  links: MenuLink[];
  className?: string;
  anchorRef?: RefObject<HTMLElement | null>;
  onDropdownMouseEnter?: () => void;
  onDropdownMouseLeave?: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  links,
  className,
  anchorRef,
  onDropdownMouseEnter,
  onDropdownMouseLeave,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === "undefined" || !mounted) return null;

  return (
    <div
      ref={menuRef}
      className="mega-menu-container"
      onMouseEnter={onDropdownMouseEnter}
      onMouseLeave={onDropdownMouseLeave}
    >
      <ul className="mega-menu-list">
        {links.map((link) => (
          <li key={link.href} className="mega-menu-item">
            <Link
              href={link.href}
              className={`mega-menu-link ${className || ""}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenu;
