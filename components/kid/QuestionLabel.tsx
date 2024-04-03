import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SettingContext } from "store/settings";

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
						fontSize: device.isTablet ? 23 : 20,
						lineHeight: device.isTablet ? 30 : 25,
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
