import type ButtonInterface from "interface/button";
import type PhraseInterface from "interface/phrase";

function translateButton(buttons: ButtonInterface[], langCode: string | null): string | null {
	if (langCode === null || langCode === undefined || langCode === "") return null;
	if (buttons.length === 0) return null;

	const translatedButton = buttons.find((button: ButtonInterface) => {
		const buttonLanguage = button?.languages_id?.lang_code?.toLowerCase();
		const langCodeLowercase = langCode?.toLowerCase();
		return buttonLanguage === langCodeLowercase;
	});

	if (translatedButton === undefined || translatedButton === null) {
		return null;
	} else {
		return translatedButton?.label;
	}
}

function translatePhrase(phrases: PhraseInterface[], langCode: string | null): string | null {
	if (langCode === null || langCode === undefined || langCode === "") return null;
	if (phrases.length === 0) return null;

	const translatedPhrase = phrases.find((phrase: PhraseInterface) => {
		const phraseLanguage = phrase?.languages_id?.lang_code?.toLowerCase();
		const langCodeLowercase = langCode?.toLowerCase();
		return phraseLanguage === langCodeLowercase;
	});

	if (translatedPhrase === undefined || translatedPhrase === null) {
		return null;
	} else {
		return translatedPhrase?.label;
	}
}

function stringToInt(value: string | null): number {
	if (value === null || value === undefined || value === "") {
		return 0;
	}
	const parsedValue = parseInt(value);
	if (isNaN(parsedValue)) return 0;
	if (parsedValue < 0) return 0;
	return parsedValue;
}

function intToString(value: number | null): string {
	if (value === null || value === undefined) {
		return "0";
	}
	if (value < 0) return "0";
	return value.toString();
}

export { translateButton, translatePhrase, stringToInt, intToString };
