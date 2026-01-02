import { registerSubmitStoredResponsesBackground } from "@utils/process.utils";
import { useEffect } from "react";

/**
 * Custom hook for registering background tasks
 * @returns void - automatically registers background task on mount
 */
const useBackgroundTaskRegistration = (): void => {
	useEffect(() => {
		const registerBackgroundTask = async (): Promise<void> => {
			try {
				await registerSubmitStoredResponsesBackground();
				console.log("Background task registered");
			} catch (error) {
				console.error("Background task registration failed: ", error);
			}
		};

		registerBackgroundTask();
	}, []);
};

export default useBackgroundTaskRegistration;
