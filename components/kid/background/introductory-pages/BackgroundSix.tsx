import React from "react";
import { StyleSheet } from "react-native";
import { Images } from "../../../../styles/images";
import AbsoluteFullScreenContainer from "../AbsoluteFullScreenContainer";

export default function BackgroundSix(): React.ReactElement {
	const CarrotWhole = Images.kid.background_image_5;
	const CarrotBite = Images.kid.background_image_6;
	return (
		<AbsoluteFullScreenContainer>
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
		</AbsoluteFullScreenContainer>
	);
}

const styles = StyleSheet.create({
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
