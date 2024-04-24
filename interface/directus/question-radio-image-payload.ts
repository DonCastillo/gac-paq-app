import type ScreenType from "constants/screen_type";
import type { QuestionRadioImageInterface } from "interface/question_radio_image";

export default interface QuestionRadioImagePayloadInterface {
	ident?: string;
	name?: string | null;
	type: ScreenType.SingleQuestion;
	translations: QuestionRadioImageInterface[];
}
