import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import defaultDevice from "./defaultDevice";
import defaultPage from "./defaultPage";
import phraseSetting from "./defaultPhrase";
import defaultColor from "./defaultColor";
import Mode from "constants/mode";
import type DeviceInterface from "interface/dimensions";
import type { PageInterface } from "./defaultPage";
import type ColorInterface from "interface/color";
import type { ButtonInterface } from "./defaultButton";
import type { PhraseInterface } from "./defaultPhrase";
import Colors from "store/data/colors";
import { getPage } from "utils/page";
import SectionType from "constants/section_type";
import type SectionPayloadInterface from "interface/directus/section-payload";
import type ExtroPayloadInterface from "interface/directus/extro-payload";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import defaultButton from "./defaultButton";

type ModeType = Mode.Adult | Mode.Kid | Mode.Teen | undefined;
type RawPageType =
	| SectionPayloadInterface
	| ExtroPayloadInterface
	| QuestionRadioPayloadInterface
	| QuestionRadioImagePayloadInterface;

const TOTAL_COLORS = 8;

interface SettingsInterface {
	mode: ModeType;
	device: DeviceInterface;
	language: string;
	directusAccessToken: string;
	directusBaseEndpoint: string;
	currentPageNumber: number;
	currentPage: PageInterface;
	nextPage: PageInterface;
	buttons: ButtonInterface;
	phrases: PhraseInterface;
	sectionTitles: string[];
	sectionTotalPages: Record<string, number>;
	totalPage: any;
	colorTheme: ColorInterface;
	pages: Record<string, any>;
	history: number[];
}

