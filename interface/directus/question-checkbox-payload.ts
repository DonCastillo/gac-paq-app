import type ScreenType from "constants/screen_type";
import type QuestionCheckboxInterface from "interface/question_checkbox";

export default interface QuestionCheckboxPayloadInterface {
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionCheckboxInterface[];
}
