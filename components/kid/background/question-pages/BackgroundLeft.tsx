import React, { memo } from "react";
import { StyleSheet } from "react-native";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";

const BackgroundLeft = ({
	svg,
	height,
	width,
}: {
	svg: any;
	height?: number;
	width?: number;
}): React.ReactElement => {
	const SVGImage = svg;
	return (
		<AbsoluteFullScreenContainer>
			<SVGImage
				height={height ?? 200}
				width={width ?? 150}
				style={styles.left}
			/>
		</AbsoluteFullScreenContainer>
	);
};

export default memo(BackgroundLeft);

const styles = StyleSheet.create({
	left: {
		position: "absolute",
		bottom: "20%",
		left: "5%",
	},
});
