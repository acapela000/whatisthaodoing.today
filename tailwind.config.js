/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      md: '800px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        code: {
          'bg': 'var(--colors-bg)',
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: theme('colors.code.bg'),
              color: theme('colors.body'),
              fontFamily: theme('fontFamily.mono'),
            },
            'pre code': {
              fontSize: theme('text.sm'),
            },
            '.nohighlight': {
              backgroundColor: theme('colors.code.bg'),
              color: theme('colors.code.color'),
              padding: '0.2rem',
              borderRadius: '3px',
            },
            code: {
              color: theme('colors.body'),
              fontFamily: theme('fontFamily.mono'),
            },
          }
        }
      }),
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
    display: ['dark', 'responsive'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require("flowbite/plugin"),
  ],
}
