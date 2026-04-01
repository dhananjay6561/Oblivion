"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MANIFESTO =
  "Every brand that changed history made someone uncomfortable. We are not here to make you comfortable. We are here to make you unforgettable — regardless of what that costs.";

const words = MANIFESTO.split(" ");

function WordReveal({
  text,
  index,
  total,
  scrollYProgress,
}: {
  text: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = Math.min((index + 3) / total, 1);
  const opacity = useTransform(scrollYProgress, [start, end], [0.12, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em] text-off-white">
      {text}
    </motion.span>
  );
}

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.3"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-obsidian py-32 md:py-48 px-6 md:px-10"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-start">
        {/* Sticky label */}
        <div className="hidden md:flex items-center justify-center md:sticky md:top-40">
          <span
            className="font-mono text-[11px] text-off-white/40 tracking-[0.25em] uppercase"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              letterSpacing: "0.3em",
            }}
          >
            MANIFESTO // 001
          </span>
        </div>

        {/* Right column */}
        <div>
          <p
            className="font-editorial leading-[1.35] mb-20"
            style={{ fontSize: "clamp(22px, 2.8vw, 36px)" }}
          >
            {words.map((word, i) => (
              <WordReveal
                key={i}
                text={word}
                index={i}
                total={words.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 md:gap-16 border-t border-white/10 pt-12">
            {[
              { num: "47", label: "Projects completed" },
              { num: "0", label: "Leaked to press" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
              >
                <div
                  className="font-editorial text-acid-green leading-none mb-3"
                  style={{ fontSize: "clamp(48px, 5vw, 80px)" }}
                >
                  {stat.num}
                </div>
                <div className="font-mono text-[11px] text-off-white/50 tracking-[0.2em] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
