import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

BottomMain.propTypes = {
	children: PropTypes.node,
};

export default function BottomMain({ children }): React.ReactElement {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 7,
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "stretch",
		width: "100%",
		paddingHorizontal: 20,
		paddingTop: 50,
	},
});
