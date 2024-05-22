import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { getColorTheme } from "store/settings/settingsSlice";

function BGLinearGradient(): React.ReactElement {
	const colorTheme = useSelector(getColorTheme);
	const { grad100, grad200, grad300, grad400 } = colorTheme;

	return (
		<LinearGradient
			colors={[grad100 ?? "#FFF", grad200 ?? "#FFF", grad300 ?? "#FFF", grad400 ?? "#FFF"]}
			start={[1, 0]}
			end={[0, 1]}
			locations={[0, 0.3, 0.6, 1]}
			style={styles.bgGradient}
		/>
	);
}

export default memo(BGLinearGradient);

const styles = StyleSheet.create({
	bgGradient: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
	},
});
