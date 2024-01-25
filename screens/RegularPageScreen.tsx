import React, { useContext, useEffect, useState } from "react";
import { SettingContext } from "store/settings";
import { getScreen, getScreenType } from "utils/screen";
import { getSectionType } from "utils/section";
import ScreenType from "constants/screen_type";

export default function RegularPageScreen(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { currentPage, currentPageNumber, mode } = settingCtx.settingState;
	const pageType = currentPage.screen !== null ? getScreenType(currentPage.screen) : null;
	const sectionType = currentPage.section !== null ? getSectionType(currentPage.section) : null;
	const [component, setComponent] = useState<React.ReactElement>(<></>);

	function changeComponent(): void {
		let tempComponent = <></>;

		if (currentPageNumber === 0) {
			settingCtx.nextPage();
			// tempComponent = getScreen(mode, ScreenType.Language);
		} else {
			if (pageType !== null && sectionType !== null) {
				tempComponent = getScreen(mode, pageType, sectionType);
			}
		}
		setComponent(tempComponent);
	}

	function changeColor(): void {
		settingCtx.setColorTheme(currentPage.sectionNumber ?? 0);
	}

	useEffect(() => {
		console.log("---------");
		console.log("CURRENT PAGE NUMBER: ", currentPageNumber);
		console.log("MODE: ", mode);
		console.log("PAGE TYPE: ", pageType);
		console.log("SECTION TYPE ", sectionType);
		console.log("mode changed ...");
		changeComponent();
		changeColor();
	}, [currentPageNumber, currentPage, mode]);

	return <>{component}</>;
}
