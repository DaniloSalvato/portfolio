/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "poppins-bold": ["Poppins-bold", "sans-serif"],
      },
      keyframes: {
        fillSquare: {
          "0%, 100% ": {
            fill: "#fff",
            stroke: "#fff",
          },
          "20%": {
            fill: "#f8fafc",
            stroke: "#f8fafc",
          },
          "40%, 80%": {
            fill: "#f1f5f9",
            stroke: "#f1f5f9",
          },
          "60%": {
            fill: "#e2e8f0",
            stroke: "#e2e8f0",
          }
        },
      },
      animation: {
        fillSquare: "fillSquare 2s ease",
      },
    },
  },
  plugins: [],
};
