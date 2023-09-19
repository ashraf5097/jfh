/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0px 3px 6px #00000029",
      },
    },
  },
  plugins: [],
};
