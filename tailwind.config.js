/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandgreen: "#2f7d52",
        brandblue: "#246bb3",
        brandgold: "#d1b56c",
        brandsoft: "#eef6f4"
      }
    }
  },
  plugins: []
};
