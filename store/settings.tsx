import React, { createContext, useContext, useReducer } from "react";
import Mode from "constants/mode";
import Colors from "store/data/colors";
import { getPage, getPageNumberBasedOnIdent } from "utils/page";
import type ScreenType from "constants/screen_type";
import SectionType from "constants/section_type";
import ButtonLabel from "constants/button_label";
import PhraseLabel from "constants/phrase_label";
import type SectionPayloadInterface from "interface/directus/section-payload";
import type ExtroPayloadInterface from "interface/directus/extro-payload";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import OrientationType from "constants/orientation_type";
import type DeviceInterface from "interface/dimensions";
import { QuestionContext } from "./questions";
import { ResponseContext } from "./responses";
import type {
	Transportation7Interface,
	Transportation8_10Interface,
	Transportation9_11Interface,
} from "interface/question17";
/**
 * by default the app should be set as:
 *      mode: kid,
 */
type rawPageInterface =
	| SectionPayloadInterface
	| ExtroPayloadInterface
	| QuestionRadioPayloadInterface
	| QuestionRadioImagePayloadInterface;
export interface pageInterface {
	screen: ScreenType | null;
	page: any | null;
	pageNumber: number | null;
	section:
		| SectionType.Intro
		| SectionType.Question
		| SectionType.Extro
		| SectionType.Feedback
		| null;
	sectionNumber: number | null;
	sectionPageNumber: number | null;
}

interface buttonInterface {
	back: string;
	complete: string;
	continue: string;
	go: string;
	next: string;
	started: string;
}

interface phraseInterface {
	agreement: string;
	done: string;
	dontKnow: string;
	introduction: string;
	tryAgain: string;
}

const defaultPage: pageInterface = {
	page: {
		name: null,
		type: null,
		translations: [],
	},
	pageNumber: null,
	screen: null,
	section: null,
	sectionNumber: null,
	sectionPageNumber: null,
};

const defaultButton: buttonInterface = {
	back: ButtonLabel.Back,
	complete: ButtonLabel.Complete,
	continue: ButtonLabel.Continue,
	go: ButtonLabel.Go,
	next: ButtonLabel.Next,
	started: ButtonLabel.Started,
};

const defaultPhrase: phraseInterface = {
	agreement: PhraseLabel.Agreement,
	done: PhraseLabel.Done,
	dontKnow: PhraseLabel.DontKnow,
	introduction: PhraseLabel.Introduction,
	tryAgain: PhraseLabel.TryAgain,
};

const DEFAULT_MODE = undefined;
// const DEFAULT_MODE = Mode.Adult;
const DEFAULT_COLOR_INDEX = 0;
const DEFAULT_DEVICE: DeviceInterface = {
	screenWidth: 0,
	screenHeight: 0,
	orientation: OrientationType.Portrait,
	isTablet: false,
	platform: "",
	isKeyboardOpen: false,
};
const TOTAL_COLORS = 8;

const INITIAL_STATE = {
	mode: DEFAULT_MODE,
	device: DEFAULT_DEVICE,
	language: "en-CA",
	directusAccessToken: "kaTCPGRRqTCp18GmHkECCKNeMcY5Vwa5",
	directusBaseEndpoint: "http://localhost:8055",
	currentPageNumber: 0,
	currentPage: defaultPage,
	nextPage: defaultPage,
	buttons: defaultButton,
	phrases: defaultPhrase,
	sectionTitles: [],
	sectionTotalPages: {},
	totalPage: null,
	colorTheme: {
		color100:
			DEFAULT_MODE === undefined ? "#E09F57" : Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].color100,
		color200:
			DEFAULT_MODE === undefined ? "#E09F57" : Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].color200,
		grad100:
			DEFAULT_MODE === undefined ? "#FBD183" : Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].grad100,
		grad200:
			DEFAULT_MODE === undefined ? "#F66966" : Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].grad200,
		grad300:
			DEFAULT_MODE === undefined ? "#D3688A" : Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].grad300,
		grad400:
			DEFAULT_MODE === undefined ? "#B36EB4" : Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].grad400,
	},
	pages: {},
	history: [],
};

