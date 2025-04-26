import { ProductPrice } from "@/types";

export function formatPrice(price: ProductPrice): string {
  // Convert cents to euros/dollars
  const amount = price.amount / 100;

  // Format the number with appropriate currency symbol and decimal places
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Helper function to get just the amount without currency symbol
export function getPriceAmount(price: ProductPrice): number {
  return price.amount / 100;
}
