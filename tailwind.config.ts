import type { Config } from "tailwindcss";

const config: Config = {
  // IMPORTANT: These paths must match your folder structure exactly
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6B00",
          black: "#0A0A0A",
          gray: "#525252",
          soft: "#F9FAFB",
        },
      },
    },
  },
  plugins: [],
};
export default config;