import type Screen from "constants/screen.enum";
import type QuestionCheckboxInterface from "interface/question_checkbox";

export default interface QuestionCheckboxPayloadInterface {
	ident?: string;
	name?: string | null;
	type: Screen.SingleQuestion;
	translations: QuestionCheckboxInterface[];
}
