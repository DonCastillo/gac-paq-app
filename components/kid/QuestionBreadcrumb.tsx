import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";

QuestionBreadcrumb.propTypes = {
	children: PropTypes.node,
};

export default function QuestionBreadcrumb({ children }): React.ReactElement {
	return (
		<View>
			<Text style={styles.textHeading}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "red",
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		// paddingHorizontal: "8%",
	},
	textHeading: {
		fontSize: 24,
		color: "#000",
	},
});
