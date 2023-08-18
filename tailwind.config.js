/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "2rem",
      },
    },

    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      screens: {
        laptop: { max: "1440px" },
        tablet: { max: "1024px" },
        mobile: { max: "375px" },
      },
      colors: {
        primary: "hsl(4, 100%, 67%)",
        darkGrey: "hsl(234, 29%, 20%)",
        mediumGrey: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
      },
    },
  },
  plugins: [],
};
