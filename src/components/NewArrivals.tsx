import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewArrivals = () => {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-screen">
        <Image
          src="/images/hero-eyewear.jpg"
          alt="Patta Eyewear '25"
          fill
          className="object-cover"
          priority
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-row gap-1.5">
          <span className="text-[10px] lg:text-xs leading-none font-medium px-1.5 py-0.5 rounded-sm bg-black text-white">
            New
          </span>
          <span className="text-[10px] lg:text-xs leading-none font-medium px-1.5 py-0.5 rounded-sm bg-yellow-400 text-black">
            Coming Soon
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-12 left-4 text-white">
          <span className="text-sm uppercase mb-2 block">New Arrivals</span>
          <h1 className="text-6xl font-bold mb-6">Patta Eyewear '25</h1>
          <Link
            href="/collections/eyewear"
            className="inline-block bg-white text-black px-6 py-3 text-sm uppercase hover:bg-opacity-90 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
