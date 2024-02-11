import Mode from "constants/mode";
import type PageInterface from "interface/page";
import type QuestionDropdownInterface from "interface/question_dropdown";
import type QuestionDropdownLanguageInterface from "interface/question_dropdown_language";

type TranslationArrType =
	| PageInterface[]
	| QuestionDropdownInterface[]
	| QuestionDropdownLanguageInterface[];

type TranslateFuncType =
	| PageInterface
	| QuestionDropdownInterface
	| QuestionDropdownLanguageInterface
	| null;

type LangCodeType = string | null;
type QuestionLabelType = string | undefined;
type ModeType = Mode.Kid | Mode.Adult | undefined;

function translate(translationArr: TranslationArrType, langCode: LangCodeType): TranslateFuncType {
	if (langCode === null || langCode === undefined || langCode === "") return null;
	if (translationArr.length === 0) return null;

	const translatedPage = translationArr.find((page) => {
		const pageLanguage = page?.languages_id?.lang_code.toLowerCase();
		const langCodeLowercase = langCode?.toLowerCase();
		return pageLanguage === langCodeLowercase;
	});

	if (translatedPage === undefined || translatedPage === null) {
		return null;
	} else {
		return translatedPage;
	}
}

function translateQuestionLabel(
	kidQuestion: QuestionLabelType,
	adultQuestion: QuestionLabelType,
	mode: ModeType,
): string {
	if (kidQuestion === undefined || adultQuestion === undefined) return "";
	if (mode === Mode.Adult) {
		return adultQuestion;
	}
	return kidQuestion;
}

function getPage(currentPageNumber: number, pages: any[]): any {
	return pages.find((page) => {
		return page.pageNumber === currentPageNumber;
	});
}

export { translate, translateQuestionLabel, getPage };
