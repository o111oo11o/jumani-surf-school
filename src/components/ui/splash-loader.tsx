"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { Loader } from "./loader";

export function SplashLoader() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("jumani-splash");
    if (!seen) {
      setVisible(true);
      sessionStorage.setItem("jumani-splash", "1");
      const fadeTimer = setTimeout(() => setFading(true), 1800);
      const hideTimer = setTimeout(() => setVisible(false), 2600);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[999] flex items-center justify-center bg-dark transition-opacity duration-700",
        fading ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
      aria-hidden="true"
    >
      {/* Decorative radial orbs — matching brand hero style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(4,188,172,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,248,113,0.06) 0%, transparent 70%)",
          }}
        />
      </div>
      <Loader className="relative z-10 min-h-0" />
    </div>
  );
}
