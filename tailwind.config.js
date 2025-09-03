/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        default: ["16px", { lineHeight: "22px" }],
        "2.5xl": "28px",
        "1.5xl": "22px",
      },
      colors: {
        slateBlue: "#588B8B",
        offWhite: "#F0F2EF",
        lightPeach: "#FFD5C2",
        redBrown: "#C8553D",
        darkBlue: "#1D263B",
      },
      fontFamily: {},
    },
    screens: {
      mini: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
