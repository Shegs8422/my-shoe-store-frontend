// src/providers/LenisProvider.tsx
"use client";

import { ReactNode, createContext, useContext } from "react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import Lenis from "lenis";

// Create context for Lenis instance
const LenisContext = createContext<{ lenis: Lenis | null }>({ lenis: null });

// Export hook to access Lenis instance
export const useLenis = () => useContext(LenisContext);

export default function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useSmoothScroll();

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}
