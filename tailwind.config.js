/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      logo:[  "Stylish", 'serif'],
      raleway: ["Raleway", "sans-serif"],
      style: ["UnifrakturCook", 'cursive'],
    },

    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee",  "black"],
  },
}

