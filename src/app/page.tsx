// src/app/(pages)/page.tsx
"use client";
import React, { useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import ProductSliderSection from "@/components/common/ProductSliderSection";
import { collections } from "@/lib/mock-data";

// Helper function to duplicate products if needed
const ensureMinimumProducts = (products: any[], minCount: number) => {
  if (products.length >= minCount) return products.slice(0, minCount);

  const result = [...products];
  while (result.length < minCount) {
    result.push(
      ...products.slice(0, Math.min(products.length, minCount - result.length))
    );
  }
  return result;
};

export default function HomePage() {
  const featuredCollectionRef = useRef<HTMLElement>(null);

  // Ensure we have at least 12 products for each section
  const onlineExclusives = ensureMinimumProducts(
    collections.onlineExclusives,
    12
  );
  const comingSoonProducts = ensureMinimumProducts(collections.comingSoon, 12);
  const newArrivals = ensureMinimumProducts(collections.newArrivals, 12);

  return (
    <main className="min-h-screen relative z-0">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Collection */}
      <FeaturedCollection
        ref={featuredCollectionRef}
        products={newArrivals.slice(0, 4)}
        mainImageSrc="/images/pexels-frendsmans-1926769.jpg"
        mainImageAlt="Featured New Arrivals Collection"
        collectionLink="/collections/new-arrivals"
      />

      {/* New Arrivals Slider */}
      <ProductSliderSection
        title="New Arrivals"
        products={newArrivals}
        viewAllLink="/collections/new-arrivals"
      />

      {/* Online Exclusives Slider */}
      <ProductSliderSection
        title="Online Exclusives"
        products={onlineExclusives}
        viewAllLink="/collections/online-exclusives"
      />

      {/* Coming Soon Slider */}
      <ProductSliderSection
        title="Coming Soon"
        products={comingSoonProducts}
        viewAllLink="/collections/coming-soon"
      />
    </main>
  );
}
