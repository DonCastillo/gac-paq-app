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
	answer: string | string[] | null,
	pages: Record<number, object>,
	responses: Record<string, ResponseInterface>,
): number {
	let finalAnswer: string | string[] | null = null;
	if (Array.isArray(answer)) {
		finalAnswer = answer.length > 0 ? answer.map((ans) => ans.toString().toLowerCase()) : null;
	} else if (typeof answer === "string") {
		finalAnswer = answer !== "" ? answer.toString().toLowerCase() : null;
	} else {
		finalAnswer = null;
	}

	if (currentIdent === "school_1" && finalAnswer === "no") {
		return getPageNumberBasedOnIdent("school_extro", pages);
	} else if (currentIdent === "school_3" && finalAnswer === "0") {
		return getPageNumberBasedOnIdent("school_6", pages);
	} else if (currentIdent === "household_1" && finalAnswer === "no") {
		return getPageNumberBasedOnIdent("household_extro", pages);
	} else if (currentIdent === "household_extro") {
		const age = getResponseByIdent("age", responses);
		const finalAge =
			age !== "" && age !== undefined && age !== null && !Array.isArray(age) ? parseInt(age) : -1;
		if (finalAge !== -1 && [12, 13, 14, 15, 16, 17].includes(finalAge)) {
			return getPageNumberBasedOnIdent("work_intro", pages);
		} else {
			return getPageNumberBasedOnIdent("transportation_intro", pages);
		}
	} else if (currentIdent === "work_1" && finalAnswer === "no") {
		return getPageNumberBasedOnIdent("work_extro", pages);
	} else if (currentIdent === "transportation_intro") {
		const attendedSchool = getResponseByIdent("school_1", responses)?.toString().toLowerCase();
		const attendedWork = getResponseByIdent("work_1", responses)?.toString().toLowerCase();
		if (
			["no", null, undefined].includes(attendedSchool) &&
			["no", null, undefined].includes(attendedWork)
		) {
			return getPageNumberBasedOnIdent("transportation_7", pages);
		} else if (attendedWork === "yes" && ["no", null, undefined].includes(attendedSchool)) {
			return getPageNumberBasedOnIdent("transportation_4", pages);
		} else if (attendedSchool === "yes" && ["no", null, undefined].includes(attendedWork)) {
			return getPageNumberBasedOnIdent("transportation_1", pages);
		}
	} else if (currentIdent === "transportation_1" && finalAnswer === "stay home for school") {
		const attendedWork = getResponseByIdent("work_1", responses)?.toString().toLowerCase();
		if (attendedWork === "yes") {
			return getPageNumberBasedOnIdent("transportation_4", pages);
		}
		return getPageNumberBasedOnIdent("transportation_7", pages);
	} else if (currentIdent === "transportation_3") {
		const attendedWork = getResponseByIdent("work_1", responses)?.toString().toLowerCase();
		if (attendedWork === "yes") {
			return getPageNumberBasedOnIdent("transportation_4", pages);
		}
		return getPageNumberBasedOnIdent("transportation_7", pages);
	} else if (currentIdent === "transportation_7") {
		if (finalAnswer !== null && finalAnswer?.includes("no")) {
			return getPageNumberBasedOnIdent("transportation_extro", pages);
		} else if (finalAnswer !== null && finalAnswer?.includes("walked")) {
			return getPageNumberBasedOnIdent("transportation_8", pages);
		} else if (finalAnswer !== null && finalAnswer?.includes("wheeled")) {
			return getPageNumberBasedOnIdent("transportation_10", pages);
		}
	} else if (currentIdent === "transportation_9") {
		let transpoMode = getResponseByIdent("transportation_7", responses);
		transpoMode = Array.isArray(transpoMode)
			? transpoMode?.map((transmode) => transmode.toLowerCase())
			: null;

		if (transpoMode !== null && transpoMode?.includes("wheeled")) {
			return getPageNumberBasedOnIdent("transportation_10", pages);
		} else {
			return getPageNumberBasedOnIdent("transportation_extro", pages);
		}
	} else if (currentIdent === "organized_1" && finalAnswer === "no") {
		return getPageNumberBasedOnIdent("organized_extro", pages);
	}
	return 0;
}

export { translate, translateQuestionLabel, getPage, getPageNumberBasedOnIdent, skipTo };
