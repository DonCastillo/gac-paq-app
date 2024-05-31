import type Screen from "constants/screen.enum";
import type QuestionInputInterface from "interface/question_input";

export default interface QuestionInputPayloadInterface {
	ident?: string;
	name?: string | null;
	type: Screen.SingleQuestion;
	translations: QuestionInputInterface[];
}
