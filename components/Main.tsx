import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import PropTypes from "prop-types";

export default function Main({ children, customStyle = {} }): React.ReactElement {
	return (
		<SafeAreaView>
			<View style={[styles.container, customStyle]}>{children}</View>
		</SafeAreaView>
	);
}

Main.propTypes = {
	children: PropTypes.node,
	customStyle: PropTypes.object,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		paddingVertical: 20,
		paddingHorizontal: 10,
		minWidth: "100%",
		height: "100%",
	},
});
