import Mode from "constants/mode.enum";
import { loadAgePage, reloadExtroFeedbackPages } from "./load_pages.utils";
import type { ModeType } from "interface/union.type";
import { store } from "store/store";
import { resetAllNarrations } from "store/settings/settingsSlice";

const changeMode = (value: string | null | ModeType, language: string | undefined): void => {
	let finalMode = Mode.Kid;

	if (value === "adult") {
		finalMode = Mode.Adult;
	} else if (value === "kid") {
		finalMode = Mode.Kid;
	} else if (value === "teen") {
		finalMode = Mode.Teen;
	} else {
		finalMode = Mode.Kid;
	}

	console.log("------======------");
	console.log("final mode: ", finalMode);
	console.log("final language: ", language);
	console.log("------======------");

	// load age page
	loadAgePage(finalMode);

	// reload extro feedback pages
	reloadExtroFeedbackPages(finalMode, language || "en-CA");

	// reset narration autoplay
	store.dispatch(resetAllNarrations());
};

export { changeMode };
