import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { StrokeYellow, StarsBlue, StarsPurple } from "components/svgs/kid/doodles";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";

interface PropsInterface {
	fillColor: string;
}
const BackgroundPreamble = ({ fillColor }: PropsInterface): React.ReactElement => {
	return (
		<AbsoluteFullScreenContainer>
			<StarsBlue
				fill={fillColor ?? "#fff"}
				style={styles.left}
			/>
			<StarsPurple
				fill={fillColor ?? "#fff"}
				style={styles.right}
			/>
			<StrokeYellow
				fill={fillColor ?? "#fff"}
				style={styles.stroke}
			/>
		</AbsoluteFullScreenContainer>
	);
};

export default memo(BackgroundPreamble);

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		width: "100%",
		height: "100%",
	},
	stroke: {
		position: "absolute",
		bottom: "-25%",
	},
	left: {
		position: "absolute",
		bottom: "15%",
		left: "-7%",
	},
	right: {
		position: "absolute",
		top: "15%",
		right: "-7%",
	},
});
