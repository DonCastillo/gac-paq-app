import type LanguageInterface from "interface/language";
import type { ImageDeviceInterface } from "interface/images";

interface Choice {
	text: string;
	value: string;
}

export default interface QuestionDropdownInterface {
	id?: string | number;
	question_dropdown_id?: string | number;
	heading: string;
	label: string;
	kid_label: string;
	adult_label: string;
	choices: Choice[];
	languages_id?: LanguageInterface | null;
	images?: ImageDeviceInterface;
}
