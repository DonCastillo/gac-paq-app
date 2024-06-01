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

export interface SettingsInterface {
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
	pages: Record<number, any>;
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
		history: [] as number[],
	} satisfies SettingsInterface,
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
		setSectionTitles: reducersActions.setSectionTitles,
		addSectionTotalPages: reducersActions.addSectionTotalPages,
		setKeyboardState: reducersActions.setKeyboardState,
		removeExtroPages: reducersActions.removeExtroPages,
		removeFeedbackPages: reducersActions.removeFeedbackPages,
		reset: reducersActions.reset,
	},
	selectors: {
		getSetting: (state: SettingsInterface) => state,
		getMode: (state: SettingsInterface) => state.mode,
		getDevice: (state: SettingsInterface) => state.device,
		getLanguage: (state: SettingsInterface) => state.language,
		getDirectusAccessToken: (state: SettingsInterface) => state.directusAccessToken,
		getColorTheme: (state: SettingsInterface) => state.colorTheme,
		getCurrentPageNumber: (state: SettingsInterface) => state.currentPageNumber,
		getCurrentPage: (state: SettingsInterface) => state.currentPage,
		getNextPage: (state: SettingsInterface) => state.nextPage,
		getButtons: (state: SettingsInterface) => state.buttons,
		getPhrases: (state: SettingsInterface) => state.phrases,
		getSectionTitles: (state: SettingsInterface) => state.sectionTitles,
		getSectionTotalPages: (state: SettingsInterface) => state.sectionTotalPages,
		getPages: (state: SettingsInterface) => state.pages,
		getHistory: (state: SettingsInterface) => state.history,
		getDirectusBaseEndpoint: (state: SettingsInterface) => state.directusBaseEndpoint,
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
	getSectionTitles,
	getSectionTotalPages,
	getPages,
	getHistory,
	getDirectusBaseEndpoint,
} = settingsSlice.selectors;

export default settingsSlice.reducer;
