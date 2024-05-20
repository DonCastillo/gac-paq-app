import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import SectionType from "constants/section_type";
import type ResponseInterface from "interface/response";

const responsesSlice = createSlice({
	name: "responses",
	initialState: {} satisfies Record<string, ResponseInterface>,
	reducers: {
		newResponse: (state, action: PayloadAction<ResponseInterface>) => {
			const newResponse = {
				ident: action.payload.ident,
				label: action.payload.label,
				answer: action.payload.answer,
				pageNumber: action.payload.pageNumber,
				mode: action.payload.mode,
				section: action.payload.section,
				sectionNumber: action.payload.sectionNumber,
				sectionPageNumber: action.payload.sectionPageNumber,
			};
			let propertyName = "";

			if (newResponse.section === SectionType.Extro) {
				propertyName = `[${newResponse.mode}][${newResponse.section}][${newResponse.sectionNumber}][${newResponse.sectionPageNumber}]`;
			} else {
				propertyName = `[${newResponse.section}][${newResponse.sectionNumber}][${newResponse.sectionPageNumber}]`;
			}
			state[propertyName] = newResponse;
		},
		clearResponseByIdent: (state, action: PayloadAction<string>) => {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				const responseValue = value as ResponseInterface;
				if (responseValue.ident !== action.payload) {
					newState[key] = value;
				}
			}
			state = newState;
		},
		clearUnansweredResponses: (state) => {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				const responseValue = value as ResponseInterface;
				if (
					responseValue.answer !== null &&
					responseValue.answer !== "" &&
					responseValue.answer !== undefined
				) {
					newState[key] = value;
				}
			}
			state = newState;
		},
		clearQuestionResponses: (state) => {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				const responseValue = value as ResponseInterface;
				if (responseValue.section !== SectionType.Question) {
					newState[key] = value;
				}
			}
			state = newState;
		},
		clearIntroResponses: (state) => {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				const responseValue = value as ResponseInterface;
				if (responseValue.section !== SectionType.Intro) {
					newState[key] = value;
				}
			}
			state = newState;
		},
		clearFeedbackResponses: (state) => {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				const responseValue = value as ResponseInterface;
				if (responseValue.section !== SectionType.Feedback) {
					newState[key] = value;
				}
			}
			state = newState;
		},
		clearExtroResponses: (state) => {
			const newState = {};
			for (const [key, value] of Object.entries(state)) {
				const responseValue = value as ResponseInterface;
				if (responseValue.section !== SectionType.Extro) {
					newState[key] = value;
				}
			}
			state = newState;
		},
		resetResponses: (state) => {
			state = {};
		},
	},
	selectors: {
		selectAllResponses: (state): Record<string, ResponseInterface> => state,
		selectResponseByIdent: (state, ident: string): string | string[] | null => {
			if (ident === null || ident === "") return null;
			if (Object.keys(state).length === 0) return null;
			const finalResponse: ResponseInterface | undefined = Object.values(state).find(
				(response: ResponseInterface) => response?.ident === ident,
			) as ResponseInterface;
			if (finalResponse === undefined || finalResponse === null) {
				return null;
			}
			if (
				finalResponse?.answer === null ||
				finalResponse?.answer === "" ||
				finalResponse?.answer === undefined
			) {
				return null;
			}
			if (finalResponse?.answer?.includes(" | ")) {
				return finalResponse?.answer.split(" | ");
			}
			return finalResponse?.answer;
		},
	},
});

export const {
	newResponse,
	clearResponseByIdent,
	clearUnansweredResponses,
	clearQuestionResponses,
	clearIntroResponses,
	clearFeedbackResponses,
	clearExtroResponses,
	resetResponses,
} = responsesSlice.actions;
export default responsesSlice.reducer;
