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

export interface Product {
  id: string;
  handle: string;
  vendor?: string;
  title: string;
  colorName?: string;
  price: {
    amount: number;
    currencyCode: string;
  };
  images?: Array<{
    src: string;
    alt: string;
  }>;
  variants?: Array<{
    id: string;
    price: number;
    available: boolean;
    title: string;
  }>;
  isNew?: boolean;
  isSoldOut?: boolean;
  comingSoon?: boolean;
  isOnlineExclusive?: boolean;
  featuredImage?: {
    src: string;
    alt: string;
  };
  hoverImageUrl?: string;
}

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

export interface NavLink {
  label: string;
  href: string;
  badge?: string | null;
  isNew?: boolean;
}
