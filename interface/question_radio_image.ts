import type LanguageInterface from "./language";

interface Choice {
	image_choices_id: {
		id?: number | string | null;
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
	id?: string | number | null;
	question_radio_image_id?: string | number | null;
	heading: string;
	label: string;
	choices: Choice[];
	languages_id?: LanguageInterface;
}
