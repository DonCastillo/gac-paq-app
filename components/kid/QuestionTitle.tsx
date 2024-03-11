import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";

QuestionTitle.propTypes = {
	children: PropTypes.node,
};

export default function QuestionTitle({ children }): React.ReactElement {
	return (
		<View>
			<Text style={{ ...styles.text }}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		...GeneralStyle.kid.questionQuestionTitle,
	},
});
