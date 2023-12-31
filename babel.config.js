module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["."],
					extensions: [
						".ios.ts",
						".android.ts",
						".ts",
						".ios.tsx",
						".android.tsx",
						".tsx",
						".jsx",
						".js",
						".json",
						".svg",
						".jpg",
						".jpeg",
						".png",
					],
					alias: {
						assets: "./assets",
						styles: "./styles",
						components: "./components",
						store: "./store",
					},
				},
			],
		],
	};
};
