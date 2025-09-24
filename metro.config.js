const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

/**
 * Lingui
 */
const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("@lingui/metro-transformer/expo"),
};
config.resolver = {
  ...resolver,
  sourceExts: [...resolver.sourceExts, "po", "pot"],
};

/**
 * Export with Nativewind
 */
module.exports = withNativeWind(config, {
  input: "./src/app/globals.css",
  inlineRem: 16,
});
