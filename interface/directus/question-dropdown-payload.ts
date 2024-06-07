import type Screen from "constants/screen.enum";
import type QuestionDropdownInterface from "interface/question_dropdown";
import type QuestionDropdownLanguageInterface from "interface/question_dropdown_language";

export default interface QuestionDropdownPayloadInterface {
	ident?: string;
	name?: string | null;
	type: Screen.SingleQuestion | Screen.Language;
	translations: QuestionDropdownInterface[] | QuestionDropdownLanguageInterface[];
}
