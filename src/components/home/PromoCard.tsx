// src/components/home/PromoCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PromoCardProps {
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  link: string;
}

const PromoCard: React.FC<PromoCardProps> = ({
  imageUrl,
  imageAlt,
  category,
  title,
  link,
}) => {
  return (
    // Root article element - replicating reference styles minus interaction ones
    // NOTE: Ignoring reference's initial animation/opacity classes for simplicity,
    // assuming it should be visible when rendered.
    <article
      className="
        bg-white/10 backdrop-blur-md /* Approximation of bg-glass */
        relative w-fit rounded
        border border-white/20 shadow-lg /* Added for glass effect */
      "
      // REMOVED: explicit touch-action: none from here
    >
      {/* Link - REMOVE interaction styles (cursor, active:cursor, touch-action) */}
      <Link
        href={link}
        aria-label={`${category} - ${title}`}
        className="block p-2 pb-2.5 group/promolink" // Keep padding, group for hover
        draggable="false" // Prevent native link dragging
        onDragStart={(e) => e.preventDefault()}
        // REMOVED: cursor-grab, active:cursor-grabbing, style={{ touchAction: 'none' }}
      >
        {/* Figure - Apply sizing */}
        <figure className="w-[9.375rem] lg:w-[14.375rem]">
          {/* Image Container */}
          <div className="aspect-square w-full overflow-hidden rounded-sm bg-gray-600/50 pointer-events-none">
            {/* Using next/image within a div for aspect ratio control */}
            <div className="relative h-full w-full scale-100 group-hover/promolink:scale-105 transition-transform duration-300 ease-out will-change-transform">
              {/* Note: The reference uses an <img> tag directly. We use next/image for optimization */}
              <Image
                src={imageUrl} // Use the passed prop
                alt={imageAlt} // Use the passed prop
                fill // Cover the container
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 150px, 230px" // Adjust sizes based on w-[9.375rem] lg:w-[14.375rem]
                className="pointer-events-none" // Prevent image interference
                draggable="false" // Prevent native image dragging
                // REMOVED: inline style={{ touchAction: 'none' }}
              />
            </div>
          </div>
          {/* Figcaption - Apply text styles */}
          <figcaption className="pt-3 text-white pointer-events-none">
            {/* Category Text */}
            <p className="text-xs font-medium mb-0.5 line-clamp-1 leading-none opacity-90">
              {/* Approximating text-secondary-medium-xs */}
              {category}
            </p>
            {/* Title Text */}
            <h2 className="text-sm lg:text-base font-medium line-clamp-2 leading-tight">
              {/* Approximating text-primary-medium-base */}
              {title}
            </h2>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
};

export default PromoCard;
