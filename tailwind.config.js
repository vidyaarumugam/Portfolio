/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        backgroundOne: "var(--background-one)",
        backgroundTwo: "var(--background-two)",
        backgroundHeaderFooter: "var(--background-header-footer)",
        colorHeaderFooter: "var(--font-color-header-footer)",
        color : "var(--font-color)",
        hoverColor: "var(--hover-color)"
      }
    },
    variables:{
      '.dark' : {
        backgroundOne: "var(--background-one)",
        backgroundTwo: "var(--background-two)",
        backgroundHeaderFooter: "var(--background-header-footer)",
        colorHeaderFooter: "var(--font-color-header-footer)",
        color : "var(--font-color)",
        hoverColor: "var(--hover-color)",
        iconColor: "var(--icon-color)"
      },
      '.light' : {
        backgroundOne: "var(--background-one)",
        backgroundTwo: "var(--background-two)",
        backgroundHeaderFooter: "var(--background-header-footer)",
        colorHeaderFooter: "var(--font-color-header-footer)",
        color : "var(--font-color)",
        hoverColor: "var(--hover-color)",
        iconColor: "var(--icon-color)"
      }
    }
  },
  plugins: [],
}

