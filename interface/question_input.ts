import type LanguageInterface from "interface/language";

export default interface QuestionInputInterface {
	id?: string | number;
	question_input_id?: string | number;
	sort?: number | null;
	heading: string;
	label: string;
	sublabel?: string | null;
	placeholder: string;
	type: "text" | "number";
	languages_id?: LanguageInterface | null;
}
