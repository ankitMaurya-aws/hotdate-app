module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F79220',
        'red': '#F79220',
        'red-1':"#FF0900",
        'blue':"#4F41A2",
        'gray': '#AFAFAF',
        'gray-900': '#424242',
        'red-500': '#FF0900',
        'black-20': '#202020',
        'yellow': '#FFB800',
        'violet': '#4F41A2',
        'transparent-black': '#0000008f',
        '2e2e2e': '#2e2e2e',
      },
      minHeight: {
        '832': '832px',
      },
      height: {
        '40': '40px',
        '502': '502px',
        '500px': '500px',
      },
      width: {
        '500px': '500px',
        '132': '132px',
        '30': '30%',
        '502': '502px',
      },
      maxWidth: {
        '100px': '100px',
        '150px': '150px',
        '420px': '420px',
        '470px': '470px',
        '500': '500px',
      },
      padding: {
        '10px': '10px',
        '100px': '100px',
        '200px': '200px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
      },
      borderRadius: {
        '58': '58px',
        '65': '65px',
        '86': '86px',
        '46': '46px',
        '47': '47px',
        '50px': '50px',
        '502': '502px',
      },
      lineHeight: {
        '25': '25px',
        '27': '27px',
        '29': '29px',
        '30': '30px',
        '34': '34px',
        '37.5': '37.5px',
        '45': '45px',
        '50': '50px',
        '65': '65px',
        '75': '75px'
      },
      fontSize: {
        'sm': ['14px', {
          lineHeight: '21px',
        }],
        '25px': ['25px', {
          lineHeight: '37.5px',
        }],
        '35px': ['35px', {
          lineHeight: '45px',
        }],
        '40px': ['40px', {
          lineHeight: '57.92px',
        }],
        'lg': ['18px', {
          lineHeight: '29px',
        }],
        '5xl': ['48px', {
          lineHeight: '65px',
        }],
        '50px': ['50px', {
          lineHeight: '75px',
          fontWeight: '700',
        }],
        '5xl': ['48px', {
          lineHeight: '65px',
        }],
      },
      fontFamily: {
        'primary_font': ['Poppins', 'sans-serif'],
        'secondary_font': ['Grandiflora One', 'serif'],
      },
      blur: {
        200: '200px',
      },
    },
  },
  plugins: [],
}