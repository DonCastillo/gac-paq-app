import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { moderateScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getDevice, getLanguage } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

const Paragraph = ({ children, customStyle = {} }: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);
	const language = useSelector(getLanguage);
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
					{
						writingDirection: language === "ar-AE" ? "rtl" : "ltr",
					},
				]}
			>
				{children}
			</Text>
		</View>
	);
};

export default Paragraph;

const styles = StyleSheet.create({
	text: {
		color: "white",
		textAlign: "center",
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
});
