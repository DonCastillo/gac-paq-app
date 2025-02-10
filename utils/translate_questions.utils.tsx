import MAIN_STUDY_LANG from "constants/main_study_lang";
import type { LangPhraseInterface, PhraseInterface } from "interface/phrase";

const translateArrayOfPages = (pages: any, language: string | undefined): any => {
	const finalLanguage = language ?? "en-CA";

	// modify conditional statement here if 2 or more languages are the same translations
	// if (finalLanguage === "en-NG") {
	// 	finalLanguage = "en-MW";
	// }

	return pages.map((page: any) => {
		// check if page.ident starts with "hbsc_"
		if (page.ident.startsWith("hbsc_")) {
			if (!MAIN_STUDY_LANG.includes(finalLanguage)) {
				return { ...page, translations: page.translations["en-CA"] };
			}
		}
		// check if page.ident starts with "gshs_"
		if (page.ident.startsWith("gshs_")) {
			if (!MAIN_STUDY_LANG.includes(finalLanguage)) {
				return { ...page, translations: page.translations["en-CA"] };
			}
		}
		// console.log(page.ident);
		return { ...page, translations: page.translations[finalLanguage] };
	});
};

const translatePage = (page: any, language: string | undefined): any => {
	const finalLanguage = language ?? "en-CA";

	// modify conditional statement here if 2 or more languages are the same translations
	// if (finalLanguage === "en-NG") {
	// 	finalLanguage = "en-MW";
	// }

	return { ...page, translations: page.translations[finalLanguage] };
};

const translatePhrase = (
	phrase: LangPhraseInterface,
	language: string | undefined,
): PhraseInterface => {
	const finalLanguage = language ?? "en-CA";

	// modify conditional statement here if 2 or more languages are the same translations
	// if (finalLanguage === "en-NG") {
	// 	finalLanguage = "en-MW";
	// }

	return phrase[finalLanguage];
};

const translateOptionLetters = (
	letters: Record<string, string[]>,
	language: string | undefined,
): string[] => {
	const finalLanguage = language ?? "en-CA";
	let finalLetters = letters["en-CA"];

	if (letters[finalLanguage] !== undefined && letters[finalLanguage] !== null) {
		finalLetters = letters[finalLanguage];
	}

	return finalLetters;
};

const translateOptionNumbers = (
	numbers: Record<string, string[]>,
	language: string | undefined,
): string[] => {
	const finalLanguage = language ?? "en-CA";
	let finalNumbers = numbers["en-CA"];

	if (numbers[finalLanguage] !== undefined && numbers[finalLanguage] !== null) {
		finalNumbers = numbers[finalLanguage];
	}

	return finalNumbers;
};

export {
	translateArrayOfPages,
	translatePage,
	translatePhrase,
	translateOptionLetters,
	translateOptionNumbers,
};
