import type LanguageInterface from "interface/language";

export interface QuestionRadioImageChoiceInterface {
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

export interface QuestionRadioImageInterface {
	id?: string | number;
	question_radio_image_id?: string | number;
	question_satisfaction_image_id?: string | number;
	heading: string;
	label: string;
	kid_label: string;
	adult_label: string;
	choices: QuestionRadioImageChoiceInterface[];
	languages_id?: LanguageInterface | null;
}
