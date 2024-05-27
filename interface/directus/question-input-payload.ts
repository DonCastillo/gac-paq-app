import type ScreenType from "constants/screen_type.enum";
import type QuestionInputInterface from "interface/question_input";

export default interface QuestionInputPayloadInterface {
	ident?: string;
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionInputInterface[];
}
