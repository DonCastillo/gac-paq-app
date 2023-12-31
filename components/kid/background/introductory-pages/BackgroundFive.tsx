import React from "react";
import { StyleSheet } from "react-native";
import Images from "styles/images/index";
import AbsoluteFullScreenContainer from "../AbsoluteFullScreenContainer";

export default function BackgroundFive(): React.ReactElement {
	const CarrotWhole = Images.kids.graphics.background_image_5;
	const CarrotBite = Images.kids.graphics.background_image_6;
	return (
		<AbsoluteFullScreenContainer>
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
		</AbsoluteFullScreenContainer>
	);
}

const styles = StyleSheet.create({
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
