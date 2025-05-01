// src/app/pages/shop/page.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import ShopMainSection from "@/components/shop/ShopMainSection";
import NewArrivalsSection from "@/components/shop/NewArrivalsSection";
import VideoSection from "@/components/shop/VideoSection";
import { Product } from "@/types";
import LatestFootwearSection from "@/components/shop/LatestFootwearSection";
import PromoCard from "@/components/home/PromoCard";
import MarqueeBanner from "@/components/common/MarqueeBanner";

// --- Mock Data (Using the same data as homepage) ---
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

export default function ShopPage() {
  // --- Drag logic for promo card container ---
  interface Position {
    x: number;
    y: number;
  }
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

  useEffect(() => {
    const setInitial = () => {
      if (!containerRef.current || !draggableRef.current) return;
      const c = containerRef.current.getBoundingClientRect();
      const d = draggableRef.current.getBoundingClientRect();
      // Position card at bottom-left within container
      const x = 16; // left padding
      const y = c.height - d.height - 16; // bottom padding
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
    // Compute velocity
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
    // Clamp within container
    newX = Math.max(0, Math.min(newX, c.width - d.width));
    newY = Math.max(0, Math.min(newY, c.height - d.height));
    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    draggableRef.current?.releasePointerCapture(e.pointerId);
    // Apply inertia on release
    if (containerRef.current && draggableRef.current) {
      const { vx, vy } = velocityRef.current;
      const multiplier = 200;
      const c = containerRef.current.getBoundingClientRect();
      const d = draggableRef.current.getBoundingClientRect();
      let finalX = position.x + vx * multiplier;
      let finalY = position.y + vy * multiplier;
      // Clamp final position
      finalX = Math.max(0, Math.min(finalX, c.width - d.width));
      finalY = Math.max(0, Math.min(finalY, c.height - d.height));
      setPosition({ x: finalX, y: finalY });
    }
  };

  return (
    <>
      <MarqueeBanner
        message={
          "GET 15% OFF ON ALL PATTA ITEMS - ADD CODE 'GOTLOVE15' AT CHECKOUT   |   FREE SHIPPING ON EU ORDERS ABOVE €250   |   GET 15% OFF ON ALL PATTA ITEMS - ADD CODE 'GOTLOVE15' AT CHECKOUT   |   FREE SHIPPING ON EU ORDERS ABOVE €250"
        }
        className="mb-2"
      />
    <div>
      <ShopMainSection />
      <NewArrivalsSection products={mockProducts} />
      <VideoSection />
      <LatestFootwearSection products={mockProducts} />
        {/* Promo Card after Latest Footwear */}
        <div ref={containerRef} className="relative w-full mt-8 px-0">
          <div className="relative w-full h-screen max-h-[800px] rounded overflow-hidden">
            <img
              src="/images/hero/nike-running-banner.png"
              alt="Nike Running Banner"
              className="absolute inset-0 w-full h-full object-cover rounded"
              style={{ objectFit: "cover" }}
            />
            <div
              ref={draggableRef}
              className="absolute z-50 cursor-grab"
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                touchAction: "none",
                userSelect: "none",
                transition: isDragging
                  ? "none"
                  : "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
            >
              <PromoCard
                imageUrl="/images/products/nike-patta-running-team.jpg"
                imageAlt="Nike x Patta Running Team"
                category="NIKE X PATTA RUNNING TEAM"
                title="Shop now"
                link="/collections/nike-x-patta-running-team"
              />
            </div>
          </div>
        </div>
    </div>
    </>
  );
}
