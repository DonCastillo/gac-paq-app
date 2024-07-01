import React from "react";
import { StyleSheet, View } from "react-native";
import { GeneralStyle } from "styles/general";
import { horizontalScale, verticalScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getDevice } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

const QuestionContainer = ({ children, customStyle }: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);

	const width = horizontalScale(
		device.orientation === "landscape" ? 250 : device.isTablet ? 290 : 340,
		device.screenWidth,
	);
	return (
		<View
			style={[
				styles.container,
				{
					maxHeight: verticalScale(600, device.screenHeight),
					width,
				},
				customStyle,
			]}
		>
			{children}
		</View>
	);
};

export default QuestionContainer;

const styles = StyleSheet.create({
	container: {
		...GeneralStyle.adult.questionContainer,
		height: "auto",
		width: "100%",
		elevation: 8,
	},
});
