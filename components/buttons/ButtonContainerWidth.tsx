import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { DefaultStyle } from "styles/general";

interface Props {
	children?: React.ReactNode;
	onPress?: () => void;
	textStyle?: any;
	customStyle?: any;
}

function ButtonContainerWidth({
	children,
	onPress,
	textStyle,
	customStyle,
}: Props): React.ReactElement {
	return (
		<View>
			<Pressable
				onPress={onPress}
				style={[style.container, customStyle]}
			>
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
		borderWidth: DefaultStyle.button.borderWidth,
		minWidth: DefaultStyle.button.minWidth,
	},
	buttonText: {
		color: DefaultStyle.button.color,
		textAlign: DefaultStyle.button.textAlign,
		fontSize: DefaultStyle.button.fontSize,
		fontWeight: DefaultStyle.button.fontWeight,
		lineHeight: DefaultStyle.button.lineHeight,
	},
});

export default ButtonContainerWidth;
