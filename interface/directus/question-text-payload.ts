import type Screen from "constants/screen.enum";
import type QuestionTextInterface from "interface/question_text";

export default interface QuestionTextPayloadInterface {
	name?: string | null;
	type: Screen.SingleQuestion;
	translations: QuestionTextInterface[];
}
