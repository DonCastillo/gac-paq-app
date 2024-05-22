import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { moderateScale } from "utils/responsive";
import { useSelector } from "react-redux";
import { getDevice } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

export default function Paragraph({
	children,
	customStyle = {},
}: PropsInterface): React.ReactElement {
	const device = useSelector(getDevice);
	return (
		<View>
			<Text
				style={[
					styles.text,
					{
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
