"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Case {
  number: string;
  title: string;
  client: string;
  sector: string;
  deliverable: string;
  result: string;
  visual: React.ReactNode;
}

function VeilSVG() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="0" y="70" width="200" height="60" fill="#1C1C1C" stroke="#F0EDE8" strokeWidth="0.5" />
      <rect x="30" y="0" width="60" height="200" fill="#1C1C1C" stroke="#F0EDE8" strokeWidth="0.5" />
      <polygon points="100,0 200,100 100,200 0,100" fill="none" stroke="#F0EDE8" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="20" fill="#C8FF00" opacity="0.9" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="#C8FF00" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

function HymnSVG() {
  const pills = Array.from({ length: 24 });
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {pills.map((_, i) => {
        const col = i % 6;
        const row = Math.floor(i / 6);
        const isGreen = i % 5 === 0;
        return (
          <rect
            key={i}
            x={10 + col * 32}
            y={20 + row * 44}
            width={24}
            height={36}
            rx={12}
            fill={isGreen ? "#C8FF00" : "#1C1C1C"}
            stroke={isGreen ? "#C8FF00" : "#F0EDE8"}
            strokeWidth="0.5"
            opacity={isGreen ? 0.9 : 0.6}
          />
        );
      })}
    </svg>
  );
}

function HollowSVG() {
  const squares = Array.from({ length: 64 });
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {squares.map((_, i) => {
        const col = i % 8;
        const row = Math.floor(i / 8);
        const missing = [3, 11, 17, 25, 36, 42, 50, 55].includes(i);
        return (
          <motion.rect
            key={i}
            x={4 + col * 24}
            y={4 + row * 24}
            width={20}
            height={20}
            fill={missing ? "transparent" : "#1C1C1C"}
            stroke="#F0EDE8"
            strokeWidth="0.5"
            opacity={missing ? 0 : 0.7}
            animate={missing ? { opacity: [0.7, 0, 0.7] } : {}}
            transition={missing ? { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 } : {}}
          />
        );
      })}
    </svg>
  );
}

function MirrorSVG() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Phone outline */}
      <rect x="70" y="10" width="60" height="110" rx="8" stroke="#F0EDE8" strokeWidth="1" fill="none" />
      <rect x="75" y="18" width="50" height="95" rx="2" fill="#1C1C1C" />
      {/* Scrolling content lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.rect
          key={i}
          x="80"
          y={25 + i * 18}
          width={i % 2 === 0 ? 38 : 28}
          height="10"
          rx="2"
          fill="#F0EDE8"
          opacity="0.3"
          animate={{ y: [25 + i * 18, 25 + i * 18 - 18] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
        />
      ))}
      {/* Infinite scroll indicator */}
      <text x="100" y="145" textAnchor="middle" fill="#C8FF00" fontSize="9" fontFamily="monospace">∞</text>
      <text x="100" y="175" textAnchor="middle" fill="#F0EDE8" opacity="0.3" fontSize="7" fontFamily="monospace">SCROLL</text>
    </svg>
  );
}

const CASES: Case[] = [
  {
    number: "001",
    title: "PROJECT VEIL",
    client: "[REDACTED]",
    sector: "Government / Perception Management",
    deliverable: "Complete national rebrand post-scandal. New flag, new font, new founding myth.",
    result: "Approval ratings recovered 34 points in 11 months.",
    visual: <VeilSVG />,
  },
  {
    number: "002",
    title: "PROJECT HYMN",
    client: "Anonymous pharmaceutical group",
    sector: "Healthcare / Public Trust",
    deliverable: "Brand identity for a drug approved in 6 countries, banned in 22.",
    result: "Still the market leader in permitted regions.",
    visual: <HymnSVG />,
  },
  {
    number: "003",
    title: "PROJECT HOLLOW",
    client: "Private equity consortium",
    sector: "Real estate / Community displacement",
    deliverable: "Rebrand 14 demolished neighborhoods as \"urban renewal zones.\"",
    result: "Property values increased 340%. Former residents unavailable for comment.",
    visual: <HollowSVG />,
  },
  {
    number: "004",
    title: "PROJECT MIRROR",
    client: "Social media platform (unnamed)",
    sector: "Technology / Behavioral design",
    deliverable: "Redesign the feed algorithm's visual language to increase session time.",
    result: "Average session duration: +47 minutes. Sleep data: not our department.",
    visual: <MirrorSVG />,
  },
];

