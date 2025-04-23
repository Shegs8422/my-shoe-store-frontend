// src/components/common/AppPromo.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Or use button if it opens modal/app store

const AppPromo = () => {
  return (
    <Link
      href="#"
      aria-label="Get the Patta App"
      className="group flex items-center gap-x-3 p-1 rounded bg-white/10 hover:bg-white/20 transition-colors w-full max-w-xs"
    >
      <div className="flex-shrink-0 w-16 h-16 lg:w-18 lg:h-18 rounded-sm overflow-hidden">
        <Image
          src="/logo.promo-app.svg" // Replace with path in /public
          alt="Patta App Logo"
          width={72}
          height={72}
          className="group-hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>
      <div className="flex-grow flex justify-between items-center">
        <div>
          <p className="text-[8px] lg:text-[10px] font-medium tracking-wide leading-tight mb-0.5 text-white/80">
            DON’T MISS OUT
          </p>
          <p className="text-[13px] lg:text-base font-medium tracking-tight leading-tight text-white">
            Get the Patta App
          </p>
        </div>
        <span className="text-xs font-medium bg-white text-black py-1 px-3 rounded-sm">
          OPEN
        </span>
      </div>
    </Link>
  );
};

export default AppPromo;
