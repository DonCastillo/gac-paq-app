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
import LocalStorageKey from "constants/localstorage.enum";
import { readData, removeData, storeData } from "utils/localstorage.utils";
import { submitResponse } from "utils/api.utils";
import MAIN_STUDY_LANG from "constants/main_study_lang";

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
	const language = store.getState().settings.language;
	const usageStartTime = store.getState().settings.startDateTime;
	const responses = store.getState().responses as Record<string, ResponseInterface>;
	const pages = store.getState().settings.pages;

	// FILTER RESPONSES
	sanitizedResponse.questions = {};

	// remove empty answers
	store.dispatch(clearUnansweredResponses());

	// record end date time when user is answering the question
	sanitizedResponse.start_time = usageStartTime !== null ? usageStartTime.toISOString() : "";
	sanitizedResponse.end_time = new Date().toISOString() ?? "";

	// record whether the response is a main study or not based on the country
	sanitizedResponse.is_main_study = false;
	if (MAIN_STUDY_LANG.includes(language)) {
		sanitizedResponse.is_main_study = true;
	}

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

		// get all answers from the hbsc pages
		if (value.section === Section.Hbsc) {
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

		// get all answers from the gshs pages
		if (value.section === Section.Gshs) {
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

		// get all answers from the extros that match the current mode
		// make sure questions whose idents are child_difficulties, child_ethnicity, and parent_ethnicity are sent as arrays
		// to prevent server error
		if (value.section === Section.Extro && value.mode === mode) {
			if (
				value.answer.includes(" | ") ||
				value.ident === "child_difficulties" ||
				value.ident === "child_ethnicity" ||
				value.ident === "parent_ethnicity"
			) {
				sanitizedResponse[value.label ?? key] = value.answer.split(" | ");
			} else {
				sanitizedResponse[value.label ?? key] = value.answer;
			}
		}
	}

	// get all questions and their column names
	const finalSanitizedQuestions = {};
	Object.values(pages).forEach((page: PageIndexInterface) => {
		if (
			page.section === Section.Question ||
			page.section === Section.Hbsc ||
			page.section === Section.Gshs
		) {
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

const retrieveResponseFromStorage = async (): Promise<FinalResponseType[] | null> => {
	const existingResponses: FinalResponseType[] | null = await readData(LocalStorageKey.responses)
		.then((responses) => {
			if (responses !== null && responses !== undefined && responses !== "") {
				return responses as FinalResponseType[];
			}
			return null;
		})
		.catch(() => {
			return [];
		});

	return existingResponses;
};

const queueResponseToStorage = async (response: FinalResponseType): Promise<void> => {
	let mergedResponses: FinalResponseType[] = [];

	const existingResponses = await retrieveResponseFromStorage();

	if (existingResponses !== null) {
		mergedResponses = [response, ...existingResponses];
	} else {
		mergedResponses = [response];
	}

	await storeData(LocalStorageKey.responses, mergedResponses);
};

const sendResponseQueue = async (): Promise<void> => {
	while (true) {
		try {
			const existingResponses = await retrieveResponseFromStorage();
			if (
				existingResponses !== null &&
				existingResponses !== undefined &&
				existingResponses.length > 0
			) {
				const responseToSend = existingResponses.pop();

				if (responseToSend !== null && responseToSend !== undefined) {
					await submitResponse(responseToSend);
					await removeData(LocalStorageKey.responses);
					await storeData(LocalStorageKey.responses, existingResponses);
				}
			} else {
				break;
			}
		} catch (error) {
			throw new Error(error);
		}
	}
};

export {
	getResponse,
	sanitizeResponse,
	getResponseByIdent,
	addResponse,
	queueResponseToStorage,
	retrieveResponseFromStorage,
	sendResponseQueue,
};
