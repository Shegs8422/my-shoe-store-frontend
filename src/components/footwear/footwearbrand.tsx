import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

interface BrandCardProps {
  imageUrl: string;
  altText: string;
  tag: string;
  titleLines: string | string[];
  href: string;
  aspect: string;
}

const CategoryCard = ({
  imageUrl,
  altText,
  tag,
  titleLines,
  href,
  aspect,
}: BrandCardProps) => {
  const lines = Array.isArray(titleLines) ? titleLines : [titleLines];
  return (
    <Link href={href} className="block h-full group/image-wrapper">
      <div
        className={`relative h-full w-full aspect-[${aspect}]`}
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={imageUrl}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 666px"
          className="object-cover transition-transform duration-700 group-hover/image-wrapper:scale-105"
          priority
          quality={90}
          unoptimized={process.env.NODE_ENV === "development"}
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
    </Link>
  );
};

const brands = [
  {
    imageUrl:
      "/images/footwear/240711_SNDR_3_1a4820be-e7d6-4f9e-8ff4-733e122702f0.webp",
    altText: "Nike Footwear",
    tag: "Nike",
    titleLines: ["Nike"],
    href: "/collections/nike",
    aspect: "337/410",
    rowSpan: "lg:row-span-2",
  },
  {
    imageUrl:
      "/images/footwear/0Z8A8746_f0084ec7-1740-4ac0-88fc-e8f165e015f2.webp",
    altText: "Air Jordan",
    tag: "Air Jordan",
    titleLines: ["Air", "Jordan"],
    href: "/collections/air-jordan",
    aspect: "337/202",
    rowSpan: "lg:row-span-1",
  },
  {
    imageUrl: "/images/footwear/new2x3.webp",
    altText: "Running Shoes",
    tag: "Running",
    titleLines: ["Running"],
    href: "/collections/running",
    aspect: "337/202",
    rowSpan: "lg:row-span-1",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const FootwearBrandGrid = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 pb-16 lg:pb-24 mt-20 lg:mt-24">
      <AnimatePresence>
        <motion.ul
          className="container-content relative isolate grid h-full w-full gap-3 pb-content lg:grid-cols-2"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Main Brand Card (Nike) */}
          <motion.li
            className={`group/image-wrapper relative aspect-[337/410] h-full max-w-full overflow-hidden ${brands[0].rowSpan}`}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <CategoryCard {...brands[0]} />
          </motion.li>

          {/* Air Jordan Card */}
          <motion.li
            className={`group/image-wrapper relative aspect-[337/202] h-full max-w-full overflow-hidden ${brands[1].rowSpan}`}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <CategoryCard {...brands[1]} />
          </motion.li>

          {/* Running Card */}
          <motion.li
            className={`group/image-wrapper relative aspect-[337/202] h-full max-w-full overflow-hidden ${brands[2].rowSpan}`}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <CategoryCard {...brands[2]} />
          </motion.li>
        </motion.ul>
      </AnimatePresence>
    </section>
  );
};

export default FootwearBrandGrid;
