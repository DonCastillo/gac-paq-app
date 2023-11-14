import type LanguageInterface from "./language";

export default interface SingleCheckboxInterface {
	id?: string | number;
	single_checkbox_id?: string | number;
	heading: string;
	description: string | null;
	checkbox_label: string;
	languages_id?: LanguageInterface | null;
}
