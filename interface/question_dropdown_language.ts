import type LanguageInterface from "interface/language";
import type { ImageDeviceInterface } from "interface/images";

export default interface QuestionDropdownLanguageInterface {
	id?: string | number;
	language_question_dropdown_id?: string | number;
	heading: string;
	label: string;
	adult_label: string;
	kid_label: string;
	kid_sublabel?: string;
	adult_sublabel?: string;
	languages_id?: LanguageInterface | null;
	images?: ImageDeviceInterface;
}
