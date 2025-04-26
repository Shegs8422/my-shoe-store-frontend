import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

interface QuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

type SizeUnit = "EU" | "UK" | "US";

const QuickView: React.FC<QuickViewProps> = ({ product, isOpen, onClose }) => {
  const { title, vendor, price, images, isNew, colorName, featuredImage } =
    product;
  const formattedPrice = formatPrice(price.amount, price.currencyCode);
  const [sizeUnit, setSizeUnit] = useState<SizeUnit>("EU");
  const [selectedSize, setSelectedSize] = useState<string>("2.5");
  const [mounted, setMounted] = useState(false);

  const isFootwear =
    vendor?.toLowerCase().includes("nike") ||
    vendor?.toLowerCase().includes("adidas") ||
    vendor?.toLowerCase().includes("new balance") ||
    title.toLowerCase().includes("shoe") ||
    title.toLowerCase().includes("sneaker");

  const sizeGuides = {
    EU: [
      "36.5",
      "37.5",
      "38.0",
      "38.5",
      "39.0",
      "40.0",
      "40.5",
      "41.0",
      "42.0",
      "42.5",
      "43.0",
      "44.0",
      "44.5",
      "45.0",
      "45.5",
    ],
    UK: [
      "2.5",
      "3.0",
      "3.5",
      "4.0",
      "4.5",
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
    ],
    US: [
      "3.5",
      "4.0",
      "4.5",
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
    ],
  };

  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, handleEscapeKey]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50"
          />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded shadow-xl w-full max-w-[28rem] mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <header className="py-7 px-4 flex justify-between items-center">
                <h2 className="text-xl font-medium">Quick View</h2>
                <button
                  onClick={onClose}
                  className="px-3 py-1 text-xs uppercase tracking-wide border hover:border-black border-gray-300 rounded-[2px] transition-colors"
                >
                  Close
                </button>
              </header>

              <div className="no-scrollbar block rounded px-4">
                <div className="px-0 lg:px-4 relative rounded bg-white">
                  <ul className="pointer-events-none flex items-center justify-start gap-1 mb-3 lg:mb-4">
                    {isNew && (
                      <li
                        className="flex items-center justify-center px-2 py-0.5 h-5 rounded-sm border text-[10px] uppercase tracking-wide font-medium"
                        style={{
                          backgroundColor: "#000000",
                          borderColor: "#000000",
                          color: "#ffffff",
                        }}
                      >
                        New
                      </li>
                    )}
                  </ul>

                  <header className="pr-4 lg:pr-8">
                    {vendor && (
                      <p className="text-sm font-medium mb-1 leading-none">
                        {vendor}
                      </p>
                    )}
                    <h1 className="text-base font-medium mb-2.5 leading-none">
                      {title}
                    </h1>
                    <div className="flex gap-1 items-center justify-start">
                      <p className="text-base font-medium leading-none">
                        {formattedPrice}
                      </p>
                    </div>
                  </header>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">
                      Color: {colorName}
                    </p>
                    <div className="inline-block border border-black">
                      {featuredImage && (
                        <Image
                          src={featuredImage.src}
                          alt={featuredImage.alt}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm text-gray-500">Size: In Stock</p>
                      {isFootwear && (
                        <div className="flex gap-4 text-xs">
                          <button
                            onClick={() => setSizeUnit("EU")}
                            className={`${
                              sizeUnit === "EU" ? "text-black" : "text-gray-400"
                            } hover:text-black transition-colors`}
                          >
                            EU
                          </button>
                          <button
                            onClick={() => setSizeUnit("UK")}
                            className={`${
                              sizeUnit === "UK" ? "text-black" : "text-gray-400"
                            } hover:text-black transition-colors`}
                          >
                            UK
                          </button>
                          <button
                            onClick={() => setSizeUnit("US")}
                            className={`${
                              sizeUnit === "US" ? "text-black" : "text-gray-400"
                            } hover:text-black transition-colors`}
                          >
                            US
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-5 gap-1.5">
                      {sizeGuides[sizeUnit].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 text-sm border rounded-[2px] transition-colors font-helvetica-compressed
                            ${
                              size === selectedSize
                                ? "border-black"
                                : "border-gray-200 hover:border-black"
                            }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 pb-4">
                    <button
                      type="button"
                      className="h-11 text-sm font-medium border border-gray-200 hover:border-black transition-colors uppercase tracking-wide rounded-[2px]"
                    >
                      Find in Store
                    </button>
                    <button
                      type="submit"
                      className="h-11 text-sm font-medium bg-black text-white hover:bg-gray-900 transition-colors uppercase tracking-wide rounded-[2px]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;

  return createPortal(modalContent, document.body);
};

export default QuickView;
