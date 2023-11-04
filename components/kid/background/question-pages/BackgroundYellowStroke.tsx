import React from "react";
import { StyleSheet, View } from "react-native";
import { Images } from "../../../../styles/images";

export default function BackgroundYellowStroke(): React.ReactElement {
	const YellowStrokeLG = Images.kid.yellow_stroke_lg;
	const YellowStroke = Images.kid.yellow_stroke;
	return (
		<View style={styles.container}>
			<YellowStroke
				width={"120%"}
				style={styles.yellowStroke}
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
	yellowStroke: {
		position: "absolute",
		bottom: "-10%",
	},
});
