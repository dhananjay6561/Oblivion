"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import useSmoothScroll from "@/lib/useSmoothScroll";
import FullscreenHero from "@/components/FullscreenHero";
import MarqueeBand from "@/components/MarqueeBand";
import ManifestoSection from "@/components/ManifestoSection";
import CaseStudies from "@/components/CaseStudies";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  useSmoothScroll();

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="bg-obsidian min-h-screen"
    >
      <FullscreenHero />
      <MarqueeBand />
      <ManifestoSection />
      <CaseStudies />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </motion.main>
  );
}
