import { StyleSheet, View } from "react-native";
import React from "react";
import type { SvgProps } from "react-native-svg";
import AbsoluteFullScreenContainer from "../AbsoluteFullScreenContainer";

interface GenericBackgroundStrokePropsInterface {
	strokeSVG: any;
}

export default function GenericBackgroundStroke({
	strokeSVG,
}: GenericBackgroundStrokePropsInterface): React.ReactElement {
	const StrokeSVGComponent = strokeSVG;
	return (
		<AbsoluteFullScreenContainer>
			<StrokeSVGComponent
				width={"100%"}
				style={styles.greenStroke}
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
	greenStroke: {
		position: "absolute",
		bottom: "20%",
		left: "0%",
		right: "0%",
		transform: [{ scale: 1.2 }],
	},
});
