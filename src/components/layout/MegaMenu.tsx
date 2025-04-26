// src/components/layout/MegaMenu.tsx
import React from "react";
import Link from "next/link";
import clsx from "clsx";

type MenuLink = {
  label: string;
  href: string;
};

interface MegaMenuProps {
  links: MenuLink[];
  className?: string;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ links, className }) => {
  // Apply base faded style on list hover, full opacity on item hover
  const linkStyle = clsx(
    // Base styles
    "block py-1.5",
    "text-black text-xs font-medium uppercase leading-none tracking-wider whitespace-nowrap",
    "font-helvetica-compressed",

    // Transitions
    "transition-opacity duration-150 ease-out",
    "group-hover/megamenu:opacity-40 hover:!opacity-100",

    // Additional classes passed in
    className
  );

  return (
    // Added 'isolate' class here
    <div className="isolate absolute top-full left-0 w-auto min-w-[160px] bg-white rounded shadow-lg p-4 z-30">
      {/* Add group name to the list */}
      <ul className="group/megamenu flex flex-col items-start">
        {links.map((link) => (
          <li key={link.href} className="self-stretch">
            {" "}
            {/* No hover styles on li itself */}
            <Link href={link.href} className={linkStyle}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenu;
