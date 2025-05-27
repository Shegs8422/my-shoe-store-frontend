"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MarqueeBanner from "@/components/common/MarqueeBanner";
import NewArrivalsSection from "@/components/shop/NewArrivalsSection";
import { Product } from "@/types";
import FootwearBrandGrid from "@/components/footwear/footwearbrand";

interface Position {
  x: number;
  y: number;
}

const FootwearHeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startRef = useRef<{ mouse: Position; offset: Position } | undefined>(
    undefined
  );
  const lastMoveRef = useRef<{ x: number; y: number; t: number }>({
    x: 0,
    y: 0,
    t: Date.now(),
  });
  const velocityRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const setInitial = () => {
      if (!containerRef.current || !draggableRef.current) return;
      const c = containerRef.current.getBoundingClientRect();
      const d = draggableRef.current.getBoundingClientRect();
      const style = getComputedStyle(containerRef.current);
      const padR = parseFloat(style.paddingRight);
      const padB = parseFloat(style.paddingBottom);
      const x = c.width - d.width - padR;
      const y = c.height - d.height - padB;
      setPosition({ x, y });
    };
    setInitial();
    window.addEventListener("resize", setInitial);
    return () => window.removeEventListener("resize", setInitial);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    draggableRef.current?.setPointerCapture(e.pointerId);
    setIsDragging(true);
    const now = Date.now();
    startRef.current = {
      mouse: { x: e.clientX, y: e.clientY },
      offset: position,
    };
    lastMoveRef.current = { x: e.clientX, y: e.clientY, t: now };
    velocityRef.current = { vx: 0, vy: 0 };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (
      !isDragging ||
      !startRef.current ||
      !containerRef.current ||
      !draggableRef.current
    )
      return;
    const { mouse, offset } = startRef.current;
    const dx = e.clientX - mouse.x;
    const dy = e.clientY - mouse.y;
    const now = Date.now();
    const dt = now - lastMoveRef.current.t;
    if (dt > 0) {
      const vx = (e.clientX - lastMoveRef.current.x) / dt;
      const vy = (e.clientY - lastMoveRef.current.y) / dt;
      velocityRef.current = { vx, vy };
      lastMoveRef.current = { x: e.clientX, y: e.clientY, t: now };
    }
    const c = containerRef.current.getBoundingClientRect();
    const d = draggableRef.current.getBoundingClientRect();
    let newX = offset.x + dx;
    let newY = offset.y + dy;
    newX = Math.max(0, Math.min(newX, c.width - d.width));
    newY = Math.max(0, Math.min(newY, c.height - d.height));
    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    draggableRef.current?.releasePointerCapture(e.pointerId);
    if (containerRef.current && draggableRef.current) {
      const { vx, vy } = velocityRef.current;
      const multiplier = 200;
      const c = containerRef.current.getBoundingClientRect();
      const d = draggableRef.current.getBoundingClientRect();
      let finalX = position.x + vx * multiplier;
      let finalY = position.y + vy * multiplier;
      finalX = Math.max(0, Math.min(finalX, c.width - d.width));
      finalY = Math.max(0, Math.min(finalY, c.height - d.height));
      setPosition({ x: finalX, y: finalY });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[700px] w-full text-white flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/hero/footwear-hero.jpg"
          alt="Patta footwear hero background"
          fill
          style={{ objectFit: "cover" }}
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Container */}
      <div
        ref={containerRef}
        className="relative flex flex-col lg:grid lg:grid-cols-16 flex-grow h-full overflow-hidden px-[20px] pt-10 lg:pt-16"
      >
        {/* Text Content */}
        <div className="flex flex-col justify-end items-start flex-grow pb-8 lg:pb-10 z-10 lg:col-span-8">
          <div className="space-y-3 lg:space-y-4">
            <p className="text-xs lg:text-sm font-medium tracking-widest uppercase mb-1 lg:mb-2 opacity-80">
              FOOTWEAR
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-none tracking-tight mb-4 lg:mb-6">
              adidas x BAPE
            </h1>
          </div>
          <Link href="/collections/footwear">
            <button
              type="button"
              className="bg-white text-black text-xs lg:text-sm font-medium py-2 px-5 lg:py-3 lg:px-6 rounded-sm hover:bg-opacity-90 active:scale-95 transition-all duration-150"
              aria-label="Shop Footwear"
            >
              SHOP NOW
            </button>
          </Link>
        </div>
        {/* Draggable Promo Card */}
        <div
          ref={draggableRef}
          className="absolute z-50 cursor-grab lg:col-span-8"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            touchAction: "none",
            userSelect: "none",
            transition: isDragging ? "none" : "transform 0.5s ease-out",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <article
            className={`bg-glass relative w-fit rounded opacity-0 transition-all delay-500 duration-500 ease-out-cubic ${
              loaded
                ? "translate-x-0 translate-y-0 opacity-100"
                : "translate-x-4 -translate-y-4 lg:translate-x-4 lg:translate-y-4"
            }`}
            style={{
              backgroundColor: "rgba(93, 93, 93, 0.4)",
              backdropFilter: "blur(36px)",
              boxSizing: "border-box",
              borderRadius: "0.25rem",
              transformOrigin: "bottom right",
            }}
          >
            <Link
              href="/collections/new-balance-action-bronson"
              aria-label="Available Now - New Balance x Action Bronson"
              className="block cursor-grab p-2 pb-2.5 active:cursor-grabbing"
            >
              <figure className="w-[9.375rem] lg:w-[14.375rem]">
                <div className="aspect-square w-full overflow-hidden rounded-sm bg-white flex items-center justify-center">
                  <Image
                    src="/images/products/new-balance-action-bronson.png"
                    alt="New Balance x Action Bronson"
                    width={400}
                    height={400}
                    className="object-contain h-full w-full scale-100 transition-transform duration-500 ease-out will-change-transform group-hover/promo-card:scale-105 rounded"
                  />
                </div>
                <figcaption className="pt-3">
                  <p className="text-secondary-medium-xs mb-0.5 line-clamp-1 leading-none text-white">
                    AVAILABLE NOW
                  </p>
                  <h2 className="text-primary-medium-base line-clamp-1 leading-tight text-white">
                    New Balance x Action Bronson
                  </h2>
                </figcaption>
              </figure>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

