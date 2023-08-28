import ScreenType from "../../constants/screen_type";
import QuestionTextInterface from "../question_text";

export default interface QuestionTextPayloadInterface {
    name?: string | null,
    type: ScreenType.SingleQuestion,
    translations: QuestionTextInterface[]
}