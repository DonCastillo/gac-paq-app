import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Mode from "constants/mode.enum";
import type { ModeType } from "interface/union.type";
import type { SettingsSliceInterface } from "./settingsSlice";

const getNarrationEndpoint = (
	directusBaseEndpoint: string,
	mode: Mode,
	language: string,
): string => {
	const finalMode = mode === Mode.Adult ? "adult" : "kid";
	const fields = "*,language.lang_code,mode.value";
	const limit = "-1";
	const filterLanguage = `filter[language][lang_code]=${language ?? "en-CA"}`;
	const filterMode = `filter[mode][value]=${finalMode}`;
	const filterStatus = "filter[status]=published";
	const endpoint = `${directusBaseEndpoint}/items/narrations?fields=${fields}&limit=${limit}&${filterLanguage}&${filterMode}&${filterStatus}`;
	return endpoint;
};

const collectNarrationData = async (
	endpoint: string,
	directusAccessToken: string,
): Promise<object | null> => {
	return axios
		.get(endpoint, {
			headers: {
				Authorization: `Bearer ${directusAccessToken}`,
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			return response.data.data[0];
		})
		.catch((error) => {
			console.log("Error fetching narrations: ", error);
			return null;
		});
};

export const getNarrationPayload = createAsyncThunk(
	"settings/fetchNarrations",
	async ({ mode, language }: { mode: ModeType; language: string }, { getState }) => {
		const { settings } = getState() as any;
		const { directusAccessToken, directusBaseEndpoint } = settings as SettingsSliceInterface;
		let tempLanguage = language ?? "en-CA";

		if (mode === undefined || mode === null) {
			return null;
		}

		// modify conditional statement here if 2 or more languages are the same translations
		if (tempLanguage === "en-NG") {
			tempLanguage = "en-MW";
		}
		if (tempLanguage === "en-IN") {
			tempLanguage = "en-CA";
		}

		const endpoint = getNarrationEndpoint(directusBaseEndpoint, mode, tempLanguage);
		const narrations = await collectNarrationData(endpoint, directusAccessToken);

		// if en-NG && mode === adult, merge en-MW payload and get en-NG version of child_ethnicities and parent_ethnicities
		if (language === "en-NG" && mode === Mode.Adult) {
			const enNGAdultEndpoint = getNarrationEndpoint(directusBaseEndpoint, Mode.Adult, "en-NG");
			const enNGAdultNarrations = await collectNarrationData(
				enNGAdultEndpoint,
				directusAccessToken,
			);
			narrations.child_ethnicities = enNGAdultNarrations?.child_ethnicities;
			narrations.parent_ethnicities = enNGAdultNarrations?.parent_ethnicities;
		}

		return narrations;
	},
);
