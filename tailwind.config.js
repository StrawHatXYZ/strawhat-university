module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          100: '#E9E3FF',
          200: '#B9A2FF',
          300: '#9374FF',
          400: '#7551FF',
          500: '#4318FF',
          600: '#3311DB',
          700: '#2200B7',
          800: '#190793',
          900: '#11047A',
        },
        secondary:{
          100: '#FAFCFE',
          200: '#F6F8FD',
          300: '#F4F7FE',
          400: '#E9EDF7',
          500: '#E0E5F2',
          600: '#A3AED0',
          700: '#707EAE',
          800: '#47548C',
          900: '#2B3674',
        },
    },
  },
  plugins: [],
},
}