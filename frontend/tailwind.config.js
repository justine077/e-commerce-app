/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridAutoRows: {
        '4fr': 'minmax(0, 2fr)',
      }
    },
    fontFamily: {
      'body': ['Cairo', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
