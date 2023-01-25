/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        marine_blue: "hsl(var(--color-marine-blue) / <alpha-value>)",
        purplish_blue: "hsl(var(--color-purplish-blue) / <alpha-value>)",
        pastel_blue: "hsl(var(--color-pastel-blue) / <alpha-value>)",
        light_blue: "hsl(var(--color-light-blue) / <alpha-value>)",
        strawberry_red: "hsl(var(--color-strawberry-red) / <alpha-value>)",
      },
      gridTemplateRows: {
        layout: "172px minmax(100px, max-content) fit-content",
      },
    },
  },
  plugins: [require("daisyui")],
};
