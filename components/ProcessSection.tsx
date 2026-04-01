"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "INTAKE",
    desc: "We ask three questions. You answer two. The third we already know.",
  },
  {
    num: "02",
    title: "ALIGNMENT",
    desc: "We don't pitch. We present one direction. It's always right.",
  },
  {
    num: "03",
    title: "EXECUTION",
    desc: "Our process is confidential. NDAs are the beginning, not the end.",
  },
  {
    num: "04",
    title: "SILENCE",
    desc: "After delivery, we don't follow up. Neither should you.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-obsidian py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 md:mb-20 flex justify-between items-baseline"
        >
          <span className="font-mono text-[11px] text-off-white/30 tracking-[0.3em] uppercase">
            HOW WE WORK
          </span>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="border-t border-white/10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16 items-center">
                {/* Step number */}
                <motion.div
                  initial={{ filter: "blur(8px)", opacity: 0 }}
                  whileInView={{ filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                >
                  <span
                    className="font-editorial text-acid-green leading-none select-none"
                    style={{ fontSize: "clamp(64px, 8vw, 120px)", letterSpacing: "-0.03em" }}
                  >
                    {step.num}
                  </span>
                </motion.div>

                {/* Step content */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                  <h3
                    className="font-editorial text-off-white uppercase leading-none"
                    style={{ fontSize: "clamp(28px, 3.5vw, 52px)", letterSpacing: "-0.02em", minWidth: "200px" }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-off-white/50 text-base md:text-lg leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final rule */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
