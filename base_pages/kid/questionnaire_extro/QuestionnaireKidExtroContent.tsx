import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import { useTextContext } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import { getDevice } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { adjustExtroDescriptionText, adjustExtroPageHeading } from "@utils/style";
import React from "react";
import { useSelector } from "react-redux";

const QuestionnaireKidExtroContent: Component = () => {
	const device = useSelector(getDevice);
	const { heading, subheading } = useTextContext();

	return (
		<>
			<Heading
				customStyle={{
					...GeneralStyle.kid.extroPageHeading,
					maxWidth: device.isTablet ? 600 : "100%",
					...adjustExtroPageHeading(),
				}}
			>
				{heading}
			</Heading>
			<Paragraph
				customStyle={{
					...GeneralStyle.kid.extroPageParagraph,
					maxWidth: device.isTablet ? 600 : "100%",
					...adjustExtroDescriptionText(),
				}}
			>
				{subheading}
			</Paragraph>
		</>
	);
};

export default QuestionnaireKidExtroContent;
