import type ScreenType from "constants/screen_type.enum";
import type QuestionSliderInterface from "interface/question_slider";

export default interface QuestionSliderPayloadInterface {
	ident?: string;
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionSliderInterface[];
}
