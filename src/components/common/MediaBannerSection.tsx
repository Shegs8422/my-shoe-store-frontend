// src/components/common/MediaBannerSection.tsx
"use client"; // Needed for video playback control potentially

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PromoCard from "@/components/home/PromoCard"; // Adjust path
import { useHeadingAnimation } from "@/hooks/useHeadingAnimation";

interface MediaBannerSectionProps {
  category?: string;
  title: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string; // Desktop image/Video Poster
  mobileImageUrl?: string; // Optional Mobile specific image
  videoSrc?: string; // Optional video source
  promoCard?: {
    // Optional promo card details
    imageUrl: string;
    imageAlt: string;
    category: string;
    title: string;
    link: string;
  };
}

const MediaBannerSection: React.FC<MediaBannerSectionProps> = ({
  category,
  title,
  ctaText,
  ctaLink,
  imageUrl,
  mobileImageUrl,
  videoSrc,
  promoCard,
}) => {
  const headingRef = useHeadingAnimation();

  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[750px] w-full text-white flex flex-col bg-black">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoSrc ? (
          <video
            playsInline
            autoPlay
            loop
            muted
            poster={imageUrl} // Use main image as poster
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            {/* Fallback Image if video fails */}
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </video>
        ) : (
          <>
            <Image
              src={mobileImageUrl ? mobileImageUrl : imageUrl} // Use mobile image if provided on small screens
              alt={title}
              layout="fill"
              objectFit="cover"
              className="lg:hidden" // Show only on mobile initially
              quality={85}
              priority
            />
            <Image
              src={imageUrl} // Desktop image
              alt={title}
              layout="fill"
              objectFit="cover"
              className="hidden lg:block" // Show only on desktop
              quality={85}
              priority
            />
          </>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col flex-grow h-full">
        {/* Promo Card (Top Right or Sticky as per original) */}
        {promoCard && (
          <div className="absolute top-4 right-4 lg:top-auto lg:bottom-10 lg:right-10 xl:bottom-16 xl:right-16">
            <PromoCard {...promoCard} />
          </div>
        )}

        {/* Main Text & CTA (Bottom Left) */}
        <div className="flex flex-col justify-end items-start flex-grow pb-10 lg:pb-16 mt-auto">
          <div className="space-y-3 lg:space-y-4">
            {category && (
              <p className="text-secondary-medium-sm lg:text-secondary-medium-base opacity-90 font-helvetica-light">
                {category}
              </p>
            )}
            <h3
              ref={headingRef}
              className="text-primary-medium-3xl lg:text-primary-medium-4xl font-helvetica-black section-heading"
            >
              {/* Basic title, wrap words for animation if needed later */}
              {title}
            </h3>
            <Link href={ctaLink} passHref>
              <button
                type="button"
                className="primary-white-button font-helvetica-compressed"
              >
                {" "}
                {/* Use button styles */}
                {ctaText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaBannerSection;
