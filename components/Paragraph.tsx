import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { adjustParagraph, adjustWritingDirection } from "utils/style";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

const Paragraph = ({ children, customStyle = {} }: PropsInterface): React.ReactElement => {
	return (
		<View>
			<Text
				style={[
					styles.text,
					adjustParagraph(),
					customStyle,
					{
						writingDirection: adjustWritingDirection(),
					},
				]}
			>
				{children}
			</Text>
		</View>
	);
};

export default Paragraph;

const styles = StyleSheet.create({
	text: {
		color: "white",
		textAlign: "center",
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
});
