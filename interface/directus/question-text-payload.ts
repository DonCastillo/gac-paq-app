import type ScreenType from "constants/screen_type.enum";
import type QuestionTextInterface from "interface/question_text";

export default interface QuestionTextPayloadInterface {
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionTextInterface[];
}
