import { View, Text, Pressable, StyleSheet } from "react-native";
import { DefaultStyle } from "styles/general";
import React, { memo } from "react";

interface Props {
	children: React.ReactNode;
	onPress: () => void;
	textStyle?: any;
	customStyle?: any;
}

function FullWidthButton({ children, onPress, textStyle, customStyle }: Props): React.ReactElement {
	return (
		<View style={[style.container, customStyle]}>
			<Pressable onPress={onPress}>
				<Text style={[style.buttonText, textStyle]}>{children}</Text>
			</Pressable>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		backgroundColor: DefaultStyle.button.backgroundColor,
		paddingHorizontal: DefaultStyle.button.paddingHorizontal,
		paddingVertical: DefaultStyle.button.paddingVertical,
		borderRadius: DefaultStyle.button.borderRadius,
		width: "100%",
	},
	buttonText: {
		color: DefaultStyle.button.color,
		textAlign: DefaultStyle.button.textAlign,
		fontSize: DefaultStyle.button.fontSize,
		lineHeight: DefaultStyle.button.lineHeight,
	},
});

export default memo(FullWidthButton, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
