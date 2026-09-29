"use client";

import { useEffect, useState } from "react";

/** Keeps the nav at the top and gives it a soft blur once the page scrolls. */
export default function StickyHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? "bg-bg/80 shadow-[0_1px_0_#E6E2DA] backdrop-blur-md" : ""
      }`}
    >
      {children}
    </header>
  );
}
