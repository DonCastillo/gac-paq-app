import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Images from "styles/images/index";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";

function BackgroundSeven(): React.ReactElement {
	const CarrotWhole = Images.kids.graphics.background_image_5;
	const CarrotBite = Images.kids.graphics.background_image_6;
	return (
		<AbsoluteFullScreenContainer>
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
		</AbsoluteFullScreenContainer>
	);
}

export default memo(BackgroundSeven);

const styles = StyleSheet.create({
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
