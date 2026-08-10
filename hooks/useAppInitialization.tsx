import { useLoadingContext } from "@/contexts/common/LoadingContext";
import { ModeType } from "@interface/union.type";
import { loadQuestionData, removeQuestionData, storeQuestionData } from "@store/questions/questionsThunk";
import { resetResponses } from "@store/responses/responsesSlice";
import { loadPhrases } from "@utils/load.utils";
import { loadPages, loadSectionPages } from "@utils/load_pages.utils";
import { changeMode } from "@utils/mode.utils";
import { clearSubmissionId, loadNumPendingSubmissions } from "@utils/response.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

/**
 * Custom hook for app initialization
 * Handles all the necessary loading operations when the app starts
 * @param mode - Current app mode
 * @param language - Current language setting
 */
const useAppInitialization = (mode: ModeType, language: string): void => {
	const dispatch = useDispatch();
	const { setIsLoading } = useLoadingContext();

	useEffect(() => {
		const loadApp = async (): Promise<void> => {
			try {
				// Set loading state
				setIsLoading(true);

				// Clear and reload question data
				await dispatch(removeQuestionData() as any);
				await dispatch(storeQuestionData() as any);

				// Load question data for current language
				if (language) {
					await dispatch(loadQuestionData(language) as any);
				}

				// Load pending submissions count
				await loadNumPendingSubmissions();

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

				// Load section pages
				loadSectionPages();
			} catch (error) {
				console.error("Error loading app:", error);
				throw error;
			} finally {
				// Always clear loading state
				setIsLoading(false);
			}
		};

		loadApp()
			.then(() => {})
			.catch((err) => {
				console.error("error loading app", err);
			});
	}, []);
};

export default useAppInitialization;
