import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

interface CategoryCardProps {
  imageUrl: string;
  altText: string;
  tag: string;
  titleLines: string | string[];
}

const CategoryCard = ({
  imageUrl,
  altText,
  tag,
  titleLines,
}: CategoryCardProps) => {
  const lines = Array.isArray(titleLines) ? titleLines : [titleLines];

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Image Container with explicit aspect ratio */}
      <div
        className="relative h-full w-full"
        style={{ aspectRatio: "337/410" }} // Match original aspect ratio
      >
        <Image
          src={imageUrl}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 666px"
          className="object-cover transition-transform duration-700 group-hover/image-wrapper:scale-105"
          priority
          quality={90}
          unoptimized={process.env.NODE_ENV === "development"} // Bypass optimization in dev
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 size-full bg-gradient-to-t from-black to-transparent opacity-15" />

        {/* Text Content */}
        <div className="absolute inset-0 flex size-full justify-between p-4 lg:pb-10 lg:pl-10 lg:pr-5 lg:pt-5">
          <h2 className="text-primary-medium-xl self-end text-white lg:text-primary-medium-2xl">
            {lines.map((line, index) => (
              <motion.span
                key={index}
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {line}
              </motion.span>
            ))}
          </h2>

          <motion.span
            className="text-secondary-medium-xs max-h-fit max-w-fit rotate-180 text-white [writing-mode:vertical-rl] lg:text-secondary-medium-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {tag}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

const ShopMainSection = () => {
  // Verify these paths exist in your public/images directory
  const images = {
    mainline: "/images/spring summer 25.webp", // Use hyphen instead of space
    "T-Shirts": "/images/spring-summer-25-T-Shirts.webp",
    tops: "/images/spring-summer-25-tops.webp",
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className=" bg-white px-4 sm:px-6 lg:px-10 pb-16 lg:pb-24 mt-20 lg:mt-24">
      <AnimatePresence>
        <motion.ul
          className="container-content relative isolate grid h-full w-full gap-3 pb-content lg:grid-cols-2"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Mainline Card */}
          <motion.li
            className="group/image-wrapper relative aspect-[337/410] h-full max-w-full overflow-hidden lg:row-span-2"
            variants={cardVariants}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/collections/mainline" className="block h-full">
              <CategoryCard
                imageUrl={images.mainline}
                altText="Mainline Spring Summer 25 Collection"
                tag="mainline"
                titleLines={["Spring", "Summer", "25"]}
              />
            </Link>
          </motion.li>

          {/* T-Shirts Card */}
          <motion.li
            className="group/image-wrapper relative aspect-[337/202] h-full max-w-full overflow-hidden lg:row-span-1"
            variants={cardVariants}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <Link href="/collections/T-Shirts" className="block h-full">
              <CategoryCard
                imageUrl={images["T-Shirts"]}
                altText="T-Shirts Collection SS25"
                tag="SS25"
                titleLines="T-Shirts"
              />
            </Link>
          </motion.li>

          {/* Tops Card */}
          <motion.li
            className="group/image-wrapper relative aspect-[337/202] h-full max-w-full overflow-hidden lg:row-span-1"
            variants={cardVariants}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <Link href="/collections/tops" className="block h-full">
              <CategoryCard
                imageUrl={images.tops}
                altText="Tops Collection SS25"
                tag="SS25"
                titleLines="Tops"
              />
            </Link>
          </motion.li>
        </motion.ul>
      </AnimatePresence>
    </section>
  );
};

export default ShopMainSection;
