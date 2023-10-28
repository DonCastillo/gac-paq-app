import { Text, View, Image, StyleSheet } from "react-native";

export default function CenterMain({ children }) {
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
		// backgroundColor: "#FF69B4",
		paddingHorizontal: 20,
		paddingTop: 50,
	},
});
