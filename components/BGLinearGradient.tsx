import defaultColor from "@/store/settings/defaultColor";
import { getColorTheme } from "@store/settings/settingsSlice";
import { LinearGradient } from "expo-linear-gradient";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const BGLinearGradient = (): React.ReactElement => {
	const colorTheme = useSelector(getColorTheme);
	const { grad100, grad200, grad300, grad400 } = colorTheme;

	return (
		<LinearGradient
			colors={[
				(grad100 ?? defaultColor.grad100) as string,
				(grad200 ?? defaultColor.grad200) as string,
				(grad300 ?? defaultColor.grad300) as string,
				(grad400 ?? defaultColor.grad400) as string,
			]}
			start={[1, 0]}
			end={[0, 1]}
			locations={[0, 0.3, 0.6, 1]}
			style={styles.bgGradient}
		/>
	);
};

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
