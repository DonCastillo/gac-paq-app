import type ScreenType from "constants/screen_type";
import type QuestionSliderInterface from "../question_slider";

export default interface QuestionSliderPayloadInterface {
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionSliderInterface[];
}
