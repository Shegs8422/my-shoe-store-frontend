// src/types/index.ts (or wherever your Product type is defined)

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductVariant = {
  id: string; // Essential
  title?: string; // e.g., "US 8 / EU 41"
  available: boolean; // Essential
  price: number; // Price in cents/smallest unit
  // Add other variant properties if needed: sku, inventory_quantity, etc.
};

export type ProductPrice = {
  amount: number; // Price in cents/smallest unit
  currencyCode: string; // e.g., "EUR", "USD"
};

export type Product = {
  id: string; // Essential for keys
  handle: string; // Essential for links
  title: string; // Essential for display
  vendor?: string; // Optional but common
  description?: string; // Optional
  images: ProductImage[]; // **Required** (at least one) for ProductCard
  variants: ProductVariant[]; // **Required** (at least one) for ProductCard/logic
  price: ProductPrice; // Main display price (often the min variant price)
  // Optional fields often used for display/logic:
  options?: { name: string; values: string[] }[]; // e.g., { name: 'Size', values: ['S', 'M'] }
  featuredImage?: ProductImage; // Often same as images[0]
  hoverImageUrl?: string; // Optional for hover effect
  colorName?: string; // Optional for display
  isNew?: boolean; // Optional for 'New' badge
  isSoldOut?: boolean; // Optional for 'Sold Out' state (often derived from variants)
  tags?: string[]; // Optional
  // Add any other fields coming from your backend (Vendure)
};

// Keep LegacyProduct if still needed by FeaturedCollection
export type LegacyProduct = {
  id: string;
  handle: string;
  vendor: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  price: { amount: string; currencyCode: string }; // Note: amount is string here
  isSoldOut?: boolean;
  isNew?: boolean;
};
