import { ModeType } from "@interface/union.type";
import { loadQuestionData, removeQuestionData, storeQuestionData } from "@store/questions/questionsThunk";
import { resetResponses } from "@store/responses/responsesSlice";
import { skipPage } from "@store/settings/settingsSlice";
import { loadPhrases } from "@utils/load.utils";
import { loadPages } from "@utils/load_pages.utils";
import { changeMode } from "@utils/mode.utils";
import { clearSubmissionId } from "@utils/response.utils";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

/**
 * Custom hook for loading app data and initializing the application state
 * @param mode - The current app mode
 * @param language - The current language setting
 * @returns Object containing the loadApp function and loading state
 */
const useAppLoader = (mode: ModeType, language: string) => {
	const dispatch = useDispatch();

	const loadApp = useCallback(async (): Promise<void> => {
		try {
			// Clear existing question data
			await dispatch(removeQuestionData() as any);

			// Store fresh question data
			await dispatch(storeQuestionData() as any);

			// Load question data for the specified language
			await dispatch(loadQuestionData(language) as any);

			// Reset responses state
			dispatch(resetResponses());

			// the answers these responses belonged to are gone, so the key must not carry over
			// to the next participant — a shared key would collide and discard their submission
			clearSubmissionId();

			// Load phrases and pages
			loadPhrases();
			loadPages();

			// Change mode with proper type handling
			changeMode(mode, language);

			// Skip to page 1
			dispatch(skipPage(1));
		} catch (error) {
			console.error("Error loading app:", error);
			throw error;
		}
	}, [dispatch, mode, language]);

	return {
		loadApp,
	};
};

export default useAppLoader;
