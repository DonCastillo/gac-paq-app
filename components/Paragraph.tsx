import React from "react";
import { Text, View, StyleSheet } from "react-native";

import PropTypes from "prop-types";

export default function Paragraph({ children, customStyle = {} }): React.ReactElement {
	return (
		<View>
			<Text style={[styles.text, customStyle]}>{children}</Text>
		</View>
	);
}

Paragraph.propTypes = {
	children: PropTypes.node,
	customStyle: PropTypes.object,
};

const styles = StyleSheet.create({
	text: {
		fontWeight: 500,
		fontSize: 100,
		color: "white",
		textAlign: "center",
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
});
