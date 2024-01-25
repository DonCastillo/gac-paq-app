import type LanguageInterface from "interface/language";

interface Choice {
	image_choices_id: {
		id?: number | string;
		sort?: number | null;
		text: string;
		value: string;
		image_kid: string | null;
		image_adult: string | null;
		image_kid_default?: string;
		image_adult_default?: string;
	};
}

export default interface QuestionRadioImageInterface {
	id?: string | number;
	question_radio_image_id?: string | number;
	heading: string;
	label: string;
	choices: Choice[];
	languages_id?: LanguageInterface | null;
}