function CaseCard({ c }: { c: Case }) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-screen md:w-[85vw] h-full bg-obsidian border border-white/5 flex flex-col md:flex-row"
      style={{ maxWidth: "none" }}
      whileHover={{ borderColor: "rgba(200,255,0,0.4)" }}
      transition={{ duration: 0.3 }}
      data-cursor="view"
    >
      {/* Left: visual */}
      <div className="flex-shrink-0 w-full md:w-[40%] flex items-center justify-center p-12 md:p-16 bg-panel/40 border-b md:border-b-0 md:border-r border-white/5">
        <div className="w-40 h-40 md:w-56 md:h-56 opacity-80">
          {c.visual}
        </div>
      </div>

      {/* Right: content */}
      <div className="flex flex-col justify-between p-8 md:p-14 flex-1 min-h-0">
        <div>
          {/* Top meta */}
          <div className="flex justify-between items-start mb-10">
            <span className="font-mono text-[11px] text-off-white/40 tracking-[0.25em]">
              CASE {c.number}
            </span>
            <span className="font-mono text-[11px] text-off-white/40 tracking-[0.12em] text-right max-w-[200px]">
              {c.sector}
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-editorial text-off-white uppercase leading-[0.92] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.02em" }}
          >
            {c.title}
          </h2>

          {/* Meta rows */}
          <div className="space-y-4 mb-8">
            <div>
              <span className="font-mono text-[10px] text-off-white/30 tracking-[0.2em] uppercase block mb-1">
                CLIENT
              </span>
              <span className="font-body text-off-white/70 text-sm">{c.client}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-off-white/30 tracking-[0.2em] uppercase block mb-1">
                DELIVERABLE
              </span>
              <span className="font-body text-off-white/70 text-sm leading-relaxed">{c.deliverable}</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <p className="font-editorial italic text-off-white/60 text-sm md:text-base max-w-sm leading-relaxed">
            &ldquo;{c.result}&rdquo;
          </p>
          <a
            href="#"
            className="font-mono text-[11px] text-acid-green tracking-[0.2em] uppercase whitespace-nowrap hover:opacity-70 transition-opacity duration-200"
          >
            VIEW FULL CASE →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll → horizontal translation
  const totalSlides = CASES.length;
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(totalSlides - 1) * 100}vw`]);

  return (
    <>
      {/* Section label above */}
      <div className="bg-obsidian px-6 md:px-10 pt-24 pb-8">
        <span className="font-mono text-[11px] text-off-white/30 tracking-[0.3em] uppercase">
          SELECTED WORK // 001–004
        </span>
      </div>

      {/* Sticky horizontal scroll container — desktop */}
      <div
        ref={containerRef}
        className="relative hidden md:block"
        style={{ height: `${totalSlides * 100}vh` }}
      >
        <div className="sticky top-0 w-full overflow-hidden" style={{ height: "100vh" }}>
          <motion.div
            ref={trackRef}
            className="flex h-full"
            style={{ x, width: `${totalSlides * 100}vw` }}
          >
            {CASES.map((c) => (
              <div key={c.number} className="w-screen h-full flex-shrink-0 p-2">
                <CaseCard c={c} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden bg-obsidian px-4 pb-16 space-y-4">
        {CASES.map((c) => (
          <div key={c.number} style={{ minHeight: "80vh" }}>
            <CaseCard c={c} />
          </div>
        ))}
      </div>
    </>
  );
}
