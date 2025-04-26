import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/types";
import ProductCard from "@/components/product/ProductCard";
import QuickView from "@/components/common/QuickView";

interface ProductGridProps {
  products: Product[];
  columns?: number;
  showQuickView?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  columns = 4,
  showQuickView = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

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
              showQuickView={showQuickView}
              onQuickView={handleQuickView}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickView
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default ProductGrid;
