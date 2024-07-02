import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { moderateScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getDevice } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

const Heading = ({ children, customStyle = {} }: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);

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
};

export default Heading;

const styles = StyleSheet.create({
	text: {
		color: "white",
		flexWrap: "wrap",
	},
});
