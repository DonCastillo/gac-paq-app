import React from "react";
import { StyleSheet } from "react-native";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";

export default function BackgroundLeft({
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
				style={styles.left}
			/>
		</AbsoluteFullScreenContainer>
	);
}

const styles = StyleSheet.create({
	left: {
		position: "absolute",
		bottom: "20%",
		left: "5%",
	},
});
