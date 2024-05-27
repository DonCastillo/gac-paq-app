import type LanguageInterface from "interface/language";
import type QuestionField from "constants/question_field.enum";

interface Field {
	type: QuestionField.QuestionFieldText | QuestionField.QuestionFieldNumber;
	label: string;
	name: string;
}

export default interface QuestionTextInterface {
	id?: string | number;
	question_text_id?: string | number;
	sort?: number | null;
	heading: string;
	label: string;
	fields: Field[];
	languages_id?: LanguageInterface | null;
}
