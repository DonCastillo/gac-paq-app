import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { adjustQuestionLabelKid, adjustWritingDirection } from "utils/style";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
	textStyle?: object;
}

const QuestionLabel = ({
	children,
	customStyle = {},
	textStyle = {},
}: PropsInterface): React.ReactElement => {
	return (
		<View style={[styles.container, customStyle]}>
			<Text
				style={[
					styles.text,
					{
						...adjustQuestionLabelKid(),
					},
					{ direction: adjustWritingDirection() },
					textStyle,
				]}
			>
				{children}
			</Text>
		</View>
	);
};

export default memo(QuestionLabel, (prevProps, nextProps) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
	},
	text: {
		textAlign: "left",
		width: "100%",
		flex: 1,
		flexWrap: "wrap",
	},
});
