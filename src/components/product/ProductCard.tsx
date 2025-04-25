// src/components/product/ProductCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types"; // Import your specific Product type
import { formatPrice } from "@/lib/utils"; // Ensure this utility exists and works with numbers

interface ProductCardProps {
  product: Product; // Use the imported Product type
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Destructure directly from the product prop for clarity
  const {
    id,
    handle,
    title,
    vendor,
    price,
    images,
    hoverImageUrl,
    isNew,
    isSoldOut,
    comingSoon,
    isOnlineExclusive,
    colorName,
    featuredImage,
  } = product;

  // Use the utility function - ensure it expects a number for amount
  const formattedPrice = formatPrice(price.amount, price.currencyCode);
  const productUrl = `/product/${handle}`;

  // Get the primary image source and alt text
  const primaryImage =
    featuredImage ||
    (Array.isArray(images) && images.length > 0 ? images[0] : null); // Use featuredImage or fallback to first image
  const primaryImageUrl =
    primaryImage?.src ||
    "https://placehold.co/400x500/E0E0E0/B0B0B0?text=No+Image"; // Placeholder if no image
  const primaryImageAlt = primaryImage?.alt || title; // Use specific alt or title

  // Determine effective sold out status (often based on all variants being unavailable)
  // For now, we'll use the direct `isSoldOut` prop if provided, or `availableForSale`
  // In a real app, you'd check `product.variants.every(v => !v.available)`
  const showSoldOutBadge = isSoldOut === true;
  const showNewBadge = isNew === true;

  return (
    <article className="group relative w-full mx-auto space-y-2 flex flex-col h-full">
      {/* Image and Buttons Container */}
      <div className="relative">
        <Link href={productUrl} aria-label={`Go to ${title} product`}>
          <div className="relative overflow-hidden rounded bg-gray-100 aspect-[4/5] w-full">
            {primaryImage && ( // Conditionally render image if available
              <Image
                src={primaryImageUrl}
                alt={primaryImageAlt}
                fill
                className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                loading="lazy"
                priority={false}
              />
            )}
            {/* Hover Image (Optional) */}
            {hoverImageUrl &&
              primaryImage && ( // Only show hover if main image exists
                <Image
                  src={hoverImageUrl}
                  alt={`${title} hover view`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                  className="object-cover object-center absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
                  loading="lazy"
                />
              )}
            {/* Badges Overlay */}
            <div className="absolute top-2 left-2 flex flex-col gap-1.5 pointer-events-none z-[1]">
              {showNewBadge && (
                <span className="text-[10px] lg:text-xs leading-none font-medium px-1.5 py-0.5 rounded-sm bg-black text-white">
                  New
                </span>
              )}
              {showSoldOutBadge && (
                <span className="text-[10px] lg:text-xs leading-none font-medium px-1.5 py-0.5 rounded-sm bg-gray-500 text-white">
                  Sold out
                </span>
              )}
              {comingSoon && (
                <span className="text-[10px] lg:text-xs leading-none font-medium px-1.5 py-0.5 rounded-sm bg-yellow-400 text-black">
                  Coming Soon
                </span>
              )}
              {isOnlineExclusive && (
                <span className="text-[10px] lg:text-xs leading-none font-medium px-1.5 py-0.5 rounded-sm bg-green-500 text-white">
                  Online Exclusive
                </span>
              )}
            </div>
          </div>
        </Link>

        {/* Quick View Button (Desktop Only) - Positioned within the relative container */}
        <div className="absolute bottom-2 left-1/2 w-[calc(100%-1rem)] -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100 lg:flex justify-center hidden pointer-events-none group-hover:pointer-events-auto z-10">
          <motion.button
            // Add onClick handler later: onClick={() => openQuickViewModal(product)}
            data-target="product-card.quick-view-btn"
            type="button"
            className="group/button overflow-hidden ease-out h-auto py-2 px-5 inline-flex items-center justify-center rounded-[2px] w-full" // Adjusted padding/height slightly
            style={{
              position: "relative",
              backgroundColor: "white",
              color: "black",
            }}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{ rest: {}, hover: {} }}
          >
            {/* Black wipe overlay */}
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-black"
              variants={{ rest: { height: "0%" }, hover: { height: "100%" } }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ zIndex: 1 }}
              aria-hidden="true"
            />
            {/* Text */}
            <motion.span
              className="relative z-10 text-xs font-medium" // Adjusted text size
              variants={{ rest: { color: "black" }, hover: { color: "white" } }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Quick View
            </motion.span>
          </motion.button>
        </div>

        {/* Add to Cart Button (Mobile Only) */}
        {!showSoldOutBadge && ( // Use derived sold out state
          <div className="absolute bottom-1 right-1 lg:hidden z-10">
            <button
              type="button"
              aria-label={`Add ${title} to cart`}
              // Add onClick handler later: onClick={handleAddToCart}
              className="flex items-center justify-center size-7 rounded-sm bg-white/80 backdrop-blur-sm text-black shadow active:bg-black active:text-white transition-colors"
            >
              <svg
                className="w-2.5 h-2.5"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.50098 0.5V4.5H9.50098V5.5H5.50098V9.5H4.50098V5.5H0.500977V4.5H4.50098V0.5H5.50098Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Product Info - Link wrapper, flex-grow for alignment */}
      <Link
        href={productUrl}
        aria-label={`Go to ${title} product`}
        className="mt-2 flex-grow" // Use flex-grow on the link itself
      >
        {/* Div ensures content below stays aligned */}
        <div>
          {vendor && (
            <p className="text-xs lg:text-sm font-medium text-gray-800 mb-0.5">
              {vendor}
            </p>
          )}
          <h2 className="text-sm font-normal leading-tight line-clamp-2 mb-1">
            {title}
          </h2>
          {colorName && (
            <p className="text-xs text-gray-500 mt-0.5">{colorName}</p>
          )}
        </div>
      </Link>

      {/* Price - Positioned last, ensuring it aligns at the bottom */}
      <p className="text-sm lg:text-base font-medium mt-auto pt-1">
        {" "}
        {/* mt-auto pushes to bottom if space allows, pt-1 adds minimal space */}
        {formattedPrice}
      </p>
    </article>
  );
};

export default ProductCard;
