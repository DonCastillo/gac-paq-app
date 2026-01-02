import { reset } from "@store/settings/settingsSlice";
import { router } from "expo-router";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

/**
 * Custom hook for resetting the app and navigating back to the splash screen
 * @returns Object containing the resetApp function
 */
const useResetApp = () => {
	const dispatch = useDispatch();

	const resetApp = useCallback((): void => {
		// Reset the Redux store state
		dispatch(reset());

		// Reset navigation stack and navigate to SplashScreen
		router.replace("/splash");
	}, [dispatch]);

	return {
		resetApp,
	};
};

export default useResetApp;
