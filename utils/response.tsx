import type ResponseInterface from "../interface/response";

function getResponse(
	pageNumber: number,
	responses: Record<string, ResponseInterface>,
): string | null {
	if (pageNumber < 0) return null;
	if (Object.keys(responses).length === 0) return null;

	const response = Object.values(responses).find((responseObj: ResponseInterface) => {
		return responseObj.pageNumber === pageNumber;
	});

	if (response === undefined || response === null) {
		return null;
	} else {
		return response.answer;
	}
}

function sanitizeResponse(responses: Record<string, ResponseInterface>): Record<string, string> {
	const sanitizedResponse: Record<string, string> = {};
	let payloadValues = Object.values(responses);
	payloadValues = payloadValues.map((responseObj: ResponseInterface) => {
		return {
			pageNumber: responseObj.pageNumber,
			label: responseObj.label,
			answer: responseObj.answer,
		};
	});

	payloadValues.forEach(({ label, answer }) => {
		if (answer !== null) {
			sanitizedResponse[label] = answer;
		}
	});
	return sanitizedResponse;
}
export { getResponse, sanitizeResponse };
