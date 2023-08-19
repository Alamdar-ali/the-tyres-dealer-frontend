/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        purple: "#5632a8",
        white: "#FFFFFF",
        red: "#e80221",
      },
      fontFamily: {
        "primary-font": ["Inter", "serif"],
        "secondary-black": "Satoshi-Black",
        "secondary-bold": ["Satoshi-Bold"],
        "secondary-font": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
