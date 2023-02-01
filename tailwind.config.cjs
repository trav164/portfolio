const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    colors: {
      ...colors,
      brand: "#E34A32",
      dark: "#141618",
      mid: "#BAC1B8",
      light: "#FFFFFF"
    },
    extend: {},
  },
  plugins: [],
}