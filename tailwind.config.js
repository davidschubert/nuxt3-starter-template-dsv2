module.exports ={
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        sans: ['Neue Montreal', 'sans-serif'],
        serif: ['Neue Montreal', 'sans-serif'],
        mono: ['Neue Montreal', 'sans-serif'],
        display: ['Neue Montreal', 'sans-serif'],
        body: ['Neue Montreal', 'sans-serif'],
      },
      fontSize: {
        smaller: '12px',
        small: '14px',
        normal: '16px',
        big: '20px'
      },
      spacing: {
        '140': '35rem',
        '150': '59rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      lineHeight: {
        '11': '4rem', 
      },
      borderRadius: {
        '4xl': '2rem',
        normal: '2px',
      }
    }
  },
  plugins: []
}