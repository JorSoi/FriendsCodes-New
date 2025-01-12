import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      "lg": {
        max: '1024px'
      },
      "mlg": {
        max: '890px'
      },
      "md": {
        max: '767px'
      },
      "sm": {
        max: '639px'
      },
      "xs": {
        max: '479px'
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
