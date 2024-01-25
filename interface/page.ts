import type LanguageInterface from "interface/language";

export default interface PageInterface {
	id?: string | number;
	pages_id?: string | number;
	heading: string;
	description: string | null;
	languages_id?: LanguageInterface | null;
}
