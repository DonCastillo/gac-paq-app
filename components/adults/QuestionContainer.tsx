import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { GeneralStyle } from "styles/general";
import { horizontalScale, verticalScale } from "utils/responsive";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

export default function QuestionContainer({ children, customStyle }: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;

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
				customStyle
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
