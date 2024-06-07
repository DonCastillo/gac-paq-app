import type Screen from "constants/screen.enum";
import type QuestionRadioInterface from "interface/question_radio";

export default interface QuestionRadioPayloadInterface {
	ident?: string;
	name?: string | null;
	type: Screen.SingleQuestion;
	translations: QuestionRadioInterface[];
}
