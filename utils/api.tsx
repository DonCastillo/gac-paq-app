import axios from "axios";

async function submitResponse(
	responses: Record<string, string> | Record<string, Record<string, string>>,
	endpoint: string,
	accessToken: string,
): Promise<boolean> {
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
}

export { submitResponse };
