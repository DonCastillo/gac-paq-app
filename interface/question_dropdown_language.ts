import type LanguageInterface from "./language";

export default interface QuestionDropdownLanguageInterface {
	id?: string | number;
	region_question_dropdown_id?: string | number;
	heading: string;
	label: string;
	languages_id?: LanguageInterface | null;
}
