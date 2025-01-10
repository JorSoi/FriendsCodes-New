import type { Config } from "tailwindcss";
import { figtree } from "./Lib/fonts";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": {
        max: '1535px'
      },
      "xl": {
        max: '1279px'
      },
      "lg": {
        max: '1023px'
      },
      "md": {
        max: '767px'
      },
      "sm": {
        max: '639px'
      }
    },
    extend: {
      fontFamily: {
        figtree: ['var(--font-figtree)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
