import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
	children: React.ReactNode;
}

const CenterMain = ({ children }: Props): React.ReactElement => {
	return <View style={styles.container}>{children}</View>;
};

export default CenterMain;

const styles = StyleSheet.create({
	container: {
		flex: 7,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		paddingHorizontal: 20,
		paddingTop: 5,
		overflow: "hidden",
	},
});
