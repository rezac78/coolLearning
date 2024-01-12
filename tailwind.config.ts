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
        "dark-color-Font": "white",
        "dark-color-Font-hover": "#d1d5db",
        "dark-bg-Nav": "#1f2937",
        "light-color-Font": "black",
        "light-color-Font-hover": "#374151",
        "light-bg-Nav": "#9ca3af",
        "bg-button": "#3b82f6",
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
