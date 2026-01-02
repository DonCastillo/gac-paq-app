import AbsoluteFullScreenContainer from "@components/kid/background/AbsoluteFullScreenContainer";
import { StarsBlue, StarsPurple } from "@components/svgs/kid/doodles";
import React, { memo } from "react";
import { StyleSheet } from "react-native";

interface PropsInterface {
	fillColor: string;
}

const GenericBackgroundStars = ({ fillColor }: PropsInterface): React.ReactElement => {
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
};

export default memo(GenericBackgroundStars);

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
