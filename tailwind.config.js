/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b3432a",
        "primary-light": "#FF5F3B",
        "primary-dark": "#7F2F1D",
        "neutral-light": "#F2F2F2",
        "neutral-dark": "#3E3E40",
        "neutral-darker": "#0C0D0D",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
