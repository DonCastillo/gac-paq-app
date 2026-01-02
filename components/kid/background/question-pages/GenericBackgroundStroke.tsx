import AbsoluteFullScreenContainer from "@components/kid/background/AbsoluteFullScreenContainer";
import { StrokeYellow } from "@components/svgs/kid/doodles";
import React, { memo } from "react";
import { StyleSheet } from "react-native";

interface PropsInterface {
	fillColor: string;
}

const GenericBackgroundStroke = ({ fillColor }: PropsInterface): React.ReactElement => {
	return (
		<AbsoluteFullScreenContainer>
			<StrokeYellow
				fill={fillColor}
				height={500}
				style={styles.stroke}
			/>
		</AbsoluteFullScreenContainer>
	);
};

export default memo(GenericBackgroundStroke);

const styles = StyleSheet.create({
	stroke: {
		position: "absolute",
		bottom: "10%",
		left: "0%",
		right: "0%",
		maxHeight: "100%",
		transform: [{ translateX: -90 }],
	},
});
