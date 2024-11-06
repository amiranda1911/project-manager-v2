/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          dark: '#4F46E5',    // violet dark
          light: '#D3D0F8',   // violet light
        },
        orange: {
          dark: '#F59E0B',    // orange dark
          light: '#FCE6C2',   // orange light
        },
        green: {
          dark: '#22C55E',    // green dark
          light: '#C7F0D6',   // green light
        },
        gray: {
          '850': '#2B2F32'
        },
        black: {
          'opacity-50': 'rgba(0, 0, 0, 0.5)'
        },
        purple: {
          '850': '#331436'
        },
        blue: {
          '450': '#60A5FA',
          '550': '#5570F1'
        },
        'primary-color-dark': '#1E293B'
      },
<<<<<<< Updated upstream
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
        '21': '1.661875rem',  // 26.59px
        '22': '1.75rem',      // 28px
        '23': '2rem',         // 32px
        '24': '2.1875rem',    // 35px
        '25': '2.5rem',       // 40px
        '26': '5.375rem'      // 86px
      },
      height: {
        '30': '7.492rem',     // 119.872px
        '46': '11.3125rem',   // 181px
      },
      width: {
        '29': '7.22375rem',   // 115.580px
        '45': '10.886rem',    // 174.176px,
        '90': '22.0625rem',      // 353px
        '100': '25.625rem'    // 410px
      },
      minWidth: {
        '29': '7.22375rem',   // 115.580px 
      }      
=======
      colors: {
        white2: '#rgba(255, 252, 252, 0.92)',            
        darkBlue: '#160A60',         // Azul Escuro
        black50: 'rgba(0, 0, 0, 0.5)', // Preto com 50% de opacidade
        darkGray: '#1E293B',         // Cinza Escuro
        darkPurple: 'rgba(35, 8, 28, 0.7)', // Roxo Escuro com 70% de opacidade
        lightGray: 'rgba(217, 217, 217, 0.5)', // Cinza Claro com 50% de opacidade
        black55: 'rgba(0, 0, 0, 0.55)', // Preto com 55% de opacidade
        black10: 'rgba(0, 0, 0, 0.1)', // Preto com 10% de opacidade
        bluishGray: '#2B3A50',       // Cinza Azulado
        mutedBlue: '#94A3B8',        // Azul Suave
        blueproject: '#92BBFF',
        customPurple: 'rgba(35, 8, 28, 0.7)',
        themanagercolor: '#FCF4B6',
        bgTools: '#5C5A79',
      },
>>>>>>> Stashed changes
    },
  },
  plugins: [],
}
