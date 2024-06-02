import Mode from "constants/mode.enum";
import type { ModeType } from "interface/union.type";

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

export { getPage, getPageNumberBasedOnIdent, translateText };
