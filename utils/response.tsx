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

export { getResponse };
