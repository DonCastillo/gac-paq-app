import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Heading({ children, customStyle = {} }): React.ReactElement {
	return (
		<View>
			<Text style={[styles.text, customStyle]}>{children}</Text>
		</View>
	);
}

Heading.propTypes = {
	children: PropTypes.node.isRequired,
	customStyle: PropTypes.object,
};

const styles = StyleSheet.create({
	text: {
		fontWeight: "bold",
		color: "white",
		flexWrap: "wrap",
		fontSize: 100,
	},
});
