import React from "react";
import { View, StyleSheet } from "react-native";
import { Images } from "../../../../styles/images";

export default function BackgroundThree(): React.ReactElement {
	const CarrotWhole = Images.kid.background_image_5;
	const CarrotBite = Images.kid.background_image_6;
	return (
		<View style={styles.container}>
			<CarrotWhole
				height={120}
				width={120}
				style={styles.carrotWholeTop}
			/>
			<CarrotBite
				height={120}
				width={120}
				style={styles.carrotBiteBottom}
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
		top: "5%",
		left: "0%",
		transform: [{ rotate: "70deg" }],
	},
	carrotBiteBottom: {
		position: "absolute",
		right: "-10%",
		bottom: "15%",
		transform: [{ rotate: "20deg" }],
	},
});
