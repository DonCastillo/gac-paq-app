import React from "react";
import { StyleSheet } from "react-native";
import AbsoluteFullScreenContainer from "../AbsoluteFullScreenContainer";
import { Images } from "../../../../styles/images";

export default function BackgroundRunning(): React.ReactElement {
	const SVGRunning = Images.kid.mostly_medium;
	return (
		<AbsoluteFullScreenContainer>
			<SVGRunning
				height={250}
				width={160}
				style={styles.running}
			/>

		</AbsoluteFullScreenContainer>
	);
}

const styles = StyleSheet.create({
	running: {
		position: "absolute",
		bottom: "20%",
		right: "5%",
	},
});
