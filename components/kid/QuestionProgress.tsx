import { View, Text, StyleSheet } from "react-native";

export default function QuestionProgress({ children }) {
	return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "green",
		width: "100%",
		height: 40,
	},
});
