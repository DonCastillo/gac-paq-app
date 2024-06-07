import Mode from "constants/mode.enum";
import { setMode } from "store/settings/settingsSlice";
import { store } from "store/store";
import { loadAgePage, reloadExtroFeedbackPages } from "./load_pages.utils";

const changeMode = (value: string | null): void => {
	if (value === "adult") {
		store.dispatch(setMode(Mode.Adult));
		loadAgePage(Mode.Adult);
	} else if (value === "child") {
		store.dispatch(setMode(Mode.Kid));
		loadAgePage(Mode.Kid);
	} else if (value === "teen") {
		store.dispatch(setMode(Mode.Teen));
		loadAgePage(Mode.Teen);
	} else {
		store.dispatch(setMode(undefined));
		loadAgePage(Mode.Kid);
	}
	reloadExtroFeedbackPages();
};

export { changeMode };
