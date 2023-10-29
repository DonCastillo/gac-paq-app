import React from "react";
import { View, StyleSheet } from "react-native";

import PropTypes from "prop-types";

export default function Navigation({ children, customStyle = {} }): React.ReactElement {
	return <View style={[styles.container, customStyle]}>{children}</View>;
}

Navigation.propTypes = {
	children: PropTypes.node,
	customStyle: PropTypes.object,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		paddingHorizontal: 20,
	},
});
