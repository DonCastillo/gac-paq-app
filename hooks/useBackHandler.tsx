import { useCallback, useEffect } from "react";
import { BackHandler } from "react-native";

/**
 * Custom hook to handle Android hardware back button
 * @param handler - Function that handles the back button press. Return true to prevent default behavior, false to allow it
 */
const useBackHandler = (handler?: () => boolean): void => {
	const backPressHandler = useCallback(() => {
		if (handler) {
			return handler();
		}
		return true; // Default behavior: prevent back navigation
	}, [handler]);

	useEffect(() => {
		const backHandler = BackHandler.addEventListener("hardwareBackPress", backPressHandler);

		return () => backHandler.remove();
	}, []);
};

export default useBackHandler;
