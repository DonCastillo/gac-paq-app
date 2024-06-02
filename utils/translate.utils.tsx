import type { LangButtonInterface } from "interface/button";
import type { LangPhraseInterface } from "interface/phrase";
import type SectionPayloadInterface from "interface/directus/section-payload";
import type { ModeType, TranslatedPageType, TranslationType } from "interface/union.type";
import Mode from "constants/mode.enum";
import { store } from "store/store";
import type { SectionInterface } from "interface/payload.type";

const translatePage = (translations: TranslationType, langCode: string): TranslatedPageType => {
	const translatedPage = translations[langCode];
	if (translatedPage === undefined || translatedPage === null) {
		return translations["en-CA"];
	}
	return translatedPage;
};

const translateQuestionLabel = (kidLabel: string, adultLabel: string, mode: ModeType): string => {
	if (mode === Mode.Adult) {
		return adultLabel;
	}
	return kidLabel;
};

const translateButton = (langButtons: LangButtonInterface, langCode: string): string => {
	const translatedButton = langButtons[langCode];
	if (translatedButton === undefined || translatedButton === null) {
		return langButtons["en-CA"].label;
	}
	return translatedButton.label;
};

const translatePhrase = (langPhrases: LangPhraseInterface, langCode: string): string => {
	const translatedPhrase = langPhrases[langCode];
	if (translatedPhrase === undefined || translatedPhrase === null) {
		return langPhrases["en-CA"].label;
	}
	return translatedPhrase.label;
};

const translateSectionHeading = (langCode: string): string[] => {
	const sectionPages: SectionPayloadInterface[] = store.getState().questions.sectionPages;
	if (sectionPages.length === 0) return [];

	const translatedSectionTitles = sectionPages.map((sectionPage: SectionPayloadInterface) => {
		const translatedPage = sectionPage.translations[langCode] as SectionInterface;
		if (translatedPage === undefined || translatedPage === null) {
			return sectionPage.translations["en-CA"].heading;
		}
		return translatedPage.heading;
	});
	return translatedSectionTitles;
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
	translatePage,
	translateQuestionLabel,
	translateButton,
	translatePhrase,
	translateSectionHeading,
	stringToInt,
	intToString,
};
