import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        black: "var(--color-black)",
        white: "var(--color-white)",
        grey: "var(--color-grey)",
        gray: "var(--color-gray)",
        sub: "var(--color-sub)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "background": "#ffffff",
          "foreground": "#2B2B2B",
          "primary": "#1288F8",
          "secondary": "#00D6FA",
          "accent": "#2A425B",
          "neutral": "#7CD0FF",
          "base-100": "#ffffff",
          'base-content': '#2B2B2B',
          "info": "#F1E54A",
          "success": "#FF94C6",
          "warning": "#FEEAF3",
          "error": "#ef4444",
        },
        dark: {
          "background": "#0a0a0a",
          "foreground": "#ededed",
          "primary": "#4B9FED",
          "secondary": "#007AA5",
          "accent": "#1E2E3A",
          "neutral": "#4A88B3",
          "base-100": "#1A1A1A",
          "base-content": "#E0E0E0",
          "info": "#C9B93B",
          "success": "#E978A2",
          "warning": "#F5A4B2",
          "error": "#f87171",
        },
      },
    ],
  }
};

export default config;
