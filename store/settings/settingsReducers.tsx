import defaultColor from "./defaultColor";
import Colors from "store/data/colors";
import { getPage } from "utils/page.utils";
import Section from "constants/section.enum";
import type {
	SetModeFuncType,
	SetDeviceFuncType,
	SetLanguageFuncType,
	SetDirectusFuncType,
	SetColorThemeFuncType,
	SetPhrasesFuncType,
	SetSectionTitlesFuncType,
	SkipPageFuncType,
	AddPageFuncType,
	SetPageFuncType,
	AddSectionTotalPagesFuncType,
	SetKeyboardState,
	SettingsFuncType,
	SetNarrationsFuncType,
	AddNarrationsFuncType,
	SetIsConnectedFuncType,
	SetIsLoadingFuncType,
	SetEnableNarrationState,
} from "interface/function.type";
import { type PageIndexInterface } from "interface/payload.type";
const TOTAL_COLORS = 8;

const setMode: SetModeFuncType = (state, action) => {
	state.mode = action.payload;
};

const setDevice: SetDeviceFuncType = (state, action) => {
	state.device = action.payload;
};

const setLanguage: SetLanguageFuncType = (state, action) => {
	state.language = action.payload;
};

const setDirectusAccessToken: SetDirectusFuncType = (state, action) => {
	state.directusAccessToken = action.payload;
};

const setStartDateTime: SettingsFuncType = (state) => {
	state.startDateTime = new Date();
};

const setColorTheme: SetColorThemeFuncType = (state, action) => {
	if (state.mode === undefined) {
		state.colorTheme = defaultColor;
	} else {
		state.colorTheme = Colors[state.mode ?? 0][action.payload % TOTAL_COLORS];
	}
};

const setPhrases: SetPhrasesFuncType = (state, action) => {
	state.phrases = action.payload;
};

const setNarrations: SetNarrationsFuncType = (state, action) => {
	state.narrations = action.payload;
};

const addNarration: AddNarrationsFuncType = (state, action) => {
	const { ident, audio_id } = action.payload;
	state.narrations = { ...state.narrations, [ident]: audio_id };
};

const setSectionTitles: SetSectionTitlesFuncType = (state, action) => {
	state.sectionTitles = action.payload;
};

const setIsConnected: SetIsConnectedFuncType = (state, action) => {
	state.isConnected = action.payload;
};

const setIsLoading: SetIsLoadingFuncType = (state, action) => {
	state.isLoading = action.payload;
};

const skipPage: SkipPageFuncType = (state, action) => {
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
};

const nextPage: SettingsFuncType = (state) => {
	const currentPageNumber = state.currentPageNumber + 1;
	const newHistory = new Set([...state.history, currentPageNumber].sort((a, b) => a - b));
	const currentPage = getPage(currentPageNumber, state.pages);
	const nextPage = getPage(currentPageNumber + 1, state.pages);
	state.currentPageNumber = currentPageNumber;
	state.currentPage = currentPage;
	state.nextPage = nextPage;
	state.history = [...newHistory];
};

const prevPage: SettingsFuncType = (state) => {
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
};

const addPage: AddPageFuncType = (state, action) => {
	const { key, page } = action.payload;
	state.pages = { ...state.pages, [key]: page };
};

const setPage: SetPageFuncType = (state, action) => {
	state.pages = action.payload;
};

const addSectionTotalPages: AddSectionTotalPagesFuncType = (state, action) => {
	const { sectionNumber, totalPages } = action.payload;
	state.sectionTotalPages = { ...state.sectionTotalPages, [sectionNumber]: totalPages };
};

const setKeyboardState: SetKeyboardState = (state, action) => {
	state.device.isKeyboardOpen = action.payload;
};

const removeExtroPages: SettingsFuncType = (state) => {
	const pagesWithoutExtros = Object.values(state.pages).filter((page: PageIndexInterface) => {
		return page.section !== Section.Extro;
	});
	state.pages = pagesWithoutExtros;
};

const removeFeedbackPages: SettingsFuncType = (state) => {
	const pagesWithoutFeedback = Object.values(state.pages).filter((page: PageIndexInterface) => {
		return page.section !== Section.Feedback;
	});
	state.pages = pagesWithoutFeedback;
};

const setEnableNarration: SetEnableNarrationState = (state, action) => {
	state.enableNarration = action.payload;
};

const reset: SettingsFuncType = (state) => {
	setMode(state, { type: "", payload: undefined });
	skipPage(state, { type: "", payload: 1 });
	setColorTheme(state, { type: "", payload: 0 });
	setLanguage(state, { type: "", payload: "en-CA" });
	setEnableNarration(state, { type: "", payload: true });
	setStartDateTime(state);
};

export default {
	setMode,
	setDevice,
	setLanguage,
	setDirectusAccessToken,
	setColorTheme,
	skipPage,
	nextPage,
	prevPage,
	addPage,
	setPage,
	setPhrases,
	setNarrations,
	addNarration,
	setSectionTitles,
	addSectionTotalPages,
	setKeyboardState,
	removeExtroPages,
	removeFeedbackPages,
	reset,
	setIsLoading,
	setStartDateTime,
	setIsConnected,
	setEnableNarration,
};
