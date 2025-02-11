import type { ModeType } from "interface/union.type";
import Mode from "constants/mode.enum";
import { store } from "store/store";
import type { SectionPayloadInterface } from "interface/payload.type";

const translateQuestionLabel = (kidLabel: string, adultLabel: string, mode: ModeType): string => {
	if (mode === Mode.Adult) {
		return adultLabel;
	}
	return kidLabel;
};

const translateDescription = (
	originalDescription: string,
	descriptionMode: { kid: string; adult: string } | undefined,
	mode: ModeType,
): string | null => {
	if (descriptionMode === undefined || descriptionMode === null) return originalDescription;
	if (mode === undefined || mode === null) return originalDescription;

	if (mode === Mode.Kid || mode === Mode.Teen) {
		return descriptionMode.kid ?? originalDescription;
	} else if (mode === Mode.Adult) {
		return descriptionMode.adult ?? originalDescription;
	} else {
		return originalDescription;
	}
};

const translateSectionHeading = (): Record<number, string> => {
	const sectionPages: Record<number, SectionPayloadInterface> =
		store.getState().questions.sectionPages;
	if (Object.keys(sectionPages).length === 0) return [];
	const sectionTitles: Record<number, string> = {};

	for (const [key, value] of Object.entries(sectionPages)) {
		const translatedPage = value.translations;
		if (translatedPage.heading !== undefined && translatedPage.heading !== null) {
			sectionTitles[key] = translatedPage.heading;
		} else {
			sectionTitles[key] = "";
		}
	}

	return sectionTitles;
};

const translateText = (text: { kid: string; adult: string }, mode: ModeType): string => {
	if (mode === undefined) return "";
	if (text === undefined || text === null) return "";
	if (mode === Mode.Adult) return text.adult;
	if (mode === Mode.Kid) return text.kid;
	if (mode === Mode.Teen) return text.kid;
	return "";
};

const stringToInt = (value: string | null): number => {
	if (value === null || value === undefined || value === "") {
		return -1;
	}
	const parsedValue = parseInt(value);
	if (isNaN(parsedValue)) return 0;
	if (parsedValue < 0) return 0;
	return parsedValue;
};

const intToString = (value: number | null): string => {
	if (value === null || value === undefined) {
		return "0";
	}
	if (value < 0) return "0";
	return value.toString();
};

export {
	translateQuestionLabel,
	translateDescription,
	translateSectionHeading,
	translateText,
	stringToInt,
	intToString,
};
