// src/components/product/ProductCard.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils"; // Ensure this utility exists and works with numbers
import ProductButton from "@/components/common/ProductButton";
import QuickViewButton from "@/components/common/QuickViewButton";
import QuickView from "@/components/common/QuickView";
import { Badge } from "@/components/common/Badge";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  showQuickView?: boolean;
  onQuickView?: (product: Product) => void;
}

const ProductCard = ({
  product,
  priority = false,
  showQuickView = true,
  onQuickView,
}: ProductCardProps) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Format price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: product.price.currencyCode,
  }).format(product.price.amount);

  return (
    <>
      <div className="group relative">
        {/* Image container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
          <Link
            href={`/product/${product.handle}`}
            className="block h-full w-full"
          >
            <Image
              src={product.images?.[0]?.src || "/placeholder.jpg"}
              alt={product.title}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              priority={priority}
            />
          </Link>
          {/* Quick View Button - Only show on desktop and when product is not sold out */}
          {showQuickView && !product.isSoldOut && (
            <div className="absolute inset-x-2 bottom-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <QuickViewButton onClick={() => setIsQuickViewOpen(true)} />
            </div>
          )}
          {/* Badges */}
          <div className="absolute left-2 top-2 flex flex-wrap gap-1">
            {product.isSoldOut && <Badge variant="sold-out">Sold out</Badge>}
            {product.isOnlineExclusive && (
              <Badge variant="online-exclusive">Online Exclusive</Badge>
            )}
            {product.isNew && <Badge variant="new">New</Badge>}
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-4 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">
              <Link href={`/product/${product.handle}`}>{product.title}</Link>
            </h3>
            <p className="text-sm font-medium text-gray-900">
              {formattedPrice}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.vendor}</p>
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <QuickView
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
          product={product}
        />
      )}
    </>
  );
};

export default ProductCard;
