import { StyleSheet } from "react-native";
import React from "react";
import { StarsBlue, StarsPurple } from "components/svgs/kid/doodles";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";

interface PropsInterface {
	fillColor: string;
}

export default function GenericBackgroundStars({ fillColor }: PropsInterface): React.ReactElement {
	return (
		<AbsoluteFullScreenContainer>
			<StarsBlue
				fill={fillColor}
				style={styles.left}
			/>
			<StarsPurple
				fill={fillColor}
				style={styles.right}
			/>
		</AbsoluteFullScreenContainer>
	);
}

const styles = StyleSheet.create({
	left: {
		position: "absolute",
		bottom: "18%",
		left: "-10%",
	},
	right: {
		position: "absolute",
		top: "0%",
		right: "-10%",
	},
});