// --- Mock Data (reuse from shop page for now) ---
const mockProducts: Product[] = [
  {
    id: "aj3-rare-air",
    handle: "nike-air-jordan-3-retro-og-sp-rare-air",
    vendor: "Jordan",
    title: "Nike Air Jordan 3 Retro OG Sp 'Rare Air'",
    colorName: "Black/Chile Red-Neutral Grey",
    price: { amount: 21000, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-jordan3.jpg", alt: "Shoe 1" },
    ],
    variants: [{ id: "v1a", price: 21000, available: true, title: "US 9" }],
    isNew: true,
    isSoldOut: false,
    comingSoon: true,
    featuredImage: {
      src: "/images/products/placeholder-jordan3.jpg",
      alt: "Shoe 1",
    },
    hoverImageUrl: "/images/products/placeholder-jordan3-hover.jpg",
  },
  {
    id: "aj1-rookie",
    handle: "nike-air-jordan-1-low-og-rookie-of-the-year",
    vendor: "Jordan",
    title: "Nike Air Jordan 1 Low OG 'Rookie of the year'",
    colorName: "Yellow/Black/White",
    price: { amount: 16000, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-jordan1-low.jpg", alt: "Shoe 2" },
    ],
    variants: [{ id: "v2a", price: 16000, available: true, title: "US 10" }],
    isNew: true,
    isSoldOut: false,
    isOnlineExclusive: true,
    featuredImage: {
      src: "/images/products/placeholder-jordan1-low.jpg",
      alt: "Shoe 2",
    },
    hoverImageUrl: "/images/products/placeholder-jordan1-low-hover.jpg",
  },
  {
    id: "adidas-clot-gazelle",
    handle: "adidas-clot-gazelle-cream-white",
    vendor: "Adidas",
    title: "adidas Clot Gazelle Shoes by Edison Chen 'Cream White'",
    colorName: "Cream White/Black",
    price: { amount: 16000, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-gazelle.jpg", alt: "Gazelle" },
    ],
    variants: [{ id: "v4a", price: 16000, available: true, title: "US 9" }],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-gazelle.jpg",
      alt: "Gazelle",
    },
    hoverImageUrl: "/images/products/placeholder-gazelle-hover.jpg",
  },
  {
    id: "nb-990v6-grey",
    handle: "new-balance-990v6-made-in-usa-grey",
    vendor: "New Balance",
    title: "New Balance 990v6 Made in USA 'Grey'",
    colorName: "Grey/Navy",
    price: { amount: 22000, currencyCode: "EUR" },
    images: [
      { src: "/images/products/placeholder-nb990v6.jpg", alt: "NB 990v6 Grey" },
    ],
    variants: [
      { id: "v-990v6-10", price: 22000, available: true, title: "US 10" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-nb990v6.jpg",
      alt: "NB 990v6 Grey",
    },
    hoverImageUrl: "/images/products/placeholder-nb990v6-hover.jpg",
  },
  {
    id: "nike-vomero-5-sail",
    handle: "nike-zoom-vomero-5-sail-light-orewood",
    vendor: "Nike",
    title: "Nike Zoom Vomero 5 'Sail Light Orewood'",
    colorName: "Sail/Light Orewood Brown",
    price: { amount: 16000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-vomero5.jpg",
        alt: "Nike Vomero 5 Sail",
      },
    ],
    variants: [
      { id: "v-vomero-1", price: 16000, available: true, title: "US 9" },
    ],
    isNew: true,
    isSoldOut: false,
    featuredImage: {
      src: "/images/products/placeholder-vomero5.jpg",
      alt: "Nike Vomero 5 Sail",
    },
  },
  {
    id: "asics-gel-kayano-14-white",
    handle: "asics-gel-kayano-14-white-pure-silver",
    vendor: "ASICS",
    title: "ASICS Gel-Kayano 14 'White Pure Silver'",
    colorName: "White/Pure Silver",
    price: { amount: 15000, currencyCode: "EUR" },
    images: [
      {
        src: "/images/products/placeholder-kayano14.jpg",
        alt: "Asics Kayano 14",
      },
    ],
    variants: [
      { id: "v-kayano-1", price: 15000, available: false, title: "US 8" },
    ],
    isNew: true,
    isSoldOut: true,
    featuredImage: {
      src: "/images/products/placeholder-kayano14.jpg",
      alt: "Asics Kayano 14",
    },
    hoverImageUrl: "/images/products/placeholder-kayano14-hover.jpg",
  },
];

const FootwearPage = () => {
  return (
    <>
      <FootwearHeroSection />
      <div>
        <NewArrivalsSection products={mockProducts} />
        <FootwearBrandGrid />
      </div>
    </>
  );
};

export default FootwearPage;