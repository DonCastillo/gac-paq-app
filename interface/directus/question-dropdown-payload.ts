import ScreenType from "../../constants/screen_type";
import QuestionDropdownInterface from "../question_dropdown";

export default interface QuestionDropdownPayloadInterface {
    name?: string | null,
    type: ScreenType.Question,
    translations: QuestionDropdownInterface[]
}