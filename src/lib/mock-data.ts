import { Product } from "@/types";

export const mockProducts: Product[] = [
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
  {
    id: "patta-script-logo-tee-black",
    handle: "patta-script-logo-t-shirt-black",
    vendor: "Patta",
    title: "Patta Script Logo T-Shirt",
    colorName: "Black",
    price: { amount: 4500, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-tee-black.jpg",
        alt: "Black T-Shirt",
      },
    ],
    variants: [
      { id: "v-tee-s", price: 4500, available: true, title: "S" },
      { id: "v-tee-m", price: 4500, available: true, title: "M" },
      { id: "v-tee-l", price: 4500, available: true, title: "L" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-tee-black.jpg",
      alt: "Black T-Shirt",
    },
    hoverImageUrl: "/images/products/placeholder-tee-black-hover.jpg",
  },
  {
    id: "patta-cargo-pants-olive",
    handle: "patta-cargo-pants-olive",
    vendor: "Patta",
    title: "Patta Cargo Pants",
    colorName: "Olive",
    price: { amount: 14000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-cargo-olive.jpg",
        alt: "Cargo Pants",
      },
    ],
    variants: [
      { id: "v-cargo-30", price: 14000, available: true, title: "30" },
      { id: "v-cargo-32", price: 14000, available: true, title: "32" },
      { id: "v-cargo-34", price: 14000, available: false, title: "34" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-cargo-olive.jpg",
      alt: "Cargo Pants",
    },
    hoverImageUrl: "/images/products/placeholder-cargo-olive-hover.jpg",
  },
  {
    id: "patta-running-shorts-black",
    handle: "patta-running-shorts-black",
    vendor: "Patta",
    title: "Patta Running Shorts",
    colorName: "Black",
    price: { amount: 7000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-shorts-black.jpg",
        alt: "Running Shorts",
      },
    ],
    variants: [
      { id: "v-shorts-s", price: 7000, available: true, title: "S" },
      { id: "v-shorts-m", price: 7000, available: true, title: "M" },
      { id: "v-shorts-l", price: 7000, available: true, title: "L" },
    ],
    isNew: true,
    isSoldOut: false,
    isOnlineExclusive: true,
    featuredImage: {
      src: "/images/products/placeholder-shorts-black.jpg",
      alt: "Running Shorts",
    },
    hoverImageUrl: "/images/products/placeholder-shorts-black-hover.jpg",
  },
  {
    id: "patta-varsity-jacket-navy",
    handle: "patta-varsity-jacket-navy",
    vendor: "Patta",
    title: "Patta Varsity Jacket",
    colorName: "Navy",
    price: { amount: 25000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-varsity-navy.jpg",
        alt: "Varsity Jacket",
      },
    ],
    variants: [
      { id: "v-varsity-m", price: 25000, available: true, title: "M" },
      { id: "v-varsity-l", price: 25000, available: true, title: "L" },
      { id: "v-varsity-xl", price: 25000, available: true, title: "XL" },
    ],
    isNew: true,
    isSoldOut: false,
    comingSoon: true,
    featuredImage: {
      src: "/images/products/placeholder-varsity-navy.jpg",
      alt: "Varsity Jacket",
    },
    hoverImageUrl: "/images/products/placeholder-varsity-navy-hover.jpg",
  },
  {
    id: "patta-beanie-grey",
    handle: "patta-script-logo-beanie-grey",
    vendor: "Patta",
    title: "Patta Script Logo Beanie",
    colorName: "Grey",
    price: { amount: 3500, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-beanie-grey.jpg",
        alt: "Grey Beanie",
      },
    ],
    variants: [
      { id: "v-beanie-os", price: 3500, available: true, title: "One Size" },
    ],
    isNew: false,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-beanie-grey.jpg",
      alt: "Grey Beanie",
    },
    hoverImageUrl: "/images/products/placeholder-beanie-grey-hover.jpg",
  },
  {
    id: "patta-backpack-black",
    handle: "patta-backpack-black",
    vendor: "Patta",
    title: "Patta Backpack",
    colorName: "Black",
    price: { amount: 12000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-backpack-black.jpg",
        alt: "Black Backpack",
      },
    ],
    variants: [
      { id: "v-backpack-os", price: 12000, available: true, title: "One Size" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-backpack-black.jpg",
      alt: "Black Backpack",
    },
    hoverImageUrl: "/images/products/placeholder-backpack-black-hover.jpg",
  },
  {
    id: "patta-hoodie-black",
    handle: "patta-script-logo-hoodie-black",
    vendor: "Patta",
    title: "Patta Script Logo Hoodie",
    colorName: "Black",
    price: { amount: 12000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-hoodie-black.jpg",
        alt: "Black Hoodie",
      },
    ],
    variants: [
      { id: "v-hoodie-s", price: 12000, available: true, title: "S" },
      { id: "v-hoodie-m", price: 12000, available: true, title: "M" },
      { id: "v-hoodie-l", price: 12000, available: true, title: "L" },
      { id: "v-hoodie-xl", price: 12000, available: true, title: "XL" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-hoodie-black.jpg",
      alt: "Black Hoodie",
    },
    hoverImageUrl: "/images/products/placeholder-hoodie-black-hover.jpg",
  },
  {
    id: "patta-track-jacket-red",
    handle: "patta-track-jacket-red",
    vendor: "Patta",
    title: "Patta Track Jacket",
    colorName: "Red",
    price: { amount: 13000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-track-red.jpg",
        alt: "Red Track Jacket",
      },
    ],
    variants: [
      { id: "v-track-s", price: 13000, available: true, title: "S" },
      { id: "v-track-m", price: 13000, available: true, title: "M" },
      { id: "v-track-l", price: 13000, available: false, title: "L" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-track-red.jpg",
      alt: "Red Track Jacket",
    },
    hoverImageUrl: "/images/products/placeholder-track-red-hover.jpg",
  },
  {
    id: "patta-cap-navy",
    handle: "patta-script-logo-cap-navy",
    vendor: "Patta",
    title: "Patta Script Logo Cap",
    colorName: "Navy",
    price: { amount: 4500, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-cap-navy.jpg", alt: "Navy Cap" },
    ],
    variants: [
      { id: "v-cap-os", price: 4500, available: true, title: "One Size" },
    ],
    isNew: false,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-cap-navy.jpg",
      alt: "Navy Cap",
    },
    hoverImageUrl: "/images/products/placeholder-cap-navy-hover.jpg",
  },
  {
    id: "patta-socks-white",
    handle: "patta-script-logo-socks-white",
    vendor: "Patta",
    title: "Patta Script Logo Socks",
    colorName: "White",
    price: { amount: 1500, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-socks-white.jpg",
        alt: "White Socks",
      },
    ],
    variants: [
      { id: "v-socks-os", price: 1500, available: true, title: "One Size" },
    ],
    isNew: false,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-socks-white.jpg",
      alt: "White Socks",
    },
  },
  {
    id: "nike-dunk-low-grey",
    handle: "nike-dunk-low-grey-fog",
    vendor: "Nike",
    title: "Nike Dunk Low 'Grey Fog'",
    colorName: "Grey Fog/White",
    price: { amount: 12000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-dunk-grey.jpg",
        alt: "Grey Dunk Low",
      },
    ],
    variants: [
      { id: "v-dunk-8", price: 12000, available: true, title: "US 8" },
      { id: "v-dunk-9", price: 12000, available: true, title: "US 9" },
      { id: "v-dunk-10", price: 12000, available: true, title: "US 10" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-dunk-grey.jpg",
      alt: "Grey Dunk Low",
    },
    hoverImageUrl: "/images/products/placeholder-dunk-grey-hover.jpg",
  },
  {
    id: "patta-sweatpants-grey",
    handle: "patta-script-logo-sweatpants-grey",
    vendor: "Patta",
    title: "Patta Script Logo Sweatpants",
    colorName: "Grey Melange",
    price: { amount: 9000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-sweatpants-grey.jpg",
        alt: "Grey Sweatpants",
      },
    ],
    variants: [
      { id: "v-sweat-s", price: 9000, available: true, title: "S" },
      { id: "v-sweat-m", price: 9000, available: true, title: "M" },
      { id: "v-sweat-l", price: 9000, available: true, title: "L" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-sweatpants-grey.jpg",
      alt: "Grey Sweatpants",
    },
    hoverImageUrl: "/images/products/placeholder-sweatpants-grey-hover.jpg",
  },
  {
    id: "patta-longsleeve-white",
    handle: "patta-script-logo-longsleeve-white",
    vendor: "Patta",
    title: "Patta Script Logo Longsleeve",
    colorName: "White",
    price: { amount: 5500, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-longsleeve-white.jpg",
        alt: "White Longsleeve",
      },
    ],
    variants: [
      { id: "v-long-s", price: 5500, available: true, title: "S" },
      { id: "v-long-m", price: 5500, available: true, title: "M" },
      { id: "v-long-l", price: 5500, available: false, title: "L" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-longsleeve-white.jpg",
      alt: "White Longsleeve",
    },
    hoverImageUrl: "/images/products/placeholder-longsleeve-white-hover.jpg",
  },
  {
    id: "patta-tote-black",
    handle: "patta-script-logo-tote-black",
    vendor: "Patta",
    title: "Patta Script Logo Tote Bag",
    colorName: "Black",
    price: { amount: 3000, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-tote-black.jpg", alt: "Black Tote" },
    ],
    variants: [
      { id: "v-tote-os", price: 3000, available: true, title: "One Size" },
    ],
    isNew: false,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-tote-black.jpg",
      alt: "Black Tote",
    },
    hoverImageUrl: "/images/products/placeholder-tote-black-hover.jpg",
  },
  {
    id: "patta-wallet-brown",
    handle: "patta-leather-wallet-brown",
    vendor: "Patta",
    title: "Patta Leather Wallet",
    colorName: "Brown",
    price: { amount: 6000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-wallet-brown.jpg",
        alt: "Brown Wallet",
      },
    ],
    variants: [
      { id: "v-wallet-os", price: 6000, available: true, title: "One Size" },
    ],
    isNew: true,
    isSoldOut: false,
    isOnlineExclusive: true,
    featuredImage: {
      src: "/images/products/placeholder-wallet-brown.jpg",
      alt: "Brown Wallet",
    },
    hoverImageUrl: "/images/products/placeholder-wallet-brown-hover.jpg",
  },
  {
    id: "patta-keychain-silver",
    handle: "patta-script-logo-keychain-silver",
    vendor: "Patta",
    title: "Patta Script Logo Keychain",
    colorName: "Silver",
    price: { amount: 2000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-keychain-silver.jpg",
        alt: "Silver Keychain",
      },
    ],
    variants: [
      { id: "v-key-os", price: 2000, available: true, title: "One Size" },
    ],
    isNew: false,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-keychain-silver.jpg",
      alt: "Silver Keychain",
    },
  },
  {
    id: "patta-sticker-pack",
    handle: "patta-logo-sticker-pack",
    vendor: "Patta",
    title: "Patta Logo Sticker Pack",
    colorName: "Multi",
    price: { amount: 500, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-stickers.jpg", alt: "Sticker Pack" },
    ],
    variants: [
      { id: "v-sticker-os", price: 500, available: true, title: "One Size" },
    ],
    isNew: false,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-stickers.jpg",
      alt: "Sticker Pack",
    },
  },
  {
    id: "patta-phone-case-clear",
    handle: "patta-script-logo-phone-case-clear",
    vendor: "Patta",
    title: "Patta Script Logo Phone Case",
    colorName: "Clear",
    price: { amount: 2500, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-phone-case.jpg", alt: "Phone Case" },
    ],
    variants: [
      { id: "v-case-13", price: 2500, available: true, title: "iPhone 13" },
      { id: "v-case-14", price: 2500, available: true, title: "iPhone 14" },
      { id: "v-case-15", price: 2500, available: true, title: "iPhone 15" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-phone-case.jpg",
      alt: "Phone Case",
    },
    hoverImageUrl: "/images/products/placeholder-phone-case-hover.jpg",
  },
  {
    id: "patta-water-bottle",
    handle: "patta-script-logo-water-bottle",
    vendor: "Patta",
    title: "Patta Script Logo Water Bottle",
    colorName: "Black",
    price: { amount: 3500, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-water-bottle.jpg",
        alt: "Water Bottle",
      },
    ],
    variants: [
      { id: "v-bottle-os", price: 3500, available: true, title: "One Size" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-water-bottle.jpg",
      alt: "Water Bottle",
    },
    hoverImageUrl: "/images/products/placeholder-water-bottle-hover.jpg",
  },
  {
    id: "patta-sunglasses-black",
    handle: "patta-script-logo-sunglasses-black",
    vendor: "Patta",
    title: "Patta Script Logo Sunglasses",
    colorName: "Black",
    price: { amount: 8000, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-sunglasses.jpg", alt: "Sunglasses" },
    ],
    variants: [
      { id: "v-sun-os", price: 8000, available: true, title: "One Size" },
    ],
    isNew: true,
    isSoldOut: false,
    isOnlineExclusive: true,
    featuredImage: {
      src: "/images/products/placeholder-sunglasses.jpg",
      alt: "Sunglasses",
    },
    hoverImageUrl: "/images/products/placeholder-sunglasses-hover.jpg",
  },
];

