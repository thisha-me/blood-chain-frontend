/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#8C0909',
        mainColorLighter: '#DC143C',
        secondaryColor: '#F0F0F0',
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
      },
    },
  },
  plugins: [],
};