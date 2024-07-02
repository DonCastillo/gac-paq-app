import React from "react";
import { View, StyleSheet } from "react-native";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}
const Navigation = ({ children, customStyle = {} }: PropsInterface): React.ReactElement => {
	return <View style={[styles.container, customStyle]}>{children}</View>;
};

export default Navigation;

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
