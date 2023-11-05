import React from "react";
import { StyleSheet, View } from "react-native";
import AbsoluteFullScreenContainer from "../AbsoluteFullScreenContainer";

export default function BackgroundCenter({
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
			<View style={styles.container}>
				<SVGImage
					height={height ?? 150}
					width={width ?? 150}
					style={styles.center}
				/>
			</View>
		</AbsoluteFullScreenContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		position: "absolute",
		bottom: "10%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	center: {
		flex: 1,
	},
});
