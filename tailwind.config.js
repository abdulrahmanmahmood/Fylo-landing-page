/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#67dbda",
      },
    keyframes:{
      moveRight:{
        "0%":{transform:"translateX(0)" },
        "50%":{transform:"translateX(10px)"},
        "100%":{transform:"translateX(0)"}
      }
    },
    animation:{
      moveRight:"moveRight 1s ease-in-out infinite",
    },
    screens:{
      sm:"567px",
      md:"768px",
      lg:"992px",
      xl:"1200px",
      "2xl": "1400px",
    },
  },
},
  plugins: [],
};
