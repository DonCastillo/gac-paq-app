import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import { useTextContext } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import { GeneralStyle } from "@styles/general";
import { adjustExtroDescriptionText, adjustExtroPageHeading } from "@utils/style";
import React from "react";

const QuestionnaireAdultExtroContent: Component = () => {
	const { heading, subheading } = useTextContext();

	return (
		<>
			<Heading
				customStyle={{
					...GeneralStyle.adult.pageHeading,
					...adjustExtroPageHeading(),
				}}
			>
				{heading}
			</Heading>
			<Paragraph
				customStyle={{
					...GeneralStyle.adult.pageParagraph,
					...adjustExtroDescriptionText(),
				}}
			>
				{subheading}
			</Paragraph>
		</>
	);
};

export default QuestionnaireAdultExtroContent;
