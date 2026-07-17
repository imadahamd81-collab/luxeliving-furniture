/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './context/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      colors: {
        brand: {
          50: '#fdf6f0',
          100: '#f9e8d9',
          200: '#f3cba8',
          300: '#e9a672',
          400: '#df8342',
          500: '#d46a24',
          600: '#b8551d',
          700: '#994119',
          800: '#7c3516',
          900: '#662e14',
        },
        accent: {
          50: '#f4f0ff',
          100: '#e6dffd',
          200: '#cdbffb',
          300: '#a98bf5',
          400: '#8560ee',
          500: '#6b3fe0',
          600: '#5a32c7',
          700: '#4929a3',
          800: '#3d2486',
          900: '#34216f',
        },
      },
    },
  },
  plugins: [],
};
