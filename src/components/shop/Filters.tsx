// src/components/shop/Filters.tsx
import React from "react";

// Define props for the component
interface FiltersProps {
  availableBrands: string[];
  selectedBrands: string[];
  onBrandChange: (brand: string, isChecked: boolean) => void;

  availableSizes: string[];
  selectedSizes: string[];
  onSizeChange: (size: string) => void;

  onClearFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  availableBrands,
  selectedBrands,
  onBrandChange,
  availableSizes,
  selectedSizes,
  onSizeChange,
  onClearFilters,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onBrandChange(event.target.value, event.target.checked);
  };

  const handleSizeClick = (size: string) => {
    onSizeChange(size);
  };

  return (
    <div className="sticky top-24 self-start">
      {" "}
      {/* Adjust top-X based on your header */}
      <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
        <h2 className="text-lg font-semibold">Filter By</h2>
        {/* Show Clear button only if filters are active */}
        {(selectedBrands.length > 0 || selectedSizes.length > 0) && (
          <button
            type="button"
            onClick={onClearFilters}
            className="text-xs font-medium text-gray-600 hover:text-black hover:underline"
          >
            Clear All
          </button>
        )}
      </div>
      {/* Filter Group: Brand */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3 text-gray-800">Brand</h3>
        <ul className="space-y-2">
          {availableBrands.map((brand) => (
            <li key={brand}>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)} // <-- Control checked state
                  onChange={handleCheckboxChange} // <-- Use the handler
                  className="rounded border-gray-300 text-black shadow-sm focus:border-black focus:ring focus:ring-offset-0 focus:ring-black/30 focus:ring-opacity-50"
                />
                <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                  {brand}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Filter Group: Size */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3 text-gray-800">Size (EU)</h3>
        <div className="grid grid-cols-3 gap-2">
          {availableSizes.map((size) => {
            const isSelected = selectedSizes.includes(size); // <-- Check if selected
            return (
              <button
                key={size}
                type="button"
                onClick={() => handleSizeClick(size)} // <-- Use the handler
                className={`border rounded px-2 py-1.5 text-xs text-center transition-colors focus:outline-none focus:ring-1 focus:ring-black/50
                      ${
                        isSelected
                          ? "bg-black text-white border-black" // <-- Selected style
                          : "border-gray-300 text-gray-700 hover:border-black hover:text-black" // <-- Default style
                      }
                    `}
                aria-pressed={isSelected} // <-- Accessibility
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
      {/* Placeholder for other filters like Color, Price */}
      {/* <div className="mb-6">
        <h3 className="text-sm font-medium mb-3 text-gray-800">Color</h3>
        <p className="text-xs text-gray-400">(Color filter options here)</p>
      </div> */}
      {/* Moved Clear button to the top for better UX */}
      {/* <button
        type="button"
        onClick={onClearFilters} // <-- Use the handler
        className="w-full mt-4 bg-gray-100 text-gray-600 py-2 rounded text-sm font-medium hover:bg-gray-200 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
      >
        Clear Filters
      </button> */}
    </div>
  );
};

export default Filters;
