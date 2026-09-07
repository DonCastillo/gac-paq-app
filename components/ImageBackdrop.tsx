import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

interface Props {
	source: any;
	opacity?: number;
}
const ImageBackdrop = ({ source, opacity }: Props): React.ReactElement => {
	if (source !== null && source !== undefined && source !== "") {
		return (
			<ImageBackground
				source={source}
				resizeMode="cover"
				style={styles.bgImage}
				imageStyle={{ opacity: opacity ?? 1 }}
			>
				{/*
				 * Scrim behind the bottom navigation. The back/next arrows are white and sit directly on the
				 * photo, so they disappear over pale areas. Fades from black at the bottom edge to fully
				 * transparent partway up, leaving the rest of the image untouched.
				 */}
				<LinearGradient
					colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.12)", "rgba(0,0,0,0.45)", "rgba(0,0,0,0.7)"]}
					locations={[0, 0.4, 0.75, 1]}
					pointerEvents="none"
					style={styles.navScrim}
				/>
			</ImageBackground>
		);
	}
	return <></>;
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
	navScrim: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: "25%",
	},
});
