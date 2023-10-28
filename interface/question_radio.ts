import type LanguageInterface from "./language";

interface Choice {
	text: string;
	value: string;
}

export default interface QuestionRadioInterface {
	id?: string | number | null;
	question_radio_id?: string | number | null;
	heading: string;
	label: string;
	choices: Choice[];
	languages_id?: LanguageInterface;
}
