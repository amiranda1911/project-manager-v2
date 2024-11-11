/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        spin1: {
          '0%, 25%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-12px, -12px) scale(0.75)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        spin2: {
          '0%, 25%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(12px, -12px) scale(0.75)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        spin3: {
          '0%, 25%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(12px, 12px) scale(0.75)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        spin4: {
          '0%, 25%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-12px, 12px) scale(0.75)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
      animation: {
        spin1: 'spin1 1s linear infinite',
        spin2: 'spin2 1s linear infinite',
        spin3: 'spin3 1s linear infinite',
        spin4: 'spin4 1s linear infinite',
      },
      colors: {
        violet: {
          dark: '#4F46E5', // violet dark
          light: '#D3D0F8', // violet light
        },
        orange: {
          dark: '#F59E0B', // orange dark
          light: '#FCE6C2', // orange light
        },
        green: {
          dark: '#22C55E', // green dark
          light: '#C7F0D6', // green light
        },
        gray: {
          850: '#2B2F32',
        },
        black: {
          'opacity-50': 'rgba(0, 0, 0, 0.5)',
          black: '#000000',
        },
        purple: {
          850: '#331436',
          purpleabyss: '#160A60',
          lavander: '#5C5A79',
        },
        blue: {
          450: '#60A5FA',
          550: '#5570F1',
          lightBlue: '#92BBFF',
          hoverloguin: '#268FE4',
        },
        'primary-color-dark': '#1E293B',
        'primary-dark': 'rgba(35, 8, 28, 0.7)',
        'primary-yellow': '#FCF4B6',
        colorLinkedin: '#0A66C2',
        colorFacebook: '#0866FF',
        colorInstagram: '#FC04BA',
        hoversubscribe: '#3B5174',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Define Roboto
        jakarta: ['Plus Jakarta Sans', 'sans-serif'], // Define Plus Jakarta Sans
      },
      fontSize: {
        1: '0.26375rem', // 4.22px
        2: '0.308125rem', // 4.93px
        3: '0.351875rem', // 5.63px
        4: '0.415625rem', // 6.65px
        5: '0.4375rem', // 7px
        6: '0.496875rem', // 7.94px
        7: '0.578125rem', // 9.27px
        8: '0.623125rem', // 9.97px
        9: '0.625rem', // 10px
        10: '0.659375rem', // 10.59px
        11: '0.699375rem', // 11.19px
        12: '0.75rem', // 12px
        13: '0.830625rem', // 13.29px
        14: '0.875rem', // 14px
        15: '0.9375rem', // 15px
        16: '1rem', // 16px
        17: '1.24625rem', // 19.94px
        18: '1.25rem', // 20px
        19: '1.5rem', // 24px
        20: '1.5625rem', // 25px
        21: '1.661875rem', // 26.59px
        22: '1.75rem', // 28px
        23: '2rem', // 32px
        24: '2.1875rem', // 35px
        25: '2.5rem', // 40px
        26: '5.375rem', // 86px
      },
      height: {
        30: '7.492rem', // 119.872px
        38: '9.5rem', // 152px
        46: '11.3125rem', // 181px
      },
      width: {
        29: '7.22375rem', // 115.580px
        45: '10.886rem', // 174.176px,
        90: '22.0625rem', // 353px
        100: '25.625rem', // 410px
      },
      minWidth: {
        29: '7.22375rem', // 115.580px
      },
    },
  },
  plugins: [],
};
