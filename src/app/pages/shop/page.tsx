// src/app/pages/shop/page.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";
import Filters from "@/components/shop/Filters";
import ProductGrid from "@/components/shop/ProductGrid";
import { Product } from "@/types";
import ShopMainSection from "@/components/shop/ShopMainSection"; // Import the new component

// --- Mock Data (Keep as is) ---
const mockProducts: Product[] = Array.from({ length: 12 }).map((_, i) => {
  const isSoldOut = i % 5 === 0;
  const availableForSale = !isSoldOut;
  const primaryImageUrl = `https://placehold.co/400x500/${
    i % 2 === 0 ? "E0E0E0" : "D0D0D0"
  }/black?text=Shoe+${i + 1}`;

  return {
    id: `mock-${i + 1}`,
    handle: `mock-shoe-${i + 1}`,
    title: `Patta Awesome Mock Shoe ${i + 1}`,
    vendor: i % 4 === 0 ? "Nike" : i % 4 === 1 ? "Adidas" : "Patta",
    price: {
      amount: 10000 + i * 1500,
      currencyCode: "EUR",
    },
    images: [
      { src: primaryImageUrl, alt: `Placeholder image for Shoe ${i + 1}` },
      {
        src: `https://placehold.co/400x500/C0C0C0/black?text=Angle+2`,
        alt: `Shoe ${i + 1} angle 2`,
      },
    ],
    variants: [
      {
        id: `variant-${i}-a`,
        available: availableForSale,
        price: 10000 + i * 1500,
        title: "EU 40",
      },
      {
        id: `variant-${i}-b`,
        available: i % 3 !== 0 && availableForSale,
        price: 10000 + i * 1500,
        title: "EU 42",
      },
      {
        id: `variant-${i}-c`,
        available: i % 2 === 0 && availableForSale,
        price: 10000 + i * 1500,
        title: "EU 44",
      },
      {
        id: `variant-${i}-d`,
        available: i % 4 !== 0 && availableForSale,
        price: 10000 + i * 1500,
        title: "EU 46",
      },
    ],
    featuredImage: {
      src: primaryImageUrl,
      alt: `Placeholder image for Shoe ${i + 1}`,
    },
    hoverImageUrl:
      i % 3 === 0
        ? `https://placehold.co/400x500/A0A0A0/white?text=Hover+${i + 1}`
        : undefined,
    availableForSale: availableForSale,
    isNew: i < 4,
    isSoldOut: isSoldOut,
    colorName:
      i % 3 === 0 ? "Black/White" : i % 3 === 1 ? "Stadium Green" : "Beige",
    tags: i % 2 === 0 ? ["New", "Featured"] : ["SS25"],
  };
});
// --- End Mock Data ---

// Define available brands and sizes
const AVAILABLE_BRANDS = ["Nike", "Adidas", "Patta", "Mock Brand"];
const AVAILABLE_SIZES = ["38", "39", "40", "41", "42", "43", "44", "45", "46"];

export default function ShopPage() {
  // === State ===
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);

  // === Filter Handlers ===
  const handleBrandChange = (brand: string, isChecked: boolean) => {
    setSelectedBrands((prev) =>
      isChecked ? [...prev, brand] : prev.filter((b) => b !== brand)
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
  };

  // === Filtering Logic ===
  const productsToDisplay = useMemo(() => {
    return mockProducts.filter((product) => {
      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(product.vendor);

      const sizeMatch =
        selectedSizes.length === 0 ||
        product.variants.some((variant) =>
          selectedSizes.includes(variant.title.replace("EU ", ""))
        );

      return brandMatch && sizeMatch;
    });
  }, [selectedBrands, selectedSizes]);

  return (
    <div>
      <ShopMainSection /> {/* Render the new component */}
      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-6 lg:mb-8">
          Shop Footwear
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <aside className="w-full lg:w-1/4 xl:w-1/5 flex-shrink-0">
            <Filters
              availableBrands={AVAILABLE_BRANDS}
              selectedBrands={selectedBrands}
              onBrandChange={handleBrandChange}
              availableSizes={AVAILABLE_SIZES}
              selectedSizes={selectedSizes}
              onSizeChange={handleSizeChange}
              onClearFilters={handleClearFilters}
            />
          </aside>
          <section className="w-full">
            <ProductGrid products={productsToDisplay} />
          </section>
        </div>
      </div>
    </div>
  );
}
