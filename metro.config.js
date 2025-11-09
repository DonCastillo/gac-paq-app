const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
config.transformer.assetPlugins = ["expo-asset/tools/hashAssetFiles"];
config.resolver.assetExts.push("svg", "png", "jpg", "jpeg");
config.resolver.sourceExts.push("svg", "jsx", "js", "ts", "tsx", "json");
config.resolverMainFields = ["react-native", "browser", "main"];
config.platforms = ["ios", "android", "native", "web"];

module.exports = config
