import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

interface Props {
	source: any;
	opacity?: number;
}
const ImageBackdrop = ({ source, opacity }: Props): React.ReactElement => {
	return (
		<ImageBackground
			source={source}
			resizeMode="cover"
			style={[styles.bgImage, { opacity: opacity ?? 1 }]}
		></ImageBackground>
	);
};

export default ImageBackdrop;

const styles = StyleSheet.create({
	bgImage: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
	},
});
