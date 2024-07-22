import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import { sendResponseQueue } from "utils/response.utils";

const BACKGROUND_SUBMIT_STORED_RESPONSES = "background-submit-stored-responses";

const defineSubmitStoredResponsesBackground = (): void => {
	TaskManager.defineTask(
		BACKGROUND_SUBMIT_STORED_RESPONSES,
		(): BackgroundFetch.BackgroundFetchResult => {
			try {
				sendResponseQueue()
					.then((res) => res)
					.catch((err) => err);
				return BackgroundFetch.BackgroundFetchResult.NewData;
			} catch (error) {
				console.log("background task error: ", error);
				return BackgroundFetch.BackgroundFetchResult.Failed;
			}
		},
	);
};

const registerSubmitStoredResponsesBackground = async (): Promise<void> => {
	return BackgroundFetch.registerTaskAsync(BACKGROUND_SUBMIT_STORED_RESPONSES, {
		minimumInterval: 1 * 60, // seconds,
		stopOnTerminate: false,
		startOnBoot: true,
	});
};

export { registerSubmitStoredResponsesBackground, defineSubmitStoredResponsesBackground };
