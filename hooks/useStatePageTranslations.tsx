import State from "@constants/state.enum";
import type { PageInterface } from "@interface/payload.type";
import { getErrorPage, getOfflineSuccessPage, getSuccessPage } from "@store/questions/questionsSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/**
 * Custom hook for managing state page translations
 * @param state - The current state (Success or Error)
 * @param success_type - The type of success ("online" or "offline")
 * @returns Object containing the translated page data
 */
const useStatePageTranslations = (state: State, success_type: string | undefined) => {
	const successPage = useSelector(getSuccessPage);
	const offlineSuccessPage = useSelector(getOfflineSuccessPage);
	const errorPage = useSelector(getErrorPage);

	const [translatedPage, setTranslatedPage] = useState<PageInterface | null>(null);

	useEffect(() => {
		const updateTranslatedPage = (): void => {
			if (state === State.Success) {
				if (success_type === "online") {
					const pageTranslations: PageInterface = successPage.translations;
					setTranslatedPage(pageTranslations);
				} else {
					const pageTranslations: PageInterface = offlineSuccessPage.translations;
					setTranslatedPage(pageTranslations);
				}
			} else {
				const pageTranslations: PageInterface = errorPage.translations;
				setTranslatedPage(pageTranslations);
			}
		};

		updateTranslatedPage();
	}, [state, success_type]);

	return {
		translatedPage,
		setTranslatedPage,
	};
};

export default useStatePageTranslations;
