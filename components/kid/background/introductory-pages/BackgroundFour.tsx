import React from "react";
import { View, StyleSheet } from "react-native";
import { Images } from "../../../../styles/images";

export default function BackgroundFour(): React.ReactElement {
	const CarrotWhole = Images.kid.background_image_5;
	return (
		<View style={styles.container}>
			<CarrotWhole
				height={100}
				width={100}
				style={styles.carrotWholeLeft}
			/>
			<CarrotWhole
				height={100}
				width={100}
				style={styles.carrotWholeRight}
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
	carrotWholeLeft: {
		position: "absolute",
		bottom: "30%",
		left: "5%",
		transform: [{ rotate: "280deg" }],
	},
	carrotWholeRight: {
		position: "absolute",
		bottom: "50%",
		right: "5%",
		transform: [{ rotate: "0deg" }],
	},
});
