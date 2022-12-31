/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Kumbh Sans', 'sans-serif'],
      },
      colors: {
        orange: '	#ff7d1a',
        'pale-orange': '#ffede0',
        'dark-blue': '#1d2025',
        'grayish-blue': '#b6bcc8',
        'light-grayish': '#f7f8fd',
      },
    },
  },
  plugins: [],
};
