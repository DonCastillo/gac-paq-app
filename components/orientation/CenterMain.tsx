import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

CenterMain.propTypes = {
	children: PropTypes.node,
};
export default function CenterMain({ children }): React.ReactElement {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 7,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		paddingHorizontal: 20,
		paddingTop: 30,
		// backgroundColor: "pink"
	},
});
