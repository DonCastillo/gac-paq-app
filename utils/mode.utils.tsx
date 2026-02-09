import Mode from "@constants/mode.enum";
import type { ModeType } from "@interface/union.type";
import { resetAllNarrations } from "@store/settings/settingsSlice";
import { store } from "@store/store";
import { loadAgePage, reloadExtroFeedbackPages } from "./load_pages.utils";

const changeMode = (value: string | null | ModeType, language: string | undefined | null): void => {
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

	// load age page
	loadAgePage(finalMode);

	// reload extro feedback pages
	reloadExtroFeedbackPages(finalMode, language ?? "en-CA");

	// reset narration autoplay
	store.dispatch(resetAllNarrations());
};

export { changeMode };
