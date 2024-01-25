import type LanguageInterface from "interface/language";

export default interface QuestionDropdownLanguageInterface {
	id?: string | number;
	language_question_dropdown_id?: string | number;
	heading: string;
	label: string;
	languages_id?: LanguageInterface | null;
}
