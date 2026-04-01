"use client";

import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { text: "BRAND STRATEGY", accent: false },
  { text: "·", accent: false },
  { text: "VISUAL IDENTITY", accent: false },
  { text: "·", accent: false },
  { text: "PROPAGANDA", accent: true },
  { text: "·", accent: false },
  { text: "ARCHITECTURE OF INFLUENCE", accent: false },
  { text: "·", accent: false },
  { text: "UNNAMED CLIENTS", accent: false },
  { text: "·", accent: false },
  { text: "NO QUESTIONS ASKED", accent: false },
  { text: "·", accent: false },
];

export default function MarqueeBand() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const dirRef = useRef(-1); // -1 = left (default), 1 = right
  const lastScrollY = useRef(0);
  const rafRef = useRef<number>(0);
  const [speed] = useState(0.4);

  useEffect(() => {
    const handleScroll = () => {
      const dy = window.scrollY - lastScrollY.current;
      dirRef.current = dy >= 0 ? -1 : 1;
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const animate = () => {
      posRef.current += dirRef.current * speed;

      // Infinite loop reset
      if (posRef.current <= -totalWidth) posRef.current = 0;
      if (posRef.current >= 0) posRef.current = -totalWidth;

      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  const renderItems = () =>
    ITEMS.map((item, i) => (
      <span
        key={i}
        className={`inline-block mx-5 font-mono text-[13px] uppercase tracking-[0.08em] whitespace-nowrap ${
          item.accent ? "text-acid-green" : "text-off-white/70"
        }`}
      >
        {item.text}
      </span>
    ));

  return (
    <div
      className="w-full overflow-hidden bg-panel"
      style={{ height: 56 }}
      aria-hidden="true"
    >
      <div className="flex items-center h-full">
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{ whiteSpace: "nowrap" }}
        >
          {/* Duplicate for seamless loop */}
          <span className="flex">{renderItems()}</span>
          <span className="flex">{renderItems()}</span>
        </div>
      </div>
    </div>
  );
}
