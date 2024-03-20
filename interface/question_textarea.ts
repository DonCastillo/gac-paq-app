import type LanguageInterface from "interface/language";
import type { ImageDeviceInterface } from "interface/images";

export default interface QuestionTextareaInterface {
	id?: string | number;
	question_textarea_id?: string | number;
	sort?: number | null;
	heading: string;
	label: string;
	kid_label: string;
	adult_label: string;
	sublabel?: string | null;
	placeholder?: string;
	languages_id?: LanguageInterface | null;
	images?: ImageDeviceInterface;
}
