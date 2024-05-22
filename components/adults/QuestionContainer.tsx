import React from "react";
import { StyleSheet, View } from "react-native";
import { GeneralStyle } from "styles/general";
import { horizontalScale, verticalScale } from "utils/responsive";
import { useSelector } from "react-redux";
import { getDevice } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

export default function QuestionContainer({
	children,
	customStyle,
}: PropsInterface): React.ReactElement {
	const device = useSelector(getDevice);

	const maxWidth = horizontalScale(
		device.orientation === "landscape" ? 250 : device.isTablet ? 300 : 350,
		device.screenWidth,
	);
	return (
		<View
			style={[
				styles.container,
				{
					maxHeight: verticalScale(600, device.screenHeight),
					maxWidth,
				},
				customStyle,
			]}
		>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		...GeneralStyle.adult.questionContainer,
		height: "auto",
		width: "100%",
		elevation: 8,
	},
});
