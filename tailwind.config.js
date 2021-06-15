const colors = require('tailwindcss/colors')


function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16),
    }
    : null
}

function makeShadow(name, rgb) {
  const obj = {}

  const nameWithDash = name ? `${name}-`: ''
  const defaultName = name ? name : 'DEFAULT'

  obj[`${nameWithDash}xs`] = `0 0 0 1px rgba(${rgb}, 0.05)`
  obj[`${nameWithDash}sm`] = `0 1px 2px 0 rgba(${rgb}, 0.05)`
  obj[defaultName] = `0 1px 3px 0 rgba(${rgb}, 0.1), 0 1px 2px 0 rgba(${rgb}, 0.06)`
  obj[`${nameWithDash}md`] = `0 4px 6px -1px rgba(${rgb}, 0.1), 0 2px 4px -1px rgba(${rgb}, 0.06)`
  obj[`${nameWithDash}lg`] = `0 10px 15px -3px rgba(${rgb}, 0.1), 0 4px 6px -2px rgba(${rgb}, 0.05)`
  obj[`${nameWithDash}xl`] = `0 20px 25px -5px rgba(${rgb}, 0.1), 0 10px 10px -5px rgba(${rgb}, 0.04)`
  obj[`${nameWithDash}2xl`] = `0 25px 50px -12px rgba(${rgb}, 0.25)`
  obj[`${nameWithDash}inner`] = `inset 0 2px 4px 0 rgba(${rgb}, 0.06)`
  return obj
}

function buildShadowPalette(theme) {

  // default tailwindcss black shadows
  const defaultPalette = {
    ...makeShadow('', '0, 0, 0'),
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none'
  }

  const coloredShadowPalette = Object.values(
    Object.entries(theme('colors')).reduce((acc, curr) => {
      const [k, v] = curr
      if (typeof v === 'string' && v !== 'transparent' && v !== 'currentColor') {
        const { red, green, blue } = hexToRgb(v)
        acc[k] = makeShadow(k, `${red}, ${green}, ${blue}`)
      }
      if (typeof v === 'object') {
        Object.entries(v).forEach(([_k, _v]) => {
          const { red, green, blue } = hexToRgb(_v)
          acc[`${k}-${_k}`] = makeShadow(
            `${k}-${_k}`,
            `${red}, ${green}, ${blue}`,
          )
        })
      }
      return acc
    }, {})
  )

  return coloredShadowPalette.reduce((acc, cur) => ({ ...acc, ...cur }), defaultPalette)
}

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: {
        '50': '#eafdf0',
        '100': '#c5f1d0',
        '200': '#9ceaaf',
        '300': '#6ee58b',
        '400': '#42cf63',
        '500': '#28a745',
        '600': '#069126',
        '700': '#047857',
        '800': '#065f46',
        '900': '#064e3b'
      },
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink
    },
    extend: {
      colors: {
        dark: "#24283b",
        darkText:"#e6e8f1"
      },
      transitionProperty: {
        'max-height': 'max-height',
        'spacing': 'margin, padding',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.green.400"),
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.green.500"),
                textDecoration: "none",
              },
            },
            "h2 a": {
              color: theme("colors.gray.900"),
              textDecoration: "none",
            },
            ".tag a": {
              textDecoration: "none",
            },
            "blockquote p:first-of-type":{
              '&::before': {
                content: '"" !important',
              },
            },
            "blockquote p:last-of-type":{
              '&::after': {
                content: '"" !important',
              },
            },
          },
        },

        dark: {
          css: {
            color: theme("colors.darkText"),
            a: {
              color: theme("colors.green.400"),
              "&:hover": {
                color: theme("colors.green.400"),
              },
            },

            "h2 a": {
              color: theme("colors.darkText"),
            },

            h1: {
              color: theme("colors.darkText"),
            },
            h2: {
              color: theme("colors.darkText"),
            },
            h3: {
              color: theme("colors.darkText"),
            },
            h4: {
              color: theme("colors.darkText"),
            },
            h5: {
              color: theme("colors.darkText"),
            },
            h6: {
              color: theme("colors.darkText"),
            },
            blockquote: {
              color: theme("colors.darkText"),
            },

            strong: {
              color: theme("colors.darkText"),
            },

            code: {
              color: theme("colors.darkText"),
            },

            figcaption: {
              color: theme("colors.gray.500"),
            },

            "::selection": {
              //backgroundColor: "#6f7bb635",
            },
          },
        },
      }),
    },
    /*boxShadow: (theme) => {
      return {
        ...buildShadowPalette(theme),
      }
    },*/
  },
  variants: {
    boxShadow:['dark','hover','focus'],
    scrollbar: ['rounded','dark'],
    extend: {
      margin: ['hover', 'focus'],
      typography: ['dark'],
      borderWidth: ['dark', 'hover', 'focus'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
  ],
}
