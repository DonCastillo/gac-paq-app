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

		// if en-IN && mode === kid or teen, merge en-CA payload and get en-IN version of about and play_2
		if (language === "en-IN" && [Mode.Kid, Mode.Teen].includes(mode)) {
			const enINKidEndpoint = getNarrationEndpoint(directusBaseEndpoint, Mode.Kid, "en-IN");
			const enINKidNarrations = await collectNarrationData(enINKidEndpoint, directusAccessToken);
			narrations.about = enINKidNarrations?.about;
			narrations.play_2 = enINKidNarrations?.play_2;
		}

		// if en-IN && mode === adult, merge en-CA payload and get en-IN version of about, play_2, child_ethnicities, parent_ethnicities
		if (language === "en-IN" && [Mode.Adult].includes(mode)) {
			const enINAdultEndpoint = getNarrationEndpoint(directusBaseEndpoint, Mode.Adult, "en-IN");
			const enINAdultNarrations = await collectNarrationData(
				enINAdultEndpoint,
				directusAccessToken,
			);
			narrations.about = enINAdultNarrations?.about;
			narrations.play_2 = enINAdultNarrations?.play_2;
			narrations.child_ethnicities = enINAdultNarrations?.child_ethnicities;
			narrations.parent_ethnicities = enINAdultNarrations?.parent_ethnicities;
		}

		return narrations;
	},
);
