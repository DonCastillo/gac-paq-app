import * as Font from "expo-font";

export default useFonts = async () => {
	await Font.loadAsync({
		"Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
		"Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
	});
};
