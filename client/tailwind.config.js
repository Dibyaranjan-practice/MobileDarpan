/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1140px", // Set your custom max-width for lg screens
        xl: "1140px", // Set your custom max-width for xl screens
      },
    },
  },
  plugins: [],
};
