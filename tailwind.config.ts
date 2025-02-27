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
      borderWidth:{
        "1": "1px",
      },
      fontFamily: {
        figtree: ['var(--font-figtree)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        openModal:{
          "from" : {
            marginBottom: "-40px",
          },
          "to": {
            marginBottom: "0px",
          },
        },
        closeModal:{
          "from" : {
            marginBottom: "0px",
            opacity: "1"
          },
          "to": {
            marginBottom: "-40px",
            opacity: "0"
          },
        },
        fadeInModal:{
          "from" : {
            opacity: "0",
          },
          "to": {
            opacity: "1",
          },
        },
        fadeOutModal:{
          "from" : {
            opacity: "1",
          },
          "to": {
            opacity: "0",
          },
        },
        
      },
      animation: {
        'openModal': 'openModal 0.3s ease forwards',
        'closeModal': 'closeModal 0.3s ease forwards',
        'fadeInModal': 'fadeInModal 0.3s ease forwards',
        'fadeOutModal': 'fadeOutModal 0.3s ease forwards',
      }
    },
  },
  plugins: [],
} satisfies Config;
