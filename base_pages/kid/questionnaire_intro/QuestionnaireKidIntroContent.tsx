import { useTextContext } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import { GeneralStyle } from "@styles/general";
import { adjustIntroDescriptionText, adjustIntroHeadingText, adjustWritingDirection } from "@utils/style";
import React from "react";
import { StyleSheet, Text } from "react-native";

const QuestionnaireKidIntroContent: Component = () => {
	const { heading, subheading } = useTextContext();

	return (
		<>
			<Text style={[styles.headingSubText, adjustIntroHeadingText()]}>{subheading}</Text>
			<Text
				style={{
					...styles.headingText,
					...adjustIntroDescriptionText(),
					writingDirection: adjustWritingDirection(),
				}}
			>
				{heading}
			</Text>
		</>
	);
};

export default QuestionnaireKidIntroContent;

const styles = StyleSheet.create({
	headingSubText: {
		textAlign: "center",
		...GeneralStyle.general.sectionIntroSubheading,
	},
	headingText: {
		textAlign: "center",
		height: "100%",
		...GeneralStyle.general.sectionIntroHeading,
	},
});
