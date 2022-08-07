// const screens = {
//   xs: '0px', // phone
//   sm: '576px', // phone rotated
//   md: '768px', // tablet
//   lg: '992px', // tablet rotated / small desktop
//   xl: '1200px', // big desktop
// };

module.exports = {
  purge: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/**/*.html',
    './src/**/**/*.{html,js,jsx,ts,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      // screens,
      // width: screens,
      // backgroundImage: {
      //   'primary-gradient-dark': 'linear-gradient(180deg, #001563 0%, #08133F 100%)',
      //   'primary-gradient-light':
      //     'linear-gradient(135deg, #2F80ED 0%, #7BB3FF 0.01%, #0038FF 100%);',
      // },
      colors: {
        primary: {
          light: '#263fba',
          main: '#0d1953',
          dark: '#09457D',
        },
        accent: {
          main: '#FBBD0B',
        },
        text: {
          main: '#151B26',
          placeholder: '#7E8797',
          light: '#C0C3C9',
          lighter: '#D8DBDF',
        },
        gray: {
          background: '#222',
        },
        white: 'white',
        black: 'black',
        background: '#F8F8FF',
        error: '#EB5757',
        warning: '#F2994A',
        success: '#27AE60',
      },
      // fontSize: {
      //   h1: '96px',
      //   h2: '60px',
      //   h3: '48px',
      //   h4: '34px',
      //   h5: '24px',
      //   h6: '26px',
      //   body: [
      //     '16px',
      //     {
      //       lineHeight: '24px',
      //     },
      //   ],
      //   subtitle1: [
      //     '16px',
      //     {
      //       lineHeight: '19.2px',
      //     },
      //   ],
      //   subtitle2: [
      //     '14px',
      //     {
      //       lineHeight: '16.8px',
      //     },
      //   ],
      //   button: [
      //     '14px',
      //     {
      //       lineHeight: '16.8px',
      //     },
      //   ],
      //   caption: [
      //     '12px',
      //     {
      //       lineHeight: '15px',
      //     },
      //   ],
      //   tabs: '10px',
      //   overline: [
      //     '10px',
      //     {
      //       lineHeight: '12px',
      //       letterSpacing: '1.5px',
      //     },
      //   ],
      // },
      // blur: {
      //   lg: '50px',
      // },
    },
  },
};