export const SettingContext = createContext({
	settingState: INITIAL_STATE,
	setMode: (newMode: Mode.Adult | Mode.Kid | Mode.Teen | undefined) => {},
	setDevice: (newDevice: DeviceInterface) => {},
	setLanguage: (newLanguage: string) => {},
	setDirectusAccessToken: (newToken: string) => {},
	setColorTheme: (colorIndex: number) => {},
	skipPage: (pageNumber: number) => {},
	nextPage: () => {},
	prevPage: () => {},
	addPage: (key: number, obj: pageInterface) => {},
	proceedPage: () => {},
	reset: () => {},
	setKeyboardState: (isKeyboardOpen: boolean) => {},
	translateButtons: (obj: buttonInterface) => {},
	translatePhrases: (obj: phraseInterface) => {},
	reloadExtroFeedbackPages: () => {},
	setSectionTitles: (sectionTitles: string[]) => {},
	setSectionTotalPages: (sectionNumber: number, totalPages: number) => {},
	getQuestion17Label: () => "",
});

function settingReducer(state: any, action: any): any {
	switch (action.type) {
		case "SET_MODE":
			return {
				...state,
				mode: action.payload,
			};
		case "SET_DEVICE":
			return {
				...state,
				device: action.payload,
			};
		case "SET_LANGUAGE":
			return {
				...state,
				language: action.payload,
			};
		case "SET_DIRECTUS_ACCESS_TOKEN":
			return {
				...state,
				directusAccessToken: action.payload,
			};
		case "SET_COLOR_THEME": {
			if (state.mode === undefined) {
				return {
					...state,
					colorTheme: {
						color100: "#E09F57",
						color200: "#E09F57",
						grad100: "#FBD183",
						grad200: "#F66966",
						grad300: "#D3688A",
						grad400: "#B36EB4",
					},
				};
			}
			const newColor = Colors[state.mode][action.payload % TOTAL_COLORS];
			return {
				...state,
				colorTheme: newColor,
			};
		}
		case "SKIP_PAGE": {
			let currentPageNumber = action.payload;
			let newHistory = [...state.history];

			if (currentPageNumber <= 0) {
				currentPageNumber = 1;
			}

			// update history
			newHistory = [...new Set([...newHistory, currentPageNumber].sort((a, b) => a - b))];
			newHistory = newHistory.filter((pageNum) => pageNum <= currentPageNumber);

			// update current page
			const currentPage = getPage(currentPageNumber, state.pages);
			const nextPage = getPage(currentPageNumber + 1, state.pages);
			return {
				...state,
				currentPageNumber,
				currentPage,
				nextPage,
				history: [...newHistory],
			};
		}
		case "NEXT_PAGE": {
			const currentPageNumber = state.currentPageNumber + 1;
			const newHistory = new Set([...state.history, currentPageNumber].sort((a, b) => a - b));
			const currentPage = getPage(currentPageNumber, state.pages);
			const nextPage = getPage(currentPageNumber + 1, state.pages);
			return {
				...state,
				currentPageNumber,
				currentPage,
				nextPage,
				history: [...newHistory],
			};
		}
		case "PREV_PAGE": {
			if (state.currentPageNumber <= 0) {
				return state;
			}
			if (state.history.length <= 0) {
				return state;
			}
			const newHistory = [...state.history];
			newHistory.pop(); // remove current page
			const currentPageNumber =
				newHistory !== undefined && newHistory !== null && newHistory.length > 0
					? newHistory.at(-1)
					: 1; // remove previous page
			const currentPage = getPage(currentPageNumber, state.pages);
			const nextPage = getPage(currentPageNumber + 1, state.pages);
			return {
				...state,
				currentPageNumber,
				currentPage,
				nextPage,
				history: [...newHistory],
			};
		}
		case "SET_TOTAL_PAGE":
			return {
				...state,
				totalPage: action.payload,
			};
		case "ADD_PAGE": {
			return {
				...state,
				pages: { ...state.pages, [action.payload.key]: action.payload.obj },
			};
		}
		case "SET_BUTTONS":
			return {
				...state,
				buttons: action.payload,
			};
		case "SET_PHRASES":
			return {
				...state,
				phrases: action.payload,
			};
		case "SET_SECTION_TITLES":
			return {
				...state,
				sectionTitles: action.payload,
			};
		case "SET_SECTION_TOTAL_PAGES":
			return {
				...state,
				sectionTotalPages: {
					...state.sectionTotalPages,
					[action.payload.sectionNumber]: action.payload.totalPages,
				},
			};
		case "SET_KEYBOARD_STATE":
			return {
				...state,
				device: {
					...state.device,
					isKeyboardOpen: action.payload,
				},
			};
		case "REMOVE_EXTRO_PAGES": {
			const pagesWithoutExtros = Object.values(state.pages).filter((page: any) => {
				return page.section !== SectionType.Extro;
			});
			return {
				...state,
				pages: pagesWithoutExtros,
			};
		}
		case "REMOVE_FEEDBACK_PAGES": {
			const pagesWithoutFeedback = Object.values(state.pages).filter((page: any) => {
				return page.section !== SectionType.Feedback;
			});
			return {
				...state,
				pages: pagesWithoutFeedback,
			};
		}
		case "RELOAD_EXTRO_FEEDBACK_PAGES": {
			let newPages = {};
			let newSectionTotalPages = {};

			// remove all extro and feedback pages
			for (const [key, page] of Object.entries(state.pages)) {
				if (
					(page as any).section === SectionType.Extro ||
					(page as any).section === SectionType.Feedback
				) {
					continue;
				} else {
					newPages = { ...newPages, [key]: page };
				}
			}

			const lastPagesIndex = parseInt(Object.keys(newPages).at(-1) ?? "1");
			const lastPage = newPages[lastPagesIndex];
			let lastPageNumber = lastPage.pageNumber;
			let lastSectionNumber = lastPage.sectionNumber;
			let finalExtroPages = [];
			let finalFeedbackPages = [];

			// load all extro pages
			lastSectionNumber++;
			if (state.mode === Mode.Kid || state.mode === Mode.Teen) {
				finalExtroPages = action.payload.kidsExtro.map((page: rawPageInterface, index: number) => {
					return {
						pageNumber: ++lastPageNumber,
						page,
						screen: page.type,
						section: SectionType.Extro,
						sectionNumber: lastSectionNumber,
						sectionPageNumber: ++index,
					};
				});
			} else {
				finalExtroPages = action.payload.adultExtro.map((page: rawPageInterface, index: number) => {
					return {
						pageNumber: ++lastPageNumber,
						page,
						screen: page.type,
						section: SectionType.Extro,
						sectionNumber: lastSectionNumber,
						sectionPageNumber: ++index,
					};
				});
			}
			newSectionTotalPages = {
				...newSectionTotalPages,
				[lastSectionNumber]: finalExtroPages.length,
			};

			// load all feedback pages
			lastSectionNumber++;
			finalFeedbackPages = action.payload.feedback.map((page: rawPageInterface, index: number) => {
				return {
					pageNumber: ++lastPageNumber,
					page,
					screen: page.type,
					section: SectionType.Feedback,
					sectionNumber: lastSectionNumber,
					sectionPageNumber: ++index,
				};
			});
			newSectionTotalPages = {
				...newSectionTotalPages,
				[lastSectionNumber]: finalFeedbackPages.length,
			};

			finalExtroPages.forEach((page: pageInterface) => {
				newPages = { ...newPages, [page.pageNumber ?? 1]: page };
			});
			finalFeedbackPages.forEach((page: pageInterface) => {
				newPages = { ...newPages, [page.pageNumber ?? 1]: page };
			});

			return {
				...state,
				pages: newPages,
				sectionTotalPages: { ...state.sectionTotalPages, ...newSectionTotalPages },
			};
		}
		case "SWAP_AGE": {
			const agePage = action.payload;
			const newPages = state.pages;

			for (const [key, value] of Object.entries(newPages)) {
				if (value?.page?.ident === "age") {
					newPages[key] = {
						...value,
						page: agePage,
					};
					return {
						...state,
						pages: newPages,
					};
				}
			}
			return state;
		}
		default:
			return state;
	}
}

