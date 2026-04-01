"use client";

import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    let lenis: import("lenis").default | null = null;

    const init = async () => {
      const { default: Lenis } = await import("lenis");

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    init();

    return () => {
      lenis?.destroy();
    };
  }, []);
}
