import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import AbsoluteFullScreenContainer from "components/kid/background/AbsoluteFullScreenContainer";

function BackgroundCenter({
	svg,
	height,
	width,
}: {
	svg: any;
	height?: number;
	width?: number;
}): React.ReactElement {
	const SVGImage = svg;
	return (
		<AbsoluteFullScreenContainer>
			<View style={styles.container}>
				<SVGImage
					height={height ?? 150}
					width={width ?? 150}
					style={styles.center}
				/>
			</View>
		</AbsoluteFullScreenContainer>
	);
}

export default memo(BackgroundCenter);

const styles = StyleSheet.create({
	container: {
		width: "100%",
		position: "absolute",
		bottom: "10%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	center: {
		flex: 1,
	},
});
