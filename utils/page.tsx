import type PageInterface from "../interface/page";
import type QuestionDropdownInterface from "../interface/question_dropdown";
import QuestionTextInterface from "../interface/question_text";

function translate(
	translationArray: PageInterface[] | QuestionDropdownInterface[],
	langCode: string,
) {
	return translationArray.find((page) => {
		const pageLanguage = page.languages_id.lang_code.toLowerCase();
		langCode = langCode.toLowerCase();
		return pageLanguage === langCode;
	});
}

function getPage(currentPageNumber: number, pages: any[]) {
	return pages.find((page) => {
		return page.pageNumber === currentPageNumber;
	});
}

export { translate, getPage };
