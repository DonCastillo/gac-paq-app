import type { LangPhraseInterface, PhraseInterface } from "interface/phrase";

const translateArrayOfPages = (pages: any, language: string | undefined): any => {
	const finalLanguage = language ?? "en-CA";

	// modify conditional statement here if 2 or more languages are the same translations
	// if (finalLanguage === "en-NG") {
	// 	finalLanguage = "en-MW";
	// }

	return pages.map((page: any) => {
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

export { translateArrayOfPages, translatePage, translatePhrase };
