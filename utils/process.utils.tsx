import * as BackgroundTask from "expo-background-task";
import * as TaskManager from "expo-task-manager";
import { sendResponseQueue } from "utils/response.utils";
const BACKGROUND_SUBMIT_STORED_RESPONSES = "background-submit-stored-responses";

const defineSubmitStoredResponsesBackground = (): void => {
	TaskManager.defineTask(BACKGROUND_SUBMIT_STORED_RESPONSES, async (): Promise<BackgroundTask.BackgroundTaskResult> => {
		try {
			console.log("running background task....");
			await sendResponseQueue();
			console.log("done submitting background response...");
			return BackgroundTask.BackgroundTaskResult.Success;
		} catch (error) {
			console.log("background task error: ", error);
			return BackgroundTask.BackgroundTaskResult.Failed;
		}
	});
};

const registerSubmitStoredResponsesBackground = async (): Promise<void> => {
	return BackgroundTask.registerTaskAsync(BACKGROUND_SUBMIT_STORED_RESPONSES, {
		minimumInterval: 15, // minutes (minimum allowed is 15 minutes)
	});
};

export { defineSubmitStoredResponsesBackground, registerSubmitStoredResponsesBackground };
