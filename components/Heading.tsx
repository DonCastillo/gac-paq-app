import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { moderateScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getDevice, getLanguage } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

const Heading = ({ children, customStyle = {} }: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);
	const language = useSelector(getLanguage);

	return (
		<View>
			<Text
				style={[
					styles.text,
					{
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

export default Heading;

const styles = StyleSheet.create({
	text: {
		color: "white",
		flexWrap: "wrap",
	},
});
