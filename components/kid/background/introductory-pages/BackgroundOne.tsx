import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Images from "styles/images/index";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";

function BackgroundOne(): React.ReactElement {
	const CarrotWhole = Images.kids.graphics.background_image_5;
	const CarrotBite = Images.kids.graphics.background_image_6;
	return (
		<AbsoluteFullScreenContainer>
			<CarrotWhole
				height={150}
				width={150}
				style={styles.carrotWhole}
			/>
			<CarrotBite
				height={150}
				width={150}
				style={styles.carrotBite}
			/>
		</AbsoluteFullScreenContainer>
	);
}

export default memo(BackgroundOne);

const styles = StyleSheet.create({
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
