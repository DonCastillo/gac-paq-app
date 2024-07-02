import Mode from "constants/mode.enum";
import { loadAgePage, reloadExtroFeedbackPages } from "./load_pages.utils";
import type { ModeType } from "interface/union.type";

const changeMode = (value: string | null | ModeType): void => {
	if (value === "adult") {
		loadAgePage(Mode.Adult);
	} else if (value === "kid") {
		loadAgePage(Mode.Kid);
	} else if (value === "teen") {
		loadAgePage(Mode.Teen);
	} else {
		loadAgePage(Mode.Kid);
	}
	reloadExtroFeedbackPages();
};

export { changeMode };
