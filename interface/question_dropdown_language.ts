import type LanguageInterface from "interface/language";
import type ImageInterface from "interface/images";

export default interface QuestionDropdownLanguageInterface {
	id?: string | number;
	language_question_dropdown_id?: string | number;
	heading: string;
	label: string;
	languages_id?: LanguageInterface | null;
	images?: ImageInterface;
}
