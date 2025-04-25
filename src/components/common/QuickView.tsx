import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types";

interface QuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const QuickView: React.FC<QuickViewProps> = ({ product, isOpen, onClose }) => {
  const { title, vendor, price, images, isNew, colorName, featuredImage } =
    product;

  const primaryImage =
    featuredImage ||
    (Array.isArray(images) && images.length > 0 ? images[0] : null);
  const formattedPrice = `€${(price.amount / 100).toFixed(2)}`;

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] bg-white z-50"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg">Quick View</h2>
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  className="hover:text-gray-500"
                  aria-label="Add to wishlist"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <button
                  onClick={onClose}
                  className="text-sm font-medium tracking-wide hover:text-gray-500"
                >
                  CLOSE
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2">
              {/* Product Image */}
              <div className="relative aspect-[3/4]">
                {primaryImage && (
                  <Image
                    src={primaryImage.src}
                    alt={primaryImage.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                {isNew && (
                  <span className="absolute top-4 left-4 bg-black text-white text-xs font-medium px-2 py-1">
                    NEW
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-5">
                {vendor && <p className="text-sm font-medium">{vendor}</p>}
                <h3 className="text-base">{title}</h3>
                <p className="text-base font-medium">{formattedPrice}</p>

                {colorName && (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Color: {colorName}</p>
                    <div className="inline-block border border-black p-1">
                      <div className="w-12 h-12 bg-gray-100">
                        {primaryImage && (
                          <Image
                            src={primaryImage.src}
                            alt={primaryImage.alt}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Size Selector */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Size: In Stock</span>
                  </div>
                  <div className="grid grid-cols-6 gap-1.5">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <button
                        key={size}
                        className="py-1.5 text-sm border hover:border-black transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  Jayden is 184cm and wears a size large
                </p>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button className="h-11 text-sm font-medium border border-black hover:bg-black hover:text-white transition-colors uppercase tracking-wide">
                    Find in store
                  </button>
                  <button className="h-11 text-sm font-medium bg-black text-white hover:bg-gray-900 transition-colors uppercase tracking-wide">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickView;
