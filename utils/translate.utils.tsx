import type { LangButtonInterface } from "interface/button";
import type { LangPhraseInterface } from "interface/phrase";
import type SectionPayloadInterface from "interface/directus/section-payload";

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

const translateSectionHeading = (
	sectionPages: SectionPayloadInterface[],
	langCode: string | null,
): string[] => {
	if (langCode === null || langCode === undefined || langCode === "") return [];
	if (sectionPages.length === 0) return [];

	const translatedSectionTitles = sectionPages.map((sectionPage: SectionPayloadInterface) => {
		const translations = sectionPage?.translations;
		const translatedPhrase = translations.find((translation) => {
			const sectionTitleLanguage = translation?.languages_id?.lang_code?.toLowerCase();
			const langCodeLowercase = langCode?.toLowerCase();
			return sectionTitleLanguage === langCodeLowercase;
		});
		if (translatedPhrase === undefined || translatedPhrase === null) return "";
		return translatedPhrase?.heading;
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

export { translateButton, translatePhrase, translateSectionHeading, stringToInt, intToString };
