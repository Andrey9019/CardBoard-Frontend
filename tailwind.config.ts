import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6A2ECB",
        textOnPrimary: "#ECDEF6",
        black: "#000",
        hover: "#4A1F89",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
