import React from "react";
import { View, StyleSheet } from "react-native";
import { Images } from "../../../../styles/images";

export default function BackgroundFive(): React.ReactElement {
	const CarrotWhole = Images.kid.background_image_5;
	const CarrotBite = Images.kid.background_image_6;
	return (
		<View style={styles.container}>
			<CarrotWhole
				height={100}
				width={100}
				style={styles.carrotWholeTop}
			/>
			<CarrotBite
				height={150}
				width={150}
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
	carrotWholeTop: {
		position: "absolute",
		top: "6%",
		left: "-1%",
		transform: [{ rotate: "0deg" }],
	},
	carrotWholeRight: {
		position: "absolute",
		bottom: "25%",
		right: "0%",
		transform: [{ rotate: "280deg" }],
	},
});
