import type LanguageInterface from "./language";

export default interface QuestionSliderInterface {
	id?: string | number | null;
	question_slider_id?: string | number | null;
	heading: string;
	label: string;
	languages_id?: LanguageInterface;
}
