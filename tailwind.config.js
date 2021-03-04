const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.blueGray,
      red: colors.red,
      blue: colors.indigo,
      white: colors.white,
    },
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
      mono: ["PT Mono", "monospace"],
    },
  },
  variants: {
    extend: { borderRadius: ["last"] },
  },
  plugins: [],
};
