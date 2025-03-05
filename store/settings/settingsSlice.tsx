import { createSlice } from "@reduxjs/toolkit";
import defaultDevice from "./defaultDevice";
import { currentDefaultPage, nextDefaultPage } from "./defaultPage";
import defaultColor from "./defaultColor";
import type DeviceInterface from "interface/dimensions";
import type ColorInterface from "interface/color";
import defaultPhrase from "./defaultPhrase";
import type { ModeType } from "interface/union.type";
import reducersActions from "./settingsReducers";
import type { PhrasePayloadInterface } from "interface/phrase";
import type { PageIndexInterface } from "interface/payload.type";
import { getNarrationPayload } from "./settingsThunk";

export interface SettingsSliceInterface {
	mode: ModeType;
	device: DeviceInterface;
	language: string;
	directusAccessToken: string;
	directusBaseEndpoint: string;
	responseTable: string;
	currentPageNumber: number;
	currentPage: PageIndexInterface;
	nextPage: PageIndexInterface;
	phrases: PhrasePayloadInterface;
	sectionTitles: Record<number, string>;
	sectionTotalPages: Record<number, number>;
	totalPage: any;
	colorTheme: ColorInterface;
	pages: Record<number, PageIndexInterface>;
	narrations: Record<string, string | null>;
	history: number[];
	isLoading: boolean;
	startDateTime: Date | null;
	isConnected: boolean;
	enableNarration: boolean;
	soundType: "online" | "offline";
}

const settingsSlice = createSlice({
	name: "settings",
	initialState: {
		mode: undefined as ModeType,
		device: defaultDevice,
		language: "en-CA",
		directusAccessToken: process.env.EXPO_PUBLIC_ADMIN_TOKEN as string,
		directusBaseEndpoint: process.env.EXPO_PUBLIC_ADMIN_API_URL as string,
		responseTable: process.env.EXPO_PUBLIC_RESPONSE_TABLE as string,
		currentPageNumber: 1,
		currentPage: currentDefaultPage,
		nextPage: nextDefaultPage,
		phrases: defaultPhrase,
		sectionTitles: {},
		sectionTotalPages: {},
		totalPage: null,
		colorTheme: defaultColor,
		pages: {},
		narrations: {},
		history: [] as number[],
		isLoading: false as boolean,
		startDateTime: null as Date | null,
		isConnected: false,
		enableNarration: true,
		soundType: "online",
	} satisfies SettingsSliceInterface,
	reducers: {
		setMode: reducersActions.setMode,
		setDevice: reducersActions.setDevice,
		setLanguage: reducersActions.setLanguage,
		setDirectusAccessToken: reducersActions.setDirectusAccessToken,
		setColorTheme: reducersActions.setColorTheme,
		skipPage: reducersActions.skipPage,
		nextPage: reducersActions.nextPage,
		prevPage: reducersActions.prevPage,
		addPage: reducersActions.addPage,
		setPage: reducersActions.setPage,
		setPhrases: reducersActions.setPhrases,
		setNarrations: reducersActions.setNarrations,
		addSectionTitle: reducersActions.addSectionTitle,
		resetSectionTitles: reducersActions.resetSectionTitles,
		addSectionTotalPages: reducersActions.addSectionTotalPages,
		resetSectionTotalPages: reducersActions.resetSectionTotalPages,
		setKeyboardState: reducersActions.setKeyboardState,
		removeExtroPages: reducersActions.removeExtroPages,
		removeFeedbackPages: reducersActions.removeFeedbackPages,
		reset: reducersActions.reset,
		setIsLoading: reducersActions.setIsLoading,
		setStartDateTime: reducersActions.setStartDateTime,
		setIsConnected: reducersActions.setIsConnected,
		setEnableNarration: reducersActions.setEnableNarration,
		disableNarrationAutoplay: reducersActions.disableNarrationAutoplay,
		resetAllNarrations: reducersActions.resetAllNarrationAutoplay,
	},
	extraReducers: (builder) => {
		builder.addCase(getNarrationPayload.fulfilled, (state, action) => {
			state.narrations = action.payload;
		});
		builder.addCase(getNarrationPayload.pending, (state) => {
			state.narrations = {};
		});
		builder.addCase(getNarrationPayload.rejected, (state) => {
			state.narrations = {};
		});
	},
	selectors: {
		getSetting: (state: SettingsSliceInterface) => state,
		getMode: (state: SettingsSliceInterface) => state.mode,
		getDevice: (state: SettingsSliceInterface) => state.device,
		getLanguage: (state: SettingsSliceInterface) => state.language,
		getDirectusAccessToken: (state: SettingsSliceInterface) => state.directusAccessToken,
		getResponseTable: (state: SettingsSliceInterface) => state.responseTable,
		getColorTheme: (state: SettingsSliceInterface) => state.colorTheme,
		getCurrentPageNumber: (state: SettingsSliceInterface) => state.currentPageNumber,
		getCurrentPage: (state: SettingsSliceInterface) => state.currentPage,
		getNextPage: (state: SettingsSliceInterface) => state.nextPage,
		getPhrases: (state: SettingsSliceInterface) => state.phrases,
		getNarrations: (state: SettingsSliceInterface) => state.narrations,
		getSectionTitles: (state: SettingsSliceInterface) => state.sectionTitles,
		getSectionTotalPages: (state: SettingsSliceInterface) => state.sectionTotalPages,
		getPages: (state: SettingsSliceInterface) => state.pages,
		getHistory: (state: SettingsSliceInterface) => state.history,
		getDirectusBaseEndpoint: (state: SettingsSliceInterface) => state.directusBaseEndpoint,
		getIsLoading: (state: SettingsSliceInterface) => state.isLoading,
		getStartDateTime: (state: SettingsSliceInterface) => state.startDateTime,
		getIsConnected: (state: SettingsSliceInterface) => state.isConnected,
		getEnableNarration: (state: SettingsSliceInterface) => state.enableNarration,
		getSoundType: (state: SettingsSliceInterface) => state.soundType,
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
	setPage,
	setPhrases,
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
	resetAllNarrations,
} = settingsSlice.actions;

export const {
	getSetting,
	getMode,
	getDevice,
	getLanguage,
	getDirectusAccessToken,
	getResponseTable,
	getColorTheme,
	getCurrentPageNumber,
	getCurrentPage,
	getNextPage,
	getPhrases,
	getNarrations,
	getSectionTitles,
	getSectionTotalPages,
	getPages,
	getHistory,
	getDirectusBaseEndpoint,
	getIsLoading,
	getStartDateTime,
	getIsConnected,
	getEnableNarration,
	getSoundType,
} = settingsSlice.selectors;

export default settingsSlice.reducer;
