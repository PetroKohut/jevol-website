"use client";

import { useEffect } from "react";

// Starts the entrance animation of every [data-anim] element when it scrolls
// into view. Elements already on screen at load are left alone, and nothing is
// hidden unless this runs on a desktop pointer device without reduced motion,
// so the page stays complete without JS and on touch/mobile.
export function AnimObserver() {
  useEffect(() => {
    const ok = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!ok || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.remove("anim-pending");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-anim]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      el.classList.add("anim-pending");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
