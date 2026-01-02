import QuestionTitle from "@components/generic/QuestionTitle";
import QuestionLabel from "@components/kid/QuestionLabel";
import { useTextContext } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import { GeneralStyle } from "@styles/general";
import { adjustPreambleDescriptionText } from "@utils/style";
import React from "react";

const PreambleAdultContent: Component = () => {
	const { heading, description } = useTextContext();
	return (
		<>
			<QuestionTitle
				customStyle={{ marginBottom: 10 }}
				textStyle={{ color: "#fff" }}
			>
				{heading}
			</QuestionTitle>
			<QuestionLabel
				textStyle={[
					GeneralStyle.adult.questionLabel,
					{
						color: "#fff",
						...adjustPreambleDescriptionText(),
					},
				]}
				customStyle={{ marginBottom: 7 }}
			>
				{description}
			</QuestionLabel>
		</>
	);
};

export default PreambleAdultContent;
