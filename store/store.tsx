import { configureStore } from "@reduxjs/toolkit";
import responsesSlice from "./responses/responsesSlice";
import questionsSlice from "./questions/questionsSlice";
import settingsSlice from "./settings/settingsSlice";

export const store = configureStore({
	reducer: {
		responses: responsesSlice,
		questions: questionsSlice,
		settings: settingsSlice,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: false,
	}),
});
