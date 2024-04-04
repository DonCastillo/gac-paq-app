import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SettingContext } from "store/settings";
import { moderateScale } from "utils/responsive";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
	textStyle?: object;
}

export default function QuestionLabel({
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
						// fontSize: device.isTablet ? 23 : 20,
						// lineHeight: device.isTablet ? 30 : 25,
						fontSize: moderateScale(
							device.isTablet ? 15 : 15,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
						lineHeight: moderateScale(
							device.isTablet ? 20 : 20,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
						// backgroundColor: "blue"
					},
					textStyle,
				]}
			>
				{children}
			</Text>
		</View>
	);
}

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
