// src/hooks/useFadeInUpScroll.ts
"use client"; // Hooks using useEffect/refs need to be used in client components

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin outside the hook (runs once)
gsap.registerPlugin(ScrollTrigger);

interface UseFadeInUpScrollOptions {
  triggerRef: RefObject<Element>; // The element that triggers the animation
  targetRef?: RefObject<Element>; // The element to animate (defaults to triggerRef)
  yOffset?: number; // How far down it starts (pixels)
  duration?: number;
  start?: string; // ScrollTrigger start position (e.g., "top 80%")
  delay?: number;
}

export function useFadeInUpScroll({
  triggerRef,
  targetRef,
  yOffset = 50, // Default to starting 50px down
  duration = 0.8,
  start = "top 85%", // Default trigger point
  delay = 0,
}: UseFadeInUpScrollOptions) {
  useEffect(() => {
    const triggerElement = triggerRef.current;
    // Animate the targetRef if provided, otherwise fallback to the triggerRef
    const targetElement = targetRef?.current || triggerElement;

    if (!triggerElement || !targetElement) return;

    // Use GSAP context for proper cleanup in React/Next.js
    const ctx = gsap.context(() => {
      gsap.from(targetElement, {
        opacity: 0,
        y: yOffset,
        duration: duration,
        delay: delay,
        ease: "power2.out", // Example ease
        scrollTrigger: {
          trigger: triggerElement,
          start: start,
          toggleActions: "play none none none", // Play animation once on enter viewport
          // markers: process.env.NODE_ENV === 'development', // Uncomment for debugging trigger points
        },
      });
    }, triggerRef); // Scope the context to the trigger element's ref

    // Cleanup function
    return () => ctx.revert();
  }, [triggerRef, targetRef, yOffset, duration, start, delay]); // Re-run if any dependency changes
}
