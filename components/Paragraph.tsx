import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SettingContext } from "store/settings";
import { moderateScale } from "utils/responsive";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

export default function Paragraph({
	children,
	customStyle = {},
}: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;
	return (
		<View>
			<Text
				style={[
					styles.text,
					{
						// fontSize: device.isTablet ? 20 : 15,
						// lineHeight: device.isTablet ? 25 : 19,
						fontSize: moderateScale(
							device.isTablet ? 15 : 15,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
						lineHeight: moderateScale(
							device.isTablet ? 19 : 19,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
					},
					customStyle,
				]}
			>
				{children}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: "white",
		textAlign: "center",
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
});
