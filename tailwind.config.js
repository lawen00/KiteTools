/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FFBA08',
        'secondcolor':'#153243',
        'background':' #F4F5F1',
        'Subheader':'#6A6A6A',
        'Subheader 2':'#49454F',
        'textDownloadApp':'#49454F'

      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

