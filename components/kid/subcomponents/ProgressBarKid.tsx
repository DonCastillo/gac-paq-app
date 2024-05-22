import ProgressBar from "components/generic/ProgressBar";
import React from "react";
import { useSelector } from "react-redux";
import { getColorTheme, getCurrentPage, getSectionTotalPages } from "store/settings/settingsSlice";

export default function ProgressBarKid(): React.ReactElement {
	const currentPage = useSelector(getCurrentPage);
	const sectionTotalPages = useSelector(getSectionTotalPages);
	const colorTheme = useSelector(getColorTheme);
	const { color100, color200 } = colorTheme;
	const sectionPageTotal =
		currentPage.sectionNumber !== null ? sectionTotalPages[currentPage.sectionNumber] : null;

	return (
		<ProgressBar
			currentSectionPage={currentPage.sectionPageNumber}
			sectionPageTotal={sectionPageTotal}
			filledColor={color200}
			unfilledColor={color100 + "26"}
		/>
	);
}
