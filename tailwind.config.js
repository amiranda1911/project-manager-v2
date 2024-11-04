/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],              // Define Roboto
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],  // Define Plus Jakarta Sans
      },
      fontSize: {
        'xs': '0.75rem',  // 12px
        'sm': '0.875rem', // 14px
        'base': '1rem',   // 16px
        'lg': '1.75rem',  // 28px
        'xl': '2.5rem',   // 40px
      },
    },
  },
  plugins: [],
}