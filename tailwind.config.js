/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#E8ECF2",
          DEFAULT: "#4F6C8B",
          dark: "#2C3E55",
        },
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};
