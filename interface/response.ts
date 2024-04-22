import type Mode from "constants/mode";

export default interface ResponseInterface {
	ident: string;
	label: string;
	answer: string | null;
	pageNumber: number | null;
	mode: Mode.Adult | Mode.Kid | undefined;
	section: string | null;
	sectionNumber: number | null;
	sectionPageNumber: number | null;
}
