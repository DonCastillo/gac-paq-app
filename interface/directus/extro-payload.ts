import ScreenType from "../../constants/screen_type";
import ExtroInterface from "../extro";

export default interface ExtroPayloadInterface {
    name?: string | null,
    type: ScreenType.ExtroQuestion,
    translations: ExtroInterface[]
}