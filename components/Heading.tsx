import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SettingContext } from "store/settings";
import { moderateScale } from "utils/responsive";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

export default function Heading({
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
						// fontSize: device.isTablet ? 80 : 50,
						// lineHeight: device.isTablet ? 100 : 70,
						fontSize: moderateScale(
							device.isTablet ? 45 : 30,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
						lineHeight: moderateScale(
							device.isTablet ? 60 : 45,
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
		flexWrap: "wrap",
	},
});
