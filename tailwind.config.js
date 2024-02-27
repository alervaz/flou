/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'text': '#ffffff',
        'background': '#000000',
        'background-2': '#090909',
        'primary': '#a30000',
        'secondary': '#7e0000',
        'accent': '#570000',
        'hover': '#202020',
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(300px, 0.8fr))"
      },
    },
  },
  plugins: [],
}

