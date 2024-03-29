import type ScreenType from "constants/screen_type";
import type QuestionRadioInterface from "interface/question_radio";

export default interface QuestionRadioPayloadInterface {
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionRadioInterface[];
}
