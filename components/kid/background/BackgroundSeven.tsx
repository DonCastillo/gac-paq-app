import React from "react";
import { View, StyleSheet } from "react-native";
import { Images } from "../../../styles/images";

export default function BackgroundSeven(): React.ReactElement {
	const CarrotWhole = Images.kid.background_image_5;
	const CarrotBite = Images.kid.background_image_6;
	return (
		<View style={styles.container}>
			<CarrotWhole
				height={80}
				width={80}
				style={styles.carrotWholeLeft}
			/>
			<CarrotWhole
				height={110}
				width={110}
				style={styles.carrotWholeRight}
			/>
			<CarrotBite
				height={160}
				width={160}
				style={styles.carrotBiteLeft}
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
	carrotBiteLeft: {
		position: "absolute",
		top: "15%",
		left: "-5%",
		transform: [{ rotate: "280deg" }],
	},
	carrotWholeLeft: {
		position: "absolute",
		bottom: "30%",
		left: "15%",
		transform: [{ rotate: "170deg" }],
	},
	carrotWholeRight: {
		position: "absolute",
		top: "15%",
		right: "-5%",
		transform: [{ rotate: "0deg" }],
	},
});
