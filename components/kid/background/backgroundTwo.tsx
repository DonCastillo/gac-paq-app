import React from "react";
import { View, StyleSheet } from "react-native";
import { Images } from "../../../styles/images";

export default function BackgroundTwo(): React.ReactElement {
	const CarrotWhole = Images.kid.background_image_5;
	const CarrotBite = Images.kid.background_image_6;
	return (
		<View style={styles.container}>
			<CarrotWhole
				height={130}
				width={130}
				style={styles.carrotWholeTop}
			/>
			<CarrotWhole
				height={80}
				width={80}
				style={styles.carrotWholeBottom}
			/>
			<CarrotBite
				height={150}
				width={150}
				style={styles.carrotBiteTop}
			/>
			<CarrotBite
				height={200}
				width={200}
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
		top: "0%",
		right: "0%"
	},
	carrotWholeBottom: {
		position: "absolute",
		bottom: "25%",
		right: "10%",
		transform: [{ rotate: "160deg" }],
	},
	carrotBiteTop: {
		position: "absolute",
		top: "15%",
		left: "0%",
		transform: [{ rotate: "290deg" }],
	},
	carrotBiteBottom: {
		position: "absolute",
		bottom: "15%",
		left: "-10%",
		transform: [{ rotate: "90deg" }],
	},
});
