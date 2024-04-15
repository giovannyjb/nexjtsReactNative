// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@shared': '../shared/src', // Asegúrate de que la ruta es correcta
        }
      }
    ]
  ]
};
