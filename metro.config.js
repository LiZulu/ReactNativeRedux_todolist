const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

const defaultConfig = getDefaultConfig(__dirname);

// Add "web" as a platform
defaultConfig.resolver.resolverMainFields = [
  "browser",
  "module",
  "main"
];

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
