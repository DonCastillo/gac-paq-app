import Mode from "constants/mode.enum";
import type { ModeType, TranslateFuncType, TranslationArrType } from "interface/union.type";

type LangCodeType = string | null;
type QuestionLabelType = string | undefined;

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

function getPage(currentPageNumber: number, pages: Record<number, any>): any {
	return pages[currentPageNumber] ?? null;
}

function getPageNumberBasedOnIdent(ident: string, pages: Record<number, any>): number {
	for (const [key, page] of Object.entries(pages)) {
		if (page?.page?.ident === ident) {
			return parseInt(key);
		}
	}
	return 0;
}

function translateText(mode: ModeType, text: { kid: string; adult: string }): string {
	if (mode === undefined) return "";
	if (text === undefined || text === null) return "";
	if (mode === Mode.Adult) return text.adult;
	if (mode === Mode.Kid) return text.kid;
	if (mode === Mode.Teen) return text.kid;
	return "";
}

export { translate, translateQuestionLabel, getPage, getPageNumberBasedOnIdent, translateText };
