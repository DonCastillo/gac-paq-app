import React, { memo, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive";
import { SettingContext } from "store/settings";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
	textStyle?: object;
}

function QuestionTitle({
	children,
	customStyle = {},
	textStyle = {},
}: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;
	return (
		<View style={[styles.container, customStyle]}>
			<Text
				style={{
					...styles.text,
					fontSize: moderateScale(
						device.isTablet ? 14 : 14,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
					lineHeight: moderateScale(
						device.isTablet ? 18 : 18,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
					...textStyle,
				}}
			>
				{children}
			</Text>
		</View>
	);
}

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
