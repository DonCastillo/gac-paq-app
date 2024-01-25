import type PageInterface from "interface/page";
import type QuestionDropdownInterface from "interface/question_dropdown";

function translate(
	translationArray: PageInterface[] | QuestionDropdownInterface[],
	langCode: string | null,
): PageInterface | QuestionDropdownInterface | null {
	if (langCode === null || langCode === undefined || langCode === "") return null;
	if (translationArray.length === 0) return null;

	const translatedPage = translationArray.find((page) => {
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

function getPage(currentPageNumber: number, pages: any[]): any {
	return pages.find((page) => {
		return page.pageNumber === currentPageNumber;
	});
}

export { translate, getPage };
