import type LanguageInterface from "interface/language";

interface Choice {
	image_choices_id: {
		id?: number | string;
		sort?: number | null;
		text: string;
		value: string;
		images: {
			kid: string;
			adult: string;
		};
	};
}

export default interface QuestionRadioImageInterface {
	id?: string | number;
	question_radio_image_id?: string | number;
	question_satisfaction_image_id?: string | number;
	heading: string;
	label: string;
	kid_label: string;
	adult_label: string;
	choices: Choice[];
	languages_id?: LanguageInterface | null;
}
