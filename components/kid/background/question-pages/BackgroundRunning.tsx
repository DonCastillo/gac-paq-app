import React from "react";
import { View, StyleSheet } from "react-native";
import { Images } from "../../../../styles/images";

export default function BackgroundRunning(): React.ReactElement {
	const Running = Images.kid.mostly_medium;
	return (
		<View style={styles.container}>
			<Running
				height={200}
				width={120}
				style={styles.running}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		width: "100%",
		height: "100%",
	},
	running: {
        position: "absolute",
        bottom: "20%",
        right: "10%",
    }
});
