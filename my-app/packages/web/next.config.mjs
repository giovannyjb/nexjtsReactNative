/** @type {import('next').NextConfig} */
import withPlugins from 'next-compose-plugins';
import withTM from 'next-transpile-modules';
//const withTM = require('next-transpile-modules')(['react-native', '@react-native-community', 'react-native-web']);
const transpileModules = withTM(['react-native-web', 'react-native']);

const nextConfig = {
    webpack: (config, options) => {
        config.resolve.alias['react-native$'] = 'react-native-web';
        // Añade o ajusta configuraciones adicionales aquí.
        return config;
      },
};

export default withPlugins([transpileModules], nextConfig);
