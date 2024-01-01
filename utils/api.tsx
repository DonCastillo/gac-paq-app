import axios from "axios";
import type ResponseInterface from "interface/response";
import { sanitizeResponse } from "utils/response";

async function submitResponse(
	responses: Record<string, ResponseInterface>,
	endpoint: string,
	accessToken: string,
): Promise<boolean> {
	const sanitizedResponses = sanitizeResponse(responses);
	console.log("sanitizedResponses: ", sanitizedResponses);
	return new Promise((resolve, reject) => {
		axios
			.post(
				endpoint,
				{
					response: sanitizedResponses,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			)
			.then((response) => {
				resolve(true);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

export { submitResponse };
