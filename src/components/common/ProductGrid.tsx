import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/types";
import ProductCard from "@/components/product/ProductCard";

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, columns = 4 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      <div className="sticky top-24">
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns} gap-4 lg:gap-6`}
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 4}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
