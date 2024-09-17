import Mode from "constants/mode.enum";
import { loadAgePage, reloadExtroFeedbackPages } from "./load_pages.utils";
import type { ModeType } from "interface/union.type";
import { store } from "store/store";
import { resetAllNarrations } from "store/settings/settingsSlice";

const changeMode = (value: string | null | ModeType): void => {
	// load appropriate age page
	if (value === "adult") {
		loadAgePage(Mode.Adult);
	} else if (value === "kid") {
		loadAgePage(Mode.Kid);
	} else if (value === "teen") {
		loadAgePage(Mode.Teen);
	} else {
		loadAgePage(Mode.Kid);
	}

	// reload extro feedback pages
	reloadExtroFeedbackPages();

	// reset narration autoplay
	store.dispatch(resetAllNarrations());
};

export { changeMode };
