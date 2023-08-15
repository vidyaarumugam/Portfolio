/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        backgroundOne: "var(--background-one)",
        backgroundTwo: "var(--background-two)",
        backgroundHeader: "var(--background-header)",
        backgroundFooter: "var(--background-footer)",
        colorHeaderFooter: "var(--font-color-header-footer)",
        color : "var(--font-color)",
        hoverColor: "var(--hover-color)",
        headingColor: "var(--font-color-heading)",
        iconColor: "var(--icon-color)",
      }
    },
    variables:{
      '.dark' : {
        backgroundOne: "var(--background-one)",
        backgroundTwo: "var(--background-two)",
        backgroundHeader: "var(--background-header)",
        backgroundFooter: "var(--background-footer)",
        colorHeaderFooter: "var(--font-color-header-footer)",
        color : "var(--font-color)",
        hoverColor: "var(--hover-color)",
        iconColor: "var(--icon-color)",
        headingColor: "var(--font-color-heading)"
      },
      '.light' : {
        backgroundOne: "var(--background-one)",
        backgroundTwo: "var(--background-two)",
        backgroundHeader: "var(--background-header)",
        backgroundFooter: "var(--background-footer)",
        colorHeaderFooter: "var(--font-color-header-footer)",
        color : "var(--font-color)",
        hoverColor: "var(--hover-color)",
        iconColor: "var(--icon-color)",
        headingColor: "var(--font-color-heading)"
      }
    }
  },
  plugins: [],
}

