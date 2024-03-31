import ProgressBar from "components/generic/ProgressBar";
import React, { useContext } from "react";
import { SettingContext } from "store/settings";

export default function ProgressBarKid(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { currentPage, sectionTotalPages, colorTheme } = settingCtx.settingState;
	const { color100, color200 } = colorTheme;
	return (
		<ProgressBar
			currentSectionPage={currentPage.sectionPageNumber}
			sectionPageTotal={
				currentPage.sectionNumber !== null && sectionTotalPages[currentPage.sectionNumber]
			}
			filledColor={color100}
			unfilledColor={color200 + "4D"}
		/>
	);
}
