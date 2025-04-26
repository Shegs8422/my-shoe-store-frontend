import React from "react";
import ProductSliderSection from "@/components/common/ProductSliderSection";
import { Product } from "@/types";
import { collections } from "@/lib/mock-data";

const LatestFootwearSection: React.FC<{ products: Product[] }> = ({
  products,
}) => {
  const filtered = products
    .filter(
      (product) =>
        product.isNew &&
        ["Nike", "Jordan", "Adidas", "New Balance", "ASICS"].includes(
          product.vendor ?? ""
        )
    )
    .slice(0, 12);

  const onlineExclusiveFootwear = collections.footwear.slice(0, 12);

  return (
    <ProductSliderSection
      title="Latest Footwear"
      products={filtered}
      viewAllLink="/collections/footwear"
      viewAllText="More Footwear"
      showDragTooltip={true}
    />
  );
};

export default LatestFootwearSection;
