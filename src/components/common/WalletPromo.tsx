// src/components/common/WalletPromo.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const WalletPromo = () => {
  return (
    <Link
      href="https://patta.novel.com/Nlwebsite"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Patta Digital Wallet"
      className="group flex items-center gap-x-3 p-1 rounded bg-white/10 hover:bg-white/20 transition-colors w-full max-w-xs"
    >
      <div className="flex-shrink-0 w-16 h-16 lg:w-18 lg:h-18 rounded-sm overflow-hidden">
        <Image
          src="/logo.promo-wallet.svg" // Replace with path in /public
          alt="Patta Wallet Logo"
          width={72}
          height={72}
          className="group-hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>
      <div className="flex-grow flex justify-between items-center">
        <div>
          <p className="text-[8px] lg:text-[10px] font-medium tracking-wide leading-tight mb-0.5 text-white/80 font-helvetica-compressed">
            TAP & GO
          </p>
          <p className="text-[13px] lg:text-base font-medium tracking-tight leading-tight text-white font-helvetica-black">
            Patta Digital Wallet
          </p>
        </div>
        <span className="text-xs font-medium bg-white text-black py-1 px-3 rounded-sm font-helvetica-compressed">
          OPEN
        </span>
      </div>
    </Link>
  );
};

export default WalletPromo;
