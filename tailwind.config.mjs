import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        // EXAMPLES
        'purple': {
          '50': '#faf7fc',
          '100': '#f4eff8',
          '200': '#e9dfef',
          '300': '#d9c5e2',
          '400': '#c2a1d1',
          '500': '#a67bba',
          '600': '#855996',
          '700': '#734a81',
          '800': '#5f3e6a',
          '900': '#503758',
          '950': '#301b37',
          '975': '#231d26',
          // '975': '#25152b',
          'hover-light': '#e7e3eb',
          'hover-dark': '#3b2d41',
        },
      },
      content: {
        empty: '\'\'',
      },
      // fontFamily: {
      //   'display': ['Comfortaa'],
      //   'body': ['Inter'],
      // },
      gridTemplateColumns: {
        'auto': 'auto',
        'wrapper': '[wrapper-start sidebar-start] 260px [sidebar-end main-start] minmax(0, 1fr) [main-end wrapper-end]',
      },
      gridTemplateRows: {
        'auto': 'auto',
        'wrapper': '[wrapper-start header-start] var(--header-height) [header-end main-start] minmax(0, 1fr) [main-end wrapper-end]',
      },
      gridColumn: {
        'start-end': '1 / -1',
      },
      gridRow: {
        'start-end': '1 / -1',
      },
      zIndex: {
        '1': '1',
        '-1': '-1',
        '100': '100',
      },
    },
  },
  plugins: [
    forms,
  ],
};
