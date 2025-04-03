/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
      },
      colors: {
        primary: "#6A2ECB",
        secondary: "#ECDEF6",
        background: "#ECDEF6",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "serif"],
        mono: ["Poppins", "monospace"],
      },
    },
  },

  plugins: [],
};
