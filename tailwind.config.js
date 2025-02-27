module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.css',
  ],
  theme: {
    minHeight: {
      '0': '0',
      '1/2': '50%',
      '1/4': '25%',
      '3/4': '75%',
      'full': '100%',
      '250': '250px',
      '200': '200px',
      '150': '150px',
      '42': '42px',
      '80': '80px'
    },
    extend: {
      padding: {
        '150': '150px'
      },
      margin: {
        '-150': '-150px'
      },
      width: {
        '32': '32px',
        '50': '50px',
        '75': '75px'
      },
      height: {
        '32': '32px',
        '50': '50px',
        '75': '75px'
      },
      minWidth: {
        '50': '50px',
        '75': '75px',
        '400': '400px'
      },
      maxWidth: {
        '80': '80px',
        '90': '90px',
        '200': '200px',
        '300': '300px'
      },
      fontSize: {
        '7xl': '5em',
        '8xl': '6em',
        '9xl': '7em',
        '10xl': '8em',
      },
      fontFamily: {
        sans: [
          'Raleway', 'sans-serif'
        ],
        display: [
          'Sedgwick\\ Ave', 'serif'
        ]
      },
      colors: {
        blue: {
          default: '#00A3FF',
          dark: '#0077b7'
        },
        orange: {
          light: '#fcf2e3',
          default: '#FF9900',
          semidark: '#AD5E00',
        },
        yellow: {
          default: '#FFC700',
          light: '#ffe07a'
        },
        hotpink: {
          "500": '#E8005A',
          "700": '#C2004A',
        },
      },
    }
  },
  corePlugins: {
    container: false
  }
}

