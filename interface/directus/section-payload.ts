import ScreenType from "../../constants/screen_type";
import SectionInterface from "../section";

export default interface SectionPayloadInterface {
    heading?: string | null,
    image_mobile: string | null,
    image_tablet: string | null,
    questions?: any[] | null,
    type: ScreenType.IntroQuestion,
    translations: SectionInterface[]
}