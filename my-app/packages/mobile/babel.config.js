// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    /*
    '@babel/plugin-proposal-decorators',
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
    ]*/

    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: true,
      },
    ],

    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@shared': '../shared/src', // Asegúrate de que la ruta es correcta
        }
      },
    ],

    ['@babel/plugin-proposal-decorators', {
      version: 'legacy'
    }],
    'babel-plugin-parameter-decorator',
    // ['@babel/plugin-proposal-private-methods', {loose: true}],
    ['@babel/plugin-proposal-private-property-in-object', {
      loose: true
    }],
    // ['@babel/plugin-proposal-class-properties', {loose: true}],
    'react-native-reanimated/plugin',
  
  ]
};
