/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        comingSoon: ['Coming Soon', 'cursive'],
      },
      colors: {
        transparent: 'transparent',
        grey: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          450: '#64748B',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          850: '#999999',
          890: '#3a3a3a', //tint %10 or lighten %10
          895: '#2e2e2e', //tint 5% or lighten 5%
          900: '#212121',
        },
        yellow: {
          50: '#F1ECE2',
          100: '#EDE3CE',
          300: '#ECDFC6',
          500: '#F3CC83',
        },
        teal: '#51B4A4',
        esmerald: '#D1FAE5',
        orange: {
          500: '#C8796C',
          800: '#804458',
        },
        white: colors.white,
        black: colors.black,
        gray: colors.zinc,
        'blue-gray': colors.slate,
        'cool-gray': colors.gray,
        'warm-gray': colors.stone,
        'true-gray': colors.neutral,
        red: colors.rose,
        green: colors.green,
        emerald: colors.emerald,
        indigo: colors.indigo,
        violet: '#C026D3',
      },
      animation: {
        wiggle: ' pulse 4s cubic-bezier(0, 0.3, 0.6, 1) infinite;',
      },
    },
  },
  plugins: [],
};
