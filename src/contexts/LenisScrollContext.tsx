// src/contexts/LenisScrollContext.tsx
"use client"; // Provider needs to be a client component

import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useContext,
  ReactNode,
} from "react";
import Lenis from "lenis"; // Correct import

type ScrollDirection = "up" | "down" | null;

interface LenisScrollContextProps {
  lenis: Lenis | null;
  scrollDirection: ScrollDirection;
  isScrolledDown: boolean; // Indicates if scrolled past the initial threshold
}

// Create the context with a default value
const LenisScrollContext = createContext<LenisScrollContextProps>({
  lenis: null,
  scrollDirection: null,
  isScrolledDown: false,
});

// Custom hook to consume the context
export const useLenisScroll = () => {
  const context = useContext(LenisScrollContext);
  if (!context) {
    throw new Error("useLenisScroll must be used within a LenisScrollProvider");
  }
  return context;
};

// Provider component
interface LenisScrollProviderProps {
  children: ReactNode;
  options?: ConstructorParameters<typeof Lenis>[0]; // Pass Lenis options if needed
  threshold?: number; // Threshold for isScrolledDown state
}

export const LenisScrollProvider: React.FC<LenisScrollProviderProps> = ({
  children,
  options,
  threshold = 10, // Default threshold
}) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis(options);
    lenisRef.current = lenis;
    setIsScrolledDown(window.scrollY > threshold); // Initial check

    // Lenis scroll event listener
    const handleScroll = (e: Lenis) => {
      // Determine direction based on Lenis' internal direction property
      const direction: ScrollDirection =
        e.direction === 1
          ? "down"
          : e.direction === -1
          ? "up"
          : scrollDirection; // Keep last direction if stopped

      // Update state only if values have changed
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
      const scrolledPastThreshold = e.scroll > threshold;
      if (scrolledPastThreshold !== isScrolledDown) {
        setIsScrolledDown(scrolledPastThreshold);
      }
    };

    lenis.on("scroll", handleScroll);

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.off("scroll", handleScroll);
      lenis.destroy();
      lenisRef.current = null;
      cancelAnimationFrame(rafId);
      setScrollDirection(null); // Reset state on unmount
      setIsScrolledDown(false);
    };
    // Only re-run if options or threshold change (unlikely for threshold in most cases)
    // Keep scrollDirection/isScrolledDown out of deps to avoid loops with state updates
  }, [options, threshold]);

  const value = {
    lenis: lenisRef.current,
    scrollDirection,
    isScrolledDown,
  };

  return (
    <LenisScrollContext.Provider value={value}>
      {children}
    </LenisScrollContext.Provider>
  );
};
