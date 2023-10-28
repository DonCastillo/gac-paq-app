import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";

export default function Main({ children, customStyle = {} }) {
	return (
		<SafeAreaView>
			<View style={[styles.container, customStyle]}>{children}</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		paddingVertical: 20,
		paddingHorizontal: 10,
		minWidth: "100%",
		height: "100%",
		// backgroundColor: 'yellow'
	},
});
