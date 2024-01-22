import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-color-Font": "#f1f5f9",
        "dark-color-Font-hover": "#d1d5db",
        "dark-bg-Nav": "#1f2937",
        "dark-bg-Form":"#e2e8f0",
        "dark-bg-Input":"#cbd5e1",
        "dark-color-Input-label":"black",
        "dark-bg-border":"black",
        "dark-bg-box":"black",
        "dark-green":"#166534",
        "dark-blue":"#1d4ed8",
        "dark-red":"#dc2626",
        "dark-gray":"#4b5563",
        "light-color-Font": "black",
        "light-color-Font-hover": "#374151",
        "light-bg-Nav": "#9ca3af",
        "light-bg-Form":"#334155",
        "light-bg-Input":"#cbd5e1",
        "light-color-Input-label":"white",
        "light-bg-border":"white",
        "light-bg-box":"white",
        "light-green":"#4ade80",
        "light-blue":"#60a5fa",
        "light-red":"#f87171",
        "light-gray":"#9ca3af",
        "bg-button": "#0B53BC",
        "bg-button-hover": "#1d4ed8",
      },
      screens: {
        sm: "425px",
      },
    },
  },
  plugins: [],
};
export default config;
