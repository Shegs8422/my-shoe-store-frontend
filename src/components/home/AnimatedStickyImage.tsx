"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useFadeInUpScroll } from "@/hooks/useFadeInUpScroll";

interface AnimatedStickyImageProps {
  imageSrc: string;
  imageAlt: string;
  featuredCollectionRef: React.RefObject<HTMLElement>;
}

const AnimatedStickyImage: React.FC<AnimatedStickyImageProps> = ({
  imageSrc,
  imageAlt,
  featuredCollectionRef,
}) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useFadeInUpScroll({
    triggerRef: imageContainerRef,
    yOffset: 40,
    duration: 0.7,
    start: "top 90%",
  });

  useEffect(() => {
    const handleScroll = () => {
      // Check if refs are defined before accessing 'current'
      if (imageContainerRef.current && featuredCollectionRef?.current) {
        const imageRect = imageContainerRef.current.getBoundingClientRect();
        const featuredRect =
          featuredCollectionRef.current.getBoundingClientRect();

        const shouldStopSticky = imageRect.bottom >= featuredRect.bottom;

        setIsAtBottom(shouldStopSticky);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [featuredCollectionRef]);

  return (
    <div
      ref={imageContainerRef}
      className={`${
        isAtBottom ? "relative" : "sticky top-0"
      } w-full h-[240px] lg:h-screen lg:py-10 transition-all duration-300`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover w-full h-full"
        quality={85}
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <button
        type="button"
        className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 z-10
                   bg-black/40 backdrop-blur-sm text-white
                   text-xs lg:text-sm font-medium uppercase tracking-wider
                   py-2.5 px-6 rounded-sm shadow-md
                   hover:bg-black/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
        aria-label="View products in image"
      >
        View products
      </button>
    </div>
  );
};

export default AnimatedStickyImage;
