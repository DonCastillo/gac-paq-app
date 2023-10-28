import { useContext } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SettingContext } from "../store/settings";

export default function BGLinearGradient() {
	const settingCtx = useContext(SettingContext);
	console.log(settingCtx.settingState.mode);
	const { grad100, grad200, grad300, grad400 } = settingCtx.settingState.colorTheme;

	return (
		<LinearGradient
			colors={[grad100, grad200, grad300, grad400]}
			start={[1, 0]}
			end={[0, 1]}
			locations={[0, 0.3, 0.6, 1]}
			style={styles.bgGradient}
		></LinearGradient>
	);
}

const styles = StyleSheet.create({
	bgGradient: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
	},
});
