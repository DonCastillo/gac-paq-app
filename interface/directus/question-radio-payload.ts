import ScreenType from "../../constants/screen_type";
import QuestionRadioInterface from "../question_radio";

export default interface QuestionRadioPayloadInterface {
    name?: string | null,
    type: ScreenType.SingleQuestion,
    translations: QuestionRadioInterface[]
}