import React, { useEffect, useState } from "react";
import { getScreen } from "utils/screen.utils";
import KeyboardSafeview from "components/KeyboardSafeview";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getMode,
	nextPage,
	setColorTheme,
} from "store/settings/settingsSlice";
import { getScreenType, getSectionType } from "utils/type.utils";

export default function RegularPageScreen(): React.ReactElement {
	const dispatch = useDispatch();
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);

	const pageType = currentPage?.screen !== null ? getScreenType(currentPage?.screen) : null;
	const sectionType = currentPage?.section !== null ? getSectionType(currentPage?.section) : null;
	const [component, setComponent] = useState<React.ReactElement>(<></>);

	function changeComponent(): void {
		let tempComponent = <></>;

		if (currentPageNumber === 0) {
			dispatch(nextPage());
			// tempComponent = getScreen(mode, ScreenType.Language);
		} else {
			if (pageType !== null && sectionType !== null) {
				tempComponent = getScreen(mode, pageType, sectionType);
			}
		}
		setComponent(tempComponent);
	}

	function changeColor(): void {
		dispatch(setColorTheme(currentPage.sectionNumber ?? 0));
	}

	useEffect(() => {
		// console.log("---------");
		// console.log("CURRENT PAGE NUMBER: ", currentPageNumber);
		// console.log("MODE: ", mode);
		// console.log("PAGE TYPE: ", pageType);
		// console.log("SECTION TYPE ", sectionType);
		// console.log("CURRENT PAGE ", JSON.stringify(currentPage, null, 2));
		changeComponent();
		changeColor();
	}, [currentPageNumber, currentPage, mode]);

	return (
		<KeyboardSafeview>
			<View style={{ flex: 1, backgroundColor: "white" }}>{component}</View>
		</KeyboardSafeview>
	);
}
