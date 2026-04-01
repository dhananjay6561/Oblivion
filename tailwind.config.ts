import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#080808",
        "off-white": "#F0EDE8",
        "acid-green": "#C8FF00",
        "tension-red": "#FF2D2D",
        panel: "#1C1C1C",
      },
      fontFamily: {
        editorial: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-space-mono)", "Space Mono", "monospace"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        "hero": "clamp(48px, 14vw, 220px)",
      },
    },
  },
  plugins: [],
};
export default config;
