/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [ "../**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      spacing: {
        "9/10": "90%",
        "1/5": "20%",
        "1/10": "10%",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2500px",
    },
    fontFamily: {
      poppins: ["Poppins-Light"],
      outfit: ["Outfit"]
    },
    colors: {
      principal: {
        150: "#FFFFFF", //Blanco
        50: "#D8D8D8", //Gris chips
        80: "#05C3DD", //Azul claro logo
        100: "#005EAA", //Azul general
        180: "#003DA5", // Azul sidebar
        200: "#F7F8FC", //Fondo pantallas
        250: "#ECECEC", //Gris tarjetas info
        300: "#E7E7E7 ", //Gris Hover
        320: "#777", // Texto gris
        330: "#979797", // Borde inputs
        350: "#333333", //Texto negro
        400: "#C7D2E6", //Gris azulado
        450: "#777777", //Gris texto pequeño
        500: "#FD536D", //red trash
        550: "#ECECEC",
        600: "#D7D7D7", //Gris separadores
        650: "#F9FAFB", // Fondo gris body
        680: "#F6F6F6", // Gris
        700: "#97D700", // Verde
        725: "#05C3DD", // Section color
        750: "#01C4AE", // IPS fondo
        800: "#313131A6", //Modal background
      },
    },
  },
};
 