import React, { memo } from "react";
import { Text, View, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getDevice, getLanguage } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
	textStyle?: object;
}

const QuestionTitle = ({
	children,
	customStyle = {},
	textStyle = {},
}: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);
	const language = useSelector(getLanguage);

	return (
		<View style={[styles.container, customStyle]}>
			<Text
				style={{
					...styles.text,
					fontSize: moderateScale(
						device.isTablet ? (language === "ar-AE" ? 17 : 14) : language === "ar-AE" ? 17 : 14,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
					lineHeight: moderateScale(
						device.isTablet ? (language === "ar-AE" ? 21 : 18) : language === "ar-AE" ? 21 : 18,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
					writingDirection: language === "ar-AE" ? "rtl" : "ltr",
					...textStyle,
				}}
			>
				{children}
			</Text>
		</View>
	);
};

export default memo(QuestionTitle);

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
	},
	text: {
		...GeneralStyle.kid.questionQuestionTitle,
		flex: 1,
		width: "100%",
		flexWrap: "wrap",
		marginBottom: 10,
	},
});
