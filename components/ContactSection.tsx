"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    org: "",
    refused: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/20 py-4 font-body text-off-white text-base placeholder:text-off-white/25 focus:outline-none focus:border-acid-green transition-colors duration-300";

  return (
    <section className="bg-obsidian py-24 md:py-40 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className="font-editorial text-off-white uppercase leading-[0.9] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.02em" }}
          >
            READY TO BE
            <br />
            UNFORGETTABLE?
          </h2>
          <p className="font-body text-off-white/40 text-sm md:text-base leading-relaxed max-w-sm">
            We accept 4 new clients per year.
            <br />
            Applications are reviewed anonymously.
          </p>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="space-y-8"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name (or alias)"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    required
                    aria-label="Your Name or alias"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Organization"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className={inputClass}
                    required
                    aria-label="Organization"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="What was refused?"
                    value={form.refused}
                    onChange={(e) => setForm({ ...form, refused: e.target.value })}
                    className={inputClass}
                    required
                    aria-label="What was refused"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="sr-only">Budget range</label>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className={`${inputClass} appearance-none`}
                    required
                    style={{ backgroundImage: "none" }}
                  >
                    <option value="" disabled className="bg-obsidian text-off-white/40">
                      Budget range
                    </option>
                    <option value="under50" className="bg-obsidian text-off-white">
                      Under $50k
                    </option>
                    <option value="50-250" className="bg-obsidian text-off-white">
                      $50k – $250k
                    </option>
                    <option value="250-1m" className="bg-obsidian text-off-white">
                      $250k – $1M
                    </option>
                    <option value="private" className="bg-obsidian text-off-white">
                      Discuss privately
                    </option>
                  </select>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  className="w-full h-14 bg-acid-green text-obsidian font-mono text-[13px] tracking-[0.25em] uppercase font-bold transition-colors duration-200 hover:bg-obsidian hover:text-acid-green border border-acid-green"
                  style={{ borderRadius: 0 }}
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 0.99 }}
                >
                  SUBMIT APPLICATION
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col justify-center py-16"
              >
                <div className="w-8 h-px bg-acid-green mb-10" />
                <p className="font-editorial text-off-white text-2xl md:text-3xl leading-snug">
                  Application received.
                  <br />
                  <span className="text-off-white/50">Do not follow up.</span>
                  <br />
                  We will find you.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
