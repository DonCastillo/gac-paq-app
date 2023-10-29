import React from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

export default function ProgressBar(): React.ReactElement {
	return (
		<View style={styles.container}>
			<Progress.Bar
				width={200}
				height={10}
				indeterminate={true}
				color="white"
				borderWidth={2}
				borderRadius={6}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});
