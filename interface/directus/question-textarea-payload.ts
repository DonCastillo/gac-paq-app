import type Screen from "constants/screen.enum";
import type QuestionTextareaInterface from "interface/question_textarea";

export default interface QuestionTextareaPayloadInterface {
	ident?: string;
	name?: string | null;
	type: Screen.SingleQuestion;
	translations: QuestionTextareaInterface[];
}
