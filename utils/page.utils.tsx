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

export { getPage, getPageNumberBasedOnIdent };
