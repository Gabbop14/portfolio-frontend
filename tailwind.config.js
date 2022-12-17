/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        malibu: {
          50: "#F6FCFF",
          100: "#e0f4fe",
          200: "#bae7fd",
          300: "#7dd3fc",
          400: "#38baf8",
          500: "#0ea2e9",
          600: "#0287c7",
          700: "#036ea1",
          800: "#075c85",
          900: "#0c4e6e",
        },
      },
      fontFamily: {
        body: ["Quicksand", "Roboto Slab", "Roboto", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
