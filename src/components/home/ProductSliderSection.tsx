import React from "react";
import Link from "next/link";
import ProductGrid from "@/components/common/ProductGrid";
import ProductButton from "@/components/common/ProductButton";
import { Product } from "@/types";

interface ProductSliderSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

const ProductSliderSection: React.FC<ProductSliderSectionProps> = ({
  title,
  products,
  viewAllLink,
}) => {
  return (
    <section
      className="py-12 lg:py-16 bg-white"
      aria-labelledby="product-slider-heading"
    >
      <div className="px-4 lg:px-6">
        <div className="flex justify-between items-center mb-6">
          <h2
            id="product-slider-heading"
            className="text-2xl lg:text-3xl font-bold"
          >
            {title}
          </h2>
          {viewAllLink && (
            <Link href={viewAllLink}>
              <ProductButton variant="reversed">View All</ProductButton>
            </Link>
          )}
        </div>

        <ProductGrid products={products} columns={4} showQuickView={true} />
      </div>
    </section>
  );
};

export default ProductSliderSection;
