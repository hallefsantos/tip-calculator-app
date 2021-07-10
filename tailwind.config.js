const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Space Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
