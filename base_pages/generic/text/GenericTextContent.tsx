import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import { useTextContext } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import { GeneralStyle } from "@styles/general";
import React from "react";

const GenericTextContent: Component = () => {
	const { heading, description } = useTextContext();
	return (
		<>
			<Heading customStyle={GeneralStyle.adult.pageHeading}>{heading}</Heading>
			<Paragraph customStyle={GeneralStyle.adult.pageParagraph}>{description}</Paragraph>
		</>
	);
};

export default GenericTextContent;
