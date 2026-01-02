import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import { useTextContext } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import { getDevice } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { adjustPreambleDescriptionText, adjustPreambleHeadingText } from "@utils/style";
import React from "react";
import { useSelector } from "react-redux";

const PreambleKidContent: Component = () => {
	const device = useSelector(getDevice);
	const { heading, description } = useTextContext();
	return (
		<>
			<Heading
				customStyle={{
					...GeneralStyle.kid.extroPageHeading,
					maxWidth: device.isTablet ? 600 : "100%",
					...adjustPreambleHeadingText(),
				}}
			>
				{heading}
			</Heading>
			<Paragraph
				customStyle={{
					...GeneralStyle.kid.extroPageParagraph,
					maxWidth: device.isTablet ? 600 : "100%",
					...adjustPreambleDescriptionText(),
				}}
			>
				{description}
			</Paragraph>
		</>
	);
};

export default PreambleKidContent;
