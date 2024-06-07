import type { PageIndexInterface } from "interface/payload.type";

const getPage = (
	currentPageNumber: number,
	pages: Record<number, PageIndexInterface>,
): PageIndexInterface => {
	return pages[currentPageNumber] ?? null;
};

const getPageNumberBasedOnIdent = (
	ident: string,
	pages: Record<number, PageIndexInterface>,
): number => {
	for (const [key, page] of Object.entries(pages)) {
		if (page?.page?.ident === ident) {
			return parseInt(key);
		}
	}
	return 0;
};

export { getPage, getPageNumberBasedOnIdent };
