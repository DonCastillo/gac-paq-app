import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";

QuestionTitle.propTypes = {
	children: PropTypes.node,
};

export default function QuestionTitle({ children }): React.ReactElement {
	return (
		<View>
			<Text style={{ ...styles.text, fontWeight: "bold" }}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		marginVertical: 15,
		fontWeight: 700,
		fontSize: 36,
		lineHeight: 35,
		color: "#000",
	},
});
