import { useLoadingContext } from "@/contexts/common/LoadingContext";
import { ModeType } from "@interface/union.type";
import { loadQuestionData } from "@store/questions/questionsThunk";
import {
	clearExtroResponses,
	clearFeedbackResponses,
	clearGshsResponses,
	clearHbscResponses,
	clearQuestionResponses,
} from "@store/responses/responsesSlice";
import { skipPage } from "@store/settings/settingsSlice";
import { getNarrationPayload } from "@store/settings/settingsThunk";
import { loadPhrases } from "@utils/load.utils";
import { loadPages, loadSectionPages } from "@utils/load_pages.utils";
import { changeMode } from "@utils/mode.utils";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

/**
 * Hook that provides a function to load the app based on a selected language.
 * This includes loading questions, phrases, narration, pages, clearing responses, etc.
 */
const useLoadAppByLanguage = () => {
	const dispatch = useDispatch();
	const { setIsLoading } = useLoadingContext();

	const loadApp = useCallback(
		async (mode: ModeType, language: string): Promise<void> => {
			try {
				// Set loading state
				setIsLoading(true);

				// Load app data based on language
				await dispatch(loadQuestionData(language) as any);

				// Load phrases
				loadPhrases();

				// Load narration payload
				await dispatch(getNarrationPayload({ mode, language }) as any);

				// load pages
				loadPages();

				// Change mode with proper type handling
				changeMode(mode, language);

				// Load section pages
				loadSectionPages();

				// Skip to page 1
				dispatch(skipPage(1));

				// Clear all response states
				dispatch(clearQuestionResponses());

				// Clear specific response states
				dispatch(clearHbscResponses());

				// Clear GSHS responses
				dispatch(clearGshsResponses());

				// Clear Extro responses
				dispatch(clearExtroResponses());

				// Clear Feedback responses
				dispatch(clearFeedbackResponses());
			} catch (error) {
				console.error("Error loading app:", error);
				throw error;
			} finally {
				// Always clear loading state
				setIsLoading(false);
			}
		},
		[dispatch],
	);

	return { loadApp };
};

export default useLoadAppByLanguage;
