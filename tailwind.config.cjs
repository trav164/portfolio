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
      lime: '#D9FF72',
      purple: '#D0BFFF',
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