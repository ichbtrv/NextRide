module.exports = {
  purge: ['./components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '9rem',
    },
    colors: {
      altblue: {
        light: '#3546ff',
        DEFAULT: '#0214fe',
        dark: '#010eb2',
      },
    },
    fontFamily: {
      Suisse: 'Suisse',
      SuisseOTF: 'SuisseOTF',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
