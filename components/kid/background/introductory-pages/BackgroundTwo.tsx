import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Images from "styles/images/index";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";

const BackgroundTwo = (): React.ReactElement => {
	const CarrotWhole = Images.kids.graphics.background_image_5;
	const CarrotBite = Images.kids.graphics.background_image_6;
	return (
		<AbsoluteFullScreenContainer>
			<CarrotWhole
				height={100}
				width={100}
				style={styles.carrotWholeTop}
			/>
			<CarrotWhole
				height={60}
				width={60}
				style={styles.carrotWholeBottom}
			/>
			<CarrotBite
				height={100}
				width={100}
				style={styles.carrotBiteTop}
			/>
			<CarrotBite
				height={140}
				width={140}
				style={styles.carrotBiteBottom}
			/>
		</AbsoluteFullScreenContainer>
	);
};

export default memo(BackgroundTwo);

const styles = StyleSheet.create({
	carrotWholeTop: {
		position: "absolute",
		top: "0%",
		right: "0%",
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
