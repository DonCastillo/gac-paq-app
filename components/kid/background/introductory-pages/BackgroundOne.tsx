import React from "react";
import { View, StyleSheet } from "react-native";
import { Images } from "../../../../styles/images";

export default function BackgroundOne(): React.ReactElement {
	const CarrotWhole = Images.kid.background_image_5;
	const CarrotBite = Images.kid.background_image_6;
	return (
		<View style={styles.container}>
			<CarrotWhole
				height={200}
				width={200}
				style={styles.carrotWhole}
			/>
			<CarrotBite
				height={200}
				width={200}
				style={styles.carrotBite}
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
	carrotWhole: {
		position: "absolute",
		top: "-5%",
		right: "-10%",
		transform: [{ rotate: "270deg" }],
	},
	carrotBite: {
		position: "absolute",
		bottom: "15%",
		left: "-10%",
		transform: [{ rotate: "90deg" }],
	},
});
