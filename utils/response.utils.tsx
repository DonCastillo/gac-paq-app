import Section from "constants/section.enum";
import type {
	PageIndexInterface,
	QuestionCheckboxPayloadInterface,
	QuestionRadioImagePayloadInterface,
	QuestionRadioPayloadInterface,
	QuestionSliderPayloadInterface,
	ResponseInterface,
} from "interface/payload.type";
import type { FinalResponseType } from "interface/union.type";
import { clearUnansweredResponses, newResponse } from "store/responses/responsesSlice";
import { store } from "store/store";
import { falsyValue } from "./utils.utils";

const getResponse = (): string | null => {
	const { currentPage } = store.getState().settings;
	const mode = store.getState().settings.mode;
	const section = currentPage.section;
	const sectionNumber = currentPage.sectionNumber;
	const sectionPageNumber = currentPage.sectionPageNumber;
	const responses = store.getState().responses as Record<string, ResponseInterface>;

	if (Object.keys(responses).length <= 0) return null;

	let labelLookup = "";
	if (section === Section.Extro) {
		labelLookup = `[${mode}][${section}][${sectionNumber}][${sectionPageNumber}]`;
	} else {
		labelLookup = `[${section}][${sectionNumber}][${sectionPageNumber}]`;
	}
	const response = responses[labelLookup];
	if (falsyValue(response) || falsyValue(response?.answer)) {
		return null;
	} else {
		return response.answer;
	}
};

const sanitizeResponse = (): FinalResponseType => {
	const sanitizedResponse: FinalResponseType = {};
	const mode = store.getState().settings.mode;
	const responses = store.getState().responses as Record<string, ResponseInterface>;
	const pages = store.getState().settings.pages;

	// FILTER RESPONSES
	sanitizedResponse.questions = {};

	// remove empty answers
	store.dispatch(clearUnansweredResponses());

	for (const [key, value] of Object.entries(responses)) {
		// remove empty answers
		if (value.answer === null || value.answer === "" || value.answer === undefined) continue;

		// get all answers from the intros
		if (value.section === Section.Intro) {
			sanitizedResponse[value.label ?? key] = value.answer;
		}

		// get all answers from the questions
		if (value.section === Section.Question) {
			let label = (value.label ?? key).replace(/(\r\n|\n|\r)/g, "");
			label = label.replace(/(\t)/g, " ");
			if (value.answer.includes(" | ")) {
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
		if (value.section === Section.Feedback) {
			sanitizedResponse[value.label ?? key] = value.answer;
		}

		// get all answers from the extros that match the current mode
		if (value.section === Section.Extro && value.mode === mode) {
			if (value.answer.includes(" | ")) {
				sanitizedResponse[value.label ?? key] = value.answer.split(" | ");
			} else {
				sanitizedResponse[value.label ?? key] = value.answer;
			}
		}
	}

	// get all questions and their column names
	const finalSanitizedQuestions = {};
	Object.values(pages).forEach((page: PageIndexInterface) => {
		if (page.section === Section.Question) {
			const questionPage = page.page as
				| QuestionRadioPayloadInterface
				| QuestionSliderPayloadInterface
				| QuestionRadioImagePayloadInterface
				| QuestionCheckboxPayloadInterface;

			if (questionPage.column_name !== undefined && questionPage.column_name !== null) {
				finalSanitizedQuestions[questionPage.column_name] =
					sanitizedResponse.questions[questionPage.column_name] ?? "";
			}
		}
	});

	sanitizedResponse.questions = finalSanitizedQuestions;

	return sanitizedResponse;
};

const getResponseByIdent = (ident: string): string | string[] | null => {
	const responses = store.getState().responses;
	if (falsyValue(ident)) return null;
	if (Object.keys(responses).length === 0) return null;

	const finalResponse: ResponseInterface | undefined = Object.values(responses).find(
		(response: ResponseInterface) => response?.ident === ident,
	) as ResponseInterface;

	if (falsyValue(finalResponse) || falsyValue(finalResponse?.answer)) {
		return null;
	}

	if ((finalResponse?.answer as string)?.includes(" | ") ?? false) {
		return finalResponse?.answer?.split(" | ") ?? null;
	}
	return finalResponse?.answer;
};

const addResponse = (value: string | null): void => {
	const { currentPage } = store.getState().settings;
	store.dispatch(
		newResponse({
			ident: currentPage.page.ident,
			label: currentPage.page.column_name,
			answer: value,
			pageNumber: currentPage.pageNumber,
			mode: store.getState().settings.mode,
			section: currentPage.section,
			sectionNumber: currentPage.sectionNumber,
			sectionPageNumber: currentPage.sectionPageNumber,
		}),
	);
};
export { getResponse, sanitizeResponse, getResponseByIdent, addResponse };
