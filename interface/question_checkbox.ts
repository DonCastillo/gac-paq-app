import type LanguageInterface from "interface/language";

interface Choice {
	text: string;
	value: string;
}

export default interface QuestionCheckboxInterface {
	id?: string | number;
	question_checkbox_id?: string | number;
	heading: string;
	label: string;
	adult_label: string;
	kid_label: string;
	choices: Choice[];
	languages_id?: LanguageInterface | null;
}
