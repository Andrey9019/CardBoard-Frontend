import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-down-03": "fade-in-down 0.3s ease-out forwards",
        "fade-in-down-07": "fade-in-down 0.7s ease-out forwards",
        "fade-in-down-12": "fade-in-down 1.2s ease-out forwards",

        "fade-in-left-01": "fade-in-left 0.1s ease-out forwards",
        "fade-in-left-03": "fade-in-left 0.3s ease-out forwards",
        "fade-in-left-12": "fade-in-left 1.2s ease-out forwards",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
  },

  plugins: [],
};

export default config;
