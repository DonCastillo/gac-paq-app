import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
	children: React.ReactNode;
}

const BottomMain = ({ children }: Props): React.ReactElement => {
	return <View style={styles.container}>{children}</View>;
};

export default BottomMain;

const styles = StyleSheet.create({
	container: {
		flex: 7,
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "stretch",
		width: "100%",
		paddingHorizontal: 20,
		paddingTop: 50,
		overflow: "hidden",
	},
});
