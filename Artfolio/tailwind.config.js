/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        arima: ['Arima', 'cursive'],
        beauriveau: ['Beau Riveau']
      },
    },
  },
  plugins: [],
}