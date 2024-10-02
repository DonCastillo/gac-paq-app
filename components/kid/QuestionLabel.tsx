import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { getDevice, getLanguage } from "store/settings/settingsSlice";
import { moderateScale } from "utils/responsive.utils";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
	textStyle?: object;
}

const QuestionLabel = ({
	children,
	customStyle = {},
	textStyle = {},
}: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);
	const language = useSelector(getLanguage);

	return (
		<View style={[styles.container, customStyle]}>
			<Text
				style={[
					styles.text,
					// {
					// 	fontSize: moderateScale(
					// 		device.isTablet ? (language === "ar-AE" ? 18 : 15) : language === "ar-AE" ? 22 : 19,
					// 		device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					// 	),
					// 	lineHeight: moderateScale(
					// 		device.isTablet ? (language === "ar-AE" ? 23 : 20) : language === "ar-AE" ? 27 : 24,
					// 		device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					// 	),
					// },
					// { writingDirection: language === "ar-AE" ? "rtl" : "ltr", backgroundColor: "red" },
					// textStyle,
				]}
			>
				{children}
			</Text>
		</View>
	);
};

export default memo(QuestionLabel, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
	},
	text: {
		width: "100%",
		flex: 1,
		flexWrap: "wrap",
	},
});
