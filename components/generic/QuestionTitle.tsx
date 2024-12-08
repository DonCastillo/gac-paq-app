import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";
import { adjustQuestionTitle, adjustWritingDirection } from "utils/style";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
	textStyle?: object;
}

const QuestionTitle = ({
	children,
	customStyle = {},
	textStyle = {},
}: PropsInterface): React.ReactElement => {
	return (
		<View style={[styles.container, customStyle]}>
			<Text
				style={{
					...styles.text,
					...adjustQuestionTitle(),
					writingDirection: adjustWritingDirection(),
					...textStyle,
				}}
			>
				{children}
			</Text>
		</View>
	);
};

export default QuestionTitle;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
	},
	text: {
		...GeneralStyle.kid.questionQuestionTitle,
		flex: 1,
		width: "100%",
		flexWrap: "wrap",
		marginBottom: 10,
	},
});