const settingsSlice = createSlice({
	name: "settings",
	initialState: {
		mode: undefined as ModeType,
		device: defaultDevice,
		language: "en-CA",
		directusAccessToken: "kaTCPGRRqTCp18GmHkECCKNeMcY5Vwa5",
		directusBaseEndpoint: "http://localhost:8055",
		currentPageNumber: 0,
		currentPage: defaultPage,
		nextPage: defaultPage,
		buttons: defaultButton,
		phrases: phraseSetting,
		sectionTitles: [] as string[],
		sectionTotalPages: {},
		totalPage: null,
		colorTheme: defaultColor,
		pages: {},
		history: [] as number[],
	} satisfies SettingsInterface,
	reducers: {
		setMode: (state, action: PayloadAction<ModeType>) => {
			state.mode = action.payload;
		},
		setDevice: (state, action: PayloadAction<DeviceInterface>) => {
			state.device = action.payload;
		},
		setLanguage: (state, action: PayloadAction<string>) => {
			state.language = action.payload;
		},
		setDirectusAccessToken: (state, action: PayloadAction<string>) => {
			state.directusAccessToken = action.payload;
		},
		setColorTheme: (state, action: PayloadAction<number>) => {
			if (state.mode === undefined) {
				state.colorTheme = defaultColor;
			} else {
				state.colorTheme = Colors[state.mode ?? 0][action.payload % TOTAL_COLORS];
			}
		},
		skipPage: (state, action: PayloadAction<number>) => {
			let currentPageNumber = action.payload;
			let newHistory: number[] = [...state.history];

			if (currentPageNumber <= 0) {
				currentPageNumber = 1;
			}

			// update history
			newHistory = [...new Set([...newHistory, currentPageNumber].sort((a, b) => a - b))];
			newHistory = newHistory.filter((pageNum) => pageNum <= currentPageNumber);

			// update current page
			const currentPage = getPage(currentPageNumber, state.pages);
			const nextPage = getPage(currentPageNumber + 1, state.pages);
			state.currentPageNumber = currentPageNumber;
			state.currentPage = currentPage;
			state.nextPage = nextPage;
			state.history = [...newHistory];
		},
		nextPage: (state) => {
			const currentPageNumber = state.currentPageNumber + 1;
			const newHistory = new Set([...state.history, currentPageNumber].sort((a, b) => a - b));
			const currentPage = getPage(currentPageNumber, state.pages);
			const nextPage = getPage(currentPageNumber + 1, state.pages);
			state.currentPageNumber = currentPageNumber;
			state.currentPage = currentPage;
			state.nextPage = nextPage;
			state.history = [...newHistory];
		},
		prevPage: (state) => {
			if (state.currentPageNumber <= 0) {
				return;
			}
			if (state.history.length <= 0) {
				return;
			}
			const newHistory = [...state.history];
			newHistory.pop(); // remove current page
			const currentPageNumber =
				newHistory !== undefined && newHistory !== null && newHistory.length > 0
					? newHistory.at(-1)
					: 1; // remove previous page
			const currentPage = getPage(currentPageNumber ?? 1, state.pages);
			const nextPage = getPage((currentPageNumber ?? 1) + 1, state.pages);

			state.currentPageNumber = currentPageNumber ?? 1;
			state.currentPage = currentPage;
			state.nextPage = nextPage;
			state.history = [...newHistory];
		},
		addPage: (state, action: PayloadAction<{ key: number; obj: PageInterface }>) => {
			const { key, obj } = action.payload;
			state.pages = { ...state.pages, [key]: obj };
		},
		setButtons: (state, action: PayloadAction<ButtonInterface>) => {
			state.buttons = action.payload;
		},
		setPhrases: (state, action: PayloadAction<PhraseInterface>) => {
			state.phrases = action.payload;
		},
		setSectionTitles: (state, action: PayloadAction<string[]>) => {
			state.sectionTitles = action.payload;
		},
		setSectionTotalPages: (
			state,
			action: PayloadAction<{ sectionNumber: number; totalPages: number }>,
		) => {
			const { sectionNumber, totalPages } = action.payload;
			state.sectionTotalPages = { ...state.sectionTotalPages, [sectionNumber]: totalPages };
		},
		setKeyboardState: (state, action: PayloadAction<boolean>) => {
			state.device.isKeyboardOpen = action.payload;
		},
		removeExtroPages: (state) => {
			const pagesWithoutExtros = Object.values(state.pages).filter((page: any) => {
				return page.section !== SectionType.Extro;
			});
			state.pages = pagesWithoutExtros;
		},
		removeFeedbackPages: (state) => {
			const pagesWithoutFeedback = Object.values(state.pages).filter((page: any) => {
				return page.section !== SectionType.Feedback;
			});
			state.pages = pagesWithoutFeedback;
		},
		reloadExtroFeedbackPages: (
			state,
			action: PayloadAction<{ adultExtro: any; kidsExtro: any; feedback: any }>,
		) => {
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
				finalExtroPages = action.payload.kidsExtro.map((page: RawPageType, index: number) => {
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
				finalExtroPages = action.payload.adultExtro.map((page: RawPageType, index: number) => {
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
			finalFeedbackPages = action.payload.feedback.map((page: RawPageType, index: number) => {
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

			finalExtroPages.forEach((page: PageInterface) => {
				newPages = { ...newPages, [page.pageNumber ?? 1]: page };
			});
			finalFeedbackPages.forEach((page: PageInterface) => {
				newPages = { ...newPages, [page.pageNumber ?? 1]: page };
			});

			state.pages = newPages;
			state.sectionTotalPages = { ...state.sectionTotalPages, ...newSectionTotalPages };
		},
	},
});


export const {
	setMode,
	setDevice,
	setLanguage,
	setDirectusAccessToken,
	setColorTheme,
	skipPage,
	nextPage,
	prevPage,
	addPage,
	setButtons,
	setPhrases,
	setSectionTitles,
	setSectionTotalPages,
	setKeyboardState,
	removeExtroPages,
	removeFeedbackPages,
	reloadExtroFeedbackPages,
} = settingsSlice.actions;

export default settingsSlice.reducer;
