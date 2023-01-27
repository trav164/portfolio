const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'bebas': ['Bebas Neue', 'sans-serif'],
    },
    colors: {
      brand: "#00B25A",
      dark: "#2D313F",
      mid: "#B4BEC5",
      light: "#FFFFFF"
    },
    extend: {},
  },
  plugins: [],
}