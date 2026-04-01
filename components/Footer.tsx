"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-obsidian px-6 md:px-10 pb-10"
    >
      {/* Acid green rule */}
      <div className="w-full h-px bg-acid-green mb-10" />

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left */}
        <div>
          <p className="font-mono text-[11px] text-off-white/60 tracking-[0.25em] uppercase mb-2">
            OBLIVION COLLECTIVE
          </p>
          <p className="font-mono text-[11px] text-off-white/30 tracking-[0.15em]">
            © 2024. All work classified.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <p className="font-mono text-[11px] text-off-white/30 tracking-[0.15em]">
            New York. London. Undisclosed.
          </p>
          <div className="flex gap-6">
            {["LinkedIn", "Signal", "Tor"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-[11px] text-off-white/40 tracking-[0.15em] uppercase hover:text-acid-green transition-colors duration-200"
                aria-label={link}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
