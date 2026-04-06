"use client";

import { motion } from "framer-motion";

const heroLines = [
  { text: "WE BUILD", outlined: false },
  { text: "WHAT OTHERS", outlined: true },
  { text: "FEAR TO FINISH", outlined: false, greenPeriod: true },
];

export default function FullscreenHero() {
  return (
    <section className="relative w-full min-h-screen bg-obsidian flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="flex justify-between items-start px-6 md:px-10 pt-8 md:pt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span
            className="inline-flex items-center justify-center rounded-full border border-panel bg-black/50"
            style={{ width: 28, height: 28 }}
            aria-hidden="true"
          >
            <span className="text-[10px] text-off-white">▲</span>
          </span>
          <span className="font-body text-[20px] leading-none text-off-white tracking-[0.01em]">
            Oblivion Collective
          </span>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-mono text-[11px] text-off-white/60 tracking-[0.2em] uppercase text-right"
        >
          EST. 2019 // CASES: 47 // REFUSED: 312
        </motion.span>
      </div>

      {/* Center heading */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 py-20">
        {heroLines.map((line, i) => (
          <div key={i} className="overflow-hidden w-full text-center">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.6 + i * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="font-editorial leading-[0.9] uppercase block"
              style={{
                fontSize: "clamp(48px, 13vw, 200px)",
                letterSpacing: "-0.02em",
                ...(line.outlined
                  ? { WebkitTextStroke: "1.5px #F0EDE8", color: "transparent" }
                  : { color: "#F0EDE8" }),
              }}
            >
              {line.text}
              {line.greenPeriod && <span style={{ color: "#C8FF00" }}>.</span>}
            </motion.h1>
          </div>
        ))}

        {/* Subheading */}
        <div className="overflow-hidden mt-10 md:mt-14">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.6, ease: "easeOut" }}
            className="font-body text-off-white/50 text-[16px] text-center tracking-wide max-w-xl mx-auto"
          >
            Creative direction for the projects that never made headlines.
          </motion.p>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="flex justify-center pb-10 md:pb-12"
      >
        <span className="font-mono text-[11px] text-off-white/40 tracking-[0.25em] uppercase flex items-center gap-2">
          SCROLL TO ENTER
          <span className="animate-blink inline-block">↓</span>
        </span>
      </motion.div>
    </section>
  );
}
