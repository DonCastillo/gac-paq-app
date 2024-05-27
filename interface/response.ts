import type { ModeType } from "./union.type";

export default interface ResponseInterface {
	ident: string;
	label: string;
	answer: string | null;
	pageNumber: number | null;
	mode: ModeType;
	section: string | null;
	sectionNumber: number | null;
	sectionPageNumber: number | null;
}