export default function SettingContextProvider({
	children,
}: {
	children: React.ReactNode;
}): React.ReactElement {
	const [settingState, dispatch] = useReducer(settingReducer, INITIAL_STATE);
	const questionCtx = useContext(QuestionContext);
	const responseCtx = useContext(ResponseContext);

	function setMode(newMode: Mode.Adult | Mode.Kid | Mode.Teen | undefined): void {
		// set age page based on mode
		if (newMode === Mode.Adult) {
			dispatch({
				type: "SWAP_AGE",
				payload: questionCtx.questionState.adultAgePage,
			});
		}
		if (newMode === Mode.Kid) {
			dispatch({
				type: "SWAP_AGE",
				payload: questionCtx.questionState.kidAgePage,
			});
		}
		if (newMode === Mode.Teen) {
			dispatch({
				type: "SWAP_AGE",
				payload: questionCtx.questionState.teenAgePage,
			});
		}

		// clear responses
		responseCtx.clearResponseByIdent("age");
		responseCtx.clearUnansweredResponses();
		responseCtx.clearQuestionResponses();
		responseCtx.clearExtroResponses();
		responseCtx.clearFeedbackResponses();

		// set mode
		dispatch({
			type: "SET_MODE",
			payload: newMode,
		});
	}

	function setDevice(newDevice: DeviceInterface): void {
		dispatch({
			type: "SET_DEVICE",
			payload: newDevice,
		});
	}

	function setLanguage(newLanguage: string): void {
		dispatch({
			type: "SET_LANGUAGE",
			payload: newLanguage,
		});
		dispatch({
			type: "SET_BUTTONS",
		});
		dispatch({
			type: "SET_PHRASES",
		});
	}

	function setDirectusAccessToken(newDirectusAccessToken: string): void {
		dispatch({
			type: "SET_DIRECTUS_ACCESS_TOKEN",
			payload: newDirectusAccessToken,
		});
	}

	function setColorTheme(colorIndex: number = 0): void {
		dispatch({
			type: "SET_COLOR_THEME",
			payload: colorIndex,
		});
	}

	function nextPage(): void {
		dispatch({
			type: "NEXT_PAGE",
		});
	}

	function prevPage(): void {
		dispatch({
			type: "PREV_PAGE",
		});
	}

	function skipPage(pageNumber: number): void {
		dispatch({
			type: "SKIP_PAGE",
			payload: pageNumber,
		});
	}

	function addPage(key: number, obj: pageInterface): void {
		dispatch({
			type: "ADD_PAGE",
			payload: { key, obj },
		});
	}

	function reset(): void {
		dispatch({
			type: "SET_MODE",
			payload: undefined,
		});
		dispatch({
			type: "SKIP_PAGE",
			payload: 1,
		});
		dispatch({
			type: "SET_COLOR_THEME",
			payload: 0,
		});
		dispatch({
			type: "SET_LANGUAGE",
			payload: "en-CA",
		});
	}

	function translateButtons(obj: buttonInterface): void {
		dispatch({
			type: "SET_BUTTONS",
			payload: obj,
		});
	}

	function translatePhrases(obj: phraseInterface): void {
		dispatch({
			type: "SET_PHRASES",
			payload: obj,
		});
	}

	function reloadExtroFeedbackPages(): void {
		dispatch({
			type: "RELOAD_EXTRO_FEEDBACK_PAGES",
			payload: {
				adultExtro: questionCtx.questionState.adultExtroPages,
				kidsExtro: questionCtx.questionState.kidExtroPages,
				feedback: questionCtx.questionState.feedbackExtroPages,
			},
		});
	}

	function setSectionTitles(sectionTitles: string[]): void {
		dispatch({
			type: "SET_SECTION_TITLES",
			payload: sectionTitles,
		});
	}

	function setSectionTotalPages(sectionNumber: number, totalPages: number): void {
		dispatch({
			type: "SET_SECTION_TOTAL_PAGES",
			payload: { sectionNumber, totalPages },
		});
	}

	function setKeyboardState(isKeyboardOpen: boolean): void {
		dispatch({
			type: "SET_KEYBOARD_STATE",
			payload: isKeyboardOpen,
		});
	}

	function skipTo(answer: string | string[] | null): number {
		const currentIdent = settingState.currentPage.page.ident;
		const pages = settingState.pages;
		const mode = settingState.mode;

		let finalAnswer: string | string[] | null = null;
		if (Array.isArray(answer)) {
			finalAnswer = answer.length > 0 ? answer.map((ans) => ans.toString().toLowerCase()) : null;
		} else if (typeof answer === "string") {
			finalAnswer = answer !== "" ? answer.toString().toLowerCase() : null;
		} else {
			finalAnswer = null;
		}

		// if responder indicates they did not attend school, skip entire SCHOOL section
		if (currentIdent === "school_1" && finalAnswer === "no") {
			responseCtx.clearResponseByIdent("school_2");
			responseCtx.clearResponseByIdent("school_3");
			responseCtx.clearResponseByIdent("school_4");
			responseCtx.clearResponseByIdent("school_5");
			responseCtx.clearResponseByIdent("school_6");
			responseCtx.clearResponseByIdent("school_7");
			return getPageNumberBasedOnIdent("school_extro", pages);
		}

		// if responder indicates they attended 0 physical educ classes, skip questions regarding physical educ
		if (currentIdent === "school_3" && finalAnswer === "0") {
			responseCtx.clearResponseByIdent("school_4");
			responseCtx.clearResponseByIdent("school_5");
			return getPageNumberBasedOnIdent("school_6", pages);
		}

		// if responder indicates they did not do active chores, skip entire HOUSEHOLD section
		if (currentIdent === "household_1" && finalAnswer === "no") {
			responseCtx.clearResponseByIdent("household_2");
			responseCtx.clearResponseByIdent("household_3");
			responseCtx.clearResponseByIdent("household_4");
			return getPageNumberBasedOnIdent("household_extro", pages);
		}

		// if responder age is between 12-17 or is an adult/parent, answer WORK section
		if (currentIdent === "household_extro") {
			const age = responseCtx.getResponseByIdent("age");
			const finalAge =
				age !== "" && age !== undefined && age !== null && !Array.isArray(age) ? parseInt(age) : -1;
			const isTeen = [12, 13, 14, 15, 16, 17].includes(finalAge);
			if ((finalAge !== -1 && isTeen && mode === Mode.Adult) || isTeen) {
				return getPageNumberBasedOnIdent("work_intro", pages);
			} else {
				return getPageNumberBasedOnIdent("transportation_intro", pages);
			}
		}

		// if responder indicates they did not work, skip entire WORK section
		if (currentIdent === "work_1" && finalAnswer === "no") {
			responseCtx.clearResponseByIdent("work_2");
			responseCtx.clearResponseByIdent("work_3");
			return getPageNumberBasedOnIdent("work_extro", pages);
		}

		// if in transportation intro
		if (currentIdent === "transportation_preamble") {
			const attendedSchool = responseCtx.getResponseByIdent("school_1")?.toString().toLowerCase();
			const attendedWork = responseCtx.getResponseByIdent("work_1")?.toString().toLowerCase();

			// if responder did not attend school or work, skip transportation questions related to school and work
			if (
				["no", null, undefined].includes(attendedSchool) &&
				["no", null, undefined].includes(attendedWork)
			) {
				responseCtx.clearResponseByIdent("transportation_1");
				responseCtx.clearResponseByIdent("transportation_2");
				responseCtx.clearResponseByIdent("transportation_3");
				responseCtx.clearResponseByIdent("transportation_4");
				responseCtx.clearResponseByIdent("transportation_5");
				responseCtx.clearResponseByIdent("transportation_6");
				return getPageNumberBasedOnIdent("transportation_7", pages);
			} else if (attendedWork === "yes" && ["no", null, undefined].includes(attendedSchool)) {
				responseCtx.clearResponseByIdent("transportation_1");
				responseCtx.clearResponseByIdent("transportation_2");
				responseCtx.clearResponseByIdent("transportation_3");
				return getPageNumberBasedOnIdent("transportation_4", pages);
			} else if (attendedSchool === "yes" && ["no", null, undefined].includes(attendedWork)) {
				responseCtx.clearResponseByIdent("transportation_4");
				responseCtx.clearResponseByIdent("transportation_5");
				responseCtx.clearResponseByIdent("transportation_6");
				return getPageNumberBasedOnIdent("transportation_1", pages);
			}
		}

		// if responder indicates they stayed home for school, skip transportation questions related to school
		if (currentIdent === "transportation_1" && finalAnswer === "stay home for school") {
			const attendedWork = responseCtx.getResponseByIdent("work_1")?.toString().toLowerCase();
			responseCtx.clearResponseByIdent("transportation_2");
			responseCtx.clearResponseByIdent("transportation_3");
			if (attendedWork === "yes") {
				return getPageNumberBasedOnIdent("transportation_4", pages);
			}
			return getPageNumberBasedOnIdent("transportation_7", pages);
		}

		if (currentIdent === "transportation_3") {
			const attendedWork = responseCtx.getResponseByIdent("work_1")?.toString().toLowerCase();
			if (attendedWork === "yes") {
				return getPageNumberBasedOnIdent("transportation_4", pages);
			}
			return getPageNumberBasedOnIdent("transportation_7", pages);
		}

		// if responder is in the transportation question asking if they wheel/walk to go to school/work
		if (currentIdent === "transportation_7") {
			// clear responses
			if (finalAnswer === null) {
				responseCtx.clearResponseByIdent("transportation_8");
				responseCtx.clearResponseByIdent("transportation_9");
				responseCtx.clearResponseByIdent("transportation_10");
				responseCtx.clearResponseByIdent("transportation_11");
			}
			if (finalAnswer !== null && finalAnswer?.includes("no")) {
				responseCtx.clearResponseByIdent("transportation_8");
				responseCtx.clearResponseByIdent("transportation_9");
				responseCtx.clearResponseByIdent("transportation_10");
				responseCtx.clearResponseByIdent("transportation_11");
			} else if (finalAnswer !== null && !finalAnswer?.includes("walked")) {
				responseCtx.clearResponseByIdent("transportation_8");
				responseCtx.clearResponseByIdent("transportation_9");
			} else if (finalAnswer !== null && !finalAnswer?.includes("wheeled")) {
				responseCtx.clearResponseByIdent("transportation_10");
				responseCtx.clearResponseByIdent("transportation_11");
			}

			// skip pages
			if (finalAnswer !== null && finalAnswer?.includes("no")) {
				return getPageNumberBasedOnIdent("transportation_extro", pages);
			} else if (finalAnswer !== null && finalAnswer?.includes("walked")) {
				return getPageNumberBasedOnIdent("transportation_8", pages);
			} else if (finalAnswer !== null && finalAnswer?.includes("wheeled")) {
				return getPageNumberBasedOnIdent("transportation_10", pages);
			}
		}

		if (currentIdent === "transportation_9") {
			let transpoMode = responseCtx.getResponseByIdent("transportation_7");
			transpoMode = Array.isArray(transpoMode)
				? transpoMode?.map((transmode) => transmode.toLowerCase())
				: null;

			if (transpoMode !== null && transpoMode?.includes("wheeled")) {
				return getPageNumberBasedOnIdent("transportation_10", pages);
			} else {
				return getPageNumberBasedOnIdent("transportation_extro", pages);
			}
		}

		// if responder indicates they are not involved in organized activities, skip entire ORGANIZED section
		if (currentIdent === "organized_1" && finalAnswer === "no") {
			responseCtx.clearResponseByIdent("organized_2");
			responseCtx.clearResponseByIdent("organized_3");
			return getPageNumberBasedOnIdent("organized_extro", pages);
		}
		return 0;
	}

	function getQuestion17Label(): string {
		const language = settingState.language ?? "en-CA";
		const mode = settingState.mode === Mode.Adult ? Mode.Adult : Mode.Kid;
		const currentIdent = settingState.currentPage.page.ident;

		let attendedSchool = responseCtx.getResponseByIdent("school_1");
		let attendedWork = responseCtx.getResponseByIdent("work_1");

		attendedSchool = attendedSchool !== null ? attendedSchool.toString().toLowerCase() : null;
		attendedWork = attendedWork !== null ? attendedWork.toString().toLowerCase() : null;
		let attendance = "both";

		if (attendedSchool === "yes" && attendedWork === "yes") {
			attendance = "both";
		} else if (attendedSchool === "yes") {
			attendance = "school";
		} else if (attendedWork === "yes") {
			attendance = "work";
		} else {
			attendance = "none";
		}

		if (currentIdent === "transportation_7") {
			console.log("here is transportation_7");
			const questionLabels: Transportation7Interface = questionCtx.questionState.Transportation7;
			console.log("7: ", questionLabels);
			console.log("7: ", language, mode, attendance);
			return questionLabels[language][mode][attendance] ?? "";
		}

		if (currentIdent === "transportation_8") {
			const questionLabels: Transportation8_10Interface =
				questionCtx.questionState.Transportation8_10;
			return questionLabels[language][mode].walk[attendance] ?? "";
		}

		if (currentIdent === "transportation_9") {
			const questionLabels: Transportation9_11Interface =
				questionCtx.questionState.Transportation9_11;
			return questionLabels[language][mode].walk[attendance] ?? "";
		}

		if (currentIdent === "transportation_10") {
			const questionLabels: Transportation8_10Interface =
				questionCtx.questionState.Transportation8_10;
			return questionLabels[language][mode].wheel[attendance] ?? "";
		}

		if (currentIdent === "transportation_11") {
			const questionLabels: Transportation9_11Interface =
				questionCtx.questionState.Transportation9_11;
			return questionLabels[language][mode].wheel[attendance] ?? "";
		}

		return "";
	}

	function proceedPage(): void {
		const currentIdent = settingState.currentPage.page.ident;
		const answerValue = responseCtx.getResponseByIdent(currentIdent) ?? null;
		const skipToPageNumber = skipTo(answerValue);
		if (skipToPageNumber > 0) {
			console.log("responses: ", responseCtx);
			skipPage(skipToPageNumber);
		} else {
			nextPage();
		}
	}

	const value: any = {
		settingState,
		setMode,
		setDevice,
		setLanguage,
		setDirectusAccessToken,
		setColorTheme,
		reset,
		skipPage,
		nextPage,
		prevPage,
		addPage,
		proceedPage,
		translateButtons,
		translatePhrases,
		reloadExtroFeedbackPages,
		setSectionTitles,
		setSectionTotalPages,
		setKeyboardState,
		getQuestion17Label,
	};

	return <SettingContext.Provider value={value}>{children}</SettingContext.Provider>;
}
