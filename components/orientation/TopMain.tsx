import { Text, View, Image, StyleSheet } from "react-native";

export default function TopMain({ children }) {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 7,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "stretch",
		width: "100%",
		height: "100%",
		// backgroundColor: "blue",
		paddingHorizontal: 20,
		paddingTop: 20,
		// paddingHorizontal: "8%",
	},
});
