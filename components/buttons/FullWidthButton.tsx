import { View, Text, Pressable, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Colors from "../../styles/kids/Colors";
import { DefaultStyle } from "../../styles/general";
import React from "react";

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
		fontWeight: DefaultStyle.button.fontWeight,
	},
});

export default FullWidthButton;
