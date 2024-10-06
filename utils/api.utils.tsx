import axios from "axios";
import type { FinalResponseType } from "interface/union.type";
import { store } from "store/store";

const submitResponse = async (responses: FinalResponseType): Promise<boolean> => {
	console.log("submitting response ...");
	const settings = store.getState().settings;
	const responseTable = settings.responseTable;
	const endpoint = settings.directusBaseEndpoint + "/items/" + responseTable;
	const accessToken = settings.directusAccessToken;

	console.log("Endpoint: ", endpoint);
	console.log("Access Token: ", accessToken);
	console.log("Responses: ", responses);

	return new Promise((resolve, reject) => {
		axios
			.post(endpoint, responses, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				console.log("Response submitted: ", response.data);
				resolve(true);
			})
			.catch((error) => {
				console.log("Error submitting response: ", error.message);
				reject(error);
			});
	});
};

export { submitResponse };
