import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import { useTextContext } from "@contexts/common/TextContext";
import { Component } from "@interface/function.type";
import { getColorTheme } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { adjustPageDescriptionText, adjustPageHeadingText } from "@utils/style";
import React from "react";
import { useSelector } from "react-redux";

const TextKidContent: Component = () => {
	const colorTheme = useSelector(getColorTheme);
	const { color100 } = colorTheme;
	const { heading, description } = useTextContext();
	return (
		<>
			<Heading
				customStyle={{
					color: color100,
					backgroundColor: "#fff",
					...GeneralStyle.kid.pageHeading,
					...adjustPageHeadingText(),
				}}
			>
				{heading}
			</Heading>

			<Paragraph
				customStyle={{
					color: color100,
					...GeneralStyle.kid.pageParagraph,
					backgroundColor: "white",
					...adjustPageDescriptionText(),
				}}
			>
				{description}
			</Paragraph>
		</>
	);
};

export default TextKidContent;
