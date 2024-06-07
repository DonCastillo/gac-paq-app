import type Screen from "constants/screen.enum";
import type QuestionSliderInterface from "interface/question_slider";

export default interface QuestionSliderPayloadInterface {
	ident?: string;
	name?: string | null;
	type: Screen.SingleQuestion;
	translations: QuestionSliderInterface[];
}
