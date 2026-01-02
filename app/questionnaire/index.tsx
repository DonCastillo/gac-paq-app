import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import { nextPage, setColorTheme } from "@store/settings/settingsSlice";
import { getScreen } from "@utils/screen.utils";
import { getScreenType, getSectionType } from "@utils/type.utils";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

export default function Questionnaire() {
	const { mode } = useCharacter();
	const dispatch = useDispatch();
	const { currentPage, currentPageNumber } = useCurrentPage();

	const pageType = currentPage?.screen !== null ? getScreenType(currentPage?.screen) : null;
	const sectionType = currentPage?.section !== null ? getSectionType(currentPage?.section) : null;
	// auto-advance if we're at start
	useEffect(() => {
		if (currentPageNumber === 0) {
			dispatch(nextPage());
		}
	}, [currentPageNumber, dispatch]);

	// update color theme when section changes
	useEffect(() => {
		dispatch(setColorTheme(currentPage.sectionNumber ?? 0));
	}, [currentPage?.sectionNumber, dispatch]);

	// compute component: recalculates when current page, mode or language (handled by mode change) changes
	const component = useMemo<React.ReactElement>(() => {
		if (currentPageNumber === 0) return <></>;
		if (pageType !== null && sectionType !== null) {
			return getScreen(mode, pageType, sectionType);
		}
		return <></>;
		// include mode, pageType and sectionType so UI updates when any of them change
	}, [currentPageNumber, mode, pageType, sectionType]);

	return <>{component}</>;
}
