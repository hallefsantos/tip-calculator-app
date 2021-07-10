const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Space Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        primary: 'hsl(172, 67%, 45%)', //#26c0ab

        neutral: {
          veryDark: 'hsl(183, 100%, 15%)', //#00494d
          dark: {
            '01': 'hsl(186, 14%, 43%)', //#5e7a7d
            '02': 'hsl(184, 14%, 56%)', //#7f9c9f
          },
          light: {
            '01': 'hsl(185, 41%, 84%)', //#c5e4e7
            '02': 'hsl(189, 41%, 97%)', //#f4fafa
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
