const colors = require('tailwindcss/colors')




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
      ...colors,
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
