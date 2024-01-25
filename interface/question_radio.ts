import type LanguageInterface from "interface/language";

interface Choice {
	text: string;
	value: string;
}

export default interface QuestionRadioInterface {
	id?: string | number;
	question_radio_id?: string | number;
	heading: string;
	label: string;
	choices: Choice[];
	languages_id?: LanguageInterface | null;
}
