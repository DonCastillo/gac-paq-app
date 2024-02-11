import type LanguageInterface from "interface/language";

export default interface QuestionSliderInterface {
	id?: string | number;
	question_slider_id?: string | number;
	heading: string;
	label: string;
	kid_label: string;
	adult_label: string;
	languages_id?: LanguageInterface | null;
}
