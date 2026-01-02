import AbsoluteFullScreenContainer from "@components/kid/background/AbsoluteFullScreenContainer";
import { LoopPink } from "@components/svgs/kid/doodles";
import React, { memo } from "react";
import { StyleSheet } from "react-native";

interface PropsInterface {
	fillColor: string;
}

const GenericBackgroundLoop = ({ fillColor }: PropsInterface): React.ReactElement => {
	return (
		<AbsoluteFullScreenContainer>
			<LoopPink
				fill={fillColor}
				style={styles.stroke}
			/>
		</AbsoluteFullScreenContainer>
	);
};

export default memo(GenericBackgroundLoop);

const styles = StyleSheet.create({
	stroke: {
		position: "absolute",
		bottom: "0%",
		left: "0%",
		right: "0%",
	},
});
