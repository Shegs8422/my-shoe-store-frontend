// src/components/common/ProductSliderSection.tsx
"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";

import ProductCard from "../product/ProductCard";
import MouseFollowTooltip from "./MouseFollowTooltip";
import QuickView from "./QuickView";
import { Product } from "@/types";

interface ProductSliderSectionProps {
  title: string;
  products: Product[];
  viewAllLink: string;
  viewAllText?: string;
  emblaOptions?: EmblaOptionsType;
  showDragTooltip?: boolean;
}

const ProductSliderSection: React.FC<ProductSliderSectionProps> = ({
  title,
  products = [],
  viewAllLink,
  viewAllText = "View all",
  emblaOptions,
  showDragTooltip = true,
}) => {
  // --- Tooltip State & Refs ---
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // --- Embla Configuration ---
  const defaultOptions: EmblaOptionsType = {
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  };
  const options = { ...defaultOptions, ...emblaOptions };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  // We don't need prev/next state if we remove the buttons
  // const [canScrollPrev, setCanScrollPrev] = useState(false);
  // const [canScrollNext, setCanScrollNext] = useState(false);

  // We don't need these callbacks if we remove the buttons
  // const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  // const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Keep onSelect if you might add other indicators later, otherwise optional
  // const onSelect = useCallback(() => {
  //   if (!emblaApi) return;
  //   setCanScrollPrev(emblaApi.canScrollPrev());
  //   setCanScrollNext(emblaApi.canScrollNext());
  // }, [emblaApi]);

  // Keep useEffect if you might add other indicators later, otherwise optional
  // useEffect(() => {
  //   if (!emblaApi) return;
  //   onSelect();
  //   emblaApi.on("select", onSelect);
  //   emblaApi.on("reInit", onSelect);
  //   return () => {
  //     emblaApi?.off("select", onSelect);
  //     emblaApi?.off("reInit", onSelect);
  //   };
  // }, [emblaApi, onSelect]);
  // --- End Embla Setup ---

  // --- Tooltip Event Handlers ---
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (tooltipRef.current && isHoveringSlider) {
        const xOffset = 15;
        const yOffset = 10;
        tooltipRef.current.style.transform = `translate(${
          event.clientX + xOffset
        }px, ${event.clientY + yOffset}px)`;
      }
    },
    [isHoveringSlider]
  );

  const handleMouseEnter = useCallback(() => {
    if (window.innerWidth >= 1024 && showDragTooltip) {
      // lg breakpoint
      setIsHoveringSlider(true);
    }
  }, [showDragTooltip]);

  const handleMouseLeave = useCallback(() => {
    if (showDragTooltip) {
      setIsHoveringSlider(false);
    }
  }, [showDragTooltip]);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };
  // --- End Tooltip Event Handlers ---

  if (!products || products.length === 0) return null;

  return (
    <section className="bg-white py-10 lg:py-16 overflow-hidden">
      {/* Section Header */}
      <header className="mb-6 lg:mb-10">
        <div className="w-full px-4 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h3 className="text-[64px] lg:text-[96px] leading-none tracking-tight font-helvetica-black text-black mb-4 lg:mb-0">
            {title}
          </h3>
          {/* Desktop Controls: Only View All Button */}
          <div className="hidden lg:flex items-center">
            {" "}
            {/* View All Button */}
            <Link href={viewAllLink} passHref>
              <button
                type="button"
                className="bg-black text-white text-xs font-medium py-2 px-4 rounded-sm hover:bg-gray-800 transition-colors whitespace-nowrap font-helvetica-compressed"
              >
                {viewAllText}
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Embla Carousel Container with Tooltip Listeners */}
      <div
        className="embla pl-4 lg:pl-10 cursor-grab active:cursor-grabbing" // Left padding for alignment
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="embla__container">
          {products.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="embla__slide pr-3 md:pr-4 lg:pr-5 xl:pr-6 w-10/12 sm:w-1/2 md:w-[40%] lg:w-[30%] xl:w-1/4 2xl:w-1/5"
            >
              <ProductCard
                product={product}
                priority={index < 4}
                showQuickView={true}
                onQuickView={handleQuickView}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View All Button */}
      <div className="px-4 lg:px-10 mt-8 lg:hidden">
        <Link href={viewAllLink} passHref>
          <button
            type="button"
            className="w-full text-center block bg-black text-white text-sm font-medium py-3 px-5 rounded-sm hover:bg-gray-800 transition-colors font-helvetica-compressed"
          >
            {viewAllText}
          </button>
        </Link>
      </div>

      {/* Tooltip */}
      {showDragTooltip && (
        <MouseFollowTooltip
          ref={tooltipRef}
          text="CLICK & DRAG" // Uppercase text
          isVisible={isHoveringSlider}
        />
      )}

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickView
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </section>
  );
};

export default ProductSliderSection;
