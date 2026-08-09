import LocalStorageKey from "@constants/localstorage.enum";
import { LOCKED_LANGUAGE } from "@constants/locked_country";
import MAIN_STUDY_LANG from "@constants/main_study_lang";
import Section from "@constants/section.enum";
import type {
	PageIndexInterface,
	QuestionCheckboxPayloadInterface,
	QuestionRadioImagePayloadInterface,
	QuestionRadioPayloadInterface,
	QuestionSliderPayloadInterface,
	ResponseInterface,
} from "@interface/payload.type";
import type { FinalResponseType } from "@interface/union.type";
import LanguagePage from "@store/data/introductory-pages/language";
import { clearUnansweredResponses, newResponse } from "@store/responses/responsesSlice";
import { setNumPendingSubmissions } from "@store/settings/settingsSlice";
import { store } from "@store/store";
import { submitResponse } from "@utils/api.utils";
import { readData, storeData } from "@utils/localstorage.utils";
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
		if (page.section === Section.Question || page.section === Section.Hbsc || page.section === Section.Gshs) {
			const questionPage = page.page as
				| QuestionRadioPayloadInterface
				| QuestionSliderPayloadInterface
				| QuestionRadioImagePayloadInterface
				| QuestionCheckboxPayloadInterface;

			if (questionPage.column_name !== undefined && questionPage.column_name !== null) {
				finalSanitizedQuestions[questionPage.column_name] = sanitizedResponse.questions[questionPage.column_name] ?? "";
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

/**
 * A country-locked build drops the language page, so nothing records the language_location
 * response the way LanguageContext does on that page. Without this the column would be missing
 * from every submission with no visible error, so seed it from the locked language instead.
 *
 * sectionPageNumber 0 keeps the response out of the way of the real intro pages: those are
 * numbered from 1, and with the language page gone the participant page now occupies 1.
 */
const seedLockedLanguageResponse = (): void => {
	if (LOCKED_LANGUAGE === null) return;

	store.dispatch(
		newResponse({
			ident: LanguagePage.ident,
			label: LanguagePage.column_name,
			answer: LOCKED_LANGUAGE,
			pageNumber: 0,
			mode: store.getState().settings.mode,
			section: Section.Intro,
			sectionNumber: 0,
			sectionPageNumber: 0,
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
	store.dispatch(setNumPendingSubmissions(mergedResponses.length));
};

// the tail is the oldest entry, so appending restores a claimed response to its place in line
const requeueResponse = async (response: FinalResponseType): Promise<void> => {
	const existingResponses = await retrieveResponseFromStorage();
	const restored = [...(existingResponses ?? []), response];

	await storeData(LocalStorageKey.responses, restored);
	store.dispatch(setNumPendingSubmissions(restored.length));
};

const drainResponseQueue = async (): Promise<void> => {
	while (true) {
		const existingResponses = await retrieveResponseFromStorage();
		if (existingResponses === null || existingResponses === undefined || existingResponses.length === 0) {
			break;
		}

		// oldest first: queueResponseToStorage prepends, so the tail is the earliest response
		const responseToSend = existingResponses.pop();

		// claim the response before submitting it. Removing it afterwards leaves a window where
		// the server has already stored the response but the queue still holds it, and the next
		// drain submits it a second time. A single overwriting write also means a kill here
		// cannot empty the queue the way a remove-then-write pair could.
		await storeData(LocalStorageKey.responses, existingResponses);
		store.dispatch(setNumPendingSubmissions(existingResponses.length));

		if (responseToSend === null || responseToSend === undefined) {
			continue;
		}

		try {
			await submitResponse(responseToSend);
		} catch (error) {
			// the submission never reached the server, so put the response back for the next drain
			await requeueResponse(responseToSend);
			throw error;
		}
	}
};

// the queue is drained from the background task, the network-regain effect, and the
// pending screen. Overlapping drains would read the same queue and submit an entry twice,
// so concurrent callers share the drain that is already running.
let drainInFlight: Promise<void> | null = null;

const sendResponseQueue = async (): Promise<void> => {
	if (drainInFlight !== null) {
		return drainInFlight;
	}

	drainInFlight = drainResponseQueue().finally(() => {
		drainInFlight = null;
	});

	return drainInFlight;
};

const loadNumPendingSubmissions = async (): Promise<void> => {
	const existingResponses = await retrieveResponseFromStorage();
	if (existingResponses === null || existingResponses === undefined) {
		store.dispatch(setNumPendingSubmissions(0));
	} else {
		store.dispatch(setNumPendingSubmissions(existingResponses.length));
	}
};

export {
	addResponse,
	getResponse,
	getResponseByIdent,
	loadNumPendingSubmissions,
	queueResponseToStorage,
	retrieveResponseFromStorage,
	sanitizeResponse,
	seedLockedLanguageResponse,
	sendResponseQueue,
};
