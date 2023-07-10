const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      bricolage: ['Bricolage Grotesque']
    },
    colors: {
      ...colors,
    },
    extend: {
      keyframes: {
        blur: {
          '0%': { filter: "blur(5px)" },
          '100%': { filter: "blur(0px)" },
        }
      },
      animation: {
        blur: 'blur 2s linear',
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