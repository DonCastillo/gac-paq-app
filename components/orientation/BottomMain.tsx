import { Text, View, Image, StyleSheet } from "react-native";

export default function BottomMain({ children }) {
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
