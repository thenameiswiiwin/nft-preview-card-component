/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },
      colors: {
        softBlue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        mainBG: 'hsl(217, 54%, 11%)',
        cardBG: 'hsl(216, 50%, 16%)',
        blueLine: 'hsl(215, 32%, 27%)',
        white: 'hsl(0, 0%, 100%)'
      }
    }
  },
  plugins: []
}
