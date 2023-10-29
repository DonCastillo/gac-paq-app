import type LanguageInterface from "./language";

interface Choice {
	text: string;
	value: string;
}

export default interface QuestionDropdownInterface {
	id?: string | number;
	question_dropdown_id?: string | number;
	heading: string;
	label: string;
	choices: Choice[];
	languages_id?: LanguageInterface | null;
}
