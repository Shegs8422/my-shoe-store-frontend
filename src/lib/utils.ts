// src/lib/utils.ts
export function formatPrice(
  amount: number,
  currencyCode: string = "EUR",
  locale: string = "en-NL" // Or 'de-DE' for German Euro, 'en-US' for USD etc.
): string {
  // Divide by 100 if the amount is provided in the smallest unit (e.g., cents)
  const value = amount / 100;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2, // Ensure two decimal places
    maximumFractionDigits: 2,
  }).format(value);
}
