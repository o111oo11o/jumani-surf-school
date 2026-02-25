"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { navItems } from "@/lib/constants/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="relative z-50 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Jumani Surf School"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-teal-deep",
                  isScrolled ? "text-text" : "text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="text-sm">
              Book Now
            </Button>
          </div>

          {/* Mobile: Book Now + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              href="/contact"
              variant="primary"
              className="text-xs px-4 py-2 min-h-[40px]"
            >
              Book Now
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "relative z-50 p-2 min-h-[48px] min-w-[48px] flex items-center justify-center",
                isScrolled || isMenuOpen ? "text-dark" : "text-white"
              )}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-300 lg:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-display font-bold text-dark hover:text-teal-deep transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button
            href="/contact"
            variant="primary"
            className="mt-4"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
}
