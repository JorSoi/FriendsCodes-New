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
      "lg": {
        max: '1024px'
      },
      "md": {
        max: '767px'
      },
      "sm": {
        max: '639px'
      },

    },
    extend: {
      screens: {
        "3xl": {
          min: '1920px'
        },
        "2xl": {
          min: '1440px'
        },
        "xl": {
          min: '1380px'
        },
        "2sm": {
          max: '479px'
        }
      },
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
