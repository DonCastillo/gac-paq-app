import ProgressBar from "components/generic/ProgressBar";
import React from "react";
import { useSelector } from "react-redux";
import { getCurrentPage, getSectionTotalPages } from "store/settings/settingsSlice";

export default function ProgressBarAdult(): React.ReactElement {
	const currentPage = useSelector(getCurrentPage);
	const sectionTotalPages = useSelector(getSectionTotalPages);
	const sectionPageTotal =
		currentPage.sectionNumber !== null ? sectionTotalPages[currentPage.sectionNumber] : null;

	return (
		<ProgressBar
			currentSectionPage={currentPage.sectionPageNumber}
			sectionPageTotal={sectionPageTotal}
			filledColor={"#FFFFFF" + "f5"}
			unfilledColor={"#d6d4d2" + "99"}
		/>
	);
}
