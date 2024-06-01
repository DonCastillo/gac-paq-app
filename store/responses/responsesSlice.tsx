import { createSlice } from "@reduxjs/toolkit";
import type { ResponseInterface } from "interface/payload.type";
import reducersActions from "./responsesReducers";

const responsesSlice = createSlice({
	name: "responses",
	initialState: {} satisfies Record<string, ResponseInterface>,
	reducers: {
		newResponse: reducersActions.newResponse,
		clearResponseByIdent: reducersActions.clearResponseByIdent,
		clearUnansweredResponses: reducersActions.clearUnansweredResponses,
		clearQuestionResponses: reducersActions.clearQuestionResponses,
		clearIntroResponses: reducersActions.clearIntroResponses,
		clearFeedbackResponses: reducersActions.clearFeedbackResponses,
		clearExtroResponses: reducersActions.clearExtroResponses,
		resetResponses: reducersActions.resetResponses,
	},
	selectors: {
		getAllResponses: (state): Record<string, ResponseInterface> => state,
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

export const { getAllResponses } = responsesSlice.selectors;

export default responsesSlice.reducer;
