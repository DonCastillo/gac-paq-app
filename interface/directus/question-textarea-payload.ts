import type ScreenType from "constants/screen_type";
import type QuestionTextareaInterface from "interface/question_textarea";

export default interface QuestionTextareaPayloadInterface {
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionTextareaInterface[];
}
