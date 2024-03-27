/** @type {import('tailwindcss').Config} */

// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

export default {
  purge: {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        // xxl: "1440px",
      },
      colors: {
        primary: "#4FA3A5",
        primaryDark: "#4D727A",
        primaryLight: "#F4FFFF",
        dark: "#403939",
      },
    },
  },
  plugins: [],
};
