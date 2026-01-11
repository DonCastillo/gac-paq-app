import type { FinalResponseType } from "@interface/union.type";
import { store } from "@store/store";
import axios from "axios";

const submitResponse = async (responses: FinalResponseType): Promise<boolean> => {
	const settings = store.getState().settings;
	const responseTable = settings.responseTable;
	const endpoint = settings.directusBaseEndpoint + "/items/" + responseTable;
	const accessToken = settings.directusAccessToken;

	return new Promise((resolve, reject) => {
		axios
			.post(endpoint, responses, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				resolve(true);
			})
			.catch((error) => {
				console.log("Error submitting response: ", error.message);
				reject(error);
			});
	});
};

export { submitResponse };
