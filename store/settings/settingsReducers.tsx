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
	DisableNarrationAutoplayFuncType,
	ResetAllNarrationAutoplayFuncType,
	AddSectionTitleFuncType,
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

const addSectionTitle: AddSectionTitleFuncType = (state, action) => {
	const { sectionNumber, sectionTitle } = action.payload;
	state.sectionTitles[sectionNumber] = sectionTitle;
};

const resetSectionTitles: SettingsFuncType = (state) => {
	state.sectionTitles = {};
};

const setIsConnected: SetIsConnectedFuncType = (state, action) => {
	state.isConnected = action.payload;
};

const setIsLoading: SetIsLoadingFuncType = (state, action) => {
	state.isLoading = action.payload;
};

const skipPage: SkipPageFuncType = (state, action) => {
	const allPages = state.pages;

	let nextPageNumber = action.payload;
	let newHistory: number[] = [...state.history];

	if (nextPageNumber <= 0) {
		nextPageNumber = 1;
	}

	// update history
	newHistory = [...new Set([...newHistory, nextPageNumber].sort((a, b) => a - b))];
	newHistory = newHistory.filter((pageNum) => pageNum <= nextPageNumber);

	// update current page
	const nextPage = getPage(nextPageNumber, allPages);
	const nextNextPage = getPage(nextPageNumber + 1, allPages);

	// disable current page narration autoplay
	disableNarrationAutoplay(state);

	state.currentPageNumber = nextPageNumber;
	state.currentPage = nextPage;
	state.nextPage = nextNextPage;
	state.history = [...newHistory];
};

const nextPage: SettingsFuncType = (state) => {
	const allPages = state.pages;
	const currentPageNumber = state.currentPageNumber;
	const nextPageNumber = currentPageNumber + 1;

	// update history
	const newHistory = new Set([...state.history, nextPageNumber].sort((a, b) => a - b));

	// update current page
	const nextPage = getPage(nextPageNumber, allPages);
	const nextNextPage = getPage(nextPageNumber + 1, allPages);

	// disable current page narration autoplay
	disableNarrationAutoplay(state);

	state.currentPageNumber = nextPageNumber;
	state.currentPage = nextPage;
	state.nextPage = nextNextPage;
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

	// update current page
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

const resetSectionTotalPages: SettingsFuncType = (state) => {
	state.sectionTotalPages = {};
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

const disableNarrationAutoplay: DisableNarrationAutoplayFuncType = (state) => {
	const allPages = state.pages;
	const currentPageNumber = state.currentPageNumber;
	const currentPage = getPage(currentPageNumber, allPages);

	// update pages with the current page's audio_autoplay set to false
	const updatedPages = {
		...allPages,
		[currentPageNumber]: { ...currentPage, page: { ...currentPage.page, audio_autoplay: false } },
	};
	state.pages = updatedPages;

	// update current page's audio_autoplay to false
	if (state.currentPage.pageNumber === currentPageNumber) {
		state.currentPage = {
			...state.currentPage,
			page: { ...state.currentPage.page, audio_autoplay: false },
		};
	}
};

const resetAllNarrationAutoplay: ResetAllNarrationAutoplayFuncType = (state) => {
	const allPages = state.pages;
	const updatedPages = Object.entries(allPages).map(([key, page]) => {
		return { ...page, page: { ...page.page, audio_autoplay: true } };
	});
	state.pages = updatedPages;
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
	addSectionTitle,
	resetSectionTitles,
	addSectionTotalPages,
	resetSectionTotalPages,
	setKeyboardState,
	removeExtroPages,
	removeFeedbackPages,
	reset,
	setIsLoading,
	setStartDateTime,
	setIsConnected,
	setEnableNarration,
	disableNarrationAutoplay,
	resetAllNarrationAutoplay,
};
