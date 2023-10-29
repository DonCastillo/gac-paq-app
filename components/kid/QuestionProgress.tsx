import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

QuestionProgress.propTypes = {
	children: PropTypes.node,
};

export default function QuestionProgress({ children }): React.ReactElement {
	return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "green",
		width: "100%",
		height: 40,
	},
});
