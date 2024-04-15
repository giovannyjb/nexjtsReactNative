const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  resolver: {

    extraNodeModules: new Proxy({}, {
      get: (target, name) => {
        return path.join(__dirname, `node_modules/${name}`);
      }
    }),
  },
  watchFolders: [
    path.resolve(__dirname, '../shared/src'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
