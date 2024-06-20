import axios from "axios";
import type { FinalResponseType } from "interface/union.type";
import { store } from "store/store";

const submitResponse = async (responses: FinalResponseType): Promise<boolean> => {
	const settings = store.getState().settings;
	const endpoint = settings.directusBaseEndpoint + "/items/responses";
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
				reject(error);
			});
	});
};

export { submitResponse };
