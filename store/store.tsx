import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";
import questionsSlice from "./questions/questionsSlice";
import responsesSlice from "./responses/responsesSlice";
import settingsSlice from "./settings/settingsSlice";

export const store = configureStore({
	reducer: {
		responses: responsesSlice,
		questions: questionsSlice,
		settings: settingsSlice,
	},
	devTools: false,
	enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(devToolsEnhancer()),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
