import type Mode from "constants/mode";
import SectionType from "constants/section_type";
import type ResponseInterface from "interface/response";

type modeType = Mode.Kid | Mode.Adult | Mode.Teen | undefined;

function getResponse(
	mode: modeType,
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

function sanitizeResponse(
	responses: Record<string, ResponseInterface>,
	mode: modeType,
): Record<string, string | string[]> | Record<string, Record<string, string | string[]>> {
	const sanitizedResponse:
		| Record<string, string | string[]>
		| Record<string, Record<string, string | string[]>> = {};

	// FILTER RESPONSES
	sanitizedResponse.questions = {};

	for (const [key, value] of Object.entries(responses)) {
		// remove empty answers
		if (value.answer === null || value.answer === "" || value.answer === undefined) continue;

		// get all answers from the intros
		if (value.section === SectionType.Intro) {
			sanitizedResponse[value.label ?? key] = value.answer;
		}

		// get all answers from the questions
		if (value.section === SectionType.Question) {
			const label = (value.label ?? key).replace(/(\r\n|\n|\r)/g, "");
			if (value.answer.includes(" | ")) {
				console.log("value.answer: ", value.answer.split(" | "));
				sanitizedResponse.questions = {
					...sanitizedResponse.questions,
					[label]: value.answer.split(" | "),
				};
			} else {
				sanitizedResponse.questions = {
					...sanitizedResponse.questions,
					[label]: value.answer,
				};
			}
		}

		// get all answers from the feedback
		if (value.section === SectionType.Feedback) {
			sanitizedResponse[value.label ?? key] = value.answer;
		}

		// get all answers from the extros that match the current mode
		if (value.section === SectionType.Extro && value.mode === mode) {
			if (value.answer.includes(" | ")) {
				sanitizedResponse[value.label ?? key] = value.answer.split(" | ");
			} else {
				sanitizedResponse[value.label ?? key] = value.answer;
			}
		}
	}

	return sanitizedResponse;
}
export { getResponse, sanitizeResponse };
