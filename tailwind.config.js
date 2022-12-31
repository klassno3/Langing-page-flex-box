/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mb: "375px",
      tb: "650px",
      ltb: "900px",
      dt: "1200px",
    },
    fontFamily: {
      monts: ["Montserrat"],
      fraun: ["Fraunces"],
    },
    extend: {
      colors: {
        Cream: "#faebd7",
        DarkCyan: " #3c8067",
        VeryDarkBlue: "#0c3124",
        DarkGrayishBlue: "hsl(228, 12%, 48%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
