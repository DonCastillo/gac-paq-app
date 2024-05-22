import Mode from "constants/mode";
import { store } from "store/store";
import { getResponseByIdent } from "./response";
import type {
	Transportation7Interface,
	Transportation8_10Interface,
	Transportation9_11Interface,
} from "interface/question17";

const getQuestion17Label = (): string => {
	const language = store.getState().settings.language ?? "en-CA";
	const mode = store.getState().settings.mode === Mode.Adult ? Mode.Adult : Mode.Kid;
	const currentIdent = store.getState().settings.currentPage.page.ident;

	let attendedSchool = getResponseByIdent("school_1");
	let attendedWork = getResponseByIdent("work_1");

	attendedSchool = attendedSchool !== null ? attendedSchool.toString().toLowerCase() : null;
	attendedWork = attendedWork !== null ? attendedWork.toString().toLowerCase() : null;
	let attendance = "both";

	if (attendedSchool === "yes" && attendedWork === "yes") {
		attendance = "both";
	} else if (attendedSchool === "yes") {
		attendance = "school";
	} else if (attendedWork === "yes") {
		attendance = "work";
	} else {
		attendance = "none";
	}

	if (currentIdent === "transportation_7") {
		const questionLabels: Transportation7Interface = store.getState().questions.Transportation7;
		return questionLabels[language][mode][attendance] ?? "";
	}

	if (currentIdent === "transportation_8") {
		const questionLabels: Transportation8_10Interface =
			store.getState().questions.Transportation8_10;
		return questionLabels[language][mode].walk[attendance] ?? "";
	}

	if (currentIdent === "transportation_9") {
		const questionLabels: Transportation9_11Interface =
			store.getState().questions.Transportation9_11;
		return questionLabels[language][mode].walk[attendance] ?? "";
	}

	if (currentIdent === "transportation_10") {
		const questionLabels: Transportation8_10Interface =
			store.getState().questions.Transportation8_10;
		return questionLabels[language][mode].wheel[attendance] ?? "";
	}

	if (currentIdent === "transportation_11") {
		const questionLabels: Transportation9_11Interface =
			store.getState().questions.Transportation9_11;
		return questionLabels[language][mode].wheel[attendance] ?? "";
	}

	return "";
};

export { getQuestion17Label };
