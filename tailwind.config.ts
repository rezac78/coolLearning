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
        "light-bg-Nav": "#d1d5db",
      },
    },
  },
  plugins: [],
};
export default config;
