import { Text, View, Image, StyleSheet } from "react-native";

export default function Navigation({ children, customStyle = {} }) {
	return <View style={[styles.container, customStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "pink",
		// backgroundColor: "#fff",
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		paddingHorizontal: 20,
	},
});
