// src/hooks/use-smooth-scroll.ts
import { useEffect, useRef } from "react";
import Lenis from "lenis"; // <--- Add this correct line

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined") {
      lenisRef.current = new Lenis();

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      const rafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(rafId);
        lenisRef.current?.destroy();
        lenisRef.current = null;
      };
    }
  }, []); // Empty dependency array ensures it runs once on mount

  return lenisRef;
}
