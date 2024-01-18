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
        "light-color-Font": "black",
        "light-color-Font-hover": "#374151",
        "light-bg-Nav": "#9ca3af",
        "light-bg-Form":"#334155",
        "light-bg-Input":"#cbd5e1",
        "light-color-Input-label":"white",
        "light-bg-border":"white",
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
