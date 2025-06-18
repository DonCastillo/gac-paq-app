import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Mode from "constants/mode.enum";
import type { ModeType } from "interface/union.type";
import type { SettingsSliceInterface } from "./settingsSlice";

export const getNarrationPayload = createAsyncThunk(
	"settings/fetchNarrations",
	async ({ mode, language }: { mode: ModeType; language: string }, { getState }) => {
		if (mode === undefined || mode === null) {
			return null;
		}

		// modify conditional statement here if 2 or more languages are the same translations
		if (language === "en-NG") {
			language = "en-MW";
		}
		if (language === "en-IN") {
			language = "en-CA";
		}

		const finalMode = mode === Mode.Adult ? "adult" : "kid";
		const { settings } = getState() as any;
		const { directusAccessToken, directusBaseEndpoint } = settings as SettingsSliceInterface;

		const fields = "*,language.lang_code,mode.value";
		const limit = "-1";
		const filterLanguage = `filter[language][lang_code]=${language ?? "en-CA"}`;
		const filterMode = `filter[mode][value]=${finalMode}`;
		const filterStatus = "filter[status]=published";
		const endpoint = `${directusBaseEndpoint}/items/narrations?fields=${fields}&limit=${limit}&${filterLanguage}&${filterMode}&${filterStatus}`;
		const narrations = await axios
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

		return narrations;
	},
);
