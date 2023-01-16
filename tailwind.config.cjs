/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
      Merriweather:'Merriweather',
    },
    extend: {
      colors: {
      dark_primary: "#06223F",
      bg_light_primary: "#F5F9FD",
      gray: "#B7C5D3",
    },},
  },
  plugins: [],
}
