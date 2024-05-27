import type ScreenType from "constants/screen_type.enum";
import type QuestionRadioInterface from "interface/question_radio";

export default interface QuestionRadioPayloadInterface {
	ident?: string;
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionRadioInterface[];
}
