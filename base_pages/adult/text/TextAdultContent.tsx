import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import { useTextContext } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import { GeneralStyle } from "@styles/general";
import { adjustPageDescriptionText, adjustPageHeadingText } from "@utils/style";
import React from "react";

const TextAdultContent: Component = () => {
	const { heading, description } = useTextContext();
	return (
		<>
			<Heading
				customStyle={{
					...GeneralStyle.adult.pageHeading,
					...adjustPageHeadingText(),
				}}
			>
				{heading}
			</Heading>
			<Paragraph
				customStyle={{
					...GeneralStyle.adult.pageParagraph,
					...adjustPageDescriptionText(),
				}}
			>
				{description}
			</Paragraph>
		</>
	);
};

export default TextAdultContent;
