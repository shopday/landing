/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1FC667",
          BG: "#E7EFE1",
        },
      },
    },
  },
  plugins: [],
};
