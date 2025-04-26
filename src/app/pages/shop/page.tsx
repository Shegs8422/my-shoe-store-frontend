// src/app/pages/shop/page.tsx
"use client";

import React from "react";
import ShopMainSection from "@/components/shop/ShopMainSection";
import NewArrivalsSection from "@/components/shop/NewArrivalsSection";
import VideoSection from "@/components/shop/VideoSection";
import { Product } from "@/types";
import LatestFootwearSection from "@/components/shop/LatestFootwearSection";

// --- Mock Data (Using the same data as homepage) ---
const mockProducts: Product[] = [
  {
    id: "aj3-rare-air",
    handle: "nike-air-jordan-3-retro-og-sp-rare-air",
    vendor: "Jordan",
    title: "Nike Air Jordan 3 Retro OG Sp 'Rare Air'",
    colorName: "Black/Chile Red-Neutral Grey",
    price: { amount: 21000, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-jordan3.jpg", alt: "Shoe 1" },
    ],
    variants: [{ id: "v1a", price: 21000, available: true, title: "US 9" }],
    isNew: true,
    isSoldOut: false,
    comingSoon: true,
    featuredImage: {
      src: "/images/products/placeholder-jordan3.jpg",
      alt: "Shoe 1",
    },
    hoverImageUrl: "/images/products/placeholder-jordan3-hover.jpg",
  },
  {
    id: "aj1-rookie",
    handle: "nike-air-jordan-1-low-og-rookie-of-the-year",
    vendor: "Jordan",
    title: "Nike Air Jordan 1 Low OG 'Rookie of the year'",
    colorName: "Yellow/Black/White",
    price: { amount: 16000, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-jordan1-low.jpg", alt: "Shoe 2" },
    ],
    variants: [{ id: "v2a", price: 16000, available: true, title: "US 10" }],
    isNew: true,
    isSoldOut: false,
    isOnlineExclusive: true,
    featuredImage: {
      src: "/images/products/placeholder-jordan1-low.jpg",
      alt: "Shoe 2",
    },
    hoverImageUrl: "/images/products/placeholder-jordan1-low-hover.jpg",
  },
  {
    id: "adidas-clot-gazelle",
    handle: "adidas-clot-gazelle-cream-white",
    vendor: "Adidas",
    title: "adidas Clot Gazelle Shoes by Edison Chen 'Cream White'",
    colorName: "Cream White/Black",
    price: { amount: 16000, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-gazelle.jpg", alt: "Gazelle" },
    ],
    variants: [{ id: "v4a", price: 16000, available: true, title: "US 9" }],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-gazelle.jpg",
      alt: "Gazelle",
    },
    hoverImageUrl: "/images/products/placeholder-gazelle-hover.jpg",
  },
  {
    id: "nb-990v6-grey",
    handle: "new-balance-990v6-made-in-usa-grey",
    vendor: "New Balance",
    title: "New Balance 990v6 Made in USA 'Grey'",
    colorName: "Grey/Navy",
    price: { amount: 22000, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-nb990v6.jpg", alt: "NB 990v6 Grey" },
    ],
    variants: [
      { id: "v-990v6-10", price: 22000, available: true, title: "US 10" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-nb990v6.jpg",
      alt: "NB 990v6 Grey",
    },
    hoverImageUrl: "/images/products/placeholder-nb990v6-hover.jpg",
  },
  {
    id: "nike-vomero-5-sail",
    handle: "nike-zoom-vomero-5-sail-light-orewood",
    vendor: "Nike",
    title: "Nike Zoom Vomero 5 'Sail Light Orewood'",
    colorName: "Sail/Light Orewood Brown",
    price: { amount: 16000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-vomero5.jpg",
        alt: "Nike Vomero 5 Sail",
      },
    ],
    variants: [
      { id: "v-vomero-1", price: 16000, available: true, title: "US 9" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-vomero5.jpg",
      alt: "Nike Vomero 5 Sail",
    },
  },
  {
    id: "asics-gel-kayano-14-white",
    handle: "asics-gel-kayano-14-white-pure-silver",
    vendor: "ASICS",
    title: "ASICS Gel-Kayano 14 'White Pure Silver'",
    colorName: "White/Pure Silver",
    price: { amount: 15000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-kayano14.jpg",
        alt: "Asics Kayano 14",
      },
    ],
    variants: [
      { id: "v-kayano-1", price: 15000, available: false, title: "US 8" },
    ],
    isNew: true,
    isSoldOut: true,
    featuredImage: {
      src: "/images/products/placeholder-kayano14.jpg",
      alt: "Asics Kayano 14",
    },
    hoverImageUrl: "/images/products/placeholder-kayano14-hover.jpg",
  },
];

export default function ShopPage() {
  return (
    <div>
      <ShopMainSection />
      <NewArrivalsSection products={mockProducts} />
      <VideoSection />
      <LatestFootwearSection products={mockProducts} />
    </div>
  );
}
