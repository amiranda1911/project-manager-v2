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
        '1': '0.26375rem',    // 4.22px
        '2': '0.308125rem',   // 4.93px
        '3': '0.351875rem',   // 5.63px
        '4': '0.415625rem',   // 6.65px
        '5': '0.4375rem',     // 7px
        '6': '0.496875rem',   // 7.94px
        '7': '0.578125rem',   // 9.27px
        '8': '0.623125rem',   // 9.97px
        '9': '0.625rem',      // 10px
        '10': '0.659375rem',  // 10.59px
        '11': '0.699375rem',  // 11.19px
        '12': '0.75rem',      // 12px
        '13': '0.830625rem',  // 13.29px
        '14': '0.875rem',     // 14px
        '15': '0.9375rem',    // 15px
        '16': '1rem',         // 16px
        '17': '1.24625rem',   // 19.94px
        '18': '1.25rem',      // 20px
        '19': '1.5rem',       // 24px
        '20': '1.5625rem',    // 25px
        '21': '1.661875rem',   // 26.59px
        '22': '1.75rem',      // 28px
        '23': '2rem',         // 32px
        '24': '2.1875rem',    // 35px
        '25': '2.5rem',       // 40px
        '26': '5.375rem'      // 86px
      },
    },
  },
  plugins: [],
}
