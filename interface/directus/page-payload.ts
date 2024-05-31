import type Screen from "constants/screen.enum";
import type PageInterface from "interface/page";

export default interface PagePayloadInterface {
	ident: string;
	title?: string | null;
	name?: string | null;
	type: Screen.Page;
	translations: PageInterface[];
}
