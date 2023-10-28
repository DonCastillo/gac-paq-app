import { Text, View, Image, StyleSheet } from "react-native";

export default function QuestionBreadcrumb({ children }) {
	return (
		<View>
			<Text style={styles.textHeading}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "red",
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		// paddingHorizontal: "8%",
	},
	textHeading: {
		fontWeight: 700,
		fontSize: 24,
		color: "#000",
	},
});
