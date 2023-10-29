import React from "react";
import PropTypes from "prop-types";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { DefaultStyle } from "../../styles/general";

interface ButtonContainerWidthProps {
	children?: React.ReactNode;
	onPress?: () => void;
	borderColor?: string;
	textColor?: string;
	bgColor?: string;
}

export default function ButtonContainerWidth({
	children,
	onPress,
	borderColor,
	textColor,
	bgColor,
}: ButtonContainerWidthProps): React.ReactElement {
	return (
		<View>
			<Pressable
				onPress={onPress}
				style={[
					style.container,
					{
						borderColor,
						backgroundColor: bgColor,
					},
				]}
			>
				<Text style={[style.buttonText, { color: textColor }]}>{children}</Text>
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
