import type { LanguageInterface } from "interface/payload.type";

interface Choice {
	text: string;
	value: string;
}

export default interface QuestionRadioInterface {
	id?: string | number;
	question_radio_id?: string | number;
	heading: string;
	label: string;
	kid_sublabel?: string;
	adult_sublabel?: string;
	adult_label: string;
	kid_label: string;
	choices: Choice[];
	languages_id?: LanguageInterface | null;
}
