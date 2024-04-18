import ProgressBar from "components/generic/ProgressBar";
import React, { useContext } from "react";
import { SettingContext } from "store/settings";

export default function ProgressBarAdult(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { currentPage, sectionTotalPages } = settingCtx.settingState;

	return (
		<ProgressBar
			currentSectionPage={currentPage.sectionPageNumber}
			sectionPageTotal={
				currentPage.sectionNumber !== null && sectionTotalPages[currentPage.sectionNumber]
			}
			filledColor={"#FFFFFF" + "f5"}
			unfilledColor={"#d6d4d2" + "99"}
		/>
	);
}
