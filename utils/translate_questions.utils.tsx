import type { LangPhraseInterface, PhraseInterface } from "interface/phrase";

const translateArrayOfPages = (pages: any, language: string | undefined): any => {
	const finalLanguage = language ?? "en-CA";
	return pages.map((page: any) => {
		return { ...page, translations: page.translations[finalLanguage] };
	});
};

const translatePage = (page: any, language: string | undefined): any => {
	const finalLanguage = language ?? "en-CA";
	return { ...page, translations: page.translations[finalLanguage] };
};

const translatePhrase = (
	phrase: LangPhraseInterface,
	language: string | undefined,
): PhraseInterface => {
	const finalLanguage = language ?? "en-CA";
	return phrase[finalLanguage];
};

export { translateArrayOfPages, translatePage, translatePhrase };
