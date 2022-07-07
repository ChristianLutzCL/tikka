const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      blue: colors.blue,
      red: colors.red,
      orange: colors.orange,
      teal: colors.teal,
      indigo: colors.indigo,
      cyan: colors.cyan,
      lime: colors.lime,
      background: '#0D0D0D',
      'menetrend-pink': '#85209E',
      'feature-pink': '#DBD7EE',
      'feature-blue': '#191338',
      'menetrend-blue': '#2D00F7',
      'menetrend-blue-light': '#81A0CF',
      darkblue: '#2C2A37',
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'wiggle': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