// Helper functions to filter products
export const getNewArrivals = () =>
  mockProducts.filter((product) => product.isNew);
export const getOnlineExclusives = () =>
  mockProducts.filter((product) => product.isOnlineExclusive);
export const getComingSoon = () =>
  mockProducts.filter((product) => product.comingSoon);
export const getByVendor = (vendor: string) =>
  mockProducts.filter((product) => product.vendor === vendor);

// Category definitions
export type ProductCategory = "footwear" | "clothing" | "accessories";

export const getByCategory = (category: ProductCategory) => {
  const categoryMap: Record<ProductCategory, (product: Product) => boolean> = {
    footwear: (p) =>
      ["Nike", "Jordan", "Adidas", "New Balance", "ASICS"].includes(
        p.vendor || ""
      ),
    clothing: (p) =>
      [
        "T-Shirt",
        "Hoodie",
        "Jacket",
        "Pants",
        "Shorts",
        "Longsleeve",
        "Sweatpants",
      ].some((item) => p.title.includes(item)),
    accessories: (p) =>
      [
        "Cap",
        "Beanie",
        "Socks",
        "Backpack",
        "Wallet",
        "Keychain",
        "Phone Case",
        "Water Bottle",
        "Sunglasses",
        "Tote",
      ].some((item) => p.title.includes(item)),
  };
  return mockProducts.filter(categoryMap[category] || (() => false));
};

// Price filters
export const getByPriceRange = (min: number, max: number) =>
  mockProducts.filter(
    (product) => product.price.amount >= min && product.price.amount <= max
  );

// Availability filters
export const getInStock = () =>
  mockProducts.filter((product) => !product.isSoldOut);
export const getSoldOut = () =>
  mockProducts.filter((product) => product.isSoldOut);

// Pre-filtered collections for easy access
export const collections = {
  newArrivals: getNewArrivals(),
  onlineExclusives: getOnlineExclusives(),
  comingSoon: getComingSoon(),
  footwear: getByCategory("footwear"),
  clothing: getByCategory("clothing"),
  accessories: getByCategory("accessories"),
  pattaProducts: getByVendor("Patta"),
  inStock: getInStock(),
  soldOut: getSoldOut(),
} as const;

// Types for the collections
export type CollectionKey = keyof typeof collections;

// Search function
export const searchProducts = (query: string) => {
  const searchTerms = query.toLowerCase().split(" ");
  return mockProducts.filter((product) => {
    const searchableText = `
      ${product.title} 
      ${product.vendor} 
      ${product.colorName} 
      ${product.handle}
    `.toLowerCase();

    return searchTerms.every((term) => searchableText.includes(term));
  });
};
