import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Mode from "constants/mode.enum";
import type { ModeType } from "interface/union.type";

export const getNarrationPayload = createAsyncThunk(
	"settings/fetchNarrations",
	async ({ mode, language }: { mode: ModeType; language: string }, { getState }) => {
		if (mode === undefined || mode === null) {
			return null;
		}
		const finalMode = mode === Mode.Adult ? "adult" : "kid";
		const { settings } = getState();
		const { directusAccessToken, directusBaseEndpoint } = settings;

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
			});

		return narrations;
	},
);
