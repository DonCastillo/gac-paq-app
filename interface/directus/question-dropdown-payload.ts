import type ScreenType from "../../constants/screen_type";
import type QuestionDropdownInterface from "../question_dropdown";
import type QuestionDropdownLanguageInterface from "../question_dropdown_language";

export default interface QuestionDropdownPayloadInterface {
	name?: string | null;
	type: ScreenType.SingleQuestion | ScreenType.Region;
	translations: QuestionDropdownInterface[] | QuestionDropdownLanguageInterface[];
}
