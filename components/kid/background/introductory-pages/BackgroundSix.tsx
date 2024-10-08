import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Images from "styles/images/index";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";

const BackgroundSix = (): React.ReactElement => {
	const CarrotWhole = Images.kids.graphics.background_image_5;
	const CarrotBite = Images.kids.graphics.background_image_6;
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
};

export default memo(BackgroundSix);

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
