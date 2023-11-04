import React from "react";
import { View, StyleSheet } from "react-native";
import { Images } from "../../../../styles/images";

export default function BackgroundSix(): React.ReactElement {
	const CarrotWhole = Images.kid.background_image_5;
	const CarrotBite = Images.kid.background_image_6;
	return (
		<View style={styles.container}>
			<CarrotWhole
				height={100}
				width={100}
				style={styles.carrotWholeRight}
			/>
			<CarrotBite
				height={125}
				width={125}
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
		bottom: "25%",
		left: "5%",
		transform: [{ rotate: "70deg" }],
	},
	carrotWholeRight: {
		position: "absolute",
		bottom: "40%",
		right: "-10%",
		transform: [{ rotate: "0deg" }],
	},
});
