import type ScreenType from "../../constants/screen_type";
import type QuestionRadioImageInterface from "../question_radio_image";

export default interface QuestionRadioImagePayloadInterface {
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionRadioImageInterface[];
}
