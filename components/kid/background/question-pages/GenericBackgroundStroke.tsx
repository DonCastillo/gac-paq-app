import { StyleSheet } from "react-native";
import React from "react";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";
import { StrokeYellow } from "components/svgs/kid/doodles";

interface PropsInterface {
	fillColor: string;
}

export default function GenericBackgroundStroke({ fillColor }: PropsInterface): React.ReactElement {
	return (
		<AbsoluteFullScreenContainer>
			<StrokeYellow
				fill={fillColor}
				height={500}
				style={styles.stroke}
			/>
		</AbsoluteFullScreenContainer>
	);
}

const styles = StyleSheet.create({
	stroke: {
		position: "absolute",
		bottom: "10%",
		left: "0%",
		right: "0%",
		maxHeight: "100%",
		transform: [{ translateX: -90 }],
	},
});
