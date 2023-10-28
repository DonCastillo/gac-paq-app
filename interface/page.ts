import type LanguageInterface from "./language";

export default interface PageInterface {
	id?: string | number | null;
	pages_id?: string | number | null;
	heading: string;
	description: string | null;
	button_text: string | null;
	languages_id?: LanguageInterface | {};
}
