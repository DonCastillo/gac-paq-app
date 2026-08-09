import LocalStorageKey from "@constants/localstorage.enum";
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
import { clearUnansweredResponses, newResponse } from "@store/responses/responsesSlice";
import { setNumPendingSubmissions } from "@store/settings/settingsSlice";
import { store } from "@store/store";
import { submitResponse } from "@utils/api.utils";
import { readData, storeData } from "@utils/localstorage.utils";
import { randomUUID } from "@utils/uuid.utils";
import { falsyValue } from "./utils.utils";

/**
 * The Directus column holding the idempotency key: a nullable, unique UUID. Retrying a submission
 * the server already committed collides on this column, so the retry is rejected instead of
 * inserting a second row.
 */
const IDEMPOTENCY_COLUMN = "idempotency_key";

/**
 * The key identifies one logical submission, not one POST attempt, so the same value has to be
 * reused by every retry of the same answers.
 *
 * It cannot be minted inside sanitizeResponse(): that runs again on every "Try Again" tap
 * (hooks/useResubmitResponse.tsx), so a key created there would be new on each attempt and the
 * unique constraint would never fire. It is held here instead and cleared only once the response
 * is safely stored — accepted by the server, or written to the offline queue, which carries the
 * key with it.
 */
let currentSubmissionId: string | null = null;

const getSubmissionId = (): string => {
	if (currentSubmissionId === null) {
		currentSubmissionId = randomUUID();
	}
	return currentSubmissionId;
};

/**
 * Start a new key. Must be called once a submission is stored and once a session is abandoned —
 * two different participants sharing a key would make the second submission collide and be
 * silently discarded as a duplicate.
 */
const clearSubmissionId = (): void => {
	currentSubmissionId = null;
};

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

	// stable across retries of this submission, so a retry the server already committed collides
	// on the unique column instead of inserting a second row
	sanitizedResponse[IDEMPOTENCY_COLUMN] = getSubmissionId();

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

/**
 * Drop a submitted entry from the queue.
 *
 * The queue is re-read rather than rewritten from the array the drain started with: a response
 * finished during the POST would be prepended by queueResponseToStorage, and writing back the
 * older array would discard it. The submitted entry is matched by its idempotency key, which is
 * what makes removing one specific entry possible at all.
 */
const removeFromQueue = async (submitted: FinalResponseType): Promise<void> => {
	const latest = (await retrieveResponseFromStorage()) ?? [];
	const key = submitted[IDEMPOTENCY_COLUMN];

	let remaining: FinalResponseType[];
	if (typeof key === "string" && key !== "") {
		remaining = latest.filter((response) => response[IDEMPOTENCY_COLUMN] !== key);
	} else {
		// entries queued before this column existed have no key to match on. New entries are only
		// ever prepended, so the tail is still the entry that was just submitted.
		remaining = latest.slice(0, -1);
	}

	await storeData(LocalStorageKey.responses, remaining);
	store.dispatch(setNumPendingSubmissions(remaining.length));
};

const drainResponseQueue = async (): Promise<void> => {
	while (true) {
		const existingResponses = await retrieveResponseFromStorage();
		if (existingResponses === null || existingResponses === undefined || existingResponses.length === 0) {
			break;
		}

		// oldest first: queueResponseToStorage prepends, so the tail is the earliest response
		const responseToSend = existingResponses[existingResponses.length - 1];

		if (responseToSend === null || responseToSend === undefined) {
			await storeData(LocalStorageKey.responses, existingResponses.slice(0, -1));
			continue;
		}

		// the entry stays queued until the server has accepted it, so a kill mid-POST cannot lose
		// the response. Resubmitting one the server already stored collides on the unique
		// idempotency column and submitResponse reports that as success, so the retry is safe.
		// A genuine failure throws and leaves the entry in place for the next drain.
		await submitResponse(responseToSend);
		await removeFromQueue(responseToSend);

		// the loop only terminates by draining the queue, so an entry that survives its own
		// removal would spin here forever, resubmitting on every pass. Stop instead and leave it
		// for the next drain, which starts from a freshly read queue.
		const afterRemoval = (await retrieveResponseFromStorage()) ?? [];
		if (afterRemoval.length >= existingResponses.length) {
			console.log("Queue did not shrink after a successful submission, stopping drain");
			break;
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
	clearSubmissionId,
	getResponse,
	getResponseByIdent,
	loadNumPendingSubmissions,
	queueResponseToStorage,
	retrieveResponseFromStorage,
	sanitizeResponse,
	sendResponseQueue,
};
