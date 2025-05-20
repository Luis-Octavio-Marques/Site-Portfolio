/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 0.5s ease-out forwards",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.5)" },
        },
      },
      fontFamily: {
        gantari: ["Gantari", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        backgroundSkill: "#333", // Nome da cor e valor hexadecimal
        secondary: "#ff5722",
        customGray: "#2d2d2d",
      },
    },
  },
  plugins: [],
};
