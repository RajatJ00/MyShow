/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mobile':'320px'
      },
      colors:{
        rajat:{
          50: '#d9fdff',
          100: '#adf1ff',
          200: '#7fe7fb',
          300: '#50dcf8',
          400: '#24d2f5',
          500: '#0ab9db',
          600: '#0090ab',
          700: '#00677c',
          800: '#003f4c',
          900: '#00171c',
        },
        navCol:{
          50: '#e4f5ff',
          100: '#bdddf4',
          200: '#94c6ea',
          300: '#6bafe2',
          400: '#4698da',
          500: '#307fc1',
          600: '#246296',
          700: '#18466c',
          800: '#0b2a42',
          900: '#000f1a',
        }
      }
    },
  },
  plugins: [],
}