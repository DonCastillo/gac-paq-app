import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

TopMain.propTypes = {
	children: PropTypes.node,
};

export default function TopMain({ children }): React.ReactElement {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 7,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "100%",
		height: "100%",
		paddingHorizontal: 20,
		paddingTop: 5,
		overflow: "hidden",
	},
});
