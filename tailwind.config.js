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
    },
  },
  plugins: [],
}
