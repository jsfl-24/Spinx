/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        background: '#000000',
        light: '#FFFFFF',
        grey: '#808080',
      },
      fontFamily: {
        gothic: ["League Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
}