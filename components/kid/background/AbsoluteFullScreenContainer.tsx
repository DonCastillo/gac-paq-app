import React, { memo } from "react";
import { View, StyleSheet } from "react-native";

const AbsoluteFullScreenContainer = ({
	children,
}: {
	children: React.ReactNode;
}): React.ReactElement => {
	return <View style={styles.container}>{children}</View>;
};

export default memo(AbsoluteFullScreenContainer);

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
});
