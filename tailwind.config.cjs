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
      brand: "#6366F1",
      brandLighter: "#7E81FF",
      dark: "#1E293B",
      darkLighter: "#283750",
      mid: "#B8BFC6",
      light: "#FFFFFF"
    },
    extend: {
      backgroundImage: {
        'avatar': "url('/src/lib/images/avatar.svg')"
      },
      backgroundOpacity: {
        '20': '0.2'
      }
    },
  },
  plugins: [],
}
// PURPLE
// brand: "#6366F1",
// dark: "#1E293B",
// mid: "#B8BFC6",
// light: "#FFFFFF"

// DARK & RED
// brand: "#E34A32",
// dark: "#141618",
// mid: "#BAC1B8",
// light: "#FFFFFF",