import React, { forwardRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import ProductButton from "@/components/common/ProductButton";
import QuickView from "@/components/common/QuickView";
import { Product } from "@/types";

interface FeaturedCollectionProps {
  products: Product[];
  mainImageSrc?: string;
  mainImageAlt?: string;
  collectionLink?: string;
  showQuickView?: boolean;
}

const FeaturedCollection = forwardRef<HTMLElement, FeaturedCollectionProps>(
  (
    {
      products,
      mainImageSrc = "/images/pexels-frendsmans-1926769.jpg",
      mainImageAlt = "Featured Collection Look",
      collectionLink = "/collections/new-arrivals",
      showQuickView = true,
    },
    ref
  ) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
      null
    );

    const handleQuickView = (product: Product) => {
      setSelectedProduct(product);
    };

    return (
      <section
        ref={ref}
        className="bg-white pt-6 lg:pt-8"
        aria-labelledby="featured-collection-heading"
      >
        <div className="px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Main Image */}
            <div className="relative min-h-[80vh] lg:min-h-[90vh] py-4 lg:py-8">
              <div className="sticky top-24 h-[calc(100vh-8rem)] w-full">
                <div className="relative h-full w-full bg-gray-100">
                  <Image
                    src={mainImageSrc}
                    alt={mainImageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Products Grid */}
            <div className="space-y-8">
              <div>
                <h2
                  id="featured-collection-heading"
                  className="text-4xl lg:text-5xl font-bold mb-4"
                >
                  Featured Collection
                </h2>
                <p className="text-gray-600 mb-6">
                  Discover our latest arrivals and bestsellers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {products.slice(0, 4).map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    priority={index < 2}
                    showQuickView={showQuickView}
                    onQuickView={handleQuickView}
                  />
                ))}
              </div>

              <Link href={collectionLink}>
                <ProductButton variant="reversed">
                  View Collection
                </ProductButton>
              </Link>
            </div>
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
      </section>
    );
  }
);

FeaturedCollection.displayName = "FeaturedCollection";

export default FeaturedCollection;
