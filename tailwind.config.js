/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vuejs: "#00401a"
      },
      height: {
        128: "35rem"
      },
      fontFamily: {
        lora: "'Lora' , serif",
        inter: "'Inter', serif",
        Merienda: "'Merienda', serif"

      }
    }
  },
  plugins: [],
}

