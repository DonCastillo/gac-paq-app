import React, { createContext, useReducer } from "react";
import Mode from "../constants/mode";
import Colors from "./data/colors";
import { getPage } from "../utils/page";
import type ScreenType from "../constants/screen_type";
import type SectionType from "../constants/section_type";
import ButtonLabel from "../constants/button_label";

/**
 * by default the app should be set as:
 *      mode: kid,
 */
export interface pageInterface {
	screen: ScreenType | null;
	page: any | null;
	pageNumber: number | null;
	section: SectionType.Intro | SectionType.Question | null;
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

const DEFAULT_MODE = Mode.Adult;
const DEFAULT_COLOR_INDEX = 0;
const TOTAL_COLORS = 8;

const INITIAL_STATE = {
	mode: DEFAULT_MODE,
	language: null,
	directusAccessToken: "",
	currentPageNumber: 0,
	currentPage: defaultPage,
	nextPage: defaultPage,
	buttons: defaultButton,
	totalPage: null,
	colorTheme: {
		color100: Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].color100,
		color200: Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].color200,
		grad100: Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].grad100,
		grad200: Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].grad200,
		grad300: Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].grad300,
		grad400: Colors[DEFAULT_MODE][DEFAULT_COLOR_INDEX].grad400,
	},
	pages: [],
};

export const SettingContext = createContext({
	settingState: INITIAL_STATE,
	setMode: (newMode: Mode.Adult | Mode.Kid) => {},
	setLanguage: (newLanguage: string) => {},
	setDirectusAccessToken: (newToken: string) => {},
	setColorTheme: (colorIndex: number) => {},
	nextPage: () => {},
	prevPage: () => {},
	addPage: (obj: pageInterface) => {},
	initializeNextPage: () => {},
	initializeCurrentPage: () => {},
	translateButtons: (obj: buttonInterface) => {},
});

function settingReducer(state: any, action: any): any {
	switch (action.type) {
		case "SET_MODE":
			return {
				...state,
				mode: action.payload,
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
			const newColor = Colors[state.mode][action.payload % TOTAL_COLORS];
			return {
				...state,
				colorTheme: newColor,
			};
		}
		case "NEXT_PAGE": {
			const currentpageNumber1 = state.currentPageNumber + 1;
			const currentPage1 = getPage(currentpageNumber1, state.pages);
			const nextPage1 = getPage(currentpageNumber1 + 1, state.pages);
			return {
				...state,
				currentPageNumber: currentpageNumber1,
				currentPage: currentPage1,
				nextPage: nextPage1,
			};
		}
		case "PREV_PAGE": {
			if (state.currentPageNumber <= 0) {
				return state;
			}
			const currentpageNumber2 = state.currentPageNumber - 1;
			const currentPage2 = getPage(currentpageNumber2, state.pages);
			const nextPage2 = getPage(state.currentPageNumber, state.pages);
			return {
				...state,
				currentPageNumber: currentpageNumber2,
				currentPage: currentPage2,
				nextPage: nextPage2,
			};
		}
		case "SET_TOTAL_PAGE":
			return {
				...state,
				totalPage: action.payload,
			};
		case "ADD_PAGE":
			return {
				...state,
				pages: [...state.pages, action.payload],
			};
		case "INITIALIZE_CURRENT_PAGE": {
			const currentPageNumber = state.currentPageNumber;
			const currentPage = getPage(state.currentPageNumber, state.pages);
			const nextPage = getPage(state.currentPageNumber + 1, state.pages);
			return {
				...state,
				currentPageNumber,
				currentPage,
				nextPage,
			};
		}
		case "SET_BUTTONS":
			return {
				...state,
				buttons: action.payload,
			};
		default:
			return state;
	}
}


export default function SettingContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
	const [settingState, dispatch] = useReducer(settingReducer, INITIAL_STATE);

	function setMode(newMode: Mode.Adult | Mode.Kid): void {
		dispatch({
			type: "SET_MODE",
			payload: newMode,
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

	function addPage(obj: pageInterface): void {
		dispatch({
			type: "ADD_PAGE",
			payload: obj,
		});
	}

	function initializeNextPage(): void {
		dispatch({
			type: "INITIALIZE_NEXT_PAGE",
		});
	}

	function initializeCurrentPage(): void {
		dispatch({
			type: "INITIALIZE_CURRENT_PAGE",
		});
	}

	function translateButtons(obj: buttonInterface): void {
		dispatch({
			type: "SET_BUTTONS",
			payload: obj,
		});
	}

	const value: any = {
		settingState,
		setMode,
		setLanguage,
		setDirectusAccessToken,
		setColorTheme,
		nextPage,
		prevPage,
		addPage,
		initializeNextPage,
		initializeCurrentPage,
		translateButtons,
	};

	return <SettingContext.Provider value={value}>{children}</SettingContext.Provider>;
}
