import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

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
	return (
		<View style={[styles.container, customStyle]}>
			<Text style={[styles.text, textStyle]}>{children}</Text>
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
		fontSize: 24,
	},
});
