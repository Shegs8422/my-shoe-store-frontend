// src/providers/LenisProvider.tsx
"use client";

import { ReactNode } from "react";
// Import the correct hook from the correct path
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"; // Adjust path if needed

export default function LenisProvider({ children }: { children: ReactNode }) {
  useSmoothScroll(); // Call the correct hook
  return <>{children}</>;
}
