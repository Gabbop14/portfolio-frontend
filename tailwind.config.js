/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ["Quicksand", "Roboto Slab", "Roboto", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
