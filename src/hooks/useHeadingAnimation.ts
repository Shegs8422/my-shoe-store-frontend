import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function useHeadingAnimation(className = "section-heading") {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    // Split the text into characters
    const split = new SplitType(ref.current, { types: "chars" });

    const anim = gsap.from(split.chars, {
      opacity: 0,
      y: 30,
      stagger: 0.05,
      duration: 1,
      ease: "power2.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%", // Adjust as needed
        toggleActions: "play none none none",
        once: true, // Only animate once
      },
    });

    // Cleanup on unmount
    return () => {
      split.revert();
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
    };
  }, []);

  return ref;
}
