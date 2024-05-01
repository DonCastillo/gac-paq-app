import Mode from "constants/mode";
import type PageInterface from "interface/page";
import type QuestionDropdownInterface from "interface/question_dropdown";
import type QuestionDropdownLanguageInterface from "interface/question_dropdown_language";
import type ResponseInterface from "interface/response";
import { getResponseByIdent } from "./response";

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
type ModeType = Mode.Kid | Mode.Adult | Mode.Teen | undefined;

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

function skipTo(
	currentIdent: string,
	nextIdent: string,
	answer: string | null,
	pages: Record<number, object>,
	responses: Record<string, ResponseInterface>,
): number {
	console.log("currentIdent xx", currentIdent);
	console.log("finalAnswer xx", answer);
	const finalAnswer = answer?.toString().toLowerCase();
	if (currentIdent === "school_1" && finalAnswer === "no") {
		return getPageNumberBasedOnIdent("school_extro", pages);
	} else if (currentIdent === "school_3" && finalAnswer === "0") {
		return getPageNumberBasedOnIdent("school_6", pages);
	} else if (currentIdent === "household_1" && finalAnswer === "no") {
		return getPageNumberBasedOnIdent("household_extro", pages);
	} else if (currentIdent === "work_1" && finalAnswer === "no") {
		return getPageNumberBasedOnIdent("work_extro", pages);
	} else if (currentIdent === "transportation_intro") {
		const school_1_answer = getResponseByIdent("school_1", responses);
		const work_1_answer = getResponseByIdent("work_1", responses);
		console.log("school_1_answer", school_1_answer);
		console.log("work_1_answer", work_1_answer);
		if (school_1_answer === "no" && work_1_answer === "no") {
			return getPageNumberBasedOnIdent("transportation_7", pages);
		} else if (school_1_answer === "no") {
			return getPageNumberBasedOnIdent("transportation_4", pages);
		} else if (work_1_answer === "no") {
			return getPageNumberBasedOnIdent("transportation_7", pages);
		}
	} else if (currentIdent === "transportation_1" && finalAnswer === "stay home for school") {
		return getPageNumberBasedOnIdent("transportation_4", pages);
	} else if (currentIdent === "organized_1" && finalAnswer === "no") {
		return getPageNumberBasedOnIdent("organized_extro", pages);
	}
	return 0;
}

export { translate, translateQuestionLabel, getPage, getPageNumberBasedOnIdent, skipTo };
