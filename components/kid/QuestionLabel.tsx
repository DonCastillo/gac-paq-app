import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { SettingContext } from "store/settings";

QuestionLabel.propTypes = {
	children: PropTypes.node,
	customStyle: PropTypes.object,
	textStyle: PropTypes.object,
};

export default function QuestionLabel({
	children,
	customStyle = {},
	textStyle = {},
}): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;
	return (
		<View style={[styles.container, customStyle]}>
			<Text
				style={[
					styles.text,
					textStyle,
					{
						fontSize: device.isTablet ? 23 : 20,
						lineHeight: device.isTablet ? 30 : 25,
					},
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
		marginBottom: 20,
	},
	text: {
		textAlign: "left",
		width: "100%",
		flex: 1,
		flexWrap: "wrap",
	},
});
