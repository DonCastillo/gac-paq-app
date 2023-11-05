import React from "react";
import { StyleSheet } from "react-native";
import AbsoluteFullScreenContainer from "../AbsoluteFullScreenContainer";

export default function BackgroundRight({
	svg,
	height,
	width,
}: {
	svg: any;
	height?: number;
	width?: number;
}): React.ReactElement {
	const SVGImage = svg;
	return (
		<AbsoluteFullScreenContainer>
			<SVGImage
				height={height ?? 200}
				width={width ?? 150}
				style={styles.right}
			/>
		</AbsoluteFullScreenContainer>
	);
}

const styles = StyleSheet.create({
	right: {
		position: "absolute",
		bottom: "20%",
		right: "5%",
	},
});
