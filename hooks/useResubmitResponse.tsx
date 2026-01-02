import { useLoadingContext } from "@/contexts/common/LoadingContext";
import { submitResponse } from "@/utils/api.utils";
import { resetResponses } from "@store/responses/responsesSlice";
import { getIsConnected } from "@store/settings/settingsSlice";
import { queueResponseToStorage, sanitizeResponse } from "@utils/response.utils";
import { router } from "expo-router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * Custom hook for resubmitting responses
 * @returns Object containing the submitResponseHandler function
 */
const useSubmitResponseHandler = () => {
	const dispatch = useDispatch();
	const { setIsLoading } = useLoadingContext();
	const isConnected = useSelector(getIsConnected);

	const submitResponseHandler = useCallback(async (): Promise<void> => {
		try {
			// Set loading state
			setIsLoading(true);

			// Get sanitized responses
			const sanitizedResponses = sanitizeResponse();

			if (isConnected) {
				// Submit online
				await submitResponse(sanitizedResponses);
				dispatch(resetResponses());
				router.replace({ pathname: "/success", params: { success_type: "online" } });
			} else {
				// Queue for offline submission
				await queueResponseToStorage(sanitizedResponses);
				dispatch(resetResponses());
				router.replace({ pathname: "/success", params: { success_type: "offline" } });
			}
		} catch (error) {
			// Navigate to error screen on failure
			console.error("Error resubmitting response:", error);
			router.replace("/error/");
		} finally {
			// Always reset loading state
			setIsLoading(false);
		}
	}, [dispatch, isConnected]);

	return {
		submitResponseHandler,
	};
};

export default useSubmitResponseHandler;
