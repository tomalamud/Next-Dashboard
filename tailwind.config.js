const colors = require('tailwindcss/colors');


module.exports = {
  content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/common/**/*.{js,ts,jsx,tsx}",
      "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
