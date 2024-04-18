import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Images from "styles/images/index";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";

function BackgroundFour(): React.ReactElement {
	const CarrotWhole = Images.kids.graphics.background_image_5;
	return (
		<AbsoluteFullScreenContainer>
			<CarrotWhole
				height={100}
				width={100}
				style={styles.carrotWholeLeft}
			/>
			<CarrotWhole
				height={100}
				width={100}
				style={styles.carrotWholeRight}
			/>
		</AbsoluteFullScreenContainer>
	);
}

export default memo(BackgroundFour);

const styles = StyleSheet.create({
	carrotWholeLeft: {
		position: "absolute",
		bottom: "30%",
		left: "5%",
		transform: [{ rotate: "280deg" }],
	},
	carrotWholeRight: {
		position: "absolute",
		bottom: "50%",
		right: "5%",
		transform: [{ rotate: "0deg" }],
	},
});
