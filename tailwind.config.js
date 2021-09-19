module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "intro-Desktop": "url('/public/img/bg-intro-desktop.svg')",
        "intro-Mobile": "url('/public/img/bg-intro-mobile.svg')",
      },
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
