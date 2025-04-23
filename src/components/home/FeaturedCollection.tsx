import React, { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductCard from "@/components/product/ProductCard";
import AnimatedStickyImage from "./AnimatedStickyImage";

type Product = {
  id: string | number;
  handle: string;
  title: string;
  vendor?: string;
  imageUrl: string;
  imageAlt?: string;
  price: { amount: string; currencyCode: string };
  isSoldOut?: boolean;
  isNew?: boolean;
};

interface FeaturedCollectionProps {
  mainImageSrc: string;
  mainImageAlt: string;
  products: Product[];
  collectionLink: string;
  collectionTitle?: string;
}

const FeaturedCollection = forwardRef<HTMLElement, FeaturedCollectionProps>(
  ({ mainImageSrc, mainImageAlt, products = [], collectionLink }, ref) => {
    return (
      <section ref={ref} className="bg-white py-7 lg:py-10">
        <div className="w-full px-[20px]">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            {/* Sticky Image */}
            <div className="lg:col-span-6 mb-7 lg:mb-0 relative">
              <AnimatedStickyImage
                imageSrc={mainImageSrc}
                imageAlt={mainImageAlt}
              />
            </div>

            {/* Product List */}
            <div className="lg:col-span-6 flex flex-col h-full">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-6 lg:gap-x-6 lg:gap-y-8 flex-grow h-full">
                {products.map((product) => (
                  <li key={product.id} className="flex flex-col h-full">
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>

              {/* Reversed Style View Collection Button */}
              <div className="mt-7 lg:mt-10">
                <Link href={collectionLink} passHref legacyBehavior>
                  <a aria-label="View collection" className="block w-full">
                    <motion.button
                      type="button"
                      className="relative overflow-hidden w-full px-5 py-2.5 inline-flex items-center justify-center rounded-[2px] bg-black text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
                      style={{ border: "0.5px solid transparent" }}
                      whileHover={{ borderColor: "black" }}
                      initial="rest"
                      animate="rest"
                      variants={{
                        rest: {},
                        hover: {},
                      }}
                    >
                      {/* White wipe overlay */}
                      <motion.div
                        className="absolute bottom-0 left-0 w-full bg-white"
                        variants={{
                          rest: { height: "0%" },
                          hover: { height: "100%" },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ zIndex: 1 }}
                      />

                      {/* Button text */}
                      <motion.span
                        className="relative z-10 text-base font-medium hover:text-black"
                        variants={{
                          rest: { color: "white" },
                          hover: { color: "black" }, // This ensures the text color changes to black on hover
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        View Collection
                      </motion.span>
                    </motion.button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

FeaturedCollection.displayName = "FeaturedCollection";

export default FeaturedCollection;