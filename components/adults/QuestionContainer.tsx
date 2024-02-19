import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { GeneralStyle } from "styles/general";

QuestionContainer.propTypes = {
	children: PropTypes.node,
};

export default function QuestionContainer({ children }): React.ReactElement {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		...GeneralStyle.adult.questionContainer,
		height: "auto",
		width: "100%",
	},
});
