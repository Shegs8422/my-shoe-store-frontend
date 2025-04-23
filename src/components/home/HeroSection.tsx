"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Position {
  x: number;
  y: number;
}

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startRef = useRef<{ mouse: Position; offset: Position }>();
  const lastMoveRef = useRef<{ x: number; y: number; t: number }>({
    x: 0,
    y: 0,
    t: Date.now(),
  });
  const velocityRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });
  const [loaded, setLoaded] = useState(false);

  // Entrance animation
  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Initial position & resize
  useEffect(() => {
    const setInitial = () => {
      if (!containerRef.current || !draggableRef.current) return;
      const c = containerRef.current.getBoundingClientRect();
      const d = draggableRef.current.getBoundingClientRect();
      const style = getComputedStyle(containerRef.current);
      const padR = parseFloat(style.paddingRight);
      const padB = parseFloat(style.paddingBottom);

      // Position card at bottom-right within container's padded area
      const x = c.width - d.width - padR;
      const y = c.height - d.height - padB;
      setPosition({ x, y });
    };

    setInitial();
    window.addEventListener("resize", setInitial);
    return () => window.removeEventListener("resize", setInitial);
  }, []);

  // Pointer drag handlers
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
      const multiplier = 200; // milliseconds of motion to extrapolate
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
    <section className="relative h-screen min-h-[600px] lg:min-h-[700px] w-full text-white flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/hero/hero-background.jpg"
          alt="Patta shoe collection hero background"
          fill
          style={{ objectFit: "cover" }}
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
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
              NEW ARRIVALS
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-none tracking-tight mb-4 lg:mb-6">
              Patta Eyewear '25
            </h1>
          </div>
          <Link href="/collections/new-arrivals">
            <button
              type="button"
              className="bg-white text-black text-xs lg:text-sm font-medium py-2 px-5 lg:py-3 lg:px-6 rounded-sm hover:bg-opacity-90 active:scale-95 transition-all duration-150"
              aria-label="Shop New Arrivals"
            >
              SHOP NOW
            </button>
          </Link>
        </div>

        {/* Draggable Card */}
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
              href="/collections/420-stay-high-capsule"
              aria-label="420 Stay High Capsule - Celebrate 4/20 the Patta way."
              className="block cursor-grab p-2 pb-2.5 active:cursor-grabbing"
            >
              <figure className="w-[9.375rem] lg:w-[14.375rem]">
                <div className="aspect-square w-full overflow-hidden rounded-sm bg-white">
                  <Image
                    src="/images/products/420-stay-high-capsule.webp"
                    alt="420 Stay High Capsule Promo"
                    width={800}
                    height={1000}
                    className="object-cover h-full w-full scale-100 transition-transform duration-500 ease-out will-change-transform group-hover/promo-card:scale-105 rounded"
                  />
                </div>
                <figcaption className="pt-3">
                  <p className="text-secondary-medium-xs mb-0.5 line-clamp-1 leading-none text-white">
                    420 Stay High Capsule
                  </p>
                  <h2 className="text-primary-medium-base line-clamp-1 leading-tight text-white">
                    Celebrate 4/20 the Patta way.
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

export default HeroSection;
