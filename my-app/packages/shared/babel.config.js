module.exports = {
  presets: [
    'module:metro-react-native-babel-preset', // Asegúrate de incluir el preset de React Native si aún no está.
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          "@shared": "./src", // Asegúrate de que la ruta alias corresponde a la estructura de tu proyecto.
        },
      },
    ],
  ],
};
