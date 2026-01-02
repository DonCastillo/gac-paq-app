import Mode from "@/constants/mode.enum";
import useCharacter from "@/hooks/useCharacter";
import useCurrentPage from "@/hooks/useCurrentPage";
import { Component } from "@/interface/function.type";
import { getSectionTitles } from "@/store/settings/settingsSlice";
import { GeneralStyle } from "@/styles/general";
import { adjustToolbarHeadingText, adjustWritingDirection } from "@/utils/style";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

const Title: Component = () => {
	const { mode } = useCharacter();
	const { currentPage, currentPageNumber } = useCurrentPage();
	const sectionTitles = useSelector(getSectionTitles);
	const [title, setTitle] = useState<string>("Title");

	useEffect(() => {
		if (currentPage.sectionNumber !== null) {
			setTitle(sectionTitles[currentPage.sectionNumber] ?? "");
		} else {
			setTitle("");
		}
	}, [currentPageNumber]);

	return (
		<Text
			style={[
				GeneralStyle.adult.topHeaderSectionTitle,
				{
					...adjustToolbarHeadingText(),
					direction: adjustWritingDirection(),
					flex: 1,
					marginHorizontal: 5,
					height: "100%",
					paddingTop: 7,
					color: mode === Mode.Kid ? "#000" : "#fff",
				},
			]}
		>
			{title}
		</Text>
	);
};

export default Title;
