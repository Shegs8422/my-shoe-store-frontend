// src/components/shop/ProductGrid.tsx
import React, { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import QuickView from "@/components/common/QuickView";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  showQuickView?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  showQuickView = true,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  // Handle the case where no products are passed or found
  if (!products || products.length === 0) {
    return (
      <div className="col-span-full text-center py-10 text-gray-500">
        <p>No products found matching your criteria.</p>
        {/* Optionally add a button to clear filters or go back */}
      </div>
    );
  }

  return (
    // Responsive grid: 2 columns on small, 3 on medium and up. Adjust as needed.
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index < 4}
          showQuickView={showQuickView}
          onQuickView={handleQuickView}
        />
      ))}

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
