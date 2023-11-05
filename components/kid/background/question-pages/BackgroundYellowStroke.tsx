import React from "react";
import { StyleSheet, View } from "react-native";
import { Images } from "../../../../styles/images";
import AbsoluteFullScreenContainer from "../AbsoluteFullScreenContainer";

export default function BackgroundYellowStroke(): React.ReactElement {
	const YellowStrokeLG = Images.kid.yellow_stroke_lg;
	const YellowStroke = Images.kid.yellow_stroke;
	return (
		<AbsoluteFullScreenContainer>
			<YellowStroke
				width={"120%"}
				style={styles.yellowStroke}
			/>
		</AbsoluteFullScreenContainer>
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
	yellowStroke: {
		position: "absolute",
		bottom: "-10%",
	},
});
