import React from "react";
import { StyleSheet } from "react-native";
import { Images } from "../../../../styles/images";
import AbsoluteFullScreenContainer from "../AbsoluteFullScreenContainer";

export default function BackgroundThree(): React.ReactElement {
	const CarrotWhole = Images.kid.background_image_5;
	const CarrotBite = Images.kid.background_image_6;
	return (
		<AbsoluteFullScreenContainer>
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
		</AbsoluteFullScreenContainer>
	);
}

const styles = StyleSheet.create({
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