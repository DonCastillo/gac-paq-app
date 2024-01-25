import type ScreenType from "constants/screen_type";
import type QuestionDropdownInterface from "interface/question_dropdown";
import type QuestionDropdownLanguageInterface from "interface/question_dropdown_language";

export default interface QuestionDropdownPayloadInterface {
	name?: string | null;
	type: ScreenType.SingleQuestion | ScreenType.Region | ScreenType.Language;
	translations: QuestionDropdownInterface[] | QuestionDropdownLanguageInterface[];
}
