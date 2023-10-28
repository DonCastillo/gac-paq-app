import ScreenType from "../../constants/screen_type";
import QuestionDropdownInterface from "../question_dropdown";
import QuestionDropdownLanguageInterface from "../question_dropdown_language";

export default interface QuestionDropdownPayloadInterface {
    name?: string | null,
    type: ScreenType.SingleQuestion | ScreenType.Region,
    translations: QuestionDropdownInterface[] | QuestionDropdownLanguageInterface[]
}