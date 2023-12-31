import type ScreenType from "constants/screen_type";
import type QuestionInputInterface from "../question_input";

export default interface QuestionInputPayloadInterface {
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionInputInterface[];
}
