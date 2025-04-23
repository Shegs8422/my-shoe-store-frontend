// src/components/shop/ProductGrid.tsx
import React from "react";
import ProductCard from "@/components/product/ProductCard"; // Ensure this path is correct
import { Product } from "@/types"; // Import your specific Product type

interface ProductGridProps {
  products: Product[]; // Expects an array of Product objects matching your type
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
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
      {products.map((product) => (
        // Render your detailed ProductCard for each product in the array
        <ProductCard
          key={product.id} // Essential for React lists
          product={product} // Pass the entire product object as a prop
        />
      ))}
    </div>
  );
};

export default ProductGrid;
