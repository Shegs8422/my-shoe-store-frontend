import React from "react";
import ProductCard from "../product/ProductCard";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200" />
            <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />
            <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
