import ScreenType from "../../constants/screen_type";
import QuestionSliderInterface from "../question_slider";

export default interface QuestionSliderPayloadInterface {
    name?: string | null,
    type: ScreenType.Question,
    translations: QuestionSliderInterface[]
}