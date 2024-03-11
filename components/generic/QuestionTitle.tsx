import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";

QuestionTitle.propTypes = {
	children: PropTypes.node,
};

export default function QuestionTitle({ children }): React.ReactElement {
	return (
		<View style={styles.container}>
			<Text style={{ ...styles.text }}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
	},
	text: {
		...GeneralStyle.kid.questionQuestionTitle,
		flex: 1,
		width: "100%",
		flexWrap: "wrap",
		marginBottom: 10,
	},
});
