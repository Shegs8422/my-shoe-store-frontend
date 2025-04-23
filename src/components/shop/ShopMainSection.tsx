import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link

// Reusable Card Component
const CategoryCard = ({
  imageUrl,
  altText,
  tag,
  titleLines,
  className = "",
  imageClassName = "",
  tagPosition = "top-right", // "top-right" or "bottom-left" (for the long title)
  titlePosition = "bottom-left",
}) => {
  const isMultiLineTitle = Array.isArray(titleLines);

  return (
    <div className={`relative w-full overflow-hidden group ${className}`}>
      {/* Image */}
      <div className={`relative w-full h-full ${imageClassName}`}>
        <Image
          src={imageUrl}
          alt={altText}
          fill // Use fill to cover the container
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 666px" // Example sizes, adjust as needed
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

      {/* Text Content Overlay */}
      <div className="absolute inset-0 p-5 md:p-6 lg:p-8 text-white flex flex-col justify-between">
        {/* Tag (SS25 / mainline) */}
        <div className="absolute top-5 right-5">
          {/* Rotated text slightly adjusted for better positioning with Tailwind */}
          <div className="origin-top-right transform rotate-90 translate-x-full -translate-y-1/2 whitespace-nowrap text-xs font-medium uppercase tracking-wider">
            {tag}
          </div>
        </div>

        {/* Title (Tops / Knitwear / Spring Summer 25) */}
        <div className="mt-auto">
          {" "}
          {/* Pushes title to the bottom */}
          {isMultiLineTitle ? (
            <div className="flex flex-wrap gap-x-2 items-baseline">
              {titleLines.map((line, index) => (
                <h2
                  key={index}
                  className="text-3xl md:text-4xl font-medium leading-tight"
                >
                  {line}
                </h2>
              ))}
            </div>
          ) : (
            <h2 className="text-3xl md:text-4xl font-medium leading-tight">
              {titleLines} {/* Single line title */}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

const ShopMainSection = () => {
  const mainlineImage = "/images/spring-summer-25-main.png";
  const knitwearImage = "/images/spring-summer-25-knitwear.png";
  const topsImage = "/images/spring-summer-25-tops.png";

  return (
    // Main container: Centered, max-width, responsive grid layout
    <div className="w-full max-w-[1425px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
      {/*
          Grid Setup:
          - Default: 1 column (mobile-first)
          - xl (1280px+): 2 columns
          - Using grid-cols-2 implies roughly equal width columns.
          - Gap between grid items (columns and rows if stacking)
       */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
        {/* Left Column Item (Mainline) */}
        {/* Spans full height in the grid on large screens using row-span-2 */}
        <Link
          href="/collections/mainline"
          className="xl:row-span-2 h-[60vh] md:h-[70vh] xl:h-auto xl:aspect-[666/811]"
        >
          {" "}
          {/* Responsive height/aspect ratio */}
          <CategoryCard
            imageUrl={mainlineImage} // Use a distinct image if available
            altText="Mainline Spring Summer 25 Collection"
            tag="mainline"
            titleLines={["Spring", "Summer", "25"]}
            // className="h-full" // Let aspect ratio define height on xl
          />
        </Link>

        {/* Right Column Wrapper (for stacking Knitwear & Tops) */}
        {/* On xl screens, this div sits in the second grid column. Content flows vertically */}
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          {/* Top Right Item (Knitwear) */}
          <Link
            href="/collections/knitwear"
            className="aspect-video xl:aspect-auto xl:h-auto"
          >
            {" "}
            {/* Maintain aspect ratio on smaller, let grid/flex define on xl */}
            <CategoryCard
              imageUrl={knitwearImage} // Use a distinct image if available
              altText="Knitwear Collection SS25"
              tag="SS25"
              titleLines="Knitwear"
              className="h-full" // Ensure card fills the container height
            />
          </Link>

          {/* Bottom Right Item (Tops) */}
          <Link
            href="/collections/tops"
            className="aspect-video xl:aspect-auto xl:h-auto"
          >
            {" "}
            {/* Maintain aspect ratio on smaller, let grid/flex define on xl */}
            <CategoryCard
              imageUrl={topsImage} // Use a distinct image if available
              altText="Tops Collection SS25"
              tag="SS25"
              titleLines="Tops"
              className="h-full" // Ensure card fills the container height
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopMainSection;
