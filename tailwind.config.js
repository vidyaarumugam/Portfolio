/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "background": "var(--background)"
      }
    },
    variables:{
      '.dark' : {
        background: "var(--background)"
      },
      '.light' : {
        background: "var(--background)"
      }
    }
  },
  plugins: [],
}

