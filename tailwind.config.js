/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#64ffda',
        },
        secondary: {
          100: '#ccd6f6',
          200: '#7d87a4',
          250: '#132240',
          300: '#0a192f',
        }
      },
      keyframes: {
        slideToLeft: {
          '0%': {
            transform: 'translateX(4.1rem)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        hide: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        slideToLeft: 'slideToLeft 400ms ease-in-out',
        hide: 'hide 550ms ease-in-out',
      },
    },
  },
  plugins: [],
}
