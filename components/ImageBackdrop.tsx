import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

interface Props {
	source: any;
	opacity?: number;
}
export default function ImageBackdrop({ source, opacity }: Props): React.ReactElement {
	return (
		<ImageBackground
			source={source}
			resizeMode="cover"
			style={[styles.bgImage, { opacity: opacity ?? 1 }]}
		></ImageBackground>
	);
}

const styles = StyleSheet.create({
	bgImage: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
	},
});
