/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-purple' : '#150E28',
        'custom-flare' : '#903AFF',
        'custom-light-purple' : '#D434FE',
        'custom-darker-purple' : '#100B20'
      },
      blur: {
        '4xl': '120px'
      },
      fontSize: {
        mxl: ['80px', '1']
      },
      screens: {
        xs: '280px'
      }
    },
  },
  plugins: [],
}

