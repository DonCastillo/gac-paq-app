import type { FinalResponseType } from "@interface/union.type";
import { store } from "@store/store";
import axios, { isAxiosError } from "axios";

// Directus reports a collision with a unique column using this code
const DUPLICATE_RECORD_CODE = "RECORD_NOT_UNIQUE";

/**
 * A collision on the unique idempotency column means an earlier attempt at this same submission
 * already committed the row, so the response is stored and there is nothing left to do. Reporting
 * it as a failure would put the entry back on the queue and drain it forever.
 */
const isDuplicateRecordError = (error: unknown): boolean => {
	if (!isAxiosError(error)) return false;

	const errors = error.response?.data?.errors;
	if (!Array.isArray(errors)) return false;

	return errors.some((entry) => entry?.extensions?.code === DUPLICATE_RECORD_CODE);
};

const submitResponse = async (responses: FinalResponseType): Promise<boolean> => {
	const settings = store.getState().settings;
	const responseTable = settings.responseTable;
	const endpoint = settings.directusBaseEndpoint + "/items/" + responseTable;
	const accessToken = settings.directusAccessToken;

	try {
		await axios.post(endpoint, responses, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
		});
		return true;
	} catch (error) {
		if (isDuplicateRecordError(error)) {
			console.log("Response already stored by an earlier attempt, treating as submitted");
			return true;
		}

		console.log("Error submitting response: ", (error as Error).message);
		throw error;
	}
};

export { submitResponse };
