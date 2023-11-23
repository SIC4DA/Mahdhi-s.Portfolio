/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      mid: { max: "1310px" },
      tablet: { max: "1024px" },
      mobile: { max: "768px" },
    },
    extend: {
      maxWidth: {
        large: "110rem",
        medium: "80rem",
      },
      colors: {
        primary: "#5a568c",
        secondary: "#35334e",
        gray: "#747572",
        grey: "#aeb2ba",
        "grey-light": "#666666",
        "background-dark": "#030712",
        "background-light": "#f8f8f8",
        "border-dark": "#2c2d3c",
        "border-light": "#e0e0e0",
        "secondary-bg": "",
        "secondary-bg-active": "",
      },
    },
  },
  plugins: [],
};
