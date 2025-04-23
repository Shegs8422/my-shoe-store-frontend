// src/app/(pages)/page.tsx
"use client";
import React, { useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import ProductSliderSection from "@/components/common/ProductSliderSection"; // Updated Import Path
import { Product, LegacyProduct } from "@/types"; // Ensure types are imported/defined

// --- Placeholder Data (Keep LegacyProduct for FeaturedCollection) ---
const placeholderProducts: LegacyProduct[] = [
  // ... (Legacy product data)
  {
    id: "prod1",
    handle: "patta-femme-baby-t-shirt-black",
    vendor: "Patta",
    title: "Patta Femme Baby T-Shirt (Black)",
    imageUrl: "/images/products/femme-t-shirt-black.webp",
    imageAlt: "Patta Femme Baby T-Shirt Black",
    price: { amount: "45.00", currencyCode: "EUR" },
    isSoldOut: true,
    isNew: true,
  },
  {
    id: "prod2",
    handle: "patta-tricot-track-jacket-chestnut",
    vendor: "Patta",
    title: "Patta Tricot Track Jacket (Chestnut)",
    imageUrl: "/images/products/track-jacket.webp",
    imageAlt: "Patta Tricot Track Jacket Chestnut",
    price: { amount: "120.00", currencyCode: "EUR" },
    isNew: true,
  },
  {
    id: "prod3",
    handle: "patta-bark-t-shirt-black",
    vendor: "Patta",
    title: "Patta Bark T-Shirt (Black)",
    imageUrl: "/images/products/bark-t.webp",
    imageAlt: "Patta Bark T-Shirt Black",
    price: { amount: "60.00", currencyCode: "EUR" },
    isNew: true,
  },
  {
    id: "prod4",
    handle: "patta-2getha4eva-denim-pants-light-blue-denim",
    vendor: "Patta",
    title: "Patta 2Getha4Eva Denim Pants (Light Blue Denim)",
    imageUrl: "/images/placeholder-denim.jpg",
    imageAlt: "Patta 2Getha4Eva Denim Pants",
    price: { amount: "160.00", currencyCode: "EUR" },
    isNew: true,
  },
  {
    id: "prod5",
    handle: "patta-classic-logo-hoodie-grey-melange",
    vendor: "Patta",
    title: "Patta Classic Logo Hoodie (Grey Melange)",
    imageUrl: "/images/products/logo-hoodie-grey.webp",
    imageAlt: "Patta Classic Logo Hoodie Grey Melange",
    price: { amount: "100.00", currencyCode: "EUR" },
    isNew: false,
  },
  {
    id: "prod6",
    handle: "patta-cargo-pants-olive",
    vendor: "Patta",
    title: "Patta Cargo Pants (Olive)",
    imageUrl: "/images/products/cargo-pants-olive.webp",
    imageAlt: "Patta Cargo Pants Olive",
    price: { amount: "140.00", currencyCode: "EUR" },
    isNew: true,
  },
];

const featuredCollectionData = {
  mainImageSrc: "/images/pexels-frendsmans-1926769.jpg",
  mainImageAlt: "Featured Collection Look",
  products: placeholderProducts, // Uses legacy data
  collectionLink: "/collections/patta-spring-summer-2025-drop-3",
};
// --- End Legacy Data ---

// --- Updated New Arrivals Data (Ensure it matches Product type) ---
const newArrivalsDemoData: Product[] = [
  // ... (Paste the updated newArrivalsDemoData array from step 2 here) ...
  {
    id: "aj3-rare-air",
    handle: "nike-air-jordan-3-retro-og-sp-rare-air",
    vendor: "Jordan",
    title: "Nike Air Jordan 3 Retro OG Sp 'Rare Air'",
    colorName: "Black/Chile Red-Neutral Grey",
    price: { amount: 21000, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-jordan3.jpg",
    hoverImageUrl: "/images/products/placeholder-jordan3-hover.jpg",
    images: [
      { src: "/images/products/placeholder-jordan3.jpg", alt: "Shoe 1" },
    ],
    variants: [{ id: "v1a", price: 21000, available: true, title: "US 9" }],
    isNew: true,
    isSoldOut: false,
  },
  {
    id: "aj1-rookie",
    handle: "nike-air-jordan-1-low-og-rookie-of-the-year",
    vendor: "Jordan",
    title: "Nike Air Jordan 1 Low OG 'Rookie of the year'",
    colorName: "Yellow/Black/White",
    price: { amount: 16000, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-jordan1-low.jpg",
    hoverImageUrl: "/images/products/placeholder-jordan1-low-hover.jpg",
    images: [
      { src: "/images/products/placeholder-jordan1-low.jpg", alt: "Shoe 2" },
    ],
    variants: [{ id: "v2a", price: 16000, available: true, title: "US 10" }],
    isNew: true,
    isSoldOut: false,
  },
  {
    id: "adidas-clot-shorts",
    handle: "adidas-clot-crochet-shorts-carbon",
    vendor: "Adidas",
    title: "adidas Clot Crochet Shorts by Edison Chen 'Carbon'",
    colorName: "Grey/Multi",
    price: { amount: 15000, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-shorts.jpg",
    hoverImageUrl: "/images/products/placeholder-shorts-hover.jpg",
    images: [{ src: "/images/products/placeholder-shorts.jpg", alt: "Shorts" }],
    variants: [{ id: "v3a", price: 15000, available: true, title: "M" }],
    isNew: true,
    isSoldOut: false,
  },
  {
    id: "adidas-clot-gazelle",
    handle: "adidas-clot-gazelle-cream-white",
    vendor: "Adidas",
    title: "adidas Clot Gazelle Shoes by Edison Chen 'Cream White'",
    colorName: "Cream White/Black",
    price: { amount: 16000, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-gazelle.jpg",
    hoverImageUrl: "/images/products/placeholder-gazelle-hover.jpg",
    images: [
      { src: "/images/products/placeholder-gazelle.jpg", alt: "Gazelle" },
    ],
    variants: [{ id: "v4a", price: 16000, available: true, title: "US 9" }],
    isNew: true,
    isSoldOut: false,
  },
  {
    id: "nb-990v6-grey",
    handle: "new-balance-990v6-made-in-usa-grey",
    vendor: "New Balance",
    title: "New Balance 990v6 Made in USA 'Grey'",
    colorName: "Grey/Navy",
    price: { amount: 22000, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-nb990v6.jpg",
    hoverImageUrl: "/images/products/placeholder-nb990v6-hover.jpg",
    images: [
      { src: "/images/products/placeholder-nb990v6.jpg", alt: "NB 990v6 Grey" },
    ],
    variants: [
      { id: "v-990v6-10", price: 22000, available: true, title: "US 10" },
    ],
    isNew: true,
    isSoldOut: false,
  },
  {
    id: "nike-vomero-5-sail",
    handle: "nike-zoom-vomero-5-sail-light-orewood",
    vendor: "Nike",
    title: "Nike Zoom Vomero 5 'Sail Light Orewood'",
    colorName: "Sail/Light Orewood Brown",
    price: { amount: 16000, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-vomero5.jpg",
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
  },
  {
    id: "asics-gel-kayano-14-white",
    handle: "asics-gel-kayano-14-white-pure-silver",
    vendor: "ASICS",
    title: "ASICS Gel-Kayano 14 'White Pure Silver'",
    colorName: "White/Pure Silver",
    price: { amount: 15000, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-kayano14.jpg",
    hoverImageUrl: "/images/products/placeholder-kayano14-hover.jpg",
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
  },
  {
    id: "patta-basic-hoodie-black",
    handle: "patta-basic-logo-hooded-sweater-black",
    vendor: "Patta",
    title: "Patta Basic Logo Hooded Sweater (Black)",
    colorName: "Black",
    price: { amount: 11000, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-patta-hoodie.jpg",
    images: [
      {
        src: "/images/products/placeholder-patta-hoodie.jpg",
        alt: "Patta Hoodie Black",
      },
    ],
    variants: [{ id: "v-hoodie-l", price: 11000, available: true, title: "L" }],
    isNew: false,
    isSoldOut: false,
  },
  {
    id: "salomon-xt6-black",
    handle: "salomon-xt-6-black-phantom",
    vendor: "Salomon",
    title: "Salomon XT-6 'Black Phantom'",
    colorName: "Black/Phantom",
    price: { amount: 17500, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-xt6.jpg",
    images: [
      { src: "/images/products/placeholder-xt6.jpg", alt: "Salomon XT-6" },
    ],
    variants: [
      { id: "v-xt6-1", price: 17500, available: true, title: "US 10" },
    ],
    isNew: true,
    isSoldOut: false,
  },
  {
    id: "adidas-samba-og-white",
    handle: "adidas-samba-og-cloud-white-core-black",
    vendor: "Adidas",
    title: "adidas Samba OG 'Cloud White Core Black'",
    colorName: "Cloud White/Core Black",
    price: { amount: 12000, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-samba.jpg",
    hoverImageUrl: "/images/products/placeholder-samba-hover.jpg",
    images: [
      {
        src: "/images/products/placeholder-samba.jpg",
        alt: "Adidas Samba White",
      },
    ],
    variants: [
      { id: "v-samba-1", price: 12000, available: true, title: "US 9" },
    ],
    isNew: false,
    isSoldOut: false,
  },
  {
    id: "patta-script-tee-white",
    handle: "patta-script-logo-t-shirt-white",
    vendor: "Patta",
    title: "Patta Script Logo T-Shirt (White)",
    colorName: "White",
    price: { amount: 5000, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-patta-tee.jpg",
    images: [
      {
        src: "/images/products/placeholder-patta-tee.jpg",
        alt: "Patta Tee White",
      },
    ],
    variants: [{ id: "v-tee-m", price: 5000, available: true, title: "M" }],
    isNew: true,
    isSoldOut: false,
  },
  {
    id: "nike-air-force-1-07-white",
    handle: "nike-air-force-1-07-white-white",
    vendor: "Nike",
    title: "Nike Air Force 1 '07 'Triple White'",
    colorName: "White/White",
    price: { amount: 12000, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-af1.jpg",
    images: [
      { src: "/images/products/placeholder-af1.jpg", alt: "Nike AF1 White" },
    ],
    variants: [
      { id: "v-af1-1", price: 12000, available: true, title: "US 10" },
    ],
    isNew: false,
    isSoldOut: false,
  },
  {
    id: "hoka-bondi-8-black",
    handle: "hoka-bondi-8-black-black",
    vendor: "HOKA",
    title: "HOKA Bondi 8 'Triple Black'",
    colorName: "Black/Black",
    price: { amount: 16500, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-hoka-bondi.jpg",
    images: [
      {
        src: "/images/products/placeholder-hoka-bondi.jpg",
        alt: "Hoka Bondi 8",
      },
    ],
    variants: [
      { id: "v-hoka-1", price: 16500, available: true, title: "US 9.5" },
    ],
    isNew: true,
    isSoldOut: false,
  },
  {
    id: "patta-beanie-black",
    handle: "patta-script-logo-beanie-black",
    vendor: "Patta",
    title: "Patta Script Logo Beanie (Black)",
    colorName: "Black",
    price: { amount: 3500, currencyCode: "EUR" },
    imageUrl: "/images/products/placeholder-patta-beanie.jpg",
    images: [
      {
        src: "/images/products/placeholder-patta-beanie.jpg",
        alt: "Patta Beanie",
      },
    ],
    variants: [
      { id: "v-beanie-1", price: 3500, available: true, title: "One Size" },
    ],
    isNew: false,
    isSoldOut: false,
  },
];
// --- END DEMO DATA ---

const HomePage = () => {
  // Ref for FeaturedCollection (keep if needed by that component)
  const featuredCollectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <HeroSection />

      {/* Render Existing Featured Collection (using legacy data for now) */}
      <FeaturedCollection
        ref={featuredCollectionRef}
        mainImageSrc={featuredCollectionData.mainImageSrc}
        mainImageAlt={featuredCollectionData.mainImageAlt}
        products={featuredCollectionData.products}
        collectionLink={featuredCollectionData.collectionLink}
      />

      {/* --- Render New Arrivals using the UPDATED slider --- */}
      <ProductSliderSection
        title="New Arrivals" // Or "New Easter Arrivals" etc.
        products={newArrivalsDemoData} // Use the data formatted for the Product type
        viewAllLink="/collections/new-arrivals" // Link for the "View All" button
        showDragTooltip={true} // Explicitly enable the tooltip effect
      />
      {/* --- End New Arrivals --- */}

      {/* Add other homepage sections here */}
    </>
  );
};

export default HomePage;
