import React from "react";
import ProductSliderSection from "@/components/common/ProductSliderSection";
import { Product } from "@/types";

interface NewArrivalsSectionProps {
  products: Product[];
}

const NewArrivalsSection: React.FC<NewArrivalsSectionProps> = ({
  products,
}) => {
  // Filter only new arrival products
  const newArrivals = products.filter((product) => product.isNew);

  return (
    <ProductSliderSection
      title="New Arrivals"
      products={newArrivals}
      viewAllLink="/pages/new-arrivals"
      viewAllText="View All"
      showDragTooltip={true}
    />
  );
};

export default NewArrivalsSection;
