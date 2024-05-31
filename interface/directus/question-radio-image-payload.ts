import type Screen from "constants/screen.enum";
import type { QuestionRadioImageInterface } from "interface/question_radio_image";

export default interface QuestionRadioImagePayloadInterface {
	ident?: string;
	name?: string | null;
	type: Screen.SingleQuestion;
	translations: QuestionRadioImageInterface[];
}
