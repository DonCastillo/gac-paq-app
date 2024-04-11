import React, { memo, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SettingContext } from "store/settings";
import { moderateScale } from "utils/responsive";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
	textStyle?: object;
}

function QuestionLabel({
	children,
	customStyle = {},
	textStyle = {},
}: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;
	return (
		<View style={[styles.container, customStyle]}>
			<Text
				style={[
					styles.text,
					{
						fontSize: moderateScale(
							device.isTablet ? 15 : 19,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
						lineHeight: moderateScale(
							device.isTablet ? 20 : 24,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
					},
					textStyle,
				]}
			>
				{children}
			</Text>
		</View>
	);
}

export default memo(QuestionLabel, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
	},
	text: {
		textAlign: "left",
		width: "100%",
		flex: 1,
		flexWrap: "wrap",
	},
});
