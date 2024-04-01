import type LanguageInterface from "interface/language";
import type { ImageDeviceInterface } from "interface/images";

export default interface QuestionInputInterface {
	id?: string | number;
	question_input_id?: string | number;
	sort?: number | null;
	heading: string;
	label: string;
	kid_label: string;
	adult_label: string;
	kid_sublabel?: string;
	adult_sublabel?: string;
	placeholder: string;
	type: "text" | "number";
	languages_id?: LanguageInterface | null;
	images?: ImageDeviceInterface;
}
