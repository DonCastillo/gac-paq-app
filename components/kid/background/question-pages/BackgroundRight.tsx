import React, { memo } from "react";
import { StyleSheet } from "react-native";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";

const BackgroundRight = ({
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
				style={styles.right}
			/>
		</AbsoluteFullScreenContainer>
	);
};

export default memo(BackgroundRight);

const styles = StyleSheet.create({
	right: {
		position: "absolute",
		bottom: "20%",
		right: "5%",
	},
});
