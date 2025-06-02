import React, { useEffect, useLayoutEffect, useState } from "react";
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
import { sysBackButtonRegPage } from "utils/navigation.utils";

const RegularPageScreen = (): React.ReactElement => {
	const dispatch = useDispatch();
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);

	const pageType = currentPage?.screen !== null ? getScreenType(currentPage?.screen) : null;
	const sectionType = currentPage?.section !== null ? getSectionType(currentPage?.section) : null;
	const [component, setComponent] = useState<React.ReactElement>(<></>);

	const changeComponent = (): void => {
		let tempComponent = <></>;

		if (currentPageNumber === 0) {
			dispatch(nextPage());
		} else {
			if (pageType !== null && sectionType !== null) {
				tempComponent = getScreen(mode, pageType, sectionType);
			}
		}
		setComponent(tempComponent);
	};

	const changeColor = (): void => {
		dispatch(setColorTheme(currentPage.sectionNumber ?? 0));
	};

	useLayoutEffect(() => {
		changeComponent();
		changeColor();

		return () => {
			setComponent(<></>);
		};
	}, [currentPageNumber, currentPage, mode]);

	useEffect(() => {
		sysBackButtonRegPage()
	}, []);

	return (
		<KeyboardSafeview>
			<View style={{ flex: 1, backgroundColor: "white" }}>{component}</View>
		</KeyboardSafeview>
	);
};

export default RegularPageScreen;
