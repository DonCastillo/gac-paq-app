import type { LanguageInterface } from "interface/payload.type";

export default interface QuestionSliderInterface {
	id?: string | number;
	question_slider_id?: string | number;
	heading: string;
	label: string;
	kid_sublabel?: string;
	adult_sublabel?: string;
	max_value: number;
	kid_label: string;
	adult_label: string;
	languages_id?: LanguageInterface | null;
}
