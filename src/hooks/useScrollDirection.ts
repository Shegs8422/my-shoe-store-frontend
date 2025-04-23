// src/hooks/useScrollDirection.ts
import { useState, useEffect, useRef } from "react";

type ScrollDirection = "up" | "down" | null;

export function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - prevScrollY.current) >= threshold) {
        const direction = scrollY > prevScrollY.current ? "down" : "up";
        if (direction !== scrollDirection) {
          setScrollDirection(direction);
        }
        setIsScrolledDown(scrollY > threshold); // Check if scrolled past threshold
        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }
      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDirection, threshold]); // Re-run effect if direction or threshold changes

  return { scrollDirection, isScrolledDown };
}
