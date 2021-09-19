module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        deskSize: "60rem",
      },
      backgroundPosition: {
        deskPosition: "1rem -10rem",
      },
      fontFamily: {
        headline: ["Public", "Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
