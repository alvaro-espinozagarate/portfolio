import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00ff9d",
        "neon-cyan": "#00e5ff",
        dark: "#050a0e",
        surface: "#0a1520",
        card: "#0d1e2e",
        "card-border": "#1a3a52",
        muted: "#3a6080",
        "text-base": "#c8dde8",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        space: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        blink: "blink 1.2s step-end infinite",
        scanline: "scanline 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease forwards",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) translateX(0)", opacity: "0.4" },
          "33%": { transform: "translateY(-20px) translateX(10px)", opacity: "0.8" },
          "66%": { transform: "translateY(10px) translateX(-10px)", opacity: "0.3" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
