import { createSlice } from "@reduxjs/toolkit";
import defaultDevice from "./defaultDevice";
import { currentDefaultPage, nextDefaultPage } from "./defaultPage";
import defaultColor from "./defaultColor";
import type DeviceInterface from "interface/dimensions";
import type ColorInterface from "interface/color";
import defaultButton from "./defaultButton";
import defaultPhrase from "./defaultPhrase";
import type { ModeType } from "interface/union.type";
import reducersActions from "./settingsReducers";
import type { ButtonPayloadInterface } from "interface/button";
import type { PhrasePayloadInterface } from "interface/phrase";
import type { PageIndexInterface } from "interface/payload.type";
import { getNarrationPayload } from "./settingsThunk.";

export interface SettingsSliceInterface {
	mode: ModeType;
	device: DeviceInterface;
	language: string;
	directusAccessToken: string;
	directusBaseEndpoint: string;
	currentPageNumber: number;
	currentPage: PageIndexInterface;
	nextPage: PageIndexInterface;
	buttons: ButtonPayloadInterface;
	phrases: PhrasePayloadInterface;
	sectionTitles: string[];
	sectionTotalPages: Record<number, number>;
	totalPage: any;
	colorTheme: ColorInterface;
	pages: Record<number, PageIndexInterface>;
	narrations: Record<string, string | null>;
	history: number[];
	isLoading: boolean;
}

const settingsSlice = createSlice({
	name: "settings",
	initialState: {
		mode: undefined as ModeType,
		device: defaultDevice,
		language: "en-CA",
		directusAccessToken: process.env.EXPO_PUBLIC_ADMIN_TOKEN as string,
		directusBaseEndpoint: process.env.EXPO_PUBLIC_ADMIN_API_URL as string,
		currentPageNumber: 1,
		currentPage: currentDefaultPage,
		nextPage: nextDefaultPage,
		buttons: defaultButton,
		phrases: defaultPhrase,
		sectionTitles: [] as string[],
		sectionTotalPages: {},
		totalPage: null,
		colorTheme: defaultColor,
		pages: {},
		narrations: {},
		history: [] as number[],
		isLoading: false as boolean,
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
		setButtons: reducersActions.setButtons,
		setPhrases: reducersActions.setPhrases,
		setNarrations: reducersActions.setNarrations,
		setSectionTitles: reducersActions.setSectionTitles,
		addSectionTotalPages: reducersActions.addSectionTotalPages,
		setKeyboardState: reducersActions.setKeyboardState,
		removeExtroPages: reducersActions.removeExtroPages,
		removeFeedbackPages: reducersActions.removeFeedbackPages,
		reset: reducersActions.reset,
	},
	extraReducers: (builder) => {
		builder.addCase(getNarrationPayload.fulfilled, (state, action) => {
			console.log("getNarrationPayload.fulfilled");
			state.isLoading = false;
			state.narrations = action.payload;
		});
		builder.addCase(getNarrationPayload.pending, (state) => {
			console.log("getNarrationPayload.pending");
			state.isLoading = true;
			state.narrations = {};
		});
		builder.addCase(getNarrationPayload.rejected, (state) => {
			console.log("getNarrationPayload.rejected");
			state.isLoading = false;
			state.narrations = {};
		});
	},
	selectors: {
		getSetting: (state: SettingsSliceInterface) => state,
		getMode: (state: SettingsSliceInterface) => state.mode,
		getDevice: (state: SettingsSliceInterface) => state.device,
		getLanguage: (state: SettingsSliceInterface) => state.language,
		getDirectusAccessToken: (state: SettingsSliceInterface) => state.directusAccessToken,
		getColorTheme: (state: SettingsSliceInterface) => state.colorTheme,
		getCurrentPageNumber: (state: SettingsSliceInterface) => state.currentPageNumber,
		getCurrentPage: (state: SettingsSliceInterface) => state.currentPage,
		getNextPage: (state: SettingsSliceInterface) => state.nextPage,
		getButtons: (state: SettingsSliceInterface) => state.buttons,
		getPhrases: (state: SettingsSliceInterface) => state.phrases,
		getNarrations: (state: SettingsSliceInterface) => state.narrations,
		getSectionTitles: (state: SettingsSliceInterface) => state.sectionTitles,
		getSectionTotalPages: (state: SettingsSliceInterface) => state.sectionTotalPages,
		getPages: (state: SettingsSliceInterface) => state.pages,
		getHistory: (state: SettingsSliceInterface) => state.history,
		getDirectusBaseEndpoint: (state: SettingsSliceInterface) => state.directusBaseEndpoint,
		getIsLoading: (state: SettingsSliceInterface) => state.isLoading,
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
	setButtons,
	setPhrases,
	setSectionTitles,
	addSectionTotalPages,
	setKeyboardState,
	removeExtroPages,
	removeFeedbackPages,
	reset,
} = settingsSlice.actions;

export const {
	getSetting,
	getMode,
	getDevice,
	getLanguage,
	getDirectusAccessToken,
	getColorTheme,
	getCurrentPageNumber,
	getCurrentPage,
	getNextPage,
	getButtons,
	getPhrases,
	getNarrations,
	getSectionTitles,
	getSectionTotalPages,
	getPages,
	getHistory,
	getDirectusBaseEndpoint,
	getIsLoading,
} = settingsSlice.selectors;

export default settingsSlice.reducer;
