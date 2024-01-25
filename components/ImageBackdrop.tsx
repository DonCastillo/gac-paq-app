import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

interface Props {
	source: any;
}
export default function ImageBackdrop({ source }: Props): React.ReactElement {
	return (
		<ImageBackground
			source={source}
			resizeMode="cover"
			style={styles.bgImage}
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
