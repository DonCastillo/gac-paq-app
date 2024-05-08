import type LanguageInterface from "interface/language";

export interface ChoiceInterface {
	text: string;
	value: string;
	text_mode?: {
		kid: string;
		adult: string;
	};
}

export default interface QuestionCheckboxInterface {
	id?: string | number;
	question_checkbox_id?: string | number;
	heading: string;
	label: string;
	kid_sublabel?: string;
	adult_sublabel?: string;
	adult_label: string;
	kid_label: string;
	choices: ChoiceInterface[];
	languages_id?: LanguageInterface | null;
}
