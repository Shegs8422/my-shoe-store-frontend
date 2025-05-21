// src/hooks/use-smooth-scroll.ts
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined") {
      // Initialize Lenis with configuration
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      // Set up the animation frame loop
      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Optional: Lenis scroll events
      lenisRef.current.on(
        "scroll",
        ({ scroll, limit, velocity, direction, progress }: any) => {
          // You can use these values to create animations based on scroll
        }
      );

      return () => {
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
        }
      };
    }
  }, []); // Empty dependency array ensures it runs once on mount

  return lenisRef;
}
