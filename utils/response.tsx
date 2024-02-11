import type Mode from "constants/mode";
import SectionType from "constants/section_type";
import type ResponseInterface from "interface/response";

function getResponse(
	mode: Mode.Kid | Mode.Adult | undefined,
	section: string | null,
	sectionNumber: number | null,
	sectionPageNumber: number | null,
	responses: Record<string, ResponseInterface>,
): string | null {
	if (section === null) return null;
	if (sectionNumber === null) return null;
	if (sectionPageNumber === null) return null;
	if (Object.keys(responses).length === 0) return null;

	let labelLookup = "";
	if (section === SectionType.Extro) {
		labelLookup = `[${mode}][${section}][${sectionNumber}][${sectionPageNumber}]`;
	} else {
		labelLookup = `[${section}][${sectionNumber}][${sectionPageNumber}]`;
	}

	const response = responses[labelLookup];

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
