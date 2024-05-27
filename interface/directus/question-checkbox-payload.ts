import type ScreenType from "constants/screen_type.enum";
import type QuestionCheckboxInterface from "interface/question_checkbox";

export default interface QuestionCheckboxPayloadInterface {
	ident?: string;
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionCheckboxInterface[];
}
